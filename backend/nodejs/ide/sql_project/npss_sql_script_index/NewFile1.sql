create index if not exists nt_created_date on npss_transactions (created_date);
@SPL@
create index if not exists nt_tenant_id on npss_transactions (tenant_id);
@SPL@
create index if not exists nt_uetr on npss_transactions (uetr);
@SPL@
create index if not exists nt_queue on npss_transactions (process_status);
@SPL@
create index if not exists nt_status on npss_transactions (status);
@SPL@
create index if not exists nt_status on npss_transactions (department_code);
@SPL@
create index if not exists nt_status on npss_transactions (channel_id);
@SPL@
create index if not exists nt_dbtr_iban on npss_transactions (dbtr_iban);
@SPL@
create index if not exists nt_cdtr_iban on npss_transactions (cdtr_iban);
@SPL@
create index if not exists nt_processing_system on npss_transactions (processing_system);
@SPL@
create index if not exists nt_process_type on npss_transactions (process_type);
@SPL@
create index if not exists ntpl_created_date on npss_trn_process_log (created_date);
@SPL@
create index if not exists ntpl_status on npss_trn_process_log (status);
@SPL@
create index if not exists ntpl_queue on npss_trn_process_log (process_status);
@SPL@
create index if not exists ntpl_uetr on npss_trn_process_log (uetr);
@SPL@
create index if not exists ntpl_processing_system on npss_trn_process_log (processing_system);
@SPL@
create index if not exists ntpl_process_name on npss_trn_process_log (process_name);
@SPL@
create index if not exists ncp_created_date on npss_customer_proxy (created_date);
@SPL@
create index if not exists nmp_created_date on npss_merchant_proxy (created_date);
@SPL@
create index if not exists cbsa_alternate_account_id on core_nc_cbs_accounts (alternate_account_id);
@SPL@
create index if not exists cbsa_account_closed on core_nc_cbs_accounts (account_closed);
@SPL@
create index if not exists cbsa_inactive_marker on core_nc_cbs_accounts (inactive_marker);
@SPL@
create index if not exists cbsa_posting_restriction_code on core_nc_cbs_accounts (posting_restriction_code);
@SPL@
create index if not exists cbsa_customer_posting_restriction_code on core_nc_cbs_accounts (customer_posting_restriction_code);
@SPL@
create index if not exists cbsa_productidentifier on core_nc_cbs_accounts (productidentifier);
@SPL@