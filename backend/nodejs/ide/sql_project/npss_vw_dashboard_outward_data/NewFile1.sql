-- View: ad_gss_tran.vw_dashboard_outward_data
-- DROP VIEW ad_gss_tran.vw_dashboard_outward_data ;
drop view if exists npss_vw_dashboard_outward_data;
@SPL@
CREATE OR REPLACE VIEW ad_gss_tran.npss_vw_dashboard_outward_data
AS 
SELECT res.type,
    COALESCE(sum(res.total), 0::numeric) AS total,
    COALESCE(sum(res.ibmb), 0::numeric) AS ibmb,
    COALESCE(sum(res.rib), 0::numeric) AS rib,
    COALESCE(sum(res.rmb), 0::numeric) AS rmb,
    COALESCE(sum(res.cib), 0::numeric) AS cib,
    COALESCE(sum(res.cms), 0::numeric) AS cms,
    COALESCE(sum(res.cmb), 0::numeric) AS cmb,
    COALESCE(sum(res.NFR), 0::numeric) AS NFR,
    COALESCE(sum(res.CMSCMS), 0::numeric) AS CMSCMS,
    COALESCE(sum(res.IPP), 0::numeric) AS IPP,
    COALESCE(sum(res.CMSINF), 0::numeric) AS CMSINF,
    COALESCE(sum(res.MOB), 0::numeric) AS MOB,
    COALESCE(sum(res.MBL), 0::numeric) AS MBL,
    COALESCE(sum(res.CMSCMD), 0::numeric) AS CMSCMD,
    COALESCE(sum(res.IB), 0::numeric) AS IB,
    COALESCE(sum(res.RIBINF), 0::numeric) AS RIBINF,
    COALESCE(sum(res.manual), 0::numeric) AS manual,
    COALESCE(sum(res.pending_screening), 0::numeric) AS pending_screening,
    COALESCE(sum(res.pending_maker), 0::numeric) AS pending_maker,
    COALESCE(sum(res.pending_checker), 0::numeric) AS pending_checker,
    COALESCE(sum(res.send_to_cb), 0::numeric) AS send_to_cb,
    COALESCE(sum(res.cback), 0::numeric) AS cback,
    COALESCE(sum(res.cbnack), 0::numeric) AS cbnack,
    RES.pending_t_1,
    res.created_date,
    res.sno,
    res.department_code,
    res.tenant_id
   FROM ( SELECT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text THEN 1
                    WHEN npl.process_name::text = 'Place Pacs.007'::text THEN 3
                    WHEN npl.process_name::text = 'Receive Pacs004'::text THEN 2
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 1
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 3
                    ELSE NULL::integer
                END AS sno,
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'Place Pacs.007'::text THEN 'pacs.007'::text
                    WHEN npl.process_name::text = 'Receive Pacs004'::text THEN 'pacs.004'::text
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 'pacs.007'::text
                    ELSE NULL::text
                END AS type,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS total,
            count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS ibmb,
            count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS rmb,
            count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS rib,
            count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cmb,
            count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cib,
            count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cms,
            count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'NFR'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'NFR'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'NFR'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS NFR,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'CMSCMS'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMSCMS'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMSCMS'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS CMSCMS,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'IPP'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'IPP'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'IPP'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS IPP,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'CMSINF'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMSINF'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMSINF'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS CMSINF,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'MOB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'MOB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'MOB'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS MOB,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'MBL'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'MBL'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'MBL'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS MBL,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'CMSCMD'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMSCMD'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'CMSCMD'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS CMSCMD,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'IB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'IB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'IB'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS IB,
                count(DISTINCT
                CASE
                    WHEN nppst.channel_id::text = 'RIBINF'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'RIBINF'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.channel_id::text = 'RIBINF'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS RIBINF,
            count(DISTINCT
                CASE
                    WHEN nppst.process_group::text = ANY (ARRAY['Manual'::text, 'MANUAL'::text, 'manual'::text]) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS manual,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text AND (( SELECT count(*) AS count
                       FROM npss_trn_process_log
                      WHERE npss_trn_process_log.process_name::text = 'PACS.008'::text AND npss_trn_process_log.uetr::text = npl.uetr::text)) = 0 THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Place Pacs.007'::text AND (( SELECT count(*) AS count
                       FROM npss_trn_process_log
                      WHERE npss_trn_process_log.process_name::text = 'PACS.007'::text AND npss_trn_process_log.uetr::text = npl.uetr::text)) = 0 THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'PACS.008'::text AND npl.processing_system::text <> 'IBM_MQ'::text OR npl.process_name::text = 'PACS.008'::text AND npl.processing_system::text = 'IBM_MQ'::text AND npl.status::text = 'IP_RCT_EXCEPTION'::text OR npl.process_name::text = 'PACS.007'::text AND npl.processing_system::text <> 'IBM_MQ'::text OR npl.process_name::text = 'PACS.007'::text AND npl.processing_system::text = 'IBM_MQ'::text AND npl.status::text = 'IP_RCT_EXCEPTION'::text THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_screening,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_REV_POSTING_FAILURE'::character varying::text, 'OP_AC_RET_POSTING_FAILURE'::character varying::text, 'OP_P2P_REV_POSTING_FAILURE'::character varying::text, 'OP_P2B_FUND_UNFR_FAILURE'::character varying::text, 'OP_P2B_REV_POSTING_FAILURE'::character varying::text])) THEN nppst.npsst_id
                    WHEN npl.process_name::text = 'Place Pacs.007'::text AND nppst.status::text = 'OP_REVERSAL_REQ_REPAIR'::text THEN nppst.npsst_id
                    WHEN npl.process_name::text = 'Receive Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OR_P2B_POSTING_FAILURE'::character varying::text, 'OR_P2P_POSTING_FAILURE'::character varying::text])) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS pending_maker,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_REV_POSTING_RETRY'::character varying::text, 'OP_AC_RET_POSTING_RETRY'::character varying::text, 'OP_P2P_REV_POSTING_RETRY'::character varying::text, 'OP_P2B_FUND_UNFR_RETRY'::character varying::text, 'OP_P2B_REV_POSTING_RETRY'::character varying::text])) THEN nppst.npsst_id
                    WHEN npl.process_name::text = 'Place Pacs.007'::text AND nppst.status::text = 'OP_REVERSAL_REQ_INITIATED'::text THEN nppst.npsst_id
                    WHEN npl.process_name::text = 'Receive Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OR_P2P_POSTING_RETRY'::character varying::text, 'OR_P2B_POSTING_RETRY'::character varying::text])) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS pending_checker,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTCompleted'::text THEN nppst.npsst_id
                    WHEN npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS send_to_cb,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text AND (nppst.status::text = 'OP_RCT_STATUS_RECEIVED'::text OR nppst.status::text = 'OP_P2P_STATUS_ACCEPTED'::text OR nppst.status::text = 'OP_P2B_STATUS_ACCEPTED'::text) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cback,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text AND (nppst.status::text = 'OP_AC_REV_POSTING_SUCCESS'::text OR nppst.status::text = 'OP_AC_REV_POSTING_SUCCESS'::text OR nppst.process_status::text = 'OP_AC_STATUS_REJECTED'::text OR nppst.process_status::text = 'OP_P2P_REV_POSTING_SUCCESS'::text OR nppst.process_status::text = 'OP_P2B_STATUS_REJECTED'::text OR nppst.process_status::text = 'OP_P2B_REV_POSTING_SUCCESS'::text) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cbnack,
            to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date,
                CASE
                    WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
                    ELSE nppst.department_code
                END AS department_code,
                0 AS pending_t_1,
                nppst.tenant_id
           FROM npss_transactions nppst
             LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND nppst.process_type::text = 'OP'::text AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text, 'Place Pacs.007'::character varying::text, 'Receive Pacs004'::character varying::text, 'PACS.008'::character varying::text, 'PACS.007'::character varying::text]))
          GROUP BY nppst.tenant_id,nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group, npl.status, npl.process_status, nppst.department_code, (to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))
        UNION ALL (
                 select
	SNO,
	type,
	total,
	ibmb,
	rib,
	rmb,
	cib,
	cms,
	cmb,
	NFR,
	CMSCMS,
IPP,
CMSINF,
MOB,
MBL,
CMSCMD,
IB,
RIBINF,
	manual,
	pending_screening,
	pending_maker,
	pending_checker,
	send_to_cb,
	cback,
	cbnack,
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
		'pacs.008'::text as type,
		0 as total,
		0 as ibmb,
		0 as rib,
		0 as rmb,
		0 as cib,
		0 as cms,
		0 as cmb,
		0 as NFR,
		0 as CMSCMS,
		0 as IPP,
		0 as CMSINF,
		0 as MOB,
		0 as MBL,
		0 as CMSCMD,
		0 as IB,
		0 as RIBINF,
		0 as manual,
		0 as pending_screening,
		0 as pending_maker,
		0 as pending_checker,
		0 as send_to_cb,
		0 as cback,
		0 as cbnack,
		to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as created_date
		) A1
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
				nppst.process_type = 'OP'
		and (npl.process_name in ('Place Pacs008'))
		and nppst.process_status = 'RCTExceptionFailure'
		and (nppst.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE',
				'OP_P2P_REV_POSTING_FAILURE', 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE',
				'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY',
				'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))
		and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) D group by typed,department_code,tenant_id) D1 on D1.typeD = A1.TYPE
                UNION
                 select
	SNO,
	type,
	total,
	ibmb,
	rib,
	rmb,
	cib,
	cms,
	cmb,
	NFR,
	CMSCMS,
