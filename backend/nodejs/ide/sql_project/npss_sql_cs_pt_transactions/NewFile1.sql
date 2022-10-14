CREATE TABLE IF NOT EXISTS ad_gss_tran.npss_edge_pt_transactions
(
    trnid bigint NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    roottrnid bigint NOT NULL,
    parenttrnid bigint NOT NULL,
    msgid character varying(35) COLLATE pg_catalog."default" NOT NULL,
    processtype character varying(16) COLLATE pg_catalog."default" NOT NULL,
    process character varying(512) COLLATE pg_catalog."default" NOT NULL,
    processdata character varying(4000) COLLATE pg_catalog."default" NOT NULL,
    channel_id character varying(64) COLLATE pg_catalog."default",
    channel_refno character varying(64) COLLATE pg_catalog."default",
    channel_userid character varying(64) COLLATE pg_catalog."default",
    product character varying(64) COLLATE pg_catalog."default",
    sub_product character varying(64) COLLATE pg_catalog."default",
    transaction_code character varying(64) COLLATE pg_catalog."default",
    lastaccesseddate timestamp without time zone NOT NULL,
    lastaccesseddateutc timestamp with time zone NOT NULL,    
    CONSTRAINT npss_edge_pt_transactions_pkey PRIMARY KEY (trnid)
)