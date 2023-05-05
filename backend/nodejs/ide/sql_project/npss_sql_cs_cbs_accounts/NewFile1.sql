CREATE SEQUENCE IF NOT EXISTS ad_gss_tran.seq_core_nc_cbs_accounts
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
@SPL@
CREATE TABLE IF NOT EXISTS CORE_NC_CBS_ACCOUNTS 
( 
cncca_id integer NOT NULL DEFAULT nextval('seq_core_nc_cbs_accounts'::regclass),
Account_Number character varying(19) COLLATE pg_catalog."default" , 
Alternate_Account_ID character varying(36) COLLATE pg_catalog."default", 
Account_name character varying(256) COLLATE pg_catalog."default", 
Posting_restriction_code character varying(128) COLLATE pg_catalog."default",
Inactive_Marker character(1) COLLATE pg_catalog."default",
Category_code numeric(6), 
Category_Description character varying(256) COLLATE pg_catalog."default",
Currency character varying(3) COLLATE pg_catalog."default",
CUSTOMER_ID numeric(10), 
Account_Title_2 character varying(256) COLLATE pg_catalog."default",
Company_Code character varying(11) COLLATE pg_catalog."default",
Emirates_Code character varying(3) COLLATE pg_catalog."default",
Birthdate numeric(11), 
CountryOfBirth character varying(9) COLLATE pg_catalog."default",
Letter_of_Undertaking character(1) COLLATE pg_catalog."default",    
Customer_Posting_restriction_code character varying(128) COLLATE pg_catalog."default",     
Target_Code numeric(4),         
Sector_Code numeric(4),             
Resident_Flag character(1) COLLATE pg_catalog."default",
Nationality_Country_Code character varying(2) COLLATE pg_catalog."default",
Legal_ID character varying(256) COLLATE pg_catalog."default",
National_ID character varying(20) COLLATE pg_catalog."default",
Industry numeric(4),
Communication_Type character varying(128) COLLATE pg_catalog."default",
Customer_Mobile_Number character varying(128) COLLATE pg_catalog."default",
Account_officer numeric(10),
Curr_rate_segment character varying(20) COLLATE pg_catalog."default",
Customer_Email_ID character varying(145) COLLATE pg_catalog."default",
Trade_License_Flag character varying(5) COLLATE pg_catalog."default",
Trade_License_Number character varying(256) COLLATE pg_catalog."default",
Commercial_Registration_Flag character varying(2) COLLATE pg_catalog."default",
Chamber_Certificate_Number character varying(145) COLLATE pg_catalog."default",
Amiri_Decree_Flag character varying(2) COLLATE pg_catalog."default",
Virtual_Account_Name character varying(100) COLLATE pg_catalog."default",
VA_Currency character varying(3) COLLATE pg_catalog."default",
VA_Type character varying(35) COLLATE pg_catalog."default",
VA_Status character varying(10) COLLATE pg_catalog."default",
Alternate_Account_Type character varying(10) COLLATE pg_catalog."default",
Account_Postring_Type_Description character varying(256) COLLATE pg_catalog."default",
Account_Posting_Restrict_Type character varying(128) COLLATE pg_catalog."default",
Customer_Posting_restriction_Description character varying(256) COLLATE pg_catalog."default",
Customer_Posting_restrict_type character varying(128) COLLATE pg_catalog."default",
productidentifier character varying(128) COLLATE pg_catalog."default",
issuer_type_code character varying(256) COLLATE pg_catalog."default",
economic_activity_code character varying(4) COLLATE pg_catalog."default",
cityofbirth character varying(64) COLLATE pg_catalog."default",
account_closed character varying(32) COLLATE pg_catalog."default",
CREATED_DATE timestamp without time zone,
MODIFIED_DATE timestamp without time zone
) 
TABLESPACE pg_default; 
@SPL@