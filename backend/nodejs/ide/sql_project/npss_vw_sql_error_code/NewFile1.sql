CREATE OR REPLACE VIEW  NPSS_VW_SQL_ERROR_CODE AS
	select 
	 ERROR_DESC,
	tenant_id,
	product_code,
	ERROR_CODE,
	status,
	PROCESSING_SYSTEM
	from 
	(
	select
		concat(a.ERROR_CODE, '~', a.ERROR_DESCRIPTION) ERROR_DESC,
		a.tenant_id ,
		a.status ,
		a.product_code,
		a.ERROR_CODE,
		A.PROCESSING_SYSTEM
	from
		core_nc_error_codes A ) V 