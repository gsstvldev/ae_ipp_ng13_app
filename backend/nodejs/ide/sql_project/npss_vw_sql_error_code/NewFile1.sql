CREATE OR REPLACE VIEW  NPSS_VW_SQL_ERROR_CODE AS
	select 
	 ERROR_DESC,
	tenant_id,
	product_code,
	ERROR_CODE,
	status,
	PROCESSING_SYSTEM,
	error_category,
	process_status
	from ( select
		concat(a.ERROR_CODE, '_', a.ERROR_DESCRIPTION) ERROR_DESC,
		a.tenant_id ,
		a.status ,
		a.product_code,
		a.ERROR_CODE,
		A.PROCESSING_SYSTEM,
		a.error_category,
		a.process_status
	from
		core_nc_error_codes A ) V