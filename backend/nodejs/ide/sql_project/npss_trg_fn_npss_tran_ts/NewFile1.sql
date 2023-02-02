CREATE OR REPLACE FUNCTION ad_gss_tran.trg_fn_npss_transactions_ts()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$  DECLARE  BEGIN IF TG_OP = 'INSERT' THEN  NEW.version_no = 1; 
insert
	into
	ad_gss_tran.transaction_set
( parent_ts_id,
	group_id,
	trn_id,
	dt_code,
	dtt_code,
	process_status,
	status,
	prct_id,
	created_by,
	created_date,
	version_no,
	system_id,
	dt_description,
	dtt_description,
	created_by_name,
	system_name,
	tenant_id,
	app_id,
	created_clientip,
	created_tz,
	created_tz_offset,
	created_by_sessionid,
	routingkey,
	created_date_utc)
select
	0,
	NEW.dtt_code || '_' || NEW.npsst_id,
	NEW.npsst_id,
	NEW.dt_code,
	NEW.dtt_code,
	NEW.process_status,
	NEW.status,
	NEW.prct_id,
	NEW.created_by,
	NEW.created_date,
	NEW.version_no,
	NEW.system_id,
	NEW.dt_description,
	NEW.dtt_description,
	NEW.created_by_name,
	NEW.system_name,
	NEW.tenant_id,
	NEW.app_id,
	NEW.created_clientip,
	NEW.created_tz,
	NEW.created_tz_offset,
	NEW.created_by_sessionid,
	NEW.routingkey,
	NEW.created_date_utc
from (select NEW.*)row;end if;return new;end;$function$;
@SPL@
DROP TRIGGER IF EXISTS htg_npss_transactions_ts ON ad_gss_tran.npss_transactions;
@SPL@
create trigger htg_npss_transactions_ts before
insert
    or
update
    on
    ad_gss_tran.npss_transactions for each row execute procedure trg_fn_npss_transactions_ts();
@SPL@
