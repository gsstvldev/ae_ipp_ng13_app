-- View: ad_gss_tran.vw_dashboard_outward_data
-- DROP VIEW ad_gss_tran.vw_dashboard_outward_data ;
drop view if exists vw_dashboard_outward_data;
@SPL@
CREATE OR REPLACE VIEW ad_gss_tran.vw_dashboard_outward_data
AS SELECT res.type,
    COALESCE(sum(res.total), 0::numeric) AS total,
    COALESCE(sum(res.ibmb), 0::numeric) AS ibmb,
    COALESCE(sum(res.rib), 0::numeric) AS rib,
    COALESCE(sum(res.rmb), 0::numeric) AS rmb,
    COALESCE(sum(res.cib), 0::numeric) AS cib,
    COALESCE(sum(res.cms), 0::numeric) AS cms,
    COALESCE(sum(res.cmb), 0::numeric) AS cmb,
    COALESCE(sum(res.manual), 0::numeric) AS manual,
    COALESCE(sum(res.pending_screening), 0::numeric) AS pending_screening,
    COALESCE(sum(res.pending_maker), 0::numeric) AS pending_maker,
    COALESCE(sum(res.pending_checker), 0::numeric) AS pending_checker,
    COALESCE(sum(res.send_to_cb), 0::numeric) AS send_to_cb,
    COALESCE(sum(res.cback), 0::numeric) AS cback,
    COALESCE(sum(res.cbnack), 0::numeric) AS cbnack,
        CASE
            WHEN res.type = 'pacs.008'::text THEN ( select count(*) from (
          SELECT distinct  process_NAME,nppst.npsst_id  
               FROM npss_transactions nppst
                 LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
              WHERE nppst.process_type::text = 'OP'::text AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text])) AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_REV_POSTING_FAILURE'::character varying::text, 'OP_AC_RET_POSTING_FAILURE'::character varying::text, 'OP_P2P_REV_POSTING_FAILURE'::character varying::text, 'OP_P2B_FUND_UNFR_FAILURE'::character varying::text, 'OP_P2B_REV_POSTING_FAILURE'::character varying::text, 'OP_AC_REV_POSTING_RETRY'::character varying::text, 'OP_AC_RET_POSTING_RETRY'::character varying::text, 'OP_P2P_REV_POSTING_RETRY'::character varying::text, 'OP_P2B_FUND_UNFR_RETRY'::character varying::text, 'OP_P2B_REV_POSTING_RETRY'::character varying::text])) 
            and NPPST.department_code = RES.DEPARTMENT_CODE
              AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) as Pen08t1)
            WHEN res.type = 'pacs.004'::text THEN ( select count(*) from (
          SELECT distinct  process_NAME,nppst.npsst_id 
               FROM npss_transactions nppst
                 LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
              WHERE nppst.process_type::text = 'OP'::text 
              and NPPST.department_code = RES.DEPARTMENT_CODE
              AND (npl.process_name::text = ANY (ARRAY['Receive Pacs004'::character varying::text])) AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OR_P2B_POSTING_FAILURE'::character varying::text, 'OR_P2P_POSTING_FAILURE'::character varying::text, 'OR_P2P_POSTING_RETRY'::character varying::text, 'OR_P2B_POSTING_RETRY'::character varying::text])) AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) as Pen04t1)
            WHEN res.type = 'pacs.007'::text THEN ( select count(*) from (
          SELECT distinct  process_NAME,nppst.npsst_id 
               FROM npss_transactions nppst
                 LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
              WHERE nppst.process_type::text = 'OP'::text 
              and NPPST.department_code = RES.DEPARTMENT_CODE
              AND (npl.process_name::text = ANY (ARRAY['Place Pacs.007'::character varying::text])) AND (nppst.status::text = ANY (ARRAY['OP_REVERSAL_REQ_REPAIR'::character varying::text, 'OP_REVERSAL_REQ_INITIATED'::character varying::text])) AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) as Pen07t1)
            ELSE 0::bigint
        END AS pending_t_1,
    res.created_date,
    res.sno,
    res.department_code
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
                    WHEN nppst.process_group::text = ANY (ARRAY['Manual'::text, 'MANUAL'::text, 'manual'::text]) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS manual,
            count(DISTINCT
                CASE
                     When npl.process_name::text = 'Place Pacs008' AND ((select Count(*) from npss_trn_process_log where process_name = 'PACS.008' and uetr=npl.uetr)=0) THEN nppst.npsst_id::bigint		  		  
					 When npl.process_name::text = 'Place Pacs.007' AND ((select Count(*) from npss_trn_process_log where process_name = 'PACS.007' and uetr=npl.uetr)=0) THEN nppst.npsst_id::bigint		  		  
                     When (npl.process_name::text = 'PACS.008'::text AND npl.PROCESSING_SYSTEM::text <> 'IBM_MQ'::text) OR (npl.process_name::text = 'PACS.008'::text AND npl.PROCESSING_SYSTEM::text = 'IBM_MQ'::text AND npl.status='IP_RCT_EXCEPTION') OR
				 (npl.process_name::text = 'PACS.007'::text AND npl.PROCESSING_SYSTEM::text <> 'IBM_MQ'::text) OR (npl.process_name::text = 'PACS.007'::text AND npl.PROCESSING_SYSTEM::text = 'IBM_MQ'::text AND npl.status='IP_RCT_EXCEPTION')
				 THEN nppst.npsst_id::bigint		  		  
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
            case when 
            (nppst.department_code = '') or (nppst.department_code = NULL) then 'NA'
            else department_code end department_code
           FROM npss_transactions nppst
             LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND 
          nppst.process_type::text = 'OP'::text AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text, 'Place Pacs.007'::character varying::text, 'Receive Pacs004'::character varying::text, 'PACS.008'::character varying::text, 'PACS.007'::character varying::text]))
          GROUP BY nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group, npl.status, npl.process_status,nppst.department_code, (to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))
          ) res
  GROUP BY res.type, res.created_date, res.sno,res.department_code
  order by res.sno