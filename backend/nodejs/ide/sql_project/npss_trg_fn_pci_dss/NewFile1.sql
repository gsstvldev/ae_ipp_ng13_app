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
  reg text;
  BEGIN 
        dec_val = pgp_sym_decrypt(decode(s, 'base64'), k, 'compress-algo=1, cipher-algo=aes256' );
        select regexp_replace(dec_val, '(?<!^.?)[[:digit:]](?!.?$)', 'x','g') into reg;
        raise notice 'regexp_replace valuee %',reg ;  
        RETURN reg; END; $function$;
@SPL@
CREATE OR REPLACE FUNCTION ad_gss_tran.fn_npss_transactions_pci()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
  DECLARE  BEGIN
  if new.cr_acct_identification <> old.cr_acct_identification then
        NEW.cr_acct_identification = fn_pcidss_encrypt(NEW.cr_acct_identification);
		end if;
		if new.dbtr_acct_no <> old.dbtr_acct_no then
        NEW.dbtr_acct_no = fn_pcidss_encrypt(NEW.dbtr_acct_no);
		end if; RETURN NEW; END; $function$;
@SPL@
DROP TRIGGER IF EXISTS a_trg_npss_transactions_pci ON ad_gss_tran.npss_transactions;
@SPL@
create trigger a_trg_npss_transactions_pci before
insert
    or
update
    on
    ad_gss_tran.npss_transactions for each row execute procedure fn_npss_transactions_pci();
@SPL@