IPP,
CMSINF,
MOB,
MBL,
CMSCMD,
IB,
RIBINF,
	manual,
	pending_screening,
	pending_maker,
	pending_checker,
	send_to_cb,
	cback,
	cbnack,
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
		'pacs.007'::text as type,
		0 as total,
		0 as ibmb,
		0 as rib,
		0 as rmb,
		0 as cib,
		0 as cms,
		0 as cmb,
		0 as NFR,
		0 as CMSCMS,
		0 as IPP,
		0 as CMSINF,
		0 as MOB,
		0 as MBL,
		0 as CMSCMD,
		0 as IB,
		0 as RIBINF,
		0 as manual,
		0 as pending_screening,
		0 as pending_maker,
		0 as pending_checker,
		0 as send_to_cb,
		0 as cback,
		0 as cbnack,
		to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as created_date
		) A2
		left join (select case
	when typeD = 'pacs.007' then count (npsst_id)
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
		CASE
                    WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
                    ELSE nppst.department_code
                END AS department_code,
		nppst.npsst_id,nppst.tenant_id	from
				npss_transactions nppst
	left join npss_trn_process_log npl on
				npl.uetr = nppst.uetr
	where
				nppst.process_type = 'OP'
		and (npl.process_name in ('Place Pacs.007'))
		and (nppst.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED'))
		and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) DA2 group by typed,department_code,tenant_id) D2 on D2.typeD = A2.TYPE
                UNION
               select
	SNO,
	type,
	total,
	ibmb,
	rib,
	rmb,
	cib,
	cms,
	cmb,
	NFR,
	CMSCMS,
