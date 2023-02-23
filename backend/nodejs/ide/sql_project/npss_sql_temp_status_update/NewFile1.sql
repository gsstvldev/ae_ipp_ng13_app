CREATE TABLE IF NOT EXISTS NPSS_TEMP_STATUS_UPDATE
(
npsstsu_id numeric(9) NOT NULL,
original_uetr character varying(64) COLLATE pg_catalog."default" NOT NULL,
original_txid character varying(64) COLLATE pg_catalog."default" ,
original_endtoendid character varying(64) COLLATE pg_catalog."default" ,
reason_addnl_info character varying(64) COLLATE pg_catalog."default" ,
accpt_datetime character varying(64) COLLATE pg_catalog."default" ,
status_resp_amount character varying(64) COLLATE pg_catalog."default" ,
status_intrbksttlmdt character varying(64) COLLATE pg_catalog."default",
response_code character varying(64) COLLATE pg_catalog."default" ,
additional_info character varying(64) COLLATE pg_catalog."default" 
)
TABLESPACE pg_default;
@SPL@