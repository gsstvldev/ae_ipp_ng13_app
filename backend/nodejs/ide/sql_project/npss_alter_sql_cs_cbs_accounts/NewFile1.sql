alter table CORE_NC_CBS_ACCOUNTS add COLUMN IF NOT EXISTS Virtual_Account_Name character varying(100);
alter table CORE_NC_CBS_ACCOUNTS add COLUMN IF NOT EXISTS VA_Currency character varying(3);
alter table CORE_NC_CBS_ACCOUNTS add COLUMN IF NOT EXISTS VA_Type character varying(35);
alter table CORE_NC_CBS_ACCOUNTS add COLUMN IF NOT EXISTS VA_Status character varying(10);
alter table CORE_NC_CBS_ACCOUNTS Drop Column IF EXISTS Account_type;
@SPL@