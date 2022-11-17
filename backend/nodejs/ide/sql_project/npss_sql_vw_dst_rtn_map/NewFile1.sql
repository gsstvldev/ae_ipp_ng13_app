CREATE OR REPLACE VIEW  NPSS_VW_DST_RTN_MAP AS
select 
distinct DST_CODE_DESC,
source_system,
source_return_code,
destination_system,
destination_return_code,
tenant_id,
product_code,
mapping_code,
status
from 
(
select
	concat(a.destination_return_code, '~', b.return_description) DST_CODE_DESC ,
	a.source_system,
	a.source_return_code,
	a.tenant_id ,
	a.status ,
	a.product_code,
	a.mapping_code,
	a.destination_return_code,
	a.destination_system
from
	core_nc_return_mapping a
inner join core_nc_return_codes b on
	b.return_code = a.destination_return_code AND b.status = 'APPROVED') v