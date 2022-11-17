CREATE OR REPLACE VIEW  NPSS_VW_SRC_RTN_MAP AS
select 
distinct SRC_CODE_DESC,
source_system,
source_return_code,
tenant_id,
product_code,
mapping_code,
status
from 
(
select
	concat(a.source_return_code, '~', b.return_description) SRC_CODE_DESC ,
	a.source_system,
	a.source_return_code,
	a.tenant_id ,
	a.status ,
	a.product_code,
	a.mapping_code
from
	core_nc_return_mapping a
inner join core_nc_return_codes b on
	b.return_code = a.source_return_code and b.status='APPROVED') V