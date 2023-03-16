-- View: ad_gss_tran.vw_dashboard_outward_data
-- DROP VIEW ad_gss_tran.vw_dashboard_outward_data;
drop view if exists vw_dashboard_outward_data;
@SPL@
CREATE OR REPLACE VIEW ad_gss_tran.vw_dashboard_outward_data
 AS
 SELECT res.type,
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
	CASE WHEN res.type = 'pacs.008'::text then 
	  		 ( select count(*)
	    FROM npss_transactions nppst
             LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE nppst.process_type::text = 'OP'::text
		  AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text]))
	   	and nppst.process_status::text = 'RCTExceptionFailure'::text 
	   AND (nppst.status::text = ANY (ARRAY['OP_AC_REV_POSTING_FAILURE'::character varying::text, 'OP_AC_RET_POSTING_FAILURE'::character varying::text, 'OP_P2P_REV_POSTING_FAILURE'::character varying::text, 'OP_P2B_FUND_UNFR_FAILURE'::character varying::text, 'OP_P2B_REV_POSTING_FAILURE'::character varying::text, 'OP_AC_REV_POSTING_RETRY'::character varying::text, 'OP_AC_RET_POSTING_RETRY'::character varying::text, 'OP_P2P_REV_POSTING_RETRY'::character varying::text, 'OP_P2B_FUND_UNFR_RETRY'::character varying::text, 'OP_P2B_REV_POSTING_RETRY'::character varying::text])) 
	   AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE)
	   WHEN res.type = 'pacs.004'::text then 
	   (select count(*)
	    FROM npss_transactions nppst
             LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
		  WHERE nppst.process_type::text = 'OP'::text
		  AND (npl.process_name::text = ANY (ARRAY['Receive Pacs004'::character varying::text]))
		  AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OR_P2B_POSTING_FAILURE'::character varying::text, 'OR_P2P_POSTING_FAILURE'::character varying::text, 'OR_P2P_POSTING_RETRY'::character varying::text, 'OR_P2B_POSTING_RETRY'::character varying::text])) AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE 
	   )		 
	   WHEN res.type = 'pacs.007'::text then 
	   (
		   select count(*)
	       FROM npss_transactions nppst
           LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
		 	WHERE nppst.process_type::text = 'OP'::text
		  	AND (npl.process_name::text = ANY (ARRAY['Place Pacs.007'::character varying::text]))
		    AND (nppst.status::text = ANY (ARRAY['OP_REVERSAL_REQ_REPAIR'::character varying::text, 'OP_REVERSAL_REQ_INITIATED'::character varying::text])) AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE
	   )		 
	   else 0 end pending_t_1,
   res.created_date,
    res.sno
   FROM ( SELECT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text THEN 1
                    WHEN npl.process_name::text = 'Place Pacs.007'::text THEN 3
                    WHEN npl.process_name::text = 'Receive Pacs004'::text THEN 2
                    ELSE NULL::integer
                END AS sno,
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'Place Pacs.007'::text THEN 'pacs.007'::text
                    WHEN npl.process_name::text = 'Receive Pacs004'::text THEN 'pacs.004'::text
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
                    WHEN nppst.process_group::text IN ('Manual'::text,'MANUAL'::text,'manual'::text) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS manual,
            count(DISTINCT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTInProcess'::text AND nppst.status::text = 'OP_AC_FILE_PLACED'::text THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Place Pacs.007'::text AND nppst.status::text = 'OP_RCT_REVERSAL_PLACED'::text THEN nppst.npsst_id::bigint
                    WHEN npl.process_name::text = 'Receive Pacs004'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_RET_RECEIVED'::character varying::text, 'OR_P2P_RETURNED'::character varying::text, 'OR_P2B_RETURNED'::character varying::text])) THEN nppst.npsst_id::bigint
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
                  to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date
           FROM npss_transactions nppst
             LEFT JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE nppst.process_type::text = 'OP'::text AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text, 'Place Pacs.007'::character varying::text, 'Receive Pacs004'::character varying::text]))
          GROUP BY nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group, npl.status, npl.process_status, (to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))
        UNION ALL
		 ( SELECT  1 AS sno ,'pacs.008' as type,
                    0 AS total,
                    0 AS ibmb,
                    0 AS rib,
                    0 AS rmb,
                    0 AS cib,
                    0 AS cms,
                    0 AS cmb,
                    0 AS manual,
                    0 AS pending_screening,
                    0 AS pending_maker,
                    0 AS pending_checker,
                    0 AS send_to_cb,
                    0 AS cback,
                    0 AS cbnack,
		             to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date
			        
		           union
		          select
		           3 AS sno ,'pacs.007' as type,
                    0 AS total,
                    0 AS ibmb,
                    0 AS rib,
                    0 AS rmb,
                    0 AS cib,
                    0 AS cms,
                    0 AS cmb,
                    0 AS manual,
                    0 AS pending_screening,
                    0 AS pending_maker,
                    0 AS pending_checker,
                    0 AS send_to_cb,
                    0 AS cback,
                    0 AS cbnack,
		             to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date
			       union
		          select  2 AS sno, 'pacs.004' as type,
                    0 AS total,
                    0 AS ibmb,
                    0 AS rib,
                    0 AS rmb,
                    0 AS cib,
                    0 AS cms,
                    0 AS cmb,
                    0 AS manual,
                    0 AS pending_screening,
                    0 AS pending_maker,
                    0 AS pending_checker,
                    0 AS send_to_cb,
                    0 AS cback,
                    0 AS cbnack,
		             to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date
			         )
		) res
  GROUP BY res.type, res.created_date, res.sno
  ORDER BY res.sno;