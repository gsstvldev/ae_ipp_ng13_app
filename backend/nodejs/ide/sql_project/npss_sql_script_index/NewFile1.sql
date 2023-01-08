drop index if exists nt_created_date ;
create index if not exists nt_created_date on npss_transactions (created_date);
@SPL@
drop index if exists nt_uetr ;
create index if not exists nt_uetr on npss_transactions (uetr);
@SPL@
drop index if exists nt_queue ;
create index if not exists nt_queue on npss_transactions (process_status);
@SPL@
drop index if exists nt_status ;
create index if not exists nt_status on npss_transactions (status);
@SPL@
drop index if exists nt_department_code ;
create index if not exists nt_status on npss_transactions (department_code);
@SPL@
drop index if exists nt_channel_id ;
create index if not exists nt_status on npss_transactions (channel_id);
@SPL@
drop index if exists nt_dbtr_iban ;
create index if not exists nt_dbtr_iban on npss_transactions (dbtr_iban);
@SPL@
drop index if exists nt_cdtr_iban ;
create index if not exists nt_cdtr_iban on npss_transactions (cdtr_iban);
@SPL@
drop index if exists nt_processing_system ;
create index if not exists nt_processing_system on npss_transactions (processing_system);
@SPL@
drop index if exists nt_process_type ;
create index if not exists nt_process_type on npss_transactions (process_type);
@SPL@
drop index if exists ntpl_created_date ;
create index if not exists ntpl_created_date on npss_trn_process_log (created_date);
@SPL@
drop index if exists ntpl_status ;
create index if not exists ntpl_status on npss_trn_process_log (status);
@SPL@
drop index if exists ntpl_queue ;
create index if not exists ntpl_queue on npss_trn_process_log (process_status);
@SPL@
drop index if exists ntpl_uetr ;
create index if not exists ntpl_uetr on npss_trn_process_log (uetr);
@SPL@
drop index if exists ntpl_processing_system ;
create index if not exists ntpl_processing_system on npss_trn_process_log (processing_system);
@SPL@
drop index if exists ntpl_process_name ;
create index if not exists ntpl_process_name on npss_trn_process_log (process_name);
@SPL@
drop index if exists ncp_created_date ;
create index if not exists ncp_created_date on npss_customer_proxy (created_date);
@SPL@
drop index if exists nmp_created_date ;
create index if not exists nmp_created_date on npss_merchant_proxy (created_date);
@SPL@