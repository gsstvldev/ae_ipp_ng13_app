CREATE TABLE IF NOT EXISTS CORE_NC_CUST_SPL_RATE
(
CIF_NUMBER character varying(10) COLLATE pg_catalog."default" not null,
BUY_RATE decimal(16,8),
SELL_RATE decimal(16,8),
CURRENCY_CODE character varying(3) COLLATE pg_catalog."default" not null,
BUY_MARGIN decimal(16,8),
SELL_MARGIN decimal(16,8),
TRAN_STAGE character varying(10) COLLATE pg_catalog."default",
STATUS character(1) COLLATE pg_catalog."default",
ENTRY_DATE timestamp without time zone
)
TABLESPACE pg_default;
@SPL@
CREATE TABLE IF NOT EXISTS CORE_NC_CUST_SPL_RATE_BACKUP
(
CIF_NUMBER character varying(10) COLLATE pg_catalog."default" not null,
BUY_RATE decimal(16,8),
SELL_RATE decimal(16,8),
CURRENCY_CODE character varying(3) COLLATE pg_catalog."default" not null,
BUY_MARGIN decimal(16,8),
SELL_MARGIN decimal(16,8),
TRAN_STAGE character varying(10) COLLATE pg_catalog."default",
STATUS character(1) COLLATE pg_catalog."default",
ENTRY_DATE timestamp without time zone
)
TABLESPACE pg_default;
@SPL@