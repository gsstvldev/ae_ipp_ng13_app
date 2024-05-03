CREATE OR REPLACE VIEW vw_user_access_matrix AS
 SELECT v.app_code,
    v.app_description,
    v.user_name,
    v.appr_id,
    v.role_description,
    v.module_name,
    v.menu_group_name,
    v.menu_item_name
   FROM ( SELECT a.app_id,
            a.app_code,
            a.app_description,
            u.login_name AS user_name,
            ar.appr_id,
            ar.role_description,
            l5.uimd AS module_name,
            l5.uimgcd AS menu_group_name,
            l5.mi ->> 'UIMI_DESCRIPTION'::text AS menu_item_name
           FROM ( SELECT l4.appr_id,
                    l4.uim,
                    l4.uimd,
                    l4.mg ->> 'UIMG_CODE'::text AS uimgc,
                    l4.mg ->> 'UIMG_DESCRIPTION'::text AS uimgcd,
                    json_array_elements((l4.mg ->> 'MENUITEMS'::text)::json) AS mi
                   FROM ( SELECT s.appr_id,
                            s.f ->> 'UIM_CODE'::text AS uim,
                            s.f ->> 'UIM_DESCRIPTION'::text AS uimd,
                            json_array_elements((s.f ->> 'MENUGROUPS'::text)::json) AS mg
                           FROM ( SELECT v_1.appr_id,
                                    json_array_elements(v_1.a) AS f
                                   FROM ( SELECT t.appr_id,
    t.modules::json AS a
   FROM ( SELECT l1.appr_id,
      l1.menu_json ->> 'MODULES'::text AS modules
     FROM ( SELECT wf_menu_info.appr_id,
        wf_menu_info.menu_json::json AS menu_json
       FROM dep_tran.wf_menu_info) l1) t) v_1) s) l4) l5
             JOIN clt_tran.app_roles ar ON l5.appr_id = ar.appr_id
             JOIN clt_tran.applications a ON a.app_id = ar.app_id
             JOIN clt_tran.app_user_roles aur ON aur.appr_id = ar.appr_id
             JOIN clt_tran.app_users au ON au.appu_id = aur.appu_id
             JOIN clt_tran.users u ON u.u_id = au.appu_id) v