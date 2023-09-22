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
create index if not exists nt_department_code on npss_transactions (department_code);
@SPL@
create index if not exists nt_channel_id on npss_transactions (channel_id);
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
create index if not exists cbsa_customerID on core_nc_cbs_accounts (Customer_ID,account_number);
@SPL@
create index if not exists cbsa_inactive_marker on core_nc_cbs_accounts (inactive_marker);
@SPL@
create index if not exists cbsa_posting_restriction_code on core_nc_cbs_accounts (posting_restriction_code);
@SPL@
create index if not exists cbsa_customer_posting_restriction_code on core_nc_cbs_accounts (customer_posting_restriction_code);
@SPL@
create index if not exists cbsa_productidentifier on core_nc_cbs_accounts (productidentifier);
@SPL@
create index if not exists ntpl_tran_ref_id on npss_trn_process_log (tran_Ref_id);
@SPL@
create index if not exists nt_process_group on npss_transactions (process_group);
@SPL@
create index if not exists nt_prct_id on npss_transactions (prct_id);
@SPL@
create index if not exists ntpl_npsstrrd_refno on npss_trn_process_log (npsstrrd_refno);
@SPL@
create index if not exists ntpl_process_ref_no on npss_trn_process_log (process_ref_no);
@SPL@
create index if not exists ntpl_paymentid on npss_trn_process_log (paymentid);
@SPL@
create index if not exists cbsa_national_id on core_nc_cbs_accounts (national_id);
@SPL@
create index if not exists cbsa_resident_flag on core_nc_cbs_accounts (resident_flag);
@SPL@
create index if not exists cnea_source_economic_activity_code on core_nc_eco_actvty_mapping (source_economic_activity_code);
@SPL@
create index if not exists nt_cpr_cr_flag on npss_transactions (cpr_cr_flag);
@SPL@
create index if not exists nt_cpr_dw_flag on npss_transactions (cpr_dw_flag);
@SPL@
create index if not exists ntpl_customerid on npss_trn_process_log (customerid);
@SPL@
create index if not exists ntpl_process_type on npss_trn_process_log (process_type);
@SPL@
create index if not exists cbsa_sector_code on core_nc_cbs_accounts (sector_code);
@SPL@
create index if not exists cbsa_target_code on core_nc_cbs_accounts (target_code);
@SPL@
create index if not exists cbsa_issuer_type_code on core_nc_cbs_accounts (issuer_type_code);
@SPL@
create index if not exists cbsa_industry on core_nc_cbs_accounts (industry);
@SPL@
create index if not exists cbsa_category_code on core_nc_cbs_accounts (category_code);
@SPL@
create index if not exists cncc_sector_id on core_nc_cust_classif (sector_id);
@SPL@
create index if not exists cncc_target_id on core_nc_cust_classif (target_id);
@SPL@
create index if not exists cnim_t24_reg_body on core_nc_issuer_cd_mapping (t24_reg_body);
@SPL@
create index if not exists ccbs_cbs_category_id on core_nc_cbscate_cbacctyp (cbs_category_id);
@SPL@