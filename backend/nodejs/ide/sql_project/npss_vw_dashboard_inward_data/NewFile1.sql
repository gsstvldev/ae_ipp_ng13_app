-- View: ad_gss_tran.vw_dashboard_inward_data
-- DROP VIEW ad_gss_tran.vw_dashboard_inward_data ;
drop view if exists vw_dashboard_inward_data;
@SPL@
CREATE OR REPLACE VIEW vw_dashboard_inward_data
AS
SELECT res.sno,
    res.type,
    COALESCE(sum(res.total), 0::numeric) AS total,
    COALESCE(sum(res.pending_maker), 0::numeric) AS pending_maker,
    COALESCE(sum(res.pending_checker), 0::numeric) AS pending_checker,
    COALESCE(sum(res.pending_screening), 0::numeric) AS pending_screening,
    COALESCE(sum(res.successfullyposted), 0::numeric) AS successfullyposted,
    COALESCE(sum(res.pending_returns_maker), 0::numeric) AS pending_returns_maker,
    COALESCE(sum(res.pending_returns_checker), 0::numeric) AS pending_returns_checker,
    COALESCE(sum(res.returned), 0::numeric) AS returned,
	RES.pending_t_1,
    res.created_date,
    res.department_code,
    res.tenant_id
   FROM ( SELECT
                CASE
                    WHEN npl.process_name::text = 'Receive Pacs008'::text THEN 1
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text THEN 3
                    WHEN npl.process_name::text = 'Place Pacs004'::text THEN 2
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 1
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 3
                    ELSE NULL::integer
                END AS sno,
                CASE
                    WHEN npl.process_name::text = 'Receive Pacs008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text THEN 'pacs.007'::text
                    WHEN npl.process_name::text = 'Place Pacs004'::text THEN 'pacs.004'::text
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 'pacs.007'::text
                    ELSE NULL::text
                END AS type,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS total,
            count(DISTINCT
                CASE
                     When npl.process_name::text = 'Receive Pacs008' AND ((select Count(*) from npss_trn_process_log where process_name = 'PACS.008' and uetr=npl.uetr)=0) THEN nppst.npsst_id::bigint		  		  
					 When npl.process_name::text = 'Receive Pacs.007' AND ((select Count(*) from npss_trn_process_log where process_name = 'PACS.007' and uetr=npl.uetr)=0) THEN nppst.npsst_id::bigint		  		  
                     When (npl.process_name::text = 'PACS.008'::text AND npl.PROCESSING_SYSTEM::text <> 'IBM_MQ'::text) OR (npl.process_name::text = 'PACS.008'::text AND npl.PROCESSING_SYSTEM::text = 'IBM_MQ'::text AND npl.status='IP_RCT_EXCEPTION') OR
				 (npl.process_name::text = 'PACS.007'::text AND npl.PROCESSING_SYSTEM::text <> 'IBM_MQ'::text) OR (npl.process_name::text = 'PACS.007'::text AND npl.PROCESSING_SYSTEM::text = 'IBM_MQ'::text AND npl.status='IP_RCT_EXCEPTION')
				 THEN nppst.npsst_id::bigint		  		  
                END) AS pending_screening,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTReturned'::text THEN nppst.npsst_id
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text AND nppst.process_status::text = 'RCTReturned'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS returned,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Receive Pacs008'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_FAILURE'::text, 'IP_RCT_PC_T24_POSTING_FAILURE'::text, 'IP_RCT_CC_T24_POSTING_FAILURE'::text])) THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND nppst.status::text = 'IP_RCT_RETURN_POSTING_FAILURE'::text THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_REVERSAL_VLD_FAILED'::text, 'IP_RCT_REVERSAL_REQ_RECEIVED'::text])) THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_maker,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Receive Pacs008'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = 'IP_RCT_RR_POSTING_RETRY'::text OR nppst.status::text = 'IP_RCT_PC_T24_POSTING_RETRY'::text OR nppst.status::text = 'IP_RCT_CC_T24_POSTING_RETRY'::text OR nppst.status::text = 'IP_RCT_POSTING_SUSPICIOUS'::text OR nppst.status::text = 'IP_RCT_PC_POSTING_SUSPICIOUS'::text) THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = 'IP_RCT_RETURN_POSTING_RETRY '::text OR nppst.status::text = 'IP_RCT_RR_POSTING_SUSPICIOUS'::text) THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text AND (nppst.status::text = 'IP_RCT_REV_REQ_REJECTED'::text OR nppst.status::text = 'IP_RCT_RR_RETURN_READY'::text) THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_checker,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Receive Pacs008'::text AND nppst.process_status::text = 'RCTCompleted'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_POSTING_SUCCESS'::text, 'IP_RCT_PC_T24_POSTING_SUCCESS'::text, 'IP_RCT_CC_POSTING_SUCCESS'::text])) THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text AND nppst.status::text = 'IP_RCT_RR_RETURNED'::text THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS successfullyposted,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_FAILURE'::text, 'IP_RCT_RETURN_POSTING_FAILURE'::text])) THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_returns_maker,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_RETRY'::text, 'IP_RCT_RETURN_POSTING_RETRY'::text, 'IP_RCT_RR_POSTING_SUSPICIOUS'::text])) THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_returns_checker,
            to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date,
            case when 
            (nppst.department_code = '') or (nppst.department_code IS NULL) then 'DEFAULT'
            else department_code end department_code,
            0 AS pending_t_1,
            nppst.tenant_id
           FROM npss_transactions nppst
             JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND
          nppst.process_type::text = 'IP'::text AND (npl.process_name::text = ANY (ARRAY['Receive Pacs008'::character varying::text, 'Receive Pacs.007'::character varying::text, 'Place Pacs004'::character varying::text,'PACS.008'::character varying::text, 'PACS.007'::character varying::text]))
          GROUP BY nppst.tenant_id,nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group,nppst.department_code, (to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))
        UNION ALL (
select
	sno,
	type,
	total,
	pending_screening,
	returned,
	pending_maker,
	pending_checker,
	successfullyposted,
	pending_returns_maker,
	pending_returns_checker,
	created_date,
		case
			when (D1.department_code = '' or D1.department_code is null) then 'DEFAULT'
			else D1.department_code end as department_code,
	case when D1.pending_t_1 is not NULL then D1.pending_t_1
	else 0
	end as pending_t_1,
	D1.tenant_id
from
	(
	select
		1 as sno,
                            'pacs.008'::text AS type,
                            0 AS total,
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date)A1
                            left join (select
	case when typeD = 'pacs.008' then count (npsst_id)
	ELSE 0
end as pending_t_1,
	typeD,
	department_code,
	tenant_id
from
	(
	select
		distinct npl.process_name,
		'pacs.008' as typeD,
		nppst.npsst_id,
		case
			when nppst.department_code::text = ''::text
			or nppst.department_code is null then 'DEFAULT'::character varying
			else nppst.department_code
		end as department_code,
		nppst.tenant_id
	from
				npss_transactions nppst
	left join npss_trn_process_log npl on
				npl.uetr = nppst.uetr
	where
				nppst.process_type = 'IP'
		and (npl.process_name in ('Receive Pacs008'))
		and nppst.process_status = 'RCTExceptionFailure'
		and (nppst.status in ('IP_RCT_RR_POSTING_FAILURE', 'IP_RCT_RR_POSTING_RETRY',
				'IP_RCT_PC_T24_POSTING_RETRY', 'IP_RCT_CC_T24_POSTING_RETRY', 'IP_RCT_POSTING_SUSPICIOUS',
				'IP_RCT_PC_POSTING_SUSPICIOUS', 'IP_RCT_PC_T24_POSTING_FAILURE', 'IP_RCT_CC_T24_POSTING_FAILURE'))
		and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) D group by typed,department_code,tenant_id)D1 on D1.typeD = A1.TYPE
                        UNION
                         select
	sno,
	type,
	total,
	pending_screening,
	returned,
	pending_maker,
	pending_checker,
	successfullyposted,
	pending_returns_maker,
	pending_returns_checker,
	created_date,
		case
			when (D3.department_code = '' or D3.department_code is null) then 'DEFAULT'
			else D3.department_code end as department_code,
	case when D3.pending_t_1 is not NULL then D3.pending_t_1
	else 0
	end as pending_t_1,
	D3.tenant_id
from
	(
	select
		2 as sno,
                            'pacs.004'::text AS type,
                            0 AS total,
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date)A3
                            left join (select
	case when typeD = 'pacs.004' then count (npsst_id)
	ELSE 0
end as pending_t_1,
	typeD,
	department_code,
	tenant_id
from
	(
	select
		distinct npl.process_name,
		'pacs.004' as typeD,
		nppst.npsst_id,
		case
			when nppst.department_code::text = ''::text
			or nppst.department_code is null then 'DEFAULT'::character varying
			else nppst.department_code
		end as department_code,
		nppst.tenant_id
	from
				npss_transactions nppst
	left join npss_trn_process_log npl on
				npl.uetr = nppst.uetr
	where
				nppst.process_type = 'IP'
		and (npl.process_name in ('Place Pacs004'))
		AND nppst.process_status::text = 'RCTExceptionFailure'
		and (nppst.status in ('IP_RCT_RETURN_POSTING_FAILURE', 'IP_RCT_RETURN_POSTING_RETRY',
				'IP_RCT_RR_POSTING_SUSPICIOUS'))
		and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) DA3 group by typed,department_code,tenant_id)D3 on D3.typeD = A3.TYPE
                        UNION
                        select
	sno,
	type,
	total,
	pending_screening,
	returned,
	pending_maker,
	pending_checker,
	successfullyposted,
	pending_returns_maker,
	pending_returns_checker,
	created_date,
		case
			when (D2.department_code = '' or D2.department_code is null) then 'DEFAULT'
			else D2.department_code end as department_code,
	case when D2.pending_t_1 is not NULL then D2.pending_t_1
	else 0
	end as pending_t_1,
	D2.tenant_id
from
	(
	select
		3 as sno,
                            'pacs.007'::text AS type,
                            0 AS total,
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date)A2
                            left join (select
	case when typeD = 'pacs.007' then count (npsst_id)
	ELSE 0
end as pending_t_1,
	typeD,
	department_code,
	tenant_id
from
	(
	select
		distinct npl.process_name,
		'pacs.007' as typeD,
		nppst.npsst_id,
		case
			when nppst.department_code::text = ''::text
			or nppst.department_code is null then 'DEFAULT'::character varying
			else nppst.department_code
		end as department_code,
		nppst.tenant_id
	from
				npss_transactions nppst
	left join npss_trn_process_log npl on
				npl.uetr = nppst.uetr
	where
				nppst.process_type = 'IP'
		and (npl.process_name in ('Receive Pacs.007'))
		and (nppst.status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_REVERSAL_VLD_FAILED',
				'IP_RCT_REV_REQ_REJECTED', 'IP_RCT_RR_RETURN_READY'))
		and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) DA2 group by typed,department_code,tenant_id)D2 on D2.typeD = A2.TYPE
                )) res
  GROUP BY res.type, res.created_date, res.sno,res.department_code,RES.pending_t_1,res.tenant_id
   order by res.sno