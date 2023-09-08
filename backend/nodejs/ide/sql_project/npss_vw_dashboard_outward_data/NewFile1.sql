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
    COALESCE(sum(res.nfr), 0::numeric) AS nfr,
    COALESCE(sum(res.cmscms), 0::numeric) AS cmscms,
    COALESCE(sum(res.ipp), 0::numeric) AS ipp,
    COALESCE(sum(res.cmsinf), 0::numeric) AS cmsinf,
    COALESCE(sum(res.mob), 0::numeric) AS mob,
    COALESCE(sum(res.mbl), 0::numeric) AS mbl,
    COALESCE(sum(res.cmscmd), 0::numeric) AS cmscmd,
    COALESCE(sum(res.ib), 0::numeric) AS ib,
    COALESCE(sum(res.ribinf), 0::numeric) AS ribinf,
    COALESCE(sum(res.aani), 0::numeric) AS aani,
    COALESCE(sum(res.gcn), 0::numeric) AS gcn,
    COALESCE(sum(res.manual), 0::numeric) AS manual,
    COALESCE(sum(res.pending_screening), 0::numeric) AS pending_screening,
    COALESCE(sum(res.pending_maker), 0::numeric) AS pending_maker,
    COALESCE(sum(res.pending_checker), 0::numeric) AS pending_checker,
    COALESCE(sum(res.send_to_cb), 0::numeric) AS send_to_cb,
    COALESCE(sum(res.cback), 0::numeric) AS cback,
    COALESCE(sum(res.cbnack), 0::numeric) AS cbnack,
    res.pending_t_1,
    res.created_date,
    res.sno,
    res.department_code,
    res.tenant_id
   FROM ( SELECT
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text THEN 1
                    WHEN npl.process_name::text = 'Place Pacs.007'::text THEN 3
                    WHEN npl.process_name::text = 'Place Pacs004'::text THEN 2
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 1
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 3
                    ELSE NULL::integer
                END AS sno,
                CASE
                    WHEN npl.process_name::text = 'Place Pacs008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'Place Pacs.007'::text THEN 'pacs.007'::text
                    WHEN npl.process_name::text = 'Place Pacs004'::text THEN 'pacs.004'::text
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 'pacs.007'::text
                    ELSE NULL::text
                END AS type,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS total,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'IBMB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS ibmb,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'RMB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS rmb,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'RIB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS rib,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'CMB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cmb,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'CIB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cib,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'CMS'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cms,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'NFR'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'NFR'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'NFR'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS nfr,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMSCMS'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMSCMS'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'CMSCMS'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cmscms,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'IPP'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'IPP'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'IPP'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS ipp,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMSINF'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMSINF'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'CMSINF'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cmsinf,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'MOB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'MOB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'MOB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS mob,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'MBL'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'MBL'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'MBL'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS mbl,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMSCMD'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'CMSCMD'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'CMSCMD'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cmscmd,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'IB'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'IB'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'IB'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS ib,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'RIBINF'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'RIBINF'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'RIBINF'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS ribinf,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'AANI'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'AANI'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'AANI'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS aani,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'GCN'::text AND npl.process_name::text = 'Place Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND nppst.channel_id::text = 'GCN'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND nppst.channel_id::text = 'GCN'::text AND npl.process_name::text = 'Place Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS gcn,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND (nppst.process_group::text = ANY (ARRAY['Manual'::text, 'MANUAL'::text, 'manual'::text])) THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text AND (nppst.process_group::text = ANY (ARRAY['Manual'::text, 'MANUAL'::text, 'manual'::text])) THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs004'::text AND (nppst.process_group::text = ANY (ARRAY['Manual'::text, 'MANUAL'::text, 'manual'::text])) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS manual,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND (( SELECT count(*) AS count
                       FROM npss_trn_process_log
                      WHERE npss_trn_process_log.process_name::text = 'PACS.008'::text AND npss_trn_process_log.uetr::text = npl.uetr::text)) = 0 THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text AND (( SELECT count(*) AS count
                       FROM npss_trn_process_log
                      WHERE npss_trn_process_log.process_name::text = 'PACS.007'::text AND npss_trn_process_log.uetr::text = npl.uetr::text)) = 0 THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'PACS.008'::text AND npl.processing_system::text <> 'IBM_MQ'::text OR npl.process_name::text = 'PACS.008'::text AND npl.processing_system::text = 'IBM_MQ'::text AND npl.status::text = 'IP_RCT_EXCEPTION'::text OR npl.process_name::text = 'PACS.007'::text AND npl.processing_system::text <> 'IBM_MQ'::text OR npl.process_name::text = 'PACS.007'::text AND npl.processing_system::text = 'IBM_MQ'::text AND npl.status::text = 'IP_RCT_EXCEPTION'::text THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_screening,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_REV_POSTING_FAILURE'::character varying::text, 'OP_P2P_REV_POSTING_FAILURE'::character varying::text, 'OP_P2B_REV_POSTING_FAILURE'::character varying::text])) THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text AND nppst.status::text = 'OP_REVERSAL_REQ_REPAIR'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND nppst.status::text = 'IP_RCT_RETURN_POSTING_FAILURE'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS pending_maker,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_REV_POSTING_RETRY'::character varying::text, 'OP_P2P_REV_POSTING_RETRY'::character varying::text, 'OP_P2B_REV_POSTING_RETRY'::character varying::text])) THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text AND nppst.status::text = 'OP_REVERSAL_REQ_INITIATED'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND nppst.status::text = 'IP_RCT_RETURN_POSTING_RETRY'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS pending_checker,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTCompleted'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS send_to_cb,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND (nppst.status::text = 'OP_RCT_STATUS_RECEIVED'::text OR nppst.status::text = 'OP_P2P_STATUS_ACCEPTED'::text OR nppst.status::text = 'OP_P2B_STATUS_ACCEPTED'::text) THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS cback,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND (nppst.status::text = 'OP_AC_REV_POSTING_SUCCESS'::text OR nppst.status::text = 'OP_AC_REV_POSTING_SUCCESS'::text OR nppst.process_status::text = 'OP_AC_STATUS_REJECTED'::text OR nppst.process_status::text = 'OP_P2P_REV_POSTING_SUCCESS'::text OR nppst.process_status::text = 'OP_P2B_STATUS_REJECTED'::text OR nppst.process_status::text = 'OP_P2B_REV_POSTING_SUCCESS'::text) THEN nppst.npsst_id
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
             LEFT JOIN ( SELECT z.created_date,
                    z.uetr,
                    z.process_name,
                    z.status,
                    z.process_status,
                    z.processing_system
                   FROM npss_trn_process_log z
                  WHERE to_date(to_char(z.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND (z.process_name::text = ANY (ARRAY['Place Pacs008'::character varying, 'Place Pacs.007'::character varying, 'Place Pacs004'::character varying, 'PACS.008'::character varying, 'PACS.007'::character varying]::text[]))) npl ON npl.uetr::text = nppst.uetr::text
          WHERE to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND (npl.process_name::text = ANY (ARRAY['Place Pacs008'::character varying::text, 'Place Pacs.007'::character varying::text, 'Place Pacs004'::character varying::text, 'PACS.008'::character varying::text, 'PACS.007'::character varying::text]))
          GROUP BY nppst.tenant_id, nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group, npl.status, npl.process_status, nppst.department_code, (to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))
        UNION ALL (
                 SELECT a1.sno,
                    a1.type,
                    a1.total,
                    a1.ibmb,
                    a1.rib,
                    a1.rmb,
                    a1.cib,
                    a1.cms,
                    a1.cmb,
                    a1.nfr,
                    a1.cmscms,
                    a1.ipp,
                    a1.cmsinf,
                    a1.mob,
                    a1.mbl,
                    a1.cmscmd,
                    a1.ib,
                    a1.ribinf,
                    a1.aani,
                    a1.gcn,
                    a1.manual,
                    a1.pending_screening,
                    a1.pending_maker,
                    a1.pending_checker,
                    a1.send_to_cb,
                    a1.cback,
                    a1.cbnack,
                    a1.created_date,
                        CASE
                            WHEN d1.department_code::text = ''::text OR d1.department_code IS NULL THEN 'DEFAULT'::character varying
                            ELSE d1.department_code
                        END AS department_code,
                        CASE
                            WHEN d1.pending_t_1 IS NOT NULL THEN d1.pending_t_1
                            ELSE 0::bigint
                        END AS pending_t_1,
                    d1.tenant_id
                   FROM ( SELECT 1 AS sno,
                            'pacs.008'::text AS type,
                            0 AS total,
                            0 AS ibmb,
                            0 AS rib,
                            0 AS rmb,
                            0 AS cib,
                            0 AS cms,
                            0 AS cmb,
                            0 AS nfr,
                            0 AS cmscms,
                            0 AS ipp,
                            0 AS cmsinf,
                            0 AS mob,
                            0 AS mbl,
                            0 AS cmscmd,
                            0 AS ib,
                            0 AS ribinf,
                            0 AS aani,
                            0 AS gcn,
                            0 AS manual,
                            0 AS pending_screening,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS send_to_cb,
                            0 AS cback,
                            0 AS cbnack,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date) a1
                     LEFT JOIN ( SELECT
                                CASE
                                    WHEN d.typed = 'pacs.008'::text THEN count(d.npsst_id)
                                    ELSE 0::bigint
                                END AS pending_t_1,
                            d.typed,
                            d.department_code,
                            d.tenant_id
                           FROM ( SELECT DISTINCT npl.process_name,
                                    'pacs.008'::text AS typed,
                                    nppst.npsst_id,
CASE
 WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
 ELSE nppst.department_code
END AS department_code,
                                    nppst.tenant_id
                                   FROM npss_transactions nppst
                                     LEFT JOIN ( SELECT z1.created_date,
    z1.uetr,
    z1.process_name,
    z1.status,
    z1.process_status,
    z1.processing_system
   FROM npss_trn_process_log z1
  WHERE to_date(to_char(z1.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE AND z1.process_name::text = 'Place Pacs008'::text) npl ON npl.uetr::text = nppst.uetr::text
                                  WHERE nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs008'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['OP_AC_REV_POSTING_FAILURE'::character varying::text, 'OP_P2P_REV_POSTING_FAILURE'::character varying::text, 'OP_P2B_REV_POSTING_FAILURE'::character varying::text, 'OP_AC_REV_POSTING_RETRY'::character varying::text, 'OP_P2P_REV_POSTING_RETRY'::character varying::text, 'OP_P2B_REV_POSTING_RETRY'::character varying::text])) AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) d
                          GROUP BY d.typed, d.department_code, d.tenant_id) d1 ON d1.typed = a1.type
                UNION
                 SELECT a2.sno,
                    a2.type,
                    a2.total,
                    a2.ibmb,
                    a2.rib,
                    a2.rmb,
                    a2.cib,
                    a2.cms,
                    a2.cmb,
                    a2.nfr,
                    a2.cmscms,
                    a2.ipp,
                    a2.cmsinf,
                    a2.mob,
                    a2.mbl,
                    a2.cmscmd,
                    a2.ib,
                    a2.ribinf,
                    a2.aani,
                    a2.gcn,
                    a2.manual,
                    a2.pending_screening,
                    a2.pending_maker,
                    a2.pending_checker,
                    a2.send_to_cb,
                    a2.cback,
                    a2.cbnack,
                    a2.created_date,
                        CASE
                            WHEN d2.department_code::text = ''::text OR d2.department_code IS NULL THEN 'DEFAULT'::character varying
                            ELSE d2.department_code
                        END AS department_code,
                        CASE
                            WHEN d2.pending_t_1 IS NOT NULL THEN d2.pending_t_1
                            ELSE 0::bigint
                        END AS pending_t_1,
                    d2.tenant_id
                   FROM ( SELECT 3 AS sno,
                            'pacs.007'::text AS type,
                            0 AS total,
                            0 AS ibmb,
                            0 AS rib,
                            0 AS rmb,
                            0 AS cib,
                            0 AS cms,
                            0 AS cmb,
                            0 AS nfr,
                            0 AS cmscms,
                            0 AS ipp,
                            0 AS cmsinf,
                            0 AS mob,
                            0 AS mbl,
                            0 AS cmscmd,
                            0 AS ib,
                            0 AS ribinf,
                            0 AS aani,
                            0 AS gcn,
                            0 AS manual,
                            0 AS pending_screening,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS send_to_cb,
                            0 AS cback,
                            0 AS cbnack,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date) a2
                     LEFT JOIN ( SELECT
                                CASE
                                    WHEN da2.typed = 'pacs.007'::text THEN count(da2.npsst_id)
                                    ELSE 0::bigint
                                END AS pending_t_1,
                            da2.typed,
                            da2.department_code,
                            da2.tenant_id
                           FROM ( SELECT DISTINCT npl.process_name,
                                    'pacs.007'::text AS typed,
CASE
 WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
 ELSE nppst.department_code
END AS department_code,
                                    nppst.npsst_id,
                                    nppst.tenant_id
                                   FROM npss_transactions nppst
                                     LEFT JOIN ( SELECT z1.created_date,
    z1.uetr,
    z1.process_name,
    z1.status,
    z1.process_status,
    z1.processing_system
   FROM npss_trn_process_log z1
  WHERE to_date(to_char(z1.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE AND z1.process_name::text = 'Place Pacs.007'::text) npl ON npl.uetr::text = nppst.uetr::text
                                  WHERE nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Place Pacs.007'::text AND (nppst.status::text = ANY (ARRAY['OP_REVERSAL_REQ_REPAIR'::character varying::text, 'OP_REVERSAL_REQ_INITIATED'::character varying::text])) AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) da2
                          GROUP BY da2.typed, da2.department_code, da2.tenant_id) d2 ON d2.typed = a2.type
                UNION
                 SELECT a3.sno,
                    a3.type,
                    a3.total,
                    a3.ibmb,
                    a3.rib,
                    a3.rmb,
                    a3.cib,
                    a3.cms,
                    a3.cmb,
                    a3.nfr,
                    a3.cmscms,
                    a3.ipp,
                    a3.cmsinf,
                    a3.mob,
                    a3.mbl,
                    a3.cmscmd,
                    a3.ib,
                    a3.ribinf,
                    a3.aani,
                    a3.gcn,
                    a3.manual,
                    a3.pending_screening,
                    a3.pending_maker,
                    a3.pending_checker,
                    a3.send_to_cb,
                    a3.cback,
                    a3.cbnack,
                    a3.created_date,
                        CASE
                            WHEN d3.department_code::text = ''::text OR d3.department_code IS NULL THEN 'DEFAULT'::character varying
                            ELSE d3.department_code
                        END AS department_code,
                        CASE
                            WHEN d3.pending_t_1 IS NOT NULL THEN d3.pending_t_1
                            ELSE 0::bigint
                        END AS pending_t_1,
                    d3.tenant_id
                   FROM ( SELECT 2 AS sno,
                            'pacs.004'::text AS type,
                            0 AS total,
                            0 AS ibmb,
                            0 AS rib,
                            0 AS rmb,
                            0 AS cib,
                            0 AS cms,
                            0 AS cmb,
                            0 AS nfr,
                            0 AS cmscms,
                            0 AS ipp,
                            0 AS cmsinf,
                            0 AS mob,
                            0 AS mbl,
                            0 AS cmscmd,
                            0 AS ib,
                            0 AS ribinf,
                            0 AS aani,
                            0 AS gcn,
                            0 AS manual,
                            0 AS pending_screening,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS send_to_cb,
                            0 AS cback,
                            0 AS cbnack,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date) a3
                     LEFT JOIN ( SELECT
                                CASE
                                    WHEN da3.typed = 'pacs.004'::text THEN count(da3.npsst_id)
                                    ELSE 0::bigint
                                END AS pending_t_1,
                            da3.typed,
                            da3.department_code,
                            da3.tenant_id
                           FROM ( SELECT DISTINCT npl.process_name,
                                    'pacs.004'::text AS typed,
CASE
 WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
 ELSE nppst.department_code
END AS department_code,
                                    nppst.npsst_id,
                                    nppst.tenant_id
                                   FROM npss_transactions nppst
                                     LEFT JOIN ( SELECT z1.created_date,
    z1.uetr,
    z1.process_name,
    z1.status,
    z1.process_status,
    z1.processing_system
   FROM npss_trn_process_log z1
  WHERE to_date(to_char(z1.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE AND z1.process_name::text = 'Place Pacs004'::text) npl ON npl.uetr::text = nppst.uetr::text
                                  WHERE nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Place Pacs004'::text AND nppst.process_status::text = 'RCTExceptionFailure'::text AND (nppst.status::text = ANY (ARRAY['IP_RCT_RETURN_POSTING_FAILURE'::character varying::text, 'IP_RCT_RETURN_POSTING_RETRY'::character varying::text])) AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) da3
                          GROUP BY da3.typed, da3.department_code, da3.tenant_id) d3 ON d3.typed = a3.type
        )) res
  GROUP BY res.type, res.created_date, res.sno, res.department_code, res.pending_t_1, res.tenant_id
  ORDER BY res.sno;