-- View: ad_gss_tran.vw_dashboard_inward_data
-- DROP VIEW ad_gss_tran.vw_dashboard_inward_data;

drop view if exists vw_dashboard_inward_data;
@SPL@
CREATE OR REPLACE VIEW vw_dashboard_inward_data
 AS
 SELECT res.type,
    COALESCE(sum(res.total), 0::numeric) AS total,
    COALESCE(sum(res.pending_maker), 0::numeric) AS pending_maker,
    COALESCE(sum(res.pending_checker), 0::numeric) AS pending_checker,
    COALESCE(sum(res.pending_screening), 0::numeric) AS pending_screening,
    COALESCE(sum(res.successfullyposted), 0::numeric) AS successfullyposted,
    COALESCE(sum(res.pending_returns_maker), 0::numeric) AS pending_returns_maker,
    COALESCE(sum(res.pending_returns_checker), 0::numeric) AS pending_returns_checker,
    COALESCE(sum(res.returned), 0::numeric) AS returned,
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
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs008'::text THEN count(*)
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs007'::text THEN count(*)
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs004'::text THEN count(*)
                    ELSE NULL::bigint
                END AS total,
                CASE
                    WHEN nppst.process_status::text = 'RCTInProcess'::text AND nppst.status::text = 'IP_RCT_RECEIVED'::text THEN count(*)
                    ELSE NULL::bigint
                END AS pending_screening,
                CASE
                    WHEN nppst.process_status::text = 'RCTReturned'::text THEN count(*)
                    ELSE NULL::bigint
                END AS returned,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_FAILURE'::text, 'IP_RCT_PC_T24_POSTING_FAILURE'::text, 'IP_RCT_CC_T24_POSTING_FAILURE'::text, 'IP_RCT_RETURN_POSTING_FAILURE'::text])) THEN count(*)
                    ELSE NULL::bigint
                END AS pending_maker,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND nppst.status::text = 'IP_RCT_RR_POSTING_RETRY'::text OR nppst.status::text = 'IP_RCT_PC_T24_POSTING_RETRY'::text OR nppst.status::text = 'IP_RCT_CC_T24_POSTING_RETRY'::text OR nppst.status::text = 'IP_RCT_POSTING_SUSPICIOUS'::text OR nppst.status::text = 'IP_RCT_PC_POSTING_SUSPICIOUS'::text THEN count(*)
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND nppst.status::text = 'IP_RCT_RETURN_POSTING_RETRY '::text OR nppst.status::text = 'IP_RCT_RR_POSTING_SUSPICIOUS'::text THEN count(*)
                    ELSE NULL::bigint
                END AS pending_checker,
                CASE
                    WHEN nppst.process_status::text = 'RCTCompleted'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_POSTING_SUCCESS'::text, 'IP_RCT_PC_T24_POSTING_SUCCESS'::text, 'IP_RCT_CC_POSTING_SUCCESS'::text])) THEN count(*)
                    ELSE NULL::bigint
                END AS successfullyposted,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_FAILURE'::text, 'IP_RCT_RETURN_POSTING_FAILURE'::text])) THEN count(*)
                    ELSE NULL::bigint
                END AS pending_returns_maker,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_RETRY'::text, 'IP_RCT_POSTING_FAILURE'::text, 'IP_RCT_RETURN_POSTING_RETRY'::text, 'IP_RCT_RR_POSTING_SUSPICIOUS'::text])) THEN count(*)
                    ELSE NULL::bigint
                END AS pending_returns_checker,
                CASE
                    WHEN nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RR_POSTING_FAILURE'::text, 'IP_RCT_RETURN_POSTING_FAILURE'::text, 'IP_RCT_RR_POSTING_RETRY'::text, 'IP_RCT_RETURN_POSTING_RETRY'::text, 'IP_RCT_RR_POSTING_SUSPICIOUS'::text])) AND to_char(npl.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone = (to_char(npl.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone - '1 day'::interval) THEN count(*)
                    ELSE NULL::bigint
                END AS pending_t_1,
            to_char(npl.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date
           FROM npss_transactions nppst
             JOIN npss_trn_process_log npl ON npl.uetr::text = nppst.uetr::text
          WHERE nppst.process_type::text = 'IP'::text AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text, 'Place Pacs007'::character varying::text, 'Place Pacs004'::character varying::text]))
          GROUP BY nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group, npl.status, npl.process_status, (to_char(npl.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))) res
  GROUP BY res.type, res.created_date;