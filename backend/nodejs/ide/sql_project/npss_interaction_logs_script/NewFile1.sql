-- Table: ad_gss_tran.npss_interaction_logs

-- DROP TABLE IF EXISTS ad_gss_tran.npss_interaction_logs;

CREATE TABLE IF NOT EXISTS ad_gss_tran.npss_interaction_logs
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    key character varying(100) COLLATE pg_catalog."default",
    value character varying(3000) COLLATE pg_catalog."default",
    dtt_code character varying(100) COLLATE pg_catalog."default",
    process character varying(100) COLLATE pg_catalog."default",
    process_date timestamp without time zone,
    source_queue character varying(100) COLLATE pg_catalog."default",
    destination_queue character varying(100) COLLATE pg_catalog."default",
    action character varying(100) COLLATE pg_catalog."default",
    additional_data character varying(3000) COLLATE pg_catalog."default",
    processor_id character varying(100) COLLATE pg_catalog."default",
    state character varying(500) COLLATE pg_catalog."default",
	 channel_id character varying(32) COLLATE pg_catalog."default",
	 channel_refno character varying(128) COLLATE pg_catalog."default",
	 channel_userid character varying(64) COLLATE pg_catalog."default",
	 ipp_response_refno character varying(64) COLLATE pg_catalog."default",
	 npss_response_refno character varying(64) COLLATE pg_catalog."default",
	 product character varying(32) COLLATE pg_catalog."default",
	 sub_product character varying(32) COLLATE pg_catalog."default",
	transaction_code character varying(32) COLLATE pg_catalog."default",
    CONSTRAINT npss_interaction_logs_pkey PRIMARY KEY (id)
)