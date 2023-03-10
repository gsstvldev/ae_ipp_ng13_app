-- View: ad_gss_tran.vw_dashboard_outward_data
-- DROP VIEW ad_gss_tran.vw_dashboard_outward_data;
drop view if exists vw_dashboard_outward_data;
@SPL@
CREATE OR REPLACE VIEW vw_dashboard_outward_data
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
    COALESCE(sum(res.pending_t_1), 0::numeric) AS pending_t_1,
    res.created_date
   FROM ( SELECT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'Place Pacs007'::text THEN 'pacs.007'::text
                    WHEN npl.process_name::text = 'Place Pacs004'::text THEN 'pacs.004'::text
                    ELSE NULL::text
                END AS type,
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS total,
                CASE
                    WHEN nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS ibmb,
                CASE
                    WHEN nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS rmb,
                CASE
                    WHEN nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS rib,
                CASE
                    WHEN nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS cmb,
                CASE
                    WHEN nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS cib,
                CASE
                    WHEN nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS cms,
                CASE
                    WHEN nppst.process_group::text = 'Manual'::text THEN count(*)
                    ELSE NULL::bigint
                END AS manual,
                CASE
                    WHEN nppst.process_status::text = 'RCTInProcess'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_REQ_RECEIVED'::text, 'OP_P2P_FILE_PLACED'::text, 'OP_AC_FILE_PLACED'::text])) THEN count(*)
                    ELSE NULL::bigint
                END AS pending_screening,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text OR nppst.status::text = 'OP_AC_REV_POSTING_FAILURE'::text OR nppst.status::text = 'OP_AC_RET_POSTING_FAILURE'::text OR nppst.status::text = 'OP_P2P_REV_POSTING_FAILURE'::text OR nppst.status::text = 'OR_P2P_POSTING_FAILURE'::text OR nppst.status::text = 'OP_P2B_FUND_UNFR_FAILURE'::text OR nppst.status::text = 'OR_P2B_POSTING_FAILURE'::text THEN count(*)
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text OR nppst.status::text = 'OR_P2B_POSTING_FAILURE'::text OR nppst.status::text = 'OR_P2P_POSTING_FAILURE'::text THEN count(*)
                    ELSE NULL::bigint
                END AS pending_maker,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text OR nppst.status::text = 'OP_AC_REV_POSTING_RETRY'::text OR nppst.status::text = 'OP_AC_RET_POSTING_RETRY'::text OR nppst.status::text = 'OP_P2P_REV_POSTING_RETRY'::text OR nppst.status::text = 'OP_P2B_FUND_UNFR_RETRY'::text OR nppst.status::text = 'OP_P2B_REV_POSTING_RETRY'::text THEN count(*)
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text OR nppst.status::text = 'OR_P2P_POSTING_RETRY'::text OR nppst.status::text = 'OP_P2B_FUND_UNFR_RETRY'::text THEN count(*)
                    ELSE NULL::bigint
                END AS pending_checker,
                CASE
                    WHEN nppst.process_status::text = ANY (ARRAY['RCTCompleted'::text, 'RCTReturned'::text]) THEN count(*)
                    WHEN nppst.process_status::text = 'RCTReturned'::text THEN count(*)
                    ELSE NULL::bigint
                END AS send_to_cb,
                CASE
                    WHEN nppst.status::text = 'OP_RCT_STATUS_RECEIVED'::text OR nppst.status::text = 'OP_P2P_STATUS_ACCEPTED'::text OR nppst.status::text = 'OP_P2B_STATUS_ACCEPTED'::text THEN count(*)
                    ELSE NULL::bigint
                END AS cback,
                CASE
                    WHEN npl.status::text = 'OP_AC_REV_POSTING_SUCCESS'::text OR npl.status::text = 'OP_AC_REV_POSTING_SUCCESS'::text OR npl.process_status::text = 'OP_AC_STATUS_REJECTED'::text OR npl.process_status::text = 'OP_P2P_REV_POSTING_SUCCESS'::text OR npl.process_status::text = 'OP_P2B_STATUS_REJECTED'::text OR npl.process_status::text = 'OP_P2B_REV_POSTING_SUCCESS'::text THEN count(*)
                    ELSE NULL::bigint
                END AS cbnack,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = 'OP_AC_REV_POSTING_FAILURE'::text OR nppst.status::text = 'OP_AC_RET_POSTING_FAILURE'::text OR nppst.status::text = 'OP_P2P_REV_POSTING_FAILURE'::text OR nppst.status::text = 'OP_P2B_FUND_UNFR_FAILURE'::text OR nppst.status::text = 'OP_P2B_REV_POSTING_FAILURE'::text OR nppst.status::text = 'OR_P2B_POSTING_FAILURE'::text OR nppst.status::text = 'OP_AC_REV_POSTING_RETRY'::text OR nppst.status::text = 'OP_AC_RET_POSTING_RETRY'::text OR nppst.status::text = 'OP_P2P_REV_POSTING_RETRY'::text OR nppst.status::text = 'OP_P2B_FUND_UNFR_RETRY'::text OR npl.status::text = 'OP_P2B_REV_POSTING_RETRY'::text) AND to_char(npl.created_date::date::timestamp with time zone, 'dd-mm-yyyy'::text)::timestamp without time zone = (to_char(npl.created_date::date::timestamp with time zone, 'dd-mm-yyyy'::text)::timestamp without time zone - '1 day'::interval) THEN count(*)
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = 'OR_P2P_POSTING_FAILURE'::text OR nppst.status::text = 'OR_P2P_POSTING_RETRY'::text OR nppst.status::text = 'OP_P2P_REV_POSTING_FAILURE'::text OR nppst.status::text = 'OR_P2B_POSTING_RETRY'::text) AND to_char(npl.created_date::date::timestamp with time zone, 'dd-mm-yyyy'::text)::timestamp without time zone = (to_char(npl.created_date::date::timestamp with time zone, 'dd-mm-yyyy'::text)::timestamp without time zone - '1 day'::interval) THEN count(*)
                    ELSE NULL::bigint
                END AS pending_t_1,
            to_char(npl.created_date::date::timestamp with time zone, 'dd-mm-yyyy'::text)::timestamp without time zone AS created_date
           FROM npss_transactions nppst
             JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE nppst.process_type::text = 'OP'::text AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text, 'Place Pacs007'::character varying::text, 'Place Pacs004'::character varying::text]))
          GROUP BY nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group, npl.status, npl.process_status, (to_char(npl.created_date::date::timestamp with time zone, 'dd-mm-yyyy'::text))) res
  GROUP BY res.type, res.created_date;