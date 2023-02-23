CREATE TABLE IF NOT EXISTS NPSS_TEMP_STATUS_UPDATE
(
original_uetr character varying(64) COLLATE pg_catalog."default" NOT NULL,
original_txid character varying(64) COLLATE pg_catalog."default" ,
original_endtoendid character varying(64) COLLATE pg_catalog."default" ,
reason_addnl_info character varying(64) COLLATE pg_catalog."default" ,
accpt_datetime character varying(64) COLLATE pg_catalog."default" ,
status_resp_amount character varying(64) COLLATE pg_catalog."default" ,
status_intrbksttlmdt character varying(64) COLLATE pg_catalog."default",
response_code character varying(64) COLLATE pg_catalog."default" ,
additional_info character varying(64) COLLATE pg_catalog."default", 
process_name character varying(64) COLLATE pg_catalog."default" , 
processing_system character varying(64) COLLATE pg_catalog."default" ,
process_type character varying(2) COLLATE pg_catalog."default" ,
process_time timestamp without time zone,
status_accp_date character varying(64) COLLATE pg_catalog."default" , 
rule_code character varying(64) COLLATE pg_catalog."default" ,
prct_id character varying(64) COLLATE pg_catalog."default"
)
TABLESPACE pg_default;
@SPL@