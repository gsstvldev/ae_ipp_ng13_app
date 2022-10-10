CREATE OR REPLACE VIEW NPSS_VW_PARTICIPANT_CODE AS
SELECT SYSTEM_NAME, S_CODE, S_DESCRIPTION, S_ID, SORT_CODE,TENANT_ID
  FROM (SELECT concat(concat(a.S_DESCRIPTION, ' - ('),
                      
                      concat(A.sort_code, ')')) as SYSTEM_NAME,
               A.SORT_CODE,
               A.S_CODE,
               A.S_DESCRIPTION,
               A.TENANT_ID,
               A.S_ID
          FROM CORE_SYSTEM_EXTN A) V