IPP,
CMSINF,
MOB,
MBL,
CMSCMD,
IB,
RIBINF,
	manual,
	pending_screening,
	pending_maker,
	pending_checker,
	send_to_cb,
	cback,
	cbnack,
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
		'pacs.004'::text as type,
		0 as total,
		0 as ibmb,
		0 as rib,
		0 as rmb,
		0 as cib,
		0 as cms,
		0 as cmb,
		0 as NFR,
		0 as CMSCMS,
		0 as IPP,
		0 as CMSINF,
		0 as MOB,
		0 as MBL,
		0 as CMSCMD,
		0 as IB,
		0 as RIBINF,
		0 as manual,
		0 as pending_screening,
		0 as pending_maker,
		0 as pending_checker,
		0 as send_to_cb,
		0 as cback,
		0 as cbnack,
		to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone as created_date
		) A3
		left join (select case
	when typeD = 'pacs.004' then count (npsst_id)
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
		CASE
                    WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
                    ELSE nppst.department_code
                END AS department_code,
		nppst.npsst_id,
		nppst.tenant_id
	from
				npss_transactions nppst
	left join npss_trn_process_log npl on
				npl.uetr = nppst.uetr
	where
				nppst.process_type = 'OP'
		and (npl.process_name in ('Receive Pacs004'))
		AND nppst.process_status = 'RCTExceptionFailure'
		and (nppst.status in ('OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_FAILURE','OR_P2P_POSTING_RETRY','OR_P2B_POSTING_RETRY'))
		and to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) DA3 group by typed,department_code,tenant_id) D3 on D3.typeD = A3.TYPE                 
        )) res
  GROUP BY res.type, res.created_date, res.sno, res.department_code,RES.pending_t_1,res.tenant_id
  ORDER BY res.sno;