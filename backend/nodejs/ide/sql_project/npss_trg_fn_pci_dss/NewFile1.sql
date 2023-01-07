CREATE OR REPLACE FUNCTION ad_gss_tran.fn_pcidss_encrypt(s text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
  DECLARE  
  enc_val text;
  BEGIN 
        enc_val = encode(pgp_sym_encrypt(s, 'Pc!Nps$Key7', 'compress-algo=1, cipher-algo=aes256' ), 'base64');
        RETURN enc_val; END; $function$;
@SPL@
CREATE OR REPLACE FUNCTION ad_gss_tran.fn_pcidss_decrypt(s text, k text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
  DECLARE  
  dec_val text;
  BEGIN 
        dec_val = pgp_sym_decrypt(decode(s, 'base64'), k, 'compress-algo=1, cipher-algo=aes256' );
        RETURN dec_val; END; $function$;
@SPL@
CREATE OR REPLACE FUNCTION ad_gss_tran.fn_card_decrypt_and_mask(s text, k text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
  DECLARE  
  dec_val text;
  BEGIN 
        dec_val = pgp_sym_decrypt(decode(s, 'base64'), k, 'compress-algo=1, cipher-algo=aes256' );
        RETURN regexp_replace(dec_val, '(?<!^.?)[[:digit:]](?!.?$)', 'x','g'); END; $function$;
@SPL@
