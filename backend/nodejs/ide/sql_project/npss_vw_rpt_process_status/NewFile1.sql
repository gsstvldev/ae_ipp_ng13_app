DROP VIEW IF EXISTS NPSS_VW_RPT_PROCESS_STATUS;
@SPL@
CREATE OR REPLACE VIEW NPSS_VW_RPT_PROCESS_STATUS AS
select
	distinct API_Success_Failure
from
	(
	select
		distinct nt.process_status,
		nt.tenant_id,
		case
			when nt.process_status not in ('RCTRejected') then 'Success'
			when nt.process_status = 'RCTRejected' then 'Failure'
		end as API_Success_Failure
	from
		npss_transactions nt) vm