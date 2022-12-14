/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27351 
Modified By     : Admin 
Modified Date   : 2022-Dec-14 14:49 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_setup
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_c_btn_enb_disbService} from '../../../custom_widget/npss_c_btn_enb_disb/npss_c_btn_enb_disb.service'
import {npss_cs_change_customer_mobileService} from '../../../custom_widget/npss_cs_change_customer_mobile/npss_cs_change_customer_mobile.service'
import {npss_cs_customer_enrolmentService} from '../../../custom_widget/npss_cs_customer_enrolment/npss_cs_customer_enrolment.service'

@Component({
	selector: 's_customer_setup',
	templateUrl: './s_customer_setup.component.html',
	styleUrls: ['./s_customer_setup.component.css'],
	providers:[torus_cs_show_hideService,npss_c_btn_enb_disbService,npss_cs_change_customer_mobileService,npss_cs_customer_enrolmentService]
})
    
// Start of class 
export class s_customer_setupComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_customer_setup"
	wftpa_id : string = "WFT_NPSS_P_1304_1670997175701_0"
	cg_code : string = "CG_1304_1670995429283"
	key_column : any = {"dtt_1304_1666846082411":"NPSSCP_ID","dtt_1304_1666846862798":"NPSSCA_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "navigation_ui"
	uicgc_2 : string = "customers"
	uicgc_3 : string = "accounts"
	uicgc_4 : string = "customer_detail"
	uicgc_6 : string = "search"
	uicgc_7 : string = "account__detail"
	uicgc_8 : string = "action"
	uicgc_9 : string = "customer_setup_widget"
	uicgc_10 : string = "queue"
	uicgc_11 : string = "sub_navigation_ui"
	key_events : any = {}
	btl_1304_1670997076000 : string = "p_search_layout"
	btl_1304_1670996891370 : string = "p_action_layout"
	btl_1304_1670996775588 : string = "p_main_layout"
	forms : any = ["uicgc_7","uicgc_6","uicgc_4","uicgc_8","uicgc_1","uicgc_11"]
	p_search_layout__e_1670997070392_showpopup : boolean = false
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_entrolment : any = {}
	navigation_ui_unentrolment : any = {}
	navigation_ui_update_personal : any = {}
	navigation_ui_change_mobile_no : any = {}
	navigation_ui_block_unblock : any = {}
	navigation_ui_add_account : any = {}
	navigation_ui_tri_btn1 : any = {}
	navigation_ui_trg_btn2 : any = {}
	customers : any = {}
	accounts : any = {}
	customer_detail : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	account__detail : any = {}
	action : any = {}
	action_back : any = {}
	action_enrol : any = {}
	action_change_mobile_number : any = {}
	action_update_personal_data : any = {}
	action_unenrol : any = {}
	action_add_account : any = {}
	action_set_default : any = {}
	action_block_unblock : any = {}
	action_remove : any = {}
	customer_setup_widget : any = {}
	queue : any = {}
	sub_navigation_ui : any = {}
	sub_navigation_ui_remove : any = {}
	sub_navigation_ui_block_unblocks : any = {}
	sub_navigation_ui_set_default : any = {}
	sub_navigation_ui_add_accounts : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_c_btn_enb_disbService:npss_c_btn_enb_disbService,private npss_cs_change_customer_mobileService:npss_cs_change_customer_mobileService,private npss_cs_customer_enrolmentService:npss_cs_customer_enrolmentService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_1"
		this.navigation_ui.params = {}
		this.navigation_ui.datasource = {}
		this.navigation_ui.context_menu = []
		this.navigation_ui.views = {}
		this.navigation_ui.onChangecomponent = new EventEmitter<any>()
		this.navigation_ui.show = true
		this.navigation_ui.dynamic_param = {}
		this.navigation_ui.f_navigation_ui = {"show":true}
		this.navigation_ui.current_view = "f_navigation_ui"
		
		// "Search" Button of "Navigation UI" component
		this.navigation_ui_search.label_name = "Search"
		this.navigation_ui_search.show = true
		this.navigation_ui_search.disabled = false
		this.navigation_ui_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search-plus"}
		this.navigation_ui_search.dynamic_param = {}
		this.navigation_ui_search.role = []
		this.navigation_ui_search.action = ""
		
		// "Entrolment" Button of "Navigation UI" component
		this.navigation_ui_entrolment.label_name = "Entrolment"
		this.navigation_ui_entrolment.show = true
		this.navigation_ui_entrolment.disabled = false
		this.navigation_ui_entrolment.params = {"icon_only":false,"uicgcc_style":"fa fa-file-archive-o"}
		this.navigation_ui_entrolment.dynamic_param = {}
		this.navigation_ui_entrolment.role = []
		this.navigation_ui_entrolment.action = ""
		
		// "Unentrolment" Button of "Navigation UI" component
		this.navigation_ui_unentrolment.label_name = "Unentrolment"
		this.navigation_ui_unentrolment.show = true
		this.navigation_ui_unentrolment.disabled = false
		this.navigation_ui_unentrolment.params = {"icon_only":false,"uicgcc_style":"fa fa-file-zip-o"}
		this.navigation_ui_unentrolment.dynamic_param = {}
		this.navigation_ui_unentrolment.role = []
		this.navigation_ui_unentrolment.action = ""
		
		// "Update Personal" Button of "Navigation UI" component
		this.navigation_ui_update_personal.label_name = "Update Personal"
		this.navigation_ui_update_personal.show = true
		this.navigation_ui_update_personal.disabled = false
		this.navigation_ui_update_personal.params = {"icon_only":false,"uicgcc_style":"fa fa-user-o"}
		this.navigation_ui_update_personal.dynamic_param = {}
		this.navigation_ui_update_personal.role = []
		this.navigation_ui_update_personal.action = ""
		
		// "Change Mobile No" Button of "Navigation UI" component
		this.navigation_ui_change_mobile_no.label_name = "Change Mobile No"
		this.navigation_ui_change_mobile_no.show = true
		this.navigation_ui_change_mobile_no.disabled = false
		this.navigation_ui_change_mobile_no.params = {"icon_only":false,"uicgcc_style":"fa fa-mobile-phone"}
		this.navigation_ui_change_mobile_no.dynamic_param = {}
		this.navigation_ui_change_mobile_no.role = []
		this.navigation_ui_change_mobile_no.action = ""
		
		// "Block Unblock" Button of "Navigation UI" component
		this.navigation_ui_block_unblock.label_name = "Block Unblock"
		this.navigation_ui_block_unblock.show = true
		this.navigation_ui_block_unblock.disabled = false
		this.navigation_ui_block_unblock.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.navigation_ui_block_unblock.dynamic_param = {}
		this.navigation_ui_block_unblock.role = []
		this.navigation_ui_block_unblock.action = ""
		
		// "Add Account" Button of "Navigation UI" component
		this.navigation_ui_add_account.label_name = "Add Account"
		this.navigation_ui_add_account.show = true
		this.navigation_ui_add_account.disabled = false
		this.navigation_ui_add_account.params = {"icon_only":false,"uicgcc_style":"fa fa-plus"}
		this.navigation_ui_add_account.dynamic_param = {}
		this.navigation_ui_add_account.role = []
		this.navigation_ui_add_account.action = ""
		
		// "Tri Btn1" Button of "Navigation UI" component
		this.navigation_ui_tri_btn1.label_name = "Tri Btn1"
		this.navigation_ui_tri_btn1.show = true
		this.navigation_ui_tri_btn1.disabled = false
		this.navigation_ui_tri_btn1.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_tri_btn1.dynamic_param = {}
		this.navigation_ui_tri_btn1.role = []
		this.navigation_ui_tri_btn1.action = ""
		
		// "Trg Btn2" Button of "Navigation UI" component
		this.navigation_ui_trg_btn2.label_name = "Trg Btn2"
		this.navigation_ui_trg_btn2.show = true
		this.navigation_ui_trg_btn2.disabled = false
		this.navigation_ui_trg_btn2.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_trg_btn2.dynamic_param = {}
		this.navigation_ui_trg_btn2.role = []
		this.navigation_ui_trg_btn2.action = ""
	
		// Component level properties - "Customers" 
		this.customers.uictrl_code = "datatable"
		this.customers.uicgc_desc = "Customers"
		this.customers.uicgc_code = "uicgc_2"
		this.customers.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.customers.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		this.customers.context_menu = []
		this.customers.views = {}
		this.customers.onChangecomponent = new EventEmitter<any>()
		this.customers.show = true
		this.customers.dynamic_param = {}
	
		// Component level properties - "Accounts" 
		this.accounts.uictrl_code = "datatable"
		this.accounts.uicgc_desc = "Accounts"
		this.accounts.uicgc_code = "uicgc_3"
		this.accounts.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.accounts.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		this.accounts.context_menu = []
		this.accounts.views = {}
		this.accounts.onChangecomponent = new EventEmitter<any>()
		this.accounts.show = true
		this.accounts.dynamic_param = {}
	
		// Component level properties - "Customer Detail" 
		this.customer_detail.uictrl_code = "dynamic_ui"
		this.customer_detail.uicgc_desc = "Customer Detail"
		this.customer_detail.uicgc_code = "uicgc_4"
		this.customer_detail.params = {}
		this.customer_detail.datasource = {}
		this.customer_detail.context_menu = []
		this.customer_detail.views = {"first":"DTT_1304_1666846082411","is_tab_mode":"N","dtt_1304_1666846082411":{"0":[{"dttv_id":"NPSS Customer Proxy UI","tab_order":0,"tab_name":"","uicgc_description":"Customer Detail","role_description":"default","dtt_description":"NPSS Customer Proxy"}]}}
		this.customer_detail.onChangecomponent = new EventEmitter<any>()
		this.customer_detail.show = true
		this.customer_detail.dynamic_param = {}
		this.customer_detail.f_npss_customer_proxy_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.customer_detail.form_name = "f_npss_customer_proxy_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_6"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1666846082411","is_tab_mode":"N","dtt_1304_1666846082411":{"0":[{"dttv_id":"NPSS customer SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Customer Proxy"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_customer_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_customer_srch"
		
		// "Clear" Button of "Search" component
		this.search_clear.label_name = "Clear"
		this.search_clear.show = true
		this.search_clear.disabled = false
		this.search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.search_clear.dynamic_param = {}
		this.search_clear.role = []
		this.search_clear.action = ""
		
		// "Search" Button of "Search" component
		this.search_search.label_name = "Search"
		this.search_search.show = true
		this.search_search.disabled = false
		this.search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.search_search.dynamic_param = {}
		this.search_search.role = []
		this.search_search.action = ""
	
		// Component level properties - "Account  Detail" 
		this.account__detail.uictrl_code = "dynamic_ui"
		this.account__detail.uicgc_desc = "Account  Detail"
		this.account__detail.uicgc_code = "uicgc_7"
		this.account__detail.params = {}
		this.account__detail.datasource = {}
		this.account__detail.context_menu = []
		this.account__detail.views = {"first":"DTT_1304_1666846862798","is_tab_mode":"N","dtt_1304_1666846862798":{"0":[{"dttv_id":"NPSS Customer Account UI","tab_order":0,"tab_name":"","uicgc_description":"Account  Detail","role_description":"default","dtt_description":"NPSS Customer Accounts"}]}}
		this.account__detail.onChangecomponent = new EventEmitter<any>()
		this.account__detail.show = true
		this.account__detail.dynamic_param = {}
		this.account__detail.f_npss_customer_account_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.account__detail.form_name = "f_npss_customer_account_ui"
	
		// Component level properties - "Action" 
		this.action.uictrl_code = "dynamic_ui"
		this.action.uicgc_desc = "Action"
		this.action.uicgc_code = "uicgc_8"
		this.action.params = {}
		this.action.datasource = {}
		this.action.context_menu = []
		this.action.views = {}
		this.action.onChangecomponent = new EventEmitter<any>()
		this.action.show = true
		this.action.dynamic_param = {}
		this.action.f_action = {"show":true}
		this.action.current_view = "f_action"
		
		// "Back" Button of "Action" component
		this.action_back.label_name = "Back"
		this.action_back.show = true
		this.action_back.disabled = false
		this.action_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.action_back.dynamic_param = {}
		this.action_back.role = []
		this.action_back.action = ""
		
		// "Enrol" Button of "Action" component
		this.action_enrol.label_name = "Enrol"
		this.action_enrol.show = true
		this.action_enrol.disabled = false
		this.action_enrol.params = {"icon_only":false,"uicgcc_style":"fa fa-file-word-o"}
		this.action_enrol.dynamic_param = {}
		this.action_enrol.role = []
		this.action_enrol.action = ""
		
		// "Change Mobile Number" Button of "Action" component
		this.action_change_mobile_number.label_name = "Change Mobile Number"
		this.action_change_mobile_number.show = true
		this.action_change_mobile_number.disabled = false
		this.action_change_mobile_number.params = {"icon_only":false,"uicgcc_style":"fa fa-mobile-phone"}
		this.action_change_mobile_number.dynamic_param = {}
		this.action_change_mobile_number.role = []
		this.action_change_mobile_number.action = ""
		
		// "Update Personal Data" Button of "Action" component
		this.action_update_personal_data.label_name = "Update Personal Data"
		this.action_update_personal_data.show = true
		this.action_update_personal_data.disabled = false
		this.action_update_personal_data.params = {"icon_only":false,"uicgcc_style":"fa fa-stack-exchange"}
		this.action_update_personal_data.dynamic_param = {}
		this.action_update_personal_data.role = []
		this.action_update_personal_data.action = ""
		
		// "Unenrol" Button of "Action" component
		this.action_unenrol.label_name = "Unenrol"
		this.action_unenrol.show = true
		this.action_unenrol.disabled = false
		this.action_unenrol.params = {"icon_only":false,"uicgcc_style":"fa fa-file-text-o"}
		this.action_unenrol.dynamic_param = {}
		this.action_unenrol.role = []
		this.action_unenrol.action = ""
		
		// "Add Account" Button of "Action" component
		this.action_add_account.label_name = "Add Account"
		this.action_add_account.show = true
		this.action_add_account.disabled = false
		this.action_add_account.params = {"icon_only":false,"uicgcc_style":"fa fa-bank"}
		this.action_add_account.dynamic_param = {}
		this.action_add_account.role = []
		this.action_add_account.action = ""
		
		// "Set Default" Button of "Action" component
		this.action_set_default.label_name = "Set Default"
		this.action_set_default.show = true
		this.action_set_default.disabled = false
		this.action_set_default.params = {"icon_only":false,"uicgcc_style":"fa fa-external-link-square"}
		this.action_set_default.dynamic_param = {}
		this.action_set_default.role = []
		this.action_set_default.action = ""
		
		// "Block Unblock" Button of "Action" component
		this.action_block_unblock.label_name = "Block Unblock"
		this.action_block_unblock.show = true
		this.action_block_unblock.disabled = false
		this.action_block_unblock.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.action_block_unblock.dynamic_param = {}
		this.action_block_unblock.role = []
		this.action_block_unblock.action = ""
		
		// "Remove" Button of "Action" component
		this.action_remove.label_name = "Remove"
		this.action_remove.show = true
		this.action_remove.disabled = false
		this.action_remove.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.action_remove.dynamic_param = {}
		this.action_remove.role = []
		this.action_remove.action = ""
	
		// Component level properties - "Customer Setup Widget" 
		this.customer_setup_widget.uictrl_code = "custom_widget"
		this.customer_setup_widget.uicgc_desc = "Customer Setup Widget"
		this.customer_setup_widget.uicgc_code = "uicgc_9"
		this.customer_setup_widget.params = {}
		this.customer_setup_widget.datasource = {}
		this.customer_setup_widget.context_menu = []
		this.customer_setup_widget.views = {}
		this.customer_setup_widget.onChangecomponent = new EventEmitter<any>()
		this.customer_setup_widget.show = true
		this.customer_setup_widget.dynamic_param = {}
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_10"
		this.queue.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.queue.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671004022989","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Sub Navigation UI" 
		this.sub_navigation_ui.uictrl_code = "dynamic_ui"
		this.sub_navigation_ui.uicgc_desc = "Sub Navigation UI"
		this.sub_navigation_ui.uicgc_code = "uicgc_11"
		this.sub_navigation_ui.params = {}
		this.sub_navigation_ui.datasource = {}
		this.sub_navigation_ui.context_menu = []
		this.sub_navigation_ui.views = {}
		this.sub_navigation_ui.onChangecomponent = new EventEmitter<any>()
		this.sub_navigation_ui.show = true
		this.sub_navigation_ui.dynamic_param = {}
		this.sub_navigation_ui.f_sub_navigation_ui = {"show":true}
		this.sub_navigation_ui.current_view = "f_sub_navigation_ui"
		
		// "Remove" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_remove.label_name = "Remove"
		this.sub_navigation_ui_remove.show = true
		this.sub_navigation_ui_remove.disabled = false
		this.sub_navigation_ui_remove.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.sub_navigation_ui_remove.dynamic_param = {}
		this.sub_navigation_ui_remove.role = []
		this.sub_navigation_ui_remove.action = ""
		
		// "Block Unblocks" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_block_unblocks.label_name = "Block Unblocks"
		this.sub_navigation_ui_block_unblocks.show = true
		this.sub_navigation_ui_block_unblocks.disabled = false
		this.sub_navigation_ui_block_unblocks.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.sub_navigation_ui_block_unblocks.dynamic_param = {}
		this.sub_navigation_ui_block_unblocks.role = []
		this.sub_navigation_ui_block_unblocks.action = ""
		
		// "Set Default" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_set_default.label_name = "Set Default"
		this.sub_navigation_ui_set_default.show = true
		this.sub_navigation_ui_set_default.disabled = false
		this.sub_navigation_ui_set_default.params = {"icon_only":false,"uicgcc_style":"fa fa-external-link-square"}
		this.sub_navigation_ui_set_default.dynamic_param = {}
		this.sub_navigation_ui_set_default.role = []
		this.sub_navigation_ui_set_default.action = ""
		
		// "Add Accounts" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_add_accounts.label_name = "Add Accounts"
		this.sub_navigation_ui_add_accounts.show = true
		this.sub_navigation_ui_add_accounts.disabled = false
		this.sub_navigation_ui_add_accounts.params = {"icon_only":false,"uicgcc_style":"fa fa-bank"}
		this.sub_navigation_ui_add_accounts.dynamic_param = {}
		this.sub_navigation_ui_add_accounts.role = []
		this.sub_navigation_ui_add_accounts.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__e_1670996967025()
		this.page_load__e_1670996990729()
		this.page_load__e_1670996997915()
		this.page_load__he_for_update_personal_data()
		this.page_load__e_1670997015088()
		this.page_load__he_for_un_entrol()
		this.page_load__de_for_cmn()
		this.page_load__de_for_up()
		this.page_load__e_1671000721377()
		this.page_load__e_1671000731789()
		this.page_load__e_1671000834042()
		this.page_load__he_for_add_account()
		this.page_load__he_for_remove()
		this.page_load__he_for_set_default()
		this.page_load__he_for_block_unblk()
		this.page_load__he_for_remove_btn()
		this.page_load__he_for_set_default_btn()
		this.page_load__he_for_block_unblock()
		this.page_load__he_for_nav_block()
		this.page_load__he_for_nav_add_acc()
	}

	//Handler for INTERNAL event of "e 1670996967025"
	e_1670996967025__internal(parent_event_result){
		this.e_1670996967025__e_1671004088500(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1671004088500"
	e_1671004088500__internal(parent_event_result){
		this.e_1671004088500__tbc_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__e_1670997070392()
		this.navigation_ui_search__clear_ui_for_n_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_queue()
		this.search_search__close_popp()
		this.search_search__e_1671013039898()
		this.search_search__e_1671013056752()
	}

	//Handler for INTERNAL event of "ssp for queue"
	ssp_for_queue__internal(parent_event_result){
		this.ssp_for_queue__queue_brfq(parent_event_result)
	}

	//Handler for INTERNAL event of "queue brfq"
	queue_brfq__internal(parent_event_result){
		this.queue_brfq__queue_sfr(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "customers"
	customers__selection_changed(){
		this.customers__svmfor_cpl()
		this.customers__e_1670998482087()
		this.customers__tbc_for_cpl()
		this.customers__e_1671023511080__account__detail()
		this.customers__e_1671023523592__account__detail()
	}

	//Handler for INTERNAL event of "svmfor cpl"
	svmfor_cpl__internal(parent_event_result){
		this.svmfor_cpl__e_1671005066084(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1671005066084"
	e_1671005066084__internal(parent_event_result){
		this.e_1671005066084__e_1671005084059(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1671005084059"
	e_1671005084059__internal(parent_event_result){
		this.e_1671005084059__e_1671005095983(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_for_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg btn2"
	navigation_ui_trg_btn2__action_button_click(){
		this.navigation_ui_trg_btn2__bt_for_caui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui tri btn1"
	navigation_ui_tri_btn1__action_button_click(){
		this.navigation_ui_tri_btn1__trg_btn1_for_bt()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui entrolment"
	navigation_ui_entrolment__action_button_click(){
		this.navigation_ui_entrolment__sp_for_unen()
		this.navigation_ui_entrolment__e_1671001614444()
		this.navigation_ui_entrolment__cu_for_cust_dtl()
		this.navigation_ui_entrolment__cu_for_account_dtl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui change mobile no"
	navigation_ui_change_mobile_no__action_button_click(){
		this.navigation_ui_change_mobile_no__sp_for_cmn()
		this.navigation_ui_change_mobile_no__e_1670997921388()
		this.navigation_ui_change_mobile_no__e_1671005307349()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unentrolment"
	navigation_ui_unentrolment__action_button_click(){
		this.navigation_ui_unentrolment__e_1670997993994()
		this.navigation_ui_unentrolment__e_1670998007874()
		this.navigation_ui_unentrolment__e_1671005294412()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update personal"
	navigation_ui_update_personal__action_button_click(){
		this.navigation_ui_update_personal__sp_for_upd()
		this.navigation_ui_update_personal__e_1670998079496()
		this.navigation_ui_update_personal__e_1671005301816()
	}

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__selection_changed(){
		this.accounts__ssr_for_cal()
		this.accounts__tbc_for_cal()
		this.accounts__e_1671000432773()
		this.accounts__e_1671000444316()
		this.accounts__e_1671000455235()
		this.accounts__e_1671000475768()
		this.accounts__svm_for_accounts()
		this.accounts__ee_for_add_count()
		this.accounts__ee_for_remove()
		this.accounts__ee_for_set_default()
		this.accounts__ee_for_block_unblk()
		this.accounts__ee_for_nav_block()
		this.accounts__ee_for_nav_add_ac()
	}

	//Handler for INTERNAL event of "svm for accounts"
	svm_for_accounts__internal(parent_event_result){
		this.svm_for_accounts__e_1671013095568(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "action change mobile number"
	action_change_mobile_number__action_button_click(){
		this.action_change_mobile_number__e_1671001415349()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action back"
	action_back__action_button_click(){
		this.action_back__rs_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action enrol"
	action_enrol__action_button_click(){
		this.action_enrol__e_1671002947221()
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_for_queue()
	}

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__internal(parent_event_result){
		this.svm_for_queue__sh_ide_connected_in_queue_ssp(parent_event_result)
	}

	//Handler for INTERNAL event of "sh ide connected in queue ssp"
	sh_ide_connected_in_queue_ssp__internal(parent_event_result){
		this.sh_ide_connected_in_queue_ssp__ssp_for_queue_to_cl(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for queue to cl"
	ssp_for_queue_to_cl__internal(parent_event_result){
		this.ssp_for_queue_to_cl__brfq_for_queue_to_customers(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue to customers"
	brfq_for_queue_to_customers__internal(parent_event_result){
		this.brfq_for_queue_to_customers__sfr_for_customers(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add accounts"
	sub_navigation_ui_add_accounts__action_button_click(){
		this.sub_navigation_ui_add_accounts__se_for_add_bank_account()
		this.sub_navigation_ui_add_accounts__sp_for_add_account()
		this.sub_navigation_ui_add_accounts__cc_for_enab_desable_for_add_account()
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove"
	sub_navigation_ui_remove__action_button_click(){
		this.sub_navigation_ui_remove__sp_for_remove()
		this.sub_navigation_ui_remove__cc_for_enable_disable_for_remove()
		this.sub_navigation_ui_remove__se_for_remove()
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui set default"
	sub_navigation_ui_set_default__action_button_click(){
		this.sub_navigation_ui_set_default__sp_for_set_default()
		this.sub_navigation_ui_set_default__cc_for_enable_disable_for_set_default()
		this.sub_navigation_ui_set_default__se_for_set_default()
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block unblocks"
	sub_navigation_ui_block_unblocks__action_button_click(){
		this.sub_navigation_ui_block_unblocks__sp_for_block_unblock()
		this.sub_navigation_ui_block_unblocks__cc_for_enable_disable_for_block_unblk()
		this.sub_navigation_ui_block_unblocks__se_for_block_unblk()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui add account"
	navigation_ui_add_account__action_button_click(){
		this.navigation_ui_add_account__sp_for_nav_add_acc()
		this.navigation_ui_add_account__cc_for_nav_add_acc()
		this.navigation_ui_add_account__se_for_nav_add_acc()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock"
	navigation_ui_block_unblock__action_button_click(){
		this.navigation_ui_block_unblock__sp_for_nav_block()
		this.navigation_ui_block_unblock__cc_for_nav_block()
		this.navigation_ui_block_unblock__se_for_nav_block()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__e_1670996967025() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670996967025"
		let event_params={"caller_name":"page_load__e_1670996967025","event_desc":"E_1670996967025","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="e_1670996967025__e_1671004088500,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1670996990729() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_change_mobile_number"
		let parent_source_id=""
		let event_code="e_1670996990729"
		let event_params={"caller_name":"page_load__e_1670996990729","event_desc":"E_1670996990729","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1670996997915() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_enrol"
		let parent_source_id=""
		let event_code="e_1670996997915"
		let event_params={"caller_name":"page_load__e_1670996997915","event_desc":"E_1670996997915","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_update_personal_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_update_personal_data"
		let parent_source_id=""
		let event_code="e_1670997004020"
		let event_params={"caller_name":"page_load__he_for_update_personal_data","event_desc":"HE for Update personal data","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1670997015088() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_unenrol"
		let parent_source_id=""
		let event_code="e_1670997015088"
		let event_params={"caller_name":"page_load__e_1670997015088","event_desc":"E_1670997015088","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_un_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_unentrolment"
		let parent_source_id=""
		let event_code="e_1670997270095"
		let event_params={"caller_name":"page_load__he_for_un_entrol","event_desc":"HE for Un Entrol","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_cmn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_change_mobile_no"
		let parent_source_id=""
		let event_code="e_1670997298132"
		let event_params={"caller_name":"page_load__de_for_cmn","event_desc":"DE for CMN","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_up() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_update_personal"
		let parent_source_id=""
		let event_code="e_1670997328412"
		let event_params={"caller_name":"page_load__de_for_up","event_desc":"DE for UP","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1671000721377() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_trg_btn2"
		let parent_source_id=""
		let event_code="e_1671000721377"
		let event_params={"caller_name":"page_load__e_1671000721377","event_desc":"E_1671000721377","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1671000731789() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_tri_btn1"
		let parent_source_id=""
		let event_code="e_1671000731789"
		let event_params={"caller_name":"page_load__e_1671000731789","event_desc":"E_1671000731789","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1671000834042() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_add_account"
		let parent_source_id=""
		let event_code="e_1671000834042"
		let event_params={"caller_name":"page_load__e_1671000834042","event_desc":"E_1671000834042","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sub_navigation_ui_add_accounts"
		let parent_source_id=""
		let event_code="e_1671021047547"
		let event_params={"caller_name":"page_load__he_for_add_account","event_desc":"HE for add account","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sub_navigation_ui_remove"
		let parent_source_id=""
		let event_code="e_1671021691214"
		let event_params={"caller_name":"page_load__he_for_remove","event_desc":"HE for Remove","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_set_default() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sub_navigation_ui_set_default"
		let parent_source_id=""
		let event_code="e_1671021704802"
		let event_params={"caller_name":"page_load__he_for_set_default","event_desc":"HE for set default","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_block_unblk() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sub_navigation_ui_block_unblocks"
		let parent_source_id=""
		let event_code="e_1671021715640"
		let event_params={"caller_name":"page_load__he_for_block_unblk","event_desc":"HE for block unblk","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_remove_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_remove"
		let parent_source_id=""
		let event_code="e_1671025520034"
		let event_params={"caller_name":"page_load__he_for_remove_btn","event_desc":"HE for Remove btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_set_default_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_set_default"
		let parent_source_id=""
		let event_code="e_1671025574875"
		let event_params={"caller_name":"page_load__he_for_set_default_btn","event_desc":"HE for set default btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_block_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_block_unblock"
		let parent_source_id=""
		let event_code="e_1671025627076"
		let event_params={"caller_name":"page_load__he_for_block_unblock","event_desc":"HE for Block unblock","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_block_unblock"
		let parent_source_id=""
		let event_code="e_1671028314499"
		let event_params={"caller_name":"page_load__he_for_nav_block","event_desc":"HE for nav block","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_nav_add_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_add_account"
		let parent_source_id=""
		let event_code="e_1671028323552"
		let event_params={"caller_name":"page_load__he_for_nav_add_acc","event_desc":"HE for nav add acc","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1670996967025"
	e_1670996967025__e_1671004088500(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1670996967025"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1671004088500"
		let event_params={"caller_name":"e_1670996967025__e_1671004088500","event_desc":"E_1671004088500","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="e_1671004088500__tbc_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1671004088500"
	e_1671004088500__tbc_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1671004088500"
		let destn_id="search_search"
		let parent_source_id="e_1670996967025"
		let event_code="e_1671004110108"
		let event_params={"caller_name":"e_1671004088500__tbc_for_search","event_desc":"TBC for search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="trigger_button_click"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.trigger_button_click(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__e_1670997070392() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997070392"
		let event_params={"caller_name":"navigation_ui_search__e_1670997070392","event_desc":"E_1670997070392","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__e_1670997070392","selector":"p_search_layout","profile_code":"BTL_1304_1670997076000","window_title":"Search","window_height":400,"window_width":"600px","window_close_icon":"Y","eventdes":"e_1670997070392","eventcode":"E_1670997070392"}}
		let handler_code="show_profile_as_popup"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile_as_popup(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__clear_ui_for_n_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1671010826128"
		let event_params={"caller_name":"navigation_ui_search__clear_ui_for_n_search","event_desc":"Clear UI for N Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1670997344004"
		let event_params={"caller_name":"search_search__ssp_for_queue","event_desc":"SSP for queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_queue__queue_brfq,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__close_popp() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997504690"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__close_popp","event_desc":"close popp","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="close_popup"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.close_popup(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__e_1671013039898() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="accounts"
		let parent_source_id=""
		let event_code="e_1671013039898"
		let event_params={"caller_name":"search_search__e_1671013039898","event_desc":"E_1671013039898","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__e_1671013056752() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="customers"
		let parent_source_id=""
		let event_code="e_1671013056752"
		let event_params={"caller_name":"search_search__e_1671013056752","event_desc":"E_1671013056752","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue"
	ssp_for_queue__queue_brfq(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1671004153046"
		let event_params={"caller_name":"ssp_for_queue__queue_brfq","event_desc":"Queue BRFQ","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="queue_brfq__queue_sfr,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671004022989","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "queue brfq"
	queue_brfq__queue_sfr(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="queue_brfq"
		let destn_id="queue"
		let parent_source_id="ssp_for_queue"
		let event_code="e_1671004181293"
		let event_params={"caller_name":"queue_brfq__queue_sfr","event_desc":"Queue SFR","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671004022989","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customers"
	customers__svmfor_cpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="customers"
		let parent_source_id=""
		let event_code="e_1670997376364"
		let event_params={"caller_name":"customers__svmfor_cpl","event_desc":"SVMfor CPL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svmfor_cpl__e_1671005066084,"
		let event_data={"customers":{"e_1670997376364":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1670997376364","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"BANKUSERID","level":"MI_LEVEL","name":"MI_LEVEL_BANKUSERID","setd3name":"BANKUSERID"},{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customers"
	customers__e_1670998482087() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="customer_detail"
		let parent_source_id=""
		let event_code="e_1670998482087"
		let event_params={"caller_name":"customers__e_1670998482087","event_desc":"E_1670998482087","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{}}
		let handler_code="set_selected_row"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.set_selected_row(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customers"
	customers__tbc_for_cpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="navigation_ui_tri_btn1"
		let parent_source_id=""
		let event_code="e_1671000312847"
		let event_params={"caller_name":"customers__tbc_for_cpl","event_desc":"TBC for CPL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{}}
		let handler_code="trigger_button_click"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.trigger_button_click(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customers"
	customers__e_1671023511080__account__detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="npss_customer_account_ui_memory9"
		let parent_source_id=""
		let event_code="e_1671023511080"
		let event_params={"destn_comp_id":"account__detail","destn_ctrl_id":"memory9","caller_name":"customers__e_1671023511080__account__detail","event_desc":"E_1671023511080","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{"parentcolumn":"NPSSCP_ID","need_selecteditem":"N"}}
		let handler_code="filter_combo_binding"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.filter_combo_binding(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customers"
	customers__e_1671023523592__account__detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="npss_customer_account_ui_memory10"
		let parent_source_id=""
		let event_code="e_1671023523592"
		let event_params={"destn_comp_id":"account__detail","destn_ctrl_id":"memory10","caller_name":"customers__e_1671023523592__account__detail","event_desc":"E_1671023523592","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{"parentcolumn":"NPSSCP_ID","need_selecteditem":"N"}}
		let handler_code="filter_combo_binding"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.filter_combo_binding(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svmfor cpl"
	svmfor_cpl__e_1671005066084(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svmfor_cpl"
		let destn_id=""
		let parent_source_id="customers"
		let event_code="e_1671005066084"
		let event_params={"caller_name":"svmfor_cpl__e_1671005066084","event_desc":"E_1671005066084","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="e_1671005066084__e_1671005084059,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1671005066084"
	e_1671005066084__e_1671005084059(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1671005066084"
		let destn_id="accounts"
		let parent_source_id="svmfor_cpl"
		let event_code="e_1671005084059"
		let event_params={"caller_name":"e_1671005066084__e_1671005084059","event_desc":"E_1671005084059","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="e_1671005084059__e_1671005095983,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1671005084059"
	e_1671005084059__e_1671005095983(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1671005084059"
		let destn_id="accounts"
		let parent_source_id="e_1671005066084"
		let event_code="e_1671005095983"
		let event_params={"caller_name":"e_1671005084059__e_1671005095983","event_desc":"E_1671005095983","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1670997498922"
		let event_params={"caller_name":"search_clear__cui_for_search","event_desc":"CUI for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg btn2"
	navigation_ui_trg_btn2__bt_for_caui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_btn2"
		let destn_id="account__detail"
		let parent_source_id=""
		let event_code="e_1670997526769"
		let event_params={"caller_name":"navigation_ui_trg_btn2__bt_for_caui","event_desc":"BT for CAUI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_btn2","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
		let handler_code="bind_tran"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui tri btn1"
	navigation_ui_tri_btn1__trg_btn1_for_bt() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_tri_btn1"
		let destn_id="customer_detail"
		let parent_source_id=""
		let event_code="e_1670997537441"
		let event_params={"caller_name":"navigation_ui_tri_btn1__trg_btn1_for_bt","event_desc":"Trg btn1 for BT","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_tri_btn1","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
		let handler_code="bind_tran"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui entrolment"
	navigation_ui_entrolment__sp_for_unen() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_entrolment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997548906"
		let event_params={"caller_name":"navigation_ui_entrolment__sp_for_unen","event_desc":"SP for UNEN","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_entrolment","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui entrolment"
	navigation_ui_entrolment__e_1671001614444() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_entrolment"
		let destn_id="action_enrol"
		let parent_source_id=""
		let event_code="e_1671001614444"
		let event_params={"caller_name":"navigation_ui_entrolment__e_1671001614444","event_desc":"E_1671001614444","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_entrolment","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui entrolment"
	navigation_ui_entrolment__cu_for_cust_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_entrolment"
		let destn_id="customer_detail"
		let parent_source_id=""
		let event_code="e_1671014985065"
		let event_params={"caller_name":"navigation_ui_entrolment__cu_for_cust_dtl","event_desc":"CU for cust dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_entrolment","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui entrolment"
	navigation_ui_entrolment__cu_for_account_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_entrolment"
		let destn_id="account__detail"
		let parent_source_id=""
		let event_code="e_1671015020416"
		let event_params={"caller_name":"navigation_ui_entrolment__cu_for_account_dtl","event_desc":"CU for Account Dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_entrolment","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui change mobile no"
	navigation_ui_change_mobile_no__sp_for_cmn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_change_mobile_no"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997904133"
		let event_params={"caller_name":"navigation_ui_change_mobile_no__sp_for_cmn","event_desc":"SP for CMN","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_change_mobile_no","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui change mobile no"
	navigation_ui_change_mobile_no__e_1670997921388() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_change_mobile_no"
		let destn_id="action_change_mobile_number"
		let parent_source_id=""
		let event_code="e_1670997921388"
		let event_params={"caller_name":"navigation_ui_change_mobile_no__e_1670997921388","event_desc":"E_1670997921388","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_change_mobile_no","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui change mobile no"
	navigation_ui_change_mobile_no__e_1671005307349() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_change_mobile_no"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671005307349"
		let event_params={"caller_name":"navigation_ui_change_mobile_no__e_1671005307349","event_desc":"E_1671005307349","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_change_mobile_no","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unentrolment"
	navigation_ui_unentrolment__e_1670997993994() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unentrolment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997993994"
		let event_params={"caller_name":"navigation_ui_unentrolment__e_1670997993994","event_desc":"E_1670997993994","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unentrolment","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unentrolment"
	navigation_ui_unentrolment__e_1670998007874() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unentrolment"
		let destn_id="action_unenrol"
		let parent_source_id=""
		let event_code="e_1670998007874"
		let event_params={"caller_name":"navigation_ui_unentrolment__e_1670998007874","event_desc":"E_1670998007874","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unentrolment","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unentrolment"
	navigation_ui_unentrolment__e_1671005294412() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unentrolment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671005294412"
		let event_params={"caller_name":"navigation_ui_unentrolment__e_1671005294412","event_desc":"E_1671005294412","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unentrolment","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update personal"
	navigation_ui_update_personal__sp_for_upd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_personal"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670998031738"
		let event_params={"caller_name":"navigation_ui_update_personal__sp_for_upd","event_desc":"SP for UPD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_personal","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update personal"
	navigation_ui_update_personal__e_1670998079496() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_personal"
		let destn_id="action_update_personal_data"
		let parent_source_id=""
		let event_code="e_1670998079496"
		let event_params={"caller_name":"navigation_ui_update_personal__e_1670998079496","event_desc":"E_1670998079496","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_personal","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update personal"
	navigation_ui_update_personal__e_1671005301816() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_personal"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671005301816"
		let event_params={"caller_name":"navigation_ui_update_personal__e_1671005301816","event_desc":"E_1671005301816","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_personal","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ssr_for_cal() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="account__detail"
		let parent_source_id=""
		let event_code="e_1670998471679"
		let event_params={"caller_name":"accounts__ssr_for_cal","event_desc":"SSR for CAL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{}}
		let handler_code="set_selected_row"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.set_selected_row(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__tbc_for_cal() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_trg_btn2"
		let parent_source_id=""
		let event_code="e_1671000331028"
		let event_params={"caller_name":"accounts__tbc_for_cal","event_desc":"TBC for CAL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{}}
		let handler_code="trigger_button_click"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.trigger_button_click(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__e_1671000432773() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_change_mobile_no"
		let parent_source_id=""
		let event_code="e_1671000432773"
		let event_params={"caller_name":"accounts__e_1671000432773","event_desc":"E_1671000432773","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__e_1671000444316() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_entrolment"
		let parent_source_id=""
		let event_code="e_1671000444316"
		let event_params={"caller_name":"accounts__e_1671000444316","event_desc":"E_1671000444316","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__e_1671000455235() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_update_personal"
		let parent_source_id=""
		let event_code="e_1671000455235"
		let event_params={"caller_name":"accounts__e_1671000455235","event_desc":"E_1671000455235","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__e_1671000475768() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_unentrolment"
		let parent_source_id=""
		let event_code="e_1671000475768"
		let event_params={"caller_name":"accounts__e_1671000475768","event_desc":"E_1671000475768","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__svm_for_accounts() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="accounts"
		let parent_source_id=""
		let event_code="e_1671012456913"
		let event_params={"caller_name":"accounts__svm_for_accounts","event_desc":"SVM for Accounts","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_accounts__e_1671013095568,"
		let event_data={"accounts":{"e_1671012456913":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1671012456913","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_add_count() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="sub_navigation_ui_add_accounts"
		let parent_source_id=""
		let event_code="e_1671021149360"
		let event_params={"caller_name":"accounts__ee_for_add_count","event_desc":"EE for Add count","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="sub_navigation_ui_remove"
		let parent_source_id=""
		let event_code="e_1671021804376"
		let event_params={"caller_name":"accounts__ee_for_remove","event_desc":"EE for remove","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_set_default() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="sub_navigation_ui_set_default"
		let parent_source_id=""
		let event_code="e_1671021820611"
		let event_params={"caller_name":"accounts__ee_for_set_default","event_desc":"EE for set default","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_block_unblk() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="sub_navigation_ui_block_unblocks"
		let parent_source_id=""
		let event_code="e_1671021836620"
		let event_params={"caller_name":"accounts__ee_for_block_unblk","event_desc":"EE for block unblk","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_block_unblock"
		let parent_source_id=""
		let event_code="e_1671028378551"
		let event_params={"caller_name":"accounts__ee_for_nav_block","event_desc":"EE for nav block","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_nav_add_ac() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_add_account"
		let parent_source_id=""
		let event_code="e_1671028389125"
		let event_params={"caller_name":"accounts__ee_for_nav_add_ac","event_desc":"EE for nav add ac","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for accounts"
	svm_for_accounts__e_1671013095568(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_accounts"
		let destn_id=""
		let parent_source_id="accounts"
		let event_code="e_1671013095568"
		let event_params={"caller_name":"svm_for_accounts__e_1671013095568","event_desc":"E_1671013095568","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action change mobile number"
	action_change_mobile_number__e_1671001415349() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_change_mobile_number"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671001415349"
		let event_params={"caller_name":"action_change_mobile_number__e_1671001415349","event_desc":"E_1671001415349","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_change_mobile_number","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_change_customer_mobileService.fn_npss_cs_change_customer_mobile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action back"
	action_back__rs_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671001779516"
		let event_params={"caller_name":"action_back__rs_for_back","event_desc":"RS for back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_back","raiseparam":{}}
		let handler_code="refresh_screen"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.refresh_screen(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action enrol"
	action_enrol__e_1671002947221() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_enrol"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671002947221"
		let event_params={"caller_name":"action_enrol__e_1671002947221","event_desc":"E_1671002947221","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_enrol","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_customer_enrolmentService.fn_npss_cs_customer_enrolment(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1671004187469"
		let event_params={"caller_name":"queue__svm_for_queue","event_desc":"SVM for QUEUE","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_queue__sh_ide_connected_in_queue_ssp,"
		let event_data={"queue":{"e_1671004187469":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_10","event_code":"E_1671004187469","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671004022989","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE  inner join CORE_Q_STATUS_ROLES QR on   T.STATUS = QR.PROCESS_QUEUE_STATUS   and T.PROCESS_STATUS = QR.QUEUE_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__sh_ide_connected_in_queue_ssp(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1671004537813"
		let event_params={"caller_name":"svm_for_queue__sh_ide_connected_in_queue_ssp","event_desc":"SH ide connected in queue ssp","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="sh_ide_connected_in_queue_ssp__ssp_for_queue_to_cl,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "sh ide connected in queue ssp"
	sh_ide_connected_in_queue_ssp__ssp_for_queue_to_cl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="sh_ide_connected_in_queue_ssp"
		let destn_id="search"
		let parent_source_id="svm_for_queue"
		let event_code="e_1671004558050"
		let event_params={"caller_name":"sh_ide_connected_in_queue_ssp__ssp_for_queue_to_cl","event_desc":"SSP for Queue to CL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_queue_to_cl__brfq_for_queue_to_customers,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue to cl"
	ssp_for_queue_to_cl__brfq_for_queue_to_customers(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue_to_cl"
		let destn_id="customers"
		let parent_source_id="sh_ide_connected_in_queue_ssp"
		let event_code="e_1671004587452"
		let event_params={"caller_name":"ssp_for_queue_to_cl__brfq_for_queue_to_customers","event_desc":"BRFQ for Queue to Customers","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue_to_customers__sfr_for_customers,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue to customers"
	brfq_for_queue_to_customers__sfr_for_customers(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue_to_customers"
		let destn_id="customers"
		let parent_source_id="ssp_for_queue_to_cl"
		let event_code="e_1671004604522"
		let event_params={"caller_name":"brfq_for_queue_to_customers__sfr_for_customers","event_desc":"SFR for customers","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank Code","target_column":"BANK_CODE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add accounts"
	sub_navigation_ui_add_accounts__se_for_add_bank_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_add_accounts"
		let destn_id="action_add_account"
		let parent_source_id=""
		let event_code="e_1671021103777"
		let event_params={"caller_name":"sub_navigation_ui_add_accounts__se_for_add_bank_account","event_desc":"SE for add bank account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_add_accounts","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add accounts"
	sub_navigation_ui_add_accounts__sp_for_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_add_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021192217"
		let event_params={"caller_name":"sub_navigation_ui_add_accounts__sp_for_add_account","event_desc":"SP for add account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_add_accounts","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add accounts"
	sub_navigation_ui_add_accounts__cc_for_enab_desable_for_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_add_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021226214"
		let event_params={"caller_name":"sub_navigation_ui_add_accounts__cc_for_enab_desable_for_add_account","event_desc":"CC for Enab desable for add account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_add_accounts","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove"
	sub_navigation_ui_remove__sp_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_remove"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021426529"
		let event_params={"caller_name":"sub_navigation_ui_remove__sp_for_remove","event_desc":"SP for remove","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_remove","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove"
	sub_navigation_ui_remove__cc_for_enable_disable_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_remove"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021559328"
		let event_params={"caller_name":"sub_navigation_ui_remove__cc_for_enable_disable_for_remove","event_desc":"CC for enable disable for remove","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_remove","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove"
	sub_navigation_ui_remove__se_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_remove"
		let destn_id="action_remove"
		let parent_source_id=""
		let event_code="e_1671022140827"
		let event_params={"caller_name":"sub_navigation_ui_remove__se_for_remove","event_desc":"SE for remove","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_remove","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui set default"
	sub_navigation_ui_set_default__sp_for_set_default() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_set_default"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021436559"
		let event_params={"caller_name":"sub_navigation_ui_set_default__sp_for_set_default","event_desc":"SP for set default","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_set_default","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui set default"
	sub_navigation_ui_set_default__cc_for_enable_disable_for_set_default() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_set_default"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021598364"
		let event_params={"caller_name":"sub_navigation_ui_set_default__cc_for_enable_disable_for_set_default","event_desc":"CC for enable disable for set default","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_set_default","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui set default"
	sub_navigation_ui_set_default__se_for_set_default() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_set_default"
		let destn_id="action_set_default"
		let parent_source_id=""
		let event_code="e_1671022187443"
		let event_params={"caller_name":"sub_navigation_ui_set_default__se_for_set_default","event_desc":"SE for set default","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_set_default","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block unblocks"
	sub_navigation_ui_block_unblocks__sp_for_block_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_block_unblocks"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021446968"
		let event_params={"caller_name":"sub_navigation_ui_block_unblocks__sp_for_block_unblock","event_desc":"SP for Block unblock","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_block_unblocks","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block unblocks"
	sub_navigation_ui_block_unblocks__cc_for_enable_disable_for_block_unblk() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_block_unblocks"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021624019"
		let event_params={"caller_name":"sub_navigation_ui_block_unblocks__cc_for_enable_disable_for_block_unblk","event_desc":"CC for enable disable for Block unblk","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_block_unblocks","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block unblocks"
	sub_navigation_ui_block_unblocks__se_for_block_unblk() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_block_unblocks"
		let destn_id="action_block_unblock"
		let parent_source_id=""
		let event_code="e_1671022112556"
		let event_params={"caller_name":"sub_navigation_ui_block_unblocks__se_for_block_unblk","event_desc":"SE for block unblk","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_block_unblocks","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui add account"
	navigation_ui_add_account__sp_for_nav_add_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_add_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028131769"
		let event_params={"caller_name":"navigation_ui_add_account__sp_for_nav_add_acc","event_desc":"SP for nav Add acc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_add_account","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui add account"
	navigation_ui_add_account__cc_for_nav_add_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_add_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028251011"
		let event_params={"caller_name":"navigation_ui_add_account__cc_for_nav_add_acc","event_desc":"CC for nav add acc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_add_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui add account"
	navigation_ui_add_account__se_for_nav_add_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_add_account"
		let destn_id="action_add_account"
		let parent_source_id=""
		let event_code="e_1671028440057"
		let event_params={"caller_name":"navigation_ui_add_account__se_for_nav_add_acc","event_desc":"SE for nav add acc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_add_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock"
	navigation_ui_block_unblock__sp_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_unblock"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028145631"
		let event_params={"caller_name":"navigation_ui_block_unblock__sp_for_nav_block","event_desc":"SP for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_unblock","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock"
	navigation_ui_block_unblock__cc_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_unblock"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028240797"
		let event_params={"caller_name":"navigation_ui_block_unblock__cc_for_nav_block","event_desc":"CC for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_unblock","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_btn_enb_disbService.fn_npss_c_btn_enb_disb(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock"
	navigation_ui_block_unblock__se_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_unblock"
		let destn_id="action_block_unblock"
		let parent_source_id=""
		let event_code="e_1671028489443"
		let event_params={"caller_name":"navigation_ui_block_unblock__se_for_nav_block","event_desc":"SE for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_unblock","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

 
	customProject_customValidation(projectName,validation,callback) {
		if(this[projectName+'Service']) {
			this[projectName+'Service'].fn_customValidation(projectName,this,validation,callback)
		}
	}
	closePopup(){
		setTimeout(()=>{
			this.handler.close_popup('','','','','',this,'','','','');
		},100)
	}
}

// End of class 
