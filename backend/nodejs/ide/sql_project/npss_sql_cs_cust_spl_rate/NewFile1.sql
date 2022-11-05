CREATE TABLE IF NOT EXISTS CORE_NC_CUST_SPL_RATE
(
UNIT_ID character varying(10) COLLATE pg_catalog."default" not null,
CIF_NUMBER character varying(10) COLLATE pg_catalog."default" not null,
CCY_1 character varying(3) COLLATE pg_catalog."default" not null,
CCY_2 character varying(3) COLLATE pg_catalog."default" not null,
START_DATE timestamp without time zone not null,
BUY_RATE numeric(16,8) not null,
SELL_RATE numeric(16,8) not null,
BUY_SPREAD numeric(16,8),
SELL_SPREAD numeric(16,8),
END_DATE timestamp without time zone,
STATUS character(1) COLLATE pg_catalog."default" not null,
ENTRY_DATE timestamp without time zone not null
)
TABLESPACE pg_default;
@SPL@