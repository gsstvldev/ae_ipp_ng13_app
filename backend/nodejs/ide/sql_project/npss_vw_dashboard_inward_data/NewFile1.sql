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
        CASE
            WHEN res.type = 'pacs.008'::text THEN ( select count(*) from (
          SELECT distinct  process_NAME,nppst.npsst_id  
               FROM npss_transactions nppst
                 LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
              WHERE nppst.process_type::text = 'IP'::text 
              AND (npl.process_name::text = ANY 
              (ARRAY['Receive Pacs008'::character varying::text])) AND nppst.process_status::text = 'RCTExceptionFailure'::text 
              AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_FAILURE'::text, 'IP_RCT_RR_POSTING_RETRY'::text, 'IP_RCT_PC_T24_POSTING_RETRY'::text, 'IP_RCT_CC_T24_POSTING_RETRY'::text, 'IP_RCT_POSTING_SUSPICIOUS'::text, 'IP_RCT_PC_POSTING_SUSPICIOUS'::text, 'IP_RCT_PC_T24_POSTING_FAILURE'::text, 'IP_RCT_CC_T24_POSTING_FAILURE'::text])) 
              AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) as Pen08t1
         )
            WHEN res.type = 'pacs.004'::text THEN ( select count(*) from (
              SELECT distinct  process_NAME,nppst.npsst_id  
               FROM npss_transactions nppst
                 LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
              WHERE nppst.process_type::text = 'IP'::text 
              AND (npl.process_name::text = ANY 
              (ARRAY['Place Pacs004'::character varying::text])) AND nppst.process_status::text = 'RCTExceptionFailure'::text AND 
              (nppst.status::text = ANY (ARRAY['IP_RCT_RETURN_POSTING_FAILURE'::character varying::text, 'IP_RCT_RETURN_POSTING_RETRY'::character varying::text, 'IP_RCT_RR_POSTING_SUSPICIOUS'::character varying::text])) 
              AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE ) as Pen04t1
           )
            WHEN res.type = 'pacs.007'::text THEN ( select count(*) from (
                SELECT distinct  process_NAME,nppst.npsst_id 
               FROM npss_transactions nppst
                 inner JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
              WHERE nppst.process_type::text = 'IP'::text 
              AND (npl.process_name::text = ANY (ARRAY['Receive Pacs.007'::character varying::text]))
              AND (nppst.status::text = ANY (ARRAY['IP_RCT_REVERSAL_REQ_RECEIVED'::character varying::text, 'IP_RCT_REVERSAL_VLD_FAILED'::character varying::text, 'IP_RCT_REV_REQ_REJECTED'::character varying::text, 'IP_RCT_RR_RETURN_READY'::character varying::text])) 
              AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE ) as Pen07t1
             )
            ELSE 0::bigint
        END AS pending_t_1,
    res.created_date,
    res.department_code
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
            else department_code end department_code
           FROM npss_transactions nppst
             JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND
          nppst.process_type::text = 'IP'::text AND (npl.process_name::text = ANY (ARRAY['Receive Pacs008'::character varying::text, 'Receive Pacs.007'::character varying::text, 'Place Pacs004'::character varying::text,'PACS.008'::character varying::text, 'PACS.007'::character varying::text]))
          GROUP BY nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group,nppst.department_code, (to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))
        UNION ALL (
                         SELECT 1 AS sno,
                            'pacs.008'::text AS type,
                            0 AS total,
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date,
                            'DEFAULT'::text AS department_code
                        UNION
                         SELECT 3 AS sno,
                            'pacs.007'::text AS type,
                            0 AS total,
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date,
                            'DEFAULT'::text AS department_code
                        UNION
                         SELECT 2 AS sno,
                            'pacs.004'::text AS type,
                            0 AS total,
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date,
                            'DEFAULT'::text AS department_code
                )) res
  GROUP BY res.type, res.created_date, res.sno,res.department_code
   order by res.sno