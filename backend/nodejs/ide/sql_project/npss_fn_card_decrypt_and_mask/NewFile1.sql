CREATE OR REPLACE FUNCTION ad_gss_tran.fn_card_decrypt_and_mask(
	s text,
	k text)
    RETURNS text
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
  DECLARE  
  dec_val text;
  reg text;
  BEGIN 
        dec_val = pgp_sym_decrypt(decode(s, 'base64'), k, 'compress-algo=1, cipher-algo=aes256' );
        select regexp_replace(dec_val, '(\d{6})(\d{6})(\d{4})',E'\\1xxxxxx\\3') into reg;
        raise notice 'regexp_replace valuee %',reg ;  
        RETURN reg; END; 
$BODY$;
CREATE OR REPLACE FUNCTION ad_gss_tran.fn_card_decrypt_and_mask_rpt(
	s text)
    RETURNS text
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
  DECLARE  
  dec_val text;
  reg text;
  BEGIN 
        dec_val = pgp_sym_decrypt(decode(s, 'base64'), 'Pc!Nps$Key7', 'compress-algo=1, cipher-algo=aes256' );
        select regexp_replace(dec_val, '(\d{6})(\d{6})(\d{4})',E'\\1xxxxxx\\3') into reg;
        raise notice 'regexp_replace valuee %',reg ;  
        RETURN reg; END; 
$BODY$;