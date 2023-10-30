-- View: ad_gss_tran.vw_dashboard_inward_data
-- DROP VIEW ad_gss_tran.vw_dashboard_inward_data ;
drop view if exists npss_vw_dashboard_inward_data;
@SPL@
CREATE OR REPLACE VIEW npss_vw_dashboard_inward_data
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
    COALESCE(sum(res.payment_rejected), 0::numeric) AS payment_rejected,
    res.pending_t_1,
    res.created_date,
    res.department_code,
    res.tenant_id
   FROM ( SELECT
                CASE
                    WHEN npl.process_name::text = 'Receive Pacs008'::text THEN 1
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text THEN 3
                    WHEN npl.process_name::text = 'Receive Pacs004'::text THEN 2
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 1
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 3
                    ELSE NULL::integer
                END AS sno,
                CASE
                    WHEN npl.process_name::text = 'Receive Pacs008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'Receive Pacs.007'::text THEN 'pacs.007'::text
                    WHEN npl.process_name::text = 'Receive Pacs004'::text THEN 'pacs.004'::text
                    WHEN npl.process_name::text = 'PACS.008'::text THEN 'pacs.008'::text
                    WHEN npl.process_name::text = 'PACS.007'::text THEN 'pacs.007'::text
                    ELSE NULL::text
                END AS type,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs.007'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Receive Pacs004'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS total,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text AND nppst.status ='IP_RCT_RECEIVED' THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_screening,
            count(DISTINCT
                case
	                WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text AND nppst.status in ('IP_RCT_RETURN_COMPLETED','IP_BCT_RETURN_FILE_UPLOADED','IP_RCT_MANUAL_RETURNED','IP_RCT_RETURNED') THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Receive Pacs004'::text AND nppst.status ::text = 'OP_AC_RET_RECEIVED'::text THEN nppst.npsst_id
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs.007'::text AND nppst.status::text = 'IP_RCT_RR_RETURNED'::text THEN nppst.npsst_id
                    ELSE NULL::integer
                END) AS returned,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text AND  nppst.status in('IP_RCT_POSTING_SUSPICIOUS','IP_RCT_CC_POSTING_FAILURE','IP_RCT_CC_T24_POSTING_FAILURE','IP_RCT_CC_T24_POSTING_SUCCESS','IP_RCT_CC_T24_POSTING_SUSPICIOUS','IP_RCT_PC_POSTING_FAILURE','IP_RCT_PC_POSTING_SUSPICIOUS','IP_RCT_PC_T24_POSTING_FAILURE','IP_RCT_PC_T24_POSTING_SUSPICIOUS','IP_RCT_POSTING_FAILURE') THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs.007'::text AND nppst.status in ('IP_RCT_REVERSAL_REQ_RECEIVED','IP_RCT_REVERSAL_VLD_FAILED') THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_maker,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text AND nppst.status in ('IP_RCT_POSTING_RETRY','IP_RCT_AUTO_POSTING_INITIATED','IP_RCT_POSTING_REPOST') THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs.007'::text AND nppst.status::text in ('IP_RCT_RR_RETURN_READY','IP_RCT_REV_REQ_APPROVED','IP_RCT_REV_REQ_REJECTED','IP_RCT_RR_POSTING_FAILURE') THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_checker,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text  AND nppst.status::text in ('IP_RCT_STATUS_REPLIED','IP_RCT_MAN_CLOSED')  THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Receive Pacs004'::text AND nppst.status::text = 'OP_RCT_REVERSAL_REJECTED'::text THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs.007'::text  AND nppst.status::text in ('IP_RCT_REVREQ_REJ_REPLIED','IP_RCT_RR_MAN_CLOSED','IP_RCT_RR_POSTING_RETRY') THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS payment_rejected,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text  AND nppst.status::text in ('IP_RCT_PC_T24_POSTING_SUCCESS','IP_RCT_POSTING_SUCCESS','IP_RCT_CC_POSTING_SUCCESS','IP_RCT_ALREADY_POSTED','IP_RCT_CC_T24_POSTING_SUCCESS','IP_RCT_RETURN_POSTING_SUCCESS') THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Receive Pacs004'::text AND nppst.status::text in('OP_AC_RET_POSTING_SUCCESS','OP_AC_REV_POSTING_SUCCESS','OR_P2P_POSTING_SUCCESS') THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs.007'::text AND nppst.status::text = 'IP_RCT_RR_POSTING_SUCCESS'::text THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS successfullyposted,
            count(DISTINCT
                case
	                WHEN nppst.process_type::text = 'IP'::text AND npl.process_name::text = 'Receive Pacs008'::text  AND nppst.status::text in ('IP_RCT_RETURN_POSTING_FAILURE','IP_RCT_RETURN_POSTING_SUCCESS') THEN nppst.npsst_id::bigint
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Receive Pacs004'::text AND nppst.status::text in ('OP_AC_RET_POSTING_FAILURE','OP_AC_RET_AUTO_POSTING_INITIATED','OP_AC_RET_POSTING_SUSPICIOUS','OR_P2P_POSTING_FAILURE','OR_P2P_POSTING_SUSPICIOUS') THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_returns_maker,
            count(DISTINCT
                CASE
                    WHEN nppst.process_type::text = 'OP'::text AND npl.process_name::text = 'Receive Pacs004'::text  AND nppst.status::text in ('OP_AC_RET_POSTING_RETRY','IP_RCT_RR_POSTING_RETRY','OP_AC_RET_FP_APPROVED','OP_AC_RET_FP_INITIATED','OP_AC_RET_MAN_CLOSED','OP_AC_RET_POSTING_SUCCESS','OP_AC_REV_POSTING_SUCCESS') THEN nppst.npsst_id::bigint
                    ELSE NULL::bigint
                END) AS pending_returns_checker,
            to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date,
                CASE
                    WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
                    ELSE nppst.department_code
                END AS department_code,
            0 AS pending_t_1,
            nppst.tenant_id
           FROM npss_transactions nppst
            inner JOIN ( SELECT distinct z.process_name,z.created_date,
                    z.uetr
                   FROM npss_trn_process_log z
                  WHERE to_date(to_char(z.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND (z.process_name::text = ANY (ARRAY['Receive Pacs008'::character varying, 'Receive Pacs.007'::character varying, 'Receive Pacs004'::character varying, 'PACS.008'::character varying, 'PACS.007'::character varying]::text[]))) npl ON npl.uetr::text = nppst.uetr::text
          WHERE to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) = CURRENT_DATE AND (npl.process_name::text = ANY (ARRAY['Receive Pacs008'::character varying::text, 'Receive Pacs.007'::character varying::text, 'Receive Pacs004'::character varying::text, 'PACS.008'::character varying::text, 'PACS.007'::character varying::text]))
          GROUP BY nppst.tenant_id, nppst.channel_id, npl.process_name, nppst.process_status, nppst.status, nppst.process_type, nppst.process_group, nppst.department_code, (to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text))
        UNION ALL (
                 SELECT a1.sno,
                    a1.type,
                    a1.total,
                    a1.pending_screening,
                    a1.returned,
                    a1.pending_maker,
                    a1.pending_checker,
                    a1.successfullyposted,
                    a1.pending_returns_maker,
                    a1.pending_returns_checker,
                    a1.payment_rejected,
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
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS payment_rejected,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date) a1
                     LEFT JOIN ( SELECT
                                CASE
                                    WHEN d.typed = 'pacs.008'::text THEN count(d.npsst_id)
                                    ELSE 0::bigint
                                END AS pending_t_1,
                            d.typed,
                            d.department_code,
                            d.tenant_id
                           FROM ( SELECT distinct nppst.tenant_id, npl.process_name,
                                    'pacs.008'::text AS typed,
                                    nppst.npsst_id,
CASE
 WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
 ELSE nppst.department_code
END AS department_code       FROM npss_transactions nppst
                                     INNER JOIN ( SELECT distinct z.process_name,z.created_date,
    z.uetr
   FROM npss_trn_process_log z
  WHERE to_date(to_char(z.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE AND z.process_name::text = 'Receive Pacs008'::text) npl ON npl.uetr::text = nppst.uetr::text
                                  WHERE nppst.process_type = 'IP' AND npl.process_name::text = 'Receive Pacs008'::text  AND nppst.status in ('IP_RCT_POSTING_SUSPICIOUS','IP_RCT_CC_POSTING_FAILURE','IP_RCT_CC_T24_POSTING_FAILURE','IP_RCT_CC_T24_POSTING_SUCCESS','IP_RCT_CC_T24_POSTING_SUSPICIOUS','IP_RCT_PC_POSTING_FAILURE','IP_RCT_PC_POSTING_SUSPICIOUS','IP_RCT_PC_T24_POSTING_FAILURE','IP_RCT_PC_T24_POSTING_SUSPICIOUS','IP_RCT_POSTING_FAILURE','IP_RCT_POSTING_RETRY','IP_RCT_AUTO_POSTING_INITIATED','IP_RCT_POSTING_REPOST') AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) d
                          GROUP BY d.typed, d.department_code, d.tenant_id) d1 ON d1.typed = a1.type
                UNION
                 SELECT a3.sno,
                    a3.type,
                    a3.total,
                    a3.pending_screening,
                    a3.returned,
                    a3.pending_maker,
                    a3.pending_checker,
                    a3.payment_rejected,
                    a3.successfullyposted,
                    a3.pending_returns_maker,
                    a3.pending_returns_checker,
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
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS payment_rejected,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date
                            ) a3
                     LEFT JOIN ( SELECT
                                0 AS pending_t_1,
                            da3.typed,
                            da3.department_code,
                            da3.tenant_id
                           FROM ( SELECT DISTINCT nppst.npsst_id,npl.process_name,
                                    'pacs.004'::text AS typed,
CASE
 WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
 ELSE nppst.department_code
END AS department_code,
                                    nppst.tenant_id
                                   FROM npss_transactions nppst
                                     INNER JOIN ( SELECT distinct z.process_name,z.created_date,
    z.uetr
   FROM npss_trn_process_log z
  WHERE to_date(to_char(z.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) > CURRENT_DATE AND z.process_name::text = 'Receive Pacs004'::text) npl ON npl.uetr::text = nppst.uetr::text
                                  WHERE npl.process_name::text = 'Receive Pacs004'::text  AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) > CURRENT_DATE) da3
                          GROUP BY da3.typed, da3.department_code, da3.tenant_id) d3 ON d3.typed = a3.type
                UNION
                 SELECT a2.sno,
                    a2.type,
                    a2.total,
                    a2.pending_screening,
                    a2.returned,
                    a2.pending_maker,
                    a2.pending_checker,
                    a2.payment_rejected,
                    a2.successfullyposted,
                    a2.pending_returns_maker,
                    a2.pending_returns_checker,
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
                            0 AS pending_screening,
                            0 AS returned,
                            0 AS pending_maker,
                            0 AS pending_checker,
                            0 AS payment_rejected,
                            0 AS successfullyposted,
                            0 AS pending_returns_maker,
                            0 AS pending_returns_checker,
                            to_char(CURRENT_DATE::timestamp with time zone, 'yyyy-mm-dd'::text)::timestamp without time zone AS created_date) a2
                     LEFT JOIN ( SELECT
                                CASE
                                    WHEN da2.typed = 'pacs.007'::text THEN count(da2.npsst_id)
                                    ELSE 0::bigint
                                END AS pending_t_1,
                            da2.typed,
                            da2.department_code,
                            da2.tenant_id
                           FROM ( SELECT DISTINCT nppst.npsst_id,npl.process_name,
                                    'pacs.007'::text AS typed,
CASE
 WHEN nppst.department_code::text = ''::text OR nppst.department_code IS NULL THEN 'DEFAULT'::character varying
 ELSE nppst.department_code
END AS department_code,
                                    nppst.tenant_id
                                   FROM npss_transactions nppst
                                     LEFT JOIN ( SELECT distinct z.process_name,z.created_date,
    z.uetr   FROM npss_trn_process_log z
  WHERE to_date(to_char(z.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE AND z.process_name::text = 'Receive Pacs.007'::text) npl ON npl.uetr::text = nppst.uetr::text
                                  WHERE nppst.process_type = 'IP' AND npl.process_name::text = 'Receive Pacs.007'::text AND nppst.status in ('IP_RCT_REVERSAL_REQ_RECEIVED','IP_RCT_REVERSAL_VLD_FAILED','IP_RCT_RR_RETURN_READY','IP_RCT_REV_REQ_APPROVED','IP_RCT_REV_REQ_REJECTED','IP_RCT_RR_POSTING_FAILURE') AND to_date(to_char(nppst.created_date::date::timestamp with time zone, 'yyyy-mm-dd'::text), 'yyyy-mm-dd'::text) < CURRENT_DATE) da2
                          GROUP BY da2.typed, da2.department_code, da2.tenant_id) d2 ON d2.typed = a2.type
        )) res
  GROUP BY res.type, res.created_date, res.sno, res.department_code, res.pending_t_1, res.tenant_id
  ORDER BY res.sno;