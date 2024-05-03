CREATE OR REPLACE VIEW NPSS_VW_SORT_CODE AS
SELECT CR_SORT_CODE,BANK_NAME,CR_BANK_NAME,BRANCH_NAME, COUNTRY_CODE,tenant_id
  FROM (SELECT b.SORT_CODE as CR_SORT_CODE,
               concat(concat(concat(a.bank_name, ' ('),
                             concat(b.branch_name, '- ')),
                      concat(b.sort_code, ')')) as BANK_NAME,
               b.branch_name,
               a.country_code,
               a.tenant_id,
               a.bank_name as cr_bank_name
          FROM CORE_MEMBER_BANKS a
         INNER JOIN CORE_MEMBER_BRANCHES b on b.mbk_id = a.mbk_id) v