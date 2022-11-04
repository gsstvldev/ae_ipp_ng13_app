drop index if exists ntpl_created_date ;
create index if not exists ntpl_created_date on npss_trn_process_log (created_date);
@SPL@
drop index if exists nt_created_date ;
create index if not exists nt_created_date on npss_transactions (created_date);
@SPL@
drop index if exists ncp_created_date ;
create index if not exists ncp_created_date on npss_customer_proxy (created_date);
@SPL@
drop index if exists nmp_created_date ;
create index if not exists nmp_created_date on npss_merchant_proxy (created_date);
@SPL@