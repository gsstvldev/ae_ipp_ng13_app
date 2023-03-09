create or replace view npss_vw_rpt_status as
select
	distinct STATUS
from
	(
	select
		A.STATUS,
		A.DTT_CODE,
		A.DT_CODE,
		A.PROCESS_TYPE
	from
		NPSS_TRANSACTIONS A) V