/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28542 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 6:23 AM 
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
import {npss_cs_add_customer_bank_accountsService} from '../../../custom_widget/npss_cs_add_customer_bank_accounts/npss_cs_add_customer_bank_accounts.service'
import {npss_cs_blockunblock_customer_bankaccountService} from '../../../custom_widget/npss_cs_blockunblock_customer_bankaccount/npss_cs_blockunblock_customer_bankaccount.service'
import {npss_cs_update_customer_personal_dataService} from '../../../custom_widget/npss_cs_update_customer_personal_data/npss_cs_update_customer_personal_data.service'
import {npss_cs_unenrolment_customerService} from '../../../custom_widget/npss_cs_unenrolment_customer/npss_cs_unenrolment_customer.service'
import {npss_cs_remove_customer_bank_accountsService} from '../../../custom_widget/npss_cs_remove_customer_bank_accounts/npss_cs_remove_customer_bank_accounts.service'

@Component({
	selector: 's_customer_setup',
	templateUrl: './s_customer_setup.component.html',
	styleUrls: ['./s_customer_setup.component.css'],
	providers:[torus_cs_show_hideService,npss_c_btn_enb_disbService,npss_cs_change_customer_mobileService,npss_cs_customer_enrolmentService,npss_cs_add_customer_bank_accountsService,npss_cs_blockunblock_customer_bankaccountService,npss_cs_update_customer_personal_dataService,npss_cs_unenrolment_customerService,npss_cs_remove_customer_bank_accountsService]
})
    
// Start of class 
export class s_customer_setupComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_customer_setup"
	wftpa_id : string = "WFT_NPSS_P_1304_1670997175701_0"
	cg_code : string = "CG_1304_1670995429283"
	key_column : any = {"dtt_1304_1666847230281":"NPSSSMTPL_ID","dtt_1304_1666846082411":"NPSSCP_ID","dtt_1304_1666846862798":"NPSSCA_ID"}
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
	uicgc_12 : string = "history_detail"
	uicgc_13 : string = "process_log_ui"
	uicgc_14 : string = "single_back_ui"
	uicgc_15 : string = "request_ui"
	uicgc_16 : string = "response_ui"
	key_events : any = {}
	btl_1304_1671514785051 : string = "p_view_req_and_res_profile"
	btl_1304_1671514726628 : string = "p_view_history_layout"
	btl_1304_1670997076000 : string = "p_search_layout"
	btl_1304_1670996891370 : string = "p_action_layout"
	btl_1304_1670996775588 : string = "p_main_layout"
	forms : any = ["uicgc_15","uicgc_7","uicgc_6","uicgc_16","uicgc_4","uicgc_14","uicgc_13","uicgc_8","uicgc_1","uicgc_11"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_enrolment : any = {}
	navigation_ui_unenrolment : any = {}
	navigation_ui_update_personal : any = {}
	navigation_ui_change_mobile_no : any = {}
	navigation_ui_add_account : any = {}
	navigation_ui_block_unblock_account : any = {}
	navigation_ui_remove_account : any = {}
	navigation_ui_tri_btn1 : any = {}
	navigation_ui_trg_btn2 : any = {}
	navigation_ui_view_process_log : any = {}
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
	action_add_bank_account : any = {}
	action_block_unblock_bank_account : any = {}
	action_remove_bank_account : any = {}
	customer_setup_widget : any = {}
	queue : any = {}
	sub_navigation_ui : any = {}
	sub_navigation_ui_block_unblocks : any = {}
	sub_navigation_ui_set_default : any = {}
	sub_navigation_ui_add_bank_accountss : any = {}
	history_detail : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_req_and_res : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	request_ui : any = {}
	response_ui : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_c_btn_enb_disbService:npss_c_btn_enb_disbService,private npss_cs_change_customer_mobileService:npss_cs_change_customer_mobileService,private npss_cs_customer_enrolmentService:npss_cs_customer_enrolmentService,private npss_cs_add_customer_bank_accountsService:npss_cs_add_customer_bank_accountsService,private npss_cs_blockunblock_customer_bankaccountService:npss_cs_blockunblock_customer_bankaccountService,private npss_cs_update_customer_personal_dataService:npss_cs_update_customer_personal_dataService,private npss_cs_unenrolment_customerService:npss_cs_unenrolment_customerService,private npss_cs_remove_customer_bank_accountsService:npss_cs_remove_customer_bank_accountsService) {
    
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
		
		// "Enrolment" Button of "Navigation UI" component
		this.navigation_ui_enrolment.label_name = "Enrolment"
		this.navigation_ui_enrolment.show = true
		this.navigation_ui_enrolment.disabled = false
		this.navigation_ui_enrolment.params = {"icon_only":false,"uicgcc_style":"fa fa-file-archive-o"}
		this.navigation_ui_enrolment.dynamic_param = {}
		this.navigation_ui_enrolment.role = []
		this.navigation_ui_enrolment.action = ""
		
		// "Unenrolment" Button of "Navigation UI" component
		this.navigation_ui_unenrolment.label_name = "Unenrolment"
		this.navigation_ui_unenrolment.show = true
		this.navigation_ui_unenrolment.disabled = true
		this.navigation_ui_unenrolment.params = {"icon_only":false,"uicgcc_style":"fa fa-file-zip-o"}
		this.navigation_ui_unenrolment.dynamic_param = {}
		this.navigation_ui_unenrolment.role = []
		this.navigation_ui_unenrolment.action = ""
		
		// "Update Personal" Button of "Navigation UI" component
		this.navigation_ui_update_personal.label_name = "Update Personal"
		this.navigation_ui_update_personal.show = true
		this.navigation_ui_update_personal.disabled = true
		this.navigation_ui_update_personal.params = {"icon_only":false,"uicgcc_style":"fa fa-user-o"}
		this.navigation_ui_update_personal.dynamic_param = {}
		this.navigation_ui_update_personal.role = []
		this.navigation_ui_update_personal.action = ""
		
		// "Change Mobile No" Button of "Navigation UI" component
		this.navigation_ui_change_mobile_no.label_name = "Change Mobile No"
		this.navigation_ui_change_mobile_no.show = true
		this.navigation_ui_change_mobile_no.disabled = true
		this.navigation_ui_change_mobile_no.params = {"icon_only":false,"uicgcc_style":"fa fa-mobile-phone"}
		this.navigation_ui_change_mobile_no.dynamic_param = {}
		this.navigation_ui_change_mobile_no.role = []
		this.navigation_ui_change_mobile_no.action = ""
		
		// "Add Account" Button of "Navigation UI" component
		this.navigation_ui_add_account.label_name = "Add Account"
		this.navigation_ui_add_account.show = true
		this.navigation_ui_add_account.disabled = true
		this.navigation_ui_add_account.params = {"icon_only":false,"uicgcc_style":"fa fa-plus"}
		this.navigation_ui_add_account.dynamic_param = {}
		this.navigation_ui_add_account.role = []
		this.navigation_ui_add_account.action = ""
		
		// "Block Unblock Account" Button of "Navigation UI" component
		this.navigation_ui_block_unblock_account.label_name = "Block Unblock Account"
		this.navigation_ui_block_unblock_account.show = true
		this.navigation_ui_block_unblock_account.disabled = true
		this.navigation_ui_block_unblock_account.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.navigation_ui_block_unblock_account.dynamic_param = {}
		this.navigation_ui_block_unblock_account.role = []
		this.navigation_ui_block_unblock_account.action = ""
		
		// "Remove Account" Button of "Navigation UI" component
		this.navigation_ui_remove_account.label_name = "Remove Account"
		this.navigation_ui_remove_account.show = true
		this.navigation_ui_remove_account.disabled = false
		this.navigation_ui_remove_account.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.navigation_ui_remove_account.dynamic_param = {}
		this.navigation_ui_remove_account.role = []
		this.navigation_ui_remove_account.action = ""
		
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
		
		// "View Process Log" Button of "Navigation UI" component
		this.navigation_ui_view_process_log.label_name = "View Process Log"
		this.navigation_ui_view_process_log.show = true
		this.navigation_ui_view_process_log.disabled = true
		this.navigation_ui_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_process_log.dynamic_param = {}
		this.navigation_ui_view_process_log.role = []
		this.navigation_ui_view_process_log.action = ""
	
		// Component level properties - "Customers" 
		this.customers.uictrl_code = "datatable"
		this.customers.uicgc_desc = "Customers"
		this.customers.uicgc_code = "uicgc_2"
		this.customers.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.customers.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE order by NPSSCP_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		this.accounts.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE order by NPSSCA_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"NPSSCP_ID","binding_name":"NPSSCP_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		
		// "Add Bank Account" Button of "Action" component
		this.action_add_bank_account.label_name = "Add Bank Account"
		this.action_add_bank_account.show = true
		this.action_add_bank_account.disabled = false
		this.action_add_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-bank"}
		this.action_add_bank_account.dynamic_param = {}
		this.action_add_bank_account.role = []
		this.action_add_bank_account.action = ""
		
		// "Block Unblock Bank Account" Button of "Action" component
		this.action_block_unblock_bank_account.label_name = "Block Unblock Bank Account"
		this.action_block_unblock_bank_account.show = true
		this.action_block_unblock_bank_account.disabled = false
		this.action_block_unblock_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.action_block_unblock_bank_account.dynamic_param = {}
		this.action_block_unblock_bank_account.role = []
		this.action_block_unblock_bank_account.action = ""
		
		// "Remove Bank Account" Button of "Action" component
		this.action_remove_bank_account.label_name = "Remove Bank Account"
		this.action_remove_bank_account.show = true
		this.action_remove_bank_account.disabled = false
		this.action_remove_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.action_remove_bank_account.dynamic_param = {}
		this.action_remove_bank_account.role = []
		this.action_remove_bank_account.action = ""
	
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
		this.queue.datasource = {"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671446518740","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.sub_navigation_ui_set_default.disabled = true
		this.sub_navigation_ui_set_default.params = {"icon_only":false,"uicgcc_style":"fa fa-external-link-square"}
		this.sub_navigation_ui_set_default.dynamic_param = {}
		this.sub_navigation_ui_set_default.role = []
		this.sub_navigation_ui_set_default.action = ""
		
		// "Add Bank Accountss" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_add_bank_accountss.label_name = "Add Bank Accountss"
		this.sub_navigation_ui_add_bank_accountss.show = true
		this.sub_navigation_ui_add_bank_accountss.disabled = false
		this.sub_navigation_ui_add_bank_accountss.params = {"icon_only":false,"uicgcc_style":"fa fa-bank"}
		this.sub_navigation_ui_add_bank_accountss.dynamic_param = {}
		this.sub_navigation_ui_add_bank_accountss.role = []
		this.sub_navigation_ui_add_bank_accountss.action = ""
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_12"
		this.history_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.history_detail.datasource = {"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671521364681","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM HST Plog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1671521093141","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1671521093317","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1671521093493","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1671521093669","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1671521093853","date_format":false},{"column_name":"process_ref_no","alias_name":"","mq_id":"MQ_1671521134065","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  RESULT,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  DTT_CODE,  TENANT_ID,  DT_CODE FROM  (  SELECT   NSTPL.NPSSSMTPL_ID,  NSTPL.BANKUSERID,  NSTPL.PROCESS_NAME,  NSTPL.PROCESSING_SYSTEM,  NSTPL.RESULT_CODE,  NSTPL.RESULT,  NSTPL.RESULT_MESSAGE,  NSTPL.RESULT_X_REQUEST_ID,  NSTPL.PROCESS_REF_NO,  NSTPL.REQUEST_DATA_JSON,  NSTPL.RESPONSE_DATA_JSON,  NSTPL.CHANNEL_ID,  NSTPL.CHANNEL_REFNO,  NSTPL.CHANNEL_USERID,  NSTPL.CHANNEL_PRODUCT,  NSTPL.CHANNEL_SUB_PRODUCT,  NSTPL.CHANNEL_TRAN_CODE,  NSTPL.DTT_CODE,  NSTPL.TENANT_ID,  NSTPL.DT_CODE  FROM   NPSS_SM_TRN_PROCESS_LOG NSTPL    ORDER BY NPSSSMTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM HST Plog MQ CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Ref No","target_column":"process_ref_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Process Log UI" 
		this.process_log_ui.uictrl_code = "dynamic_ui"
		this.process_log_ui.uicgc_desc = "Process Log UI"
		this.process_log_ui.uicgc_code = "uicgc_13"
		this.process_log_ui.params = {}
		this.process_log_ui.datasource = {}
		this.process_log_ui.context_menu = []
		this.process_log_ui.views = {}
		this.process_log_ui.onChangecomponent = new EventEmitter<any>()
		this.process_log_ui.show = true
		this.process_log_ui.dynamic_param = {}
		this.process_log_ui.f_process_log_ui = {"show":true}
		this.process_log_ui.current_view = "f_process_log_ui"
		
		// "Back" Button of "Process Log UI" component
		this.process_log_ui_back.label_name = "Back"
		this.process_log_ui_back.show = true
		this.process_log_ui_back.disabled = false
		this.process_log_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.process_log_ui_back.dynamic_param = {}
		this.process_log_ui_back.role = []
		this.process_log_ui_back.action = ""
		
		// "View Req and Res" Button of "Process Log UI" component
		this.process_log_ui_view_req_and_res.label_name = "View Req and Res"
		this.process_log_ui_view_req_and_res.show = true
		this.process_log_ui_view_req_and_res.disabled = true
		this.process_log_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.process_log_ui_view_req_and_res.dynamic_param = {}
		this.process_log_ui_view_req_and_res.role = []
		this.process_log_ui_view_req_and_res.action = ""
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_14"
		this.single_back_ui.params = {}
		this.single_back_ui.datasource = {}
		this.single_back_ui.context_menu = []
		this.single_back_ui.views = {}
		this.single_back_ui.onChangecomponent = new EventEmitter<any>()
		this.single_back_ui.show = true
		this.single_back_ui.dynamic_param = {}
		this.single_back_ui.f_single_back_ui = {"show":true}
		this.single_back_ui.current_view = "f_single_back_ui"
		
		// "Back" Button of "Single Back UI" component
		this.single_back_ui_back.label_name = "Back"
		this.single_back_ui_back.show = true
		this.single_back_ui_back.disabled = false
		this.single_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.single_back_ui_back.dynamic_param = {}
		this.single_back_ui_back.role = []
		this.single_back_ui_back.action = ""
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_15"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1666847230281","is_tab_mode":"N","dtt_1304_1666847230281":{"0":[{"dttv_id":"NPSS SM Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS SM Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_sm_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_sm_request_ui"
	
		// Component level properties - "Response UI" 
		this.response_ui.uictrl_code = "dynamic_ui"
		this.response_ui.uicgc_desc = "Response UI"
		this.response_ui.uicgc_code = "uicgc_16"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1666847230281","is_tab_mode":"N","dtt_1304_1666847230281":{"0":[{"dttv_id":"NPSS SM Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS SM Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_sm_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_sm_response_ui"
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__he_for_action_change_mob()
		this.page_load__he_for_action_entrol()
		this.page_load__he_for_update_personal_data()
		this.page_load__he_for_action_unentrol()
		this.page_load__de_for_un_entrol()
		this.page_load__de_for_cmn()
		this.page_load__de_for_up()
		this.page_load__he_for_trg_btn_2()
		this.page_load__he_for_trg_btn1()
		this.page_load__he_for_action_add_account()
		this.page_load__he_for_add_account()
		this.page_load__de_for_set_default()
		this.page_load__he_for_block_unblk()
		this.page_load__he_for_block_unblock()
		this.page_load__de_for_nav_block()
		this.page_load__de_for_nav_add_acc()
		this.page_load__de_for_remove_account()
		this.page_load__he_for_ac_remove_account()
	}

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__internal(parent_event_result){
		this.cf_for_pl__cc_for_pl_show_hide(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for pl show hide"
	cc_for_pl_show_hide__internal(parent_event_result){
		this.cc_for_pl_show_hide__tbc_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__spap_for_search()
		this.navigation_ui_search__clear_ui_for_n_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__close_popp()
		this.search_search__cu_for_accounts()
		this.search_search__cu_for_customer()
		this.search_search__ssp_for_queue()
	}

	//Handler for INTERNAL event of "ssp for queue"
	ssp_for_queue__internal(parent_event_result){
		this.ssp_for_queue__brfq_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__internal(parent_event_result){
		this.brfq_for_queue__sfr_in_queue(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "customers"
	customers__selection_changed(){
		this.customers__svmfor_cpl()
		this.customers__ssr_for_customer_to_cust_detail()
		this.customers__tbc_for_cpl()
		this.customers__ee_for_vplog()
		this.customers__e_1671023511080__account__detail()
		this.customers__e_1671023523592__account__detail()
		this.customers__npsscp_id__account__detail()
	}

	//Handler for INTERNAL event of "svmfor cpl"
	svmfor_cpl__internal(parent_event_result){
		this.svmfor_cpl__cc_for_customer_show_hide(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for customer show hide"
	cc_for_customer_show_hide__internal(parent_event_result){
		this.cc_for_customer_show_hide__brfq_for_accounts(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for accounts"
	brfq_for_accounts__internal(parent_event_result){
		this.brfq_for_accounts__sfr_for_accounts(parent_event_result)
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui enrolment"
	navigation_ui_enrolment__action_button_click(){
		this.navigation_ui_enrolment__sp_for_unen()
		this.navigation_ui_enrolment__se_nav_entrol_to_action_entrol()
		this.navigation_ui_enrolment__cu_for_cust_dtl()
		this.navigation_ui_enrolment__cu_for_account_dtl()
		this.navigation_ui_enrolment__cc_for_nav_entrol()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui change mobile no"
	navigation_ui_change_mobile_no__action_button_click(){
		this.navigation_ui_change_mobile_no__sp_for_cmn()
		this.navigation_ui_change_mobile_no__se_for_nav_mob_to_action()
		this.navigation_ui_change_mobile_no__cc_for_mobile_enab_disab()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unenrolment"
	navigation_ui_unenrolment__action_button_click(){
		this.navigation_ui_unenrolment__sp_for_unentrol()
		this.navigation_ui_unenrolment__se_for_nav_to_action_unentrol()
		this.navigation_ui_unenrolment__cc_for_unentrol_enab_disab()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update personal"
	navigation_ui_update_personal__action_button_click(){
		this.navigation_ui_update_personal__sp_for_upd()
		this.navigation_ui_update_personal__se_for_nav_to_action_add_account()
		this.navigation_ui_update_personal__cc_for_update_personal_enab_disab()
	}

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__selection_changed(){
		this.accounts__ssr_for_cal()
		this.accounts__tbc_for_cal()
		this.accounts__ee_for_nav_change_mob()
		this.accounts__ee_for_entrol()
		this.accounts__ee_for_nav_update_personal()
		this.accounts__ee_for_nav_unentrol()
		this.accounts__svm_for_accounts()
		this.accounts__ee_for_add_count()
		this.accounts__ee_for_set_default()
		this.accounts__ee_for_block_unblk()
		this.accounts__ee_for_nav_block()
		this.accounts__ee_for_nav_add_ac()
		this.accounts__ee_for_remove_account()
	}

	//Handler for INTERNAL event of "svm for accounts"
	svm_for_accounts__internal(parent_event_result){
		this.svm_for_accounts__cc_for_acc_show_hide(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "action change mobile number"
	action_change_mobile_number__action_button_click(){
		this.action_change_mobile_number__cc_for_change_mob_no()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action back"
	action_back__action_button_click(){
		this.action_back__rs_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action enrol"
	action_enrol__action_button_click(){
		this.action_enrol__cc_for_customer_entroll()
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add bank accountss"
	sub_navigation_ui_add_bank_accountss__action_button_click(){
		this.sub_navigation_ui_add_bank_accountss__se_for_add_bank_account()
		this.sub_navigation_ui_add_bank_accountss__sp_for_add_account()
		this.sub_navigation_ui_add_bank_accountss__cc_for_enab_desable_for_add_account()
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui set default"
	sub_navigation_ui_set_default__action_button_click(){
		this.sub_navigation_ui_set_default__cc_for_enable_disable_for_set_default()
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock account"
	navigation_ui_block_unblock_account__action_button_click(){
		this.navigation_ui_block_unblock_account__sp_for_nav_block()
		this.navigation_ui_block_unblock_account__cc_for_nav_block()
		this.navigation_ui_block_unblock_account__se_for_nav_block()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action add bank account"
	action_add_bank_account__action_button_click(){
		this.action_add_bank_account__cc_for_add_account()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action block unblock bank account"
	action_block_unblock_bank_account__action_button_click(){
		this.action_block_unblock_bank_account__cc_for_block_unblock()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action update personal data"
	action_update_personal_data__action_button_click(){
		this.action_update_personal_data__cc_for_update_personal()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action unenrol"
	action_unenrol__action_button_click(){
		this.action_unenrol__cc_for_unenrol()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__action_button_click(){
		this.navigation_ui_view_process_log__sp_for_view_process_log()
		this.navigation_ui_view_process_log__brfq_for_history_detaail()
	}

	//Handler for INTERNAL event of "brfq for history detaail"
	brfq_for_history_detaail__internal(parent_event_result){
		this.brfq_for_history_detaail__sfr_for_history_detail(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ssr_for_req()
		this.history_detail__ssr_for_res()
		this.history_detail__ee_for_req_and_res()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__bt_for_res()
		this.process_log_ui_view_req_and_res__bt_for_req()
		this.process_log_ui_view_req_and_res__sp_for_req_and_res()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__e_1671515425817()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_sbu_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove account"
	navigation_ui_remove_account__action_button_click(){
		this.navigation_ui_remove_account__cc_for_remove_enab_disab()
		this.navigation_ui_remove_account__sp_for_remove_account()
		this.navigation_ui_remove_account__se_for_a_remove_account()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action remove bank account"
	action_remove_bank_account__action_button_click(){
		this.action_remove_bank_account__cc_for_remove_account()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670996967025"
		let event_params={"caller_name":"page_load__cf_for_pl","event_desc":"CF for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="cf_for_pl__cc_for_pl_show_hide,"
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
	page_load__he_for_action_change_mob() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_change_mobile_number"
		let parent_source_id=""
		let event_code="e_1670996990729"
		let event_params={"caller_name":"page_load__he_for_action_change_mob","event_desc":"HE for action change mob","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_action_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_enrol"
		let parent_source_id=""
		let event_code="e_1670996997915"
		let event_params={"caller_name":"page_load__he_for_action_entrol","event_desc":"HE for action entrol","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_action_unentrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_unenrol"
		let parent_source_id=""
		let event_code="e_1670997015088"
		let event_params={"caller_name":"page_load__he_for_action_unentrol","event_desc":"HE for action unentrol","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de_for_un_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_unenrolment"
		let parent_source_id=""
		let event_code="e_1670997270095"
		let event_params={"caller_name":"page_load__de_for_un_entrol","event_desc":"DE for Un Entrol","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_trg_btn_2() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_trg_btn2"
		let parent_source_id=""
		let event_code="e_1671000721377"
		let event_params={"caller_name":"page_load__he_for_trg_btn_2","event_desc":"HE for trg btn 2","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_trg_btn1() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_tri_btn1"
		let parent_source_id=""
		let event_code="e_1671000731789"
		let event_params={"caller_name":"page_load__he_for_trg_btn1","event_desc":"HE for trg btn1","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_action_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_add_bank_account"
		let parent_source_id=""
		let event_code="e_1671000834042"
		let event_params={"caller_name":"page_load__he_for_action_add_account","event_desc":"HE for action add account","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
		let destn_id="sub_navigation_ui_add_bank_accountss"
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
	page_load__de_for_set_default() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sub_navigation_ui_set_default"
		let parent_source_id=""
		let event_code="e_1671021704802"
		let event_params={"caller_name":"page_load__de_for_set_default","event_desc":"DE for set default","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_block_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_block_unblock_bank_account"
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
	page_load__de_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_block_unblock_account"
		let parent_source_id=""
		let event_code="e_1671028314499"
		let event_params={"caller_name":"page_load__de_for_nav_block","event_desc":"DE for nav block","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_nav_add_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_add_account"
		let parent_source_id=""
		let event_code="e_1671028323552"
		let event_params={"caller_name":"page_load__de_for_nav_add_acc","event_desc":"DE for nav add acc","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_remove_account"
		let parent_source_id=""
		let event_code="e_1671516472107"
		let event_params={"caller_name":"page_load__de_for_remove_account","event_desc":"DE for Remove account","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_ac_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="action_remove_bank_account"
		let parent_source_id=""
		let event_code="e_1671516796546"
		let event_params={"caller_name":"page_load__he_for_ac_remove_account","event_desc":"HE for AC Remove account","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__cc_for_pl_show_hide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_pl"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1671004088500"
		let event_params={"caller_name":"cf_for_pl__cc_for_pl_show_hide","event_desc":"CC for PL show hide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_pl_show_hide__tbc_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for pl show hide"
	cc_for_pl_show_hide__tbc_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_pl_show_hide"
		let destn_id="search_search"
		let parent_source_id="cf_for_pl"
		let event_code="e_1671004110108"
		let event_params={"caller_name":"cc_for_pl_show_hide__tbc_for_search","event_desc":"TBC for search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	navigation_ui_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997070392"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1670997076000","window_title":"Search","window_height":400,"window_width":"600px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1670997070392"}}
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
	search_search__cu_for_accounts() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="accounts"
		let parent_source_id=""
		let event_code="e_1671013039898"
		let event_params={"caller_name":"search_search__cu_for_accounts","event_desc":"CU for accounts","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE order by NPSSCA_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"NPSSCP_ID","binding_name":"NPSSCP_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cu_for_customer() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="customers"
		let parent_source_id=""
		let event_code="e_1671013056752"
		let event_params={"caller_name":"search_search__cu_for_customer","event_desc":"CU for customer","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE order by NPSSCP_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		let event_code="e_1671434185326"
		let event_params={"caller_name":"search_search__ssp_for_queue","event_desc":"SSP for Queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_queue__brfq_for_queue,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue"
	ssp_for_queue__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1671434203293"
		let event_params={"caller_name":"ssp_for_queue__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue__sfr_in_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671446518740","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__sfr_in_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue"
		let destn_id="queue"
		let parent_source_id="ssp_for_queue"
		let event_code="e_1671434228361"
		let event_params={"caller_name":"brfq_for_queue__sfr_in_queue","event_desc":"SFR in queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671446518740","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals="svmfor_cpl__cc_for_customer_show_hide,"
		let event_data={"customers":{"e_1670997376364":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1670997376364","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"BANKUSERID","level":"MI_LEVEL","name":"MI_LEVEL_BANKUSERID","setd3name":"BANKUSERID"},{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSSCP_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSCP_ID","setd3name":"NPSSCP_ID"},{"type":"LOCAL","column_name":"CHANNEL_ID","level":"MI_LEVEL","name":"MI_LEVEL_CHANNEL_ID","setd3name":"CHANNEL_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE order by NPSSCP_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "customers"
	customers__ssr_for_customer_to_cust_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="customer_detail"
		let parent_source_id=""
		let event_code="e_1670998482087"
		let event_params={"caller_name":"customers__ssr_for_customer_to_cust_detail","event_desc":"SSR for customer to cust detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{}}
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
	customers__ee_for_vplog() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1671523181977"
		let event_params={"caller_name":"customers__ee_for_vplog","event_desc":"EE for VPLOG","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "customers"
	customers__npsscp_id__account__detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="customers"
		let destn_id="npss_customer_account_ui_memory11"
		let parent_source_id=""
		let event_code="e_1671522553360"
		let event_params={"destn_comp_id":"account__detail","destn_ctrl_id":"memory11","caller_name":"customers__npsscp_id__account__detail","event_desc":"NPSSCP_ID","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{"parentcolumn":"NPSSCP_ID","need_selecteditem":"N"}}
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
	svmfor_cpl__cc_for_customer_show_hide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svmfor_cpl"
		let destn_id=""
		let parent_source_id="customers"
		let event_code="e_1671005066084"
		let event_params={"caller_name":"svmfor_cpl__cc_for_customer_show_hide","event_desc":"CC for customer show hide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_customer_show_hide__brfq_for_accounts,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for customer show hide"
	cc_for_customer_show_hide__brfq_for_accounts(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_customer_show_hide"
		let destn_id="accounts"
		let parent_source_id="svmfor_cpl"
		let event_code="e_1671005084059"
		let event_params={"caller_name":"cc_for_customer_show_hide__brfq_for_accounts","event_desc":"BRFQ for accounts","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_accounts__sfr_for_accounts,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE order by NPSSCA_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"NPSSCP_ID","binding_name":"NPSSCP_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for accounts"
	brfq_for_accounts__sfr_for_accounts(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_accounts"
		let destn_id="accounts"
		let parent_source_id="cc_for_customer_show_hide"
		let event_code="e_1671005095983"
		let event_params={"caller_name":"brfq_for_accounts__sfr_for_accounts","event_desc":"SFR for accounts","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"customers","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE order by NPSSCA_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"NPSSCP_ID","binding_name":"NPSSCP_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui enrolment"
	navigation_ui_enrolment__sp_for_unen() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_enrolment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997548906"
		let event_params={"caller_name":"navigation_ui_enrolment__sp_for_unen","event_desc":"SP for UNEN","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_enrolment","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui enrolment"
	navigation_ui_enrolment__se_nav_entrol_to_action_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_enrolment"
		let destn_id="action_enrol"
		let parent_source_id=""
		let event_code="e_1671001614444"
		let event_params={"caller_name":"navigation_ui_enrolment__se_nav_entrol_to_action_entrol","event_desc":"SE nav entrol to action entrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_enrolment","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui enrolment"
	navigation_ui_enrolment__cu_for_cust_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_enrolment"
		let destn_id="customer_detail"
		let parent_source_id=""
		let event_code="e_1671014985065"
		let event_params={"caller_name":"navigation_ui_enrolment__cu_for_cust_dtl","event_desc":"CU for cust dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_enrolment","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui enrolment"
	navigation_ui_enrolment__cu_for_account_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_enrolment"
		let destn_id="account__detail"
		let parent_source_id=""
		let event_code="e_1671015020416"
		let event_params={"caller_name":"navigation_ui_enrolment__cu_for_account_dtl","event_desc":"CU for Account Dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_enrolment","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui enrolment"
	navigation_ui_enrolment__cc_for_nav_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_enrolment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671099422384"
		let event_params={"caller_name":"navigation_ui_enrolment__cc_for_nav_entrol","event_desc":"CC for nav entrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_enrolment","raiseparam":{}}
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
	navigation_ui_change_mobile_no__se_for_nav_mob_to_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_change_mobile_no"
		let destn_id="action_change_mobile_number"
		let parent_source_id=""
		let event_code="e_1670997921388"
		let event_params={"caller_name":"navigation_ui_change_mobile_no__se_for_nav_mob_to_action","event_desc":"SE for nav mob to action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_change_mobile_no","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	navigation_ui_change_mobile_no__cc_for_mobile_enab_disab() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_change_mobile_no"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671005307349"
		let event_params={"caller_name":"navigation_ui_change_mobile_no__cc_for_mobile_enab_disab","event_desc":"CC for mobile enab disab","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_change_mobile_no","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unenrolment"
	navigation_ui_unenrolment__sp_for_unentrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unenrolment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997993994"
		let event_params={"caller_name":"navigation_ui_unenrolment__sp_for_unentrol","event_desc":"SP for Unentrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unenrolment","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unenrolment"
	navigation_ui_unenrolment__se_for_nav_to_action_unentrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unenrolment"
		let destn_id="action_unenrol"
		let parent_source_id=""
		let event_code="e_1670998007874"
		let event_params={"caller_name":"navigation_ui_unenrolment__se_for_nav_to_action_unentrol","event_desc":"SE for nav to action unentrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unenrolment","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unenrolment"
	navigation_ui_unenrolment__cc_for_unentrol_enab_disab() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unenrolment"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671005294412"
		let event_params={"caller_name":"navigation_ui_unenrolment__cc_for_unentrol_enab_disab","event_desc":"CC for unentrol enab disab","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unenrolment","raiseparam":{}}
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
	navigation_ui_update_personal__se_for_nav_to_action_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_personal"
		let destn_id="action_update_personal_data"
		let parent_source_id=""
		let event_code="e_1670998079496"
		let event_params={"caller_name":"navigation_ui_update_personal__se_for_nav_to_action_add_account","event_desc":"SE for nav to action add account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_personal","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	navigation_ui_update_personal__cc_for_update_personal_enab_disab() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_personal"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671005301816"
		let event_params={"caller_name":"navigation_ui_update_personal__cc_for_update_personal_enab_disab","event_desc":"CC for update personal enab disab","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_personal","raiseparam":{}}
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
	accounts__ee_for_nav_change_mob() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_change_mobile_no"
		let parent_source_id=""
		let event_code="e_1671000432773"
		let event_params={"caller_name":"accounts__ee_for_nav_change_mob","event_desc":"EE for nav change mob","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	accounts__ee_for_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_enrolment"
		let parent_source_id=""
		let event_code="e_1671000444316"
		let event_params={"caller_name":"accounts__ee_for_entrol","event_desc":"EE for entrol","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	accounts__ee_for_nav_update_personal() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_update_personal"
		let parent_source_id=""
		let event_code="e_1671000455235"
		let event_params={"caller_name":"accounts__ee_for_nav_update_personal","event_desc":"EE for nav update personal","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	accounts__ee_for_nav_unentrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_unenrolment"
		let parent_source_id=""
		let event_code="e_1671000475768"
		let event_params={"caller_name":"accounts__ee_for_nav_unentrol","event_desc":"EE for nav unentrol","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let internals="svm_for_accounts__cc_for_acc_show_hide,"
		let event_data={"accounts":{"e_1671012456913":{"dts":{"dt_1304_1666846042955":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1671012456913","dt_code":"DT_1304_1666846042955","dtt_code":"","dt_desc":"NPSS Customer Proxy DTG","dtt_desc":"NPSS Customer Proxy","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"IBAN","level":"MI_LEVEL","name":"MI_LEVEL_IBAN","setd3name":"IBAN"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846862798":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846862798","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998460970","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_ACCOUNTS ~NPSSCA","category":"NPSS_CUSTOMER_ACCOUNTS","loc":"-133.00324065393784 140.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssca_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"exhf_id_checked":true,"npsscp_id_checked":true,"default_account_checked":true,"instant_payment_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411","DTT_1304_1666846862798"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCA_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"INSTANT_PAYMENT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"NPSSCP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_ACCOUNTS ","alias_name":"NPSSCA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,INSTANT_PAYMENT,DEFAULT_ACCOUNT,EXHF_ID,NPSSCP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCA.NPSSCA_ID,NPSSCA.PRODUCT_CODE,NPSSCA.BANKUSERID,NPSSCA.IBAN,NPSSCA.CURRENCY,NPSSCA.INSTANT_PAYMENT,NPSSCA.DEFAULT_ACCOUNT,NPSSCA.EXHF_ID,NPSSCA.NPSSCP_ID,NPSSCA.CREATED_BY,NPSSCA.CREATED_BY_NAME,NPSSCA.CREATED_BY_STS_ID,NPSSCA.CREATED_DATE,NPSSCA.DT_CODE,NPSSCA.DT_DESCRIPTION,NPSSCA.DTT_CODE,NPSSCA.DTT_DESCRIPTION,NPSSCA.MODIFIED_BY,NPSSCA.MODIFIED_BY_NAME,NPSSCA.MODIFIED_BY_STS_ID,NPSSCA.MODIFIED_DATE,NPSSCA.PRCT_ID,NPSSCA.STATUS,NPSSCA.PROCESS_STATUS,NPSSCA.SYSTEM_ID,NPSSCA.SYSTEM_NAME,NPSSCA.TENANT_ID,NPSSCA.APP_ID,NPSSCA.VERSION_NO FROM NPSS_CUSTOMER_ACCOUNTS  NPSSCA)T $WHERE order by NPSSCA_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Account AQ CCD","filter":[{"filter_name":"NPSSCP_ID","binding_name":"NPSSCP_ID","binding_value":"","source_name":"MI_LEVEL_NPSSCP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Instant Payment","target_column":"INSTANT_PAYMENT","alias_name":"NPSSCA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		let destn_id="sub_navigation_ui_add_bank_accountss"
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
		let destn_id="navigation_ui_block_unblock_account"
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

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_remove_account"
		let parent_source_id=""
		let event_code="e_1671516552170"
		let event_params={"caller_name":"accounts__ee_for_remove_account","event_desc":"EE for Remove account","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	svm_for_accounts__cc_for_acc_show_hide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_accounts"
		let destn_id=""
		let parent_source_id="accounts"
		let event_code="e_1671013095568"
		let event_params={"caller_name":"svm_for_accounts__cc_for_acc_show_hide","event_desc":"CC for acc show hide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	action_change_mobile_number__cc_for_change_mob_no() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_change_mobile_number"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671001415349"
		let event_params={"caller_name":"action_change_mobile_number__cc_for_change_mob_no","event_desc":"CC for change mob no","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_change_mobile_number","raiseparam":{}}
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
	action_enrol__cc_for_customer_entroll() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_enrol"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671002947221"
		let event_params={"caller_name":"action_enrol__cc_for_customer_entroll","event_desc":"CC for Customer entroll","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_enrol","raiseparam":{}}
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
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671446518740","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Customer Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671019973873","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSCP_ID,   T.PROXY_TYPE,   T.MOBILE,   T.SURNAME,   T.CUSTOMER_NAME,   T.BANK_CODE,   T.GROUP_CODE,   T.BANKUSERID,   T.PRODUCT_CODE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_REFNO,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   NPSS_CUSTOMER_PROXY T  left join TRANSACTION_SET TS on   T.NPSSCP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Customer Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE order by NPSSCP_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1666846042955":{"dtt_1304_1666846082411":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846042955","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666846082411","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1670998440500","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CUSTOMER_PROXY ~NPSSCP","category":"NPSS_CUSTOMER_PROXY","loc":"292.99675934606216 422.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npsscp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"customer_name_checked":true,"surname_checked":true,"channel_id_checked":true,"channel_product_checked":true,"mobile_checked":true,"product_code_checked":true,"group_code_checked":true,"bank_code_checked":true,"proxy_type_checked":true,"proxy_value_checked":true,"email_checked":true,"document_id_checked":true,"exhf_id_checked":true,"channel_refno_checked":true,"channel_userid_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846082411"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSCP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CUSTOMER_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSCP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSCP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CUSTOMER_PROXY ","alias_name":"NPSSCP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSCP_ID,BANKUSERID,CUSTOMER_NAME,SURNAME,CHANNEL_ID,CHANNEL_PRODUCT,MOBILE,PRODUCT_CODE,GROUP_CODE,BANK_CODE,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,EXHF_ID,CHANNEL_REFNO,CHANNEL_USERID,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSCP.NPSSCP_ID,NPSSCP.BANKUSERID,NPSSCP.CUSTOMER_NAME,NPSSCP.SURNAME,NPSSCP.CHANNEL_ID,NPSSCP.CHANNEL_PRODUCT,NPSSCP.MOBILE,NPSSCP.PRODUCT_CODE,NPSSCP.GROUP_CODE,NPSSCP.BANK_CODE,NPSSCP.PROXY_TYPE,NPSSCP.PROXY_VALUE,NPSSCP.EMAIL,NPSSCP.DOCUMENT_ID,NPSSCP.EXHF_ID,NPSSCP.CHANNEL_REFNO,NPSSCP.CHANNEL_USERID,NPSSCP.CHANNEL_SUB_PRODUCT,NPSSCP.CHANNEL_TRAN_CODE,NPSSCP.CREATED_BY,NPSSCP.CREATED_BY_NAME,NPSSCP.CREATED_BY_STS_ID,NPSSCP.CREATED_DATE,NPSSCP.DT_CODE,NPSSCP.DT_DESCRIPTION,NPSSCP.DTT_CODE,NPSSCP.DTT_DESCRIPTION,NPSSCP.MODIFIED_BY,NPSSCP.MODIFIED_BY_NAME,NPSSCP.MODIFIED_BY_STS_ID,NPSSCP.MODIFIED_DATE,NPSSCP.PRCT_ID,NPSSCP.STATUS,NPSSCP.PROCESS_STATUS,NPSSCP.SYSTEM_ID,NPSSCP.SYSTEM_NAME,NPSSCP.TENANT_ID,NPSSCP.APP_ID,NPSSCP.VERSION_NO FROM NPSS_CUSTOMER_PROXY  NPSSCP)T $WHERE order by NPSSCP_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Customer Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Name","target_column":"CUSTOMER_NAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Surname","target_column":"SURNAME","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"MOBILE","target_column":"MOBILE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSCP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add bank accountss"
	sub_navigation_ui_add_bank_accountss__se_for_add_bank_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_add_bank_accountss"
		let destn_id="action_add_bank_account"
		let parent_source_id=""
		let event_code="e_1671021103777"
		let event_params={"caller_name":"sub_navigation_ui_add_bank_accountss__se_for_add_bank_account","event_desc":"SE for add bank account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_add_bank_accountss","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add bank accountss"
	sub_navigation_ui_add_bank_accountss__sp_for_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_add_bank_accountss"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021192217"
		let event_params={"caller_name":"sub_navigation_ui_add_bank_accountss__sp_for_add_account","event_desc":"SP for add account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_add_bank_accountss","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui add bank accountss"
	sub_navigation_ui_add_bank_accountss__cc_for_enab_desable_for_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_add_bank_accountss"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021226214"
		let event_params={"caller_name":"sub_navigation_ui_add_bank_accountss__cc_for_enab_desable_for_add_account","event_desc":"CC for Enab desable for add account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_add_bank_accountss","raiseparam":{}}
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
		let destn_id="action_block_unblock_bank_account"
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
		let destn_id="action_add_bank_account"
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock account"
	navigation_ui_block_unblock_account__sp_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_unblock_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028145631"
		let event_params={"caller_name":"navigation_ui_block_unblock_account__sp_for_nav_block","event_desc":"SP for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_unblock_account","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock account"
	navigation_ui_block_unblock_account__cc_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_unblock_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028240797"
		let event_params={"caller_name":"navigation_ui_block_unblock_account__cc_for_nav_block","event_desc":"CC for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_unblock_account","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block unblock account"
	navigation_ui_block_unblock_account__se_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_unblock_account"
		let destn_id="action_block_unblock_bank_account"
		let parent_source_id=""
		let event_code="e_1671028489443"
		let event_params={"caller_name":"navigation_ui_block_unblock_account__se_for_nav_block","event_desc":"SE for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_unblock_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action add bank account"
	action_add_bank_account__cc_for_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_add_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671428574446"
		let event_params={"caller_name":"action_add_bank_account__cc_for_add_account","event_desc":"CC for Add account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_add_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_add_customer_bank_accountsService.fn_npss_cs_add_customer_bank_accounts(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action block unblock bank account"
	action_block_unblock_bank_account__cc_for_block_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_block_unblock_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671428620890"
		let event_params={"caller_name":"action_block_unblock_bank_account__cc_for_block_unblock","event_desc":"CC for Block unblock","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_block_unblock_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_blockunblock_customer_bankaccountService.fn_npss_cs_blockunblock_customer_bankaccount(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action update personal data"
	action_update_personal_data__cc_for_update_personal() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_update_personal_data"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671428965413"
		let event_params={"caller_name":"action_update_personal_data__cc_for_update_personal","event_desc":"CC for update personal","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_update_personal_data","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_update_customer_personal_dataService.fn_npss_cs_update_customer_personal_data(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action unenrol"
	action_unenrol__cc_for_unenrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_unenrol"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671429006252"
		let event_params={"caller_name":"action_unenrol__cc_for_unenrol","event_desc":"CC for unenrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_unenrol","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_unenrolment_customerService.fn_npss_cs_unenrolment_customer(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__sp_for_view_process_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671514942287"
		let event_params={"caller_name":"navigation_ui_view_process_log__sp_for_view_process_log","event_desc":"SP for view process log","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"profile_code":"BTL_1304_1671514726628"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__brfq_for_history_detaail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1671515019557"
		let event_params={"caller_name":"navigation_ui_view_process_log__brfq_for_history_detaail","event_desc":"BRFQ for History detaail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_history_detaail__sfr_for_history_detail,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671521364681","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM HST Plog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1671521093141","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1671521093317","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1671521093493","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1671521093669","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1671521093853","date_format":false},{"column_name":"process_ref_no","alias_name":"","mq_id":"MQ_1671521134065","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  RESULT,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  DTT_CODE,  TENANT_ID,  DT_CODE FROM  (  SELECT   NSTPL.NPSSSMTPL_ID,  NSTPL.BANKUSERID,  NSTPL.PROCESS_NAME,  NSTPL.PROCESSING_SYSTEM,  NSTPL.RESULT_CODE,  NSTPL.RESULT,  NSTPL.RESULT_MESSAGE,  NSTPL.RESULT_X_REQUEST_ID,  NSTPL.PROCESS_REF_NO,  NSTPL.REQUEST_DATA_JSON,  NSTPL.RESPONSE_DATA_JSON,  NSTPL.CHANNEL_ID,  NSTPL.CHANNEL_REFNO,  NSTPL.CHANNEL_USERID,  NSTPL.CHANNEL_PRODUCT,  NSTPL.CHANNEL_SUB_PRODUCT,  NSTPL.CHANNEL_TRAN_CODE,  NSTPL.DTT_CODE,  NSTPL.TENANT_ID,  NSTPL.DT_CODE  FROM   NPSS_SM_TRN_PROCESS_LOG NSTPL    ORDER BY NPSSSMTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM HST Plog MQ CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Ref No","target_column":"process_ref_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for history detaail"
	brfq_for_history_detaail__sfr_for_history_detail(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_history_detaail"
		let destn_id="history_detail"
		let parent_source_id="navigation_ui_view_process_log"
		let event_code="e_1671515060941"
		let event_params={"caller_name":"brfq_for_history_detaail__sfr_for_history_detail","event_desc":"SFR for history detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Customer Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Customer Proxy","ds_eligible":"DS_1671521364681","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM HST Plog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1671521093141","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1671521093317","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1671521093493","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1671521093669","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1671521093853","date_format":false},{"column_name":"process_ref_no","alias_name":"","mq_id":"MQ_1671521134065","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  RESULT,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  DTT_CODE,  TENANT_ID,  DT_CODE FROM  (  SELECT   NSTPL.NPSSSMTPL_ID,  NSTPL.BANKUSERID,  NSTPL.PROCESS_NAME,  NSTPL.PROCESSING_SYSTEM,  NSTPL.RESULT_CODE,  NSTPL.RESULT,  NSTPL.RESULT_MESSAGE,  NSTPL.RESULT_X_REQUEST_ID,  NSTPL.PROCESS_REF_NO,  NSTPL.REQUEST_DATA_JSON,  NSTPL.RESPONSE_DATA_JSON,  NSTPL.CHANNEL_ID,  NSTPL.CHANNEL_REFNO,  NSTPL.CHANNEL_USERID,  NSTPL.CHANNEL_PRODUCT,  NSTPL.CHANNEL_SUB_PRODUCT,  NSTPL.CHANNEL_TRAN_CODE,  NSTPL.DTT_CODE,  NSTPL.TENANT_ID,  NSTPL.DT_CODE  FROM   NPSS_SM_TRN_PROCESS_LOG NSTPL    ORDER BY NPSSSMTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM HST Plog MQ CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Ref No","target_column":"process_ref_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1671515194515"
		let event_params={"caller_name":"history_detail__ssr_for_req","event_desc":"SSR for REQ","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1671515211810"
		let event_params={"caller_name":"history_detail__ssr_for_res","event_desc":"SSR for RES","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ee_for_req_and_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1671523298536"
		let event_params={"caller_name":"history_detail__ee_for_req_and_res","event_desc":"EE for req and res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1671515259649"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_for_res","event_desc":"BT for RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1671515268440"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_for_req","event_desc":"BT for REQ","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__sp_for_req_and_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671515299634"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_req_and_res","event_desc":"SP for REQ and RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1671514785051"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__e_1671515425817() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671515425817"
		let event_params={"caller_name":"process_log_ui_back__e_1671515425817","event_desc":"E_1671515425817","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1670996775588"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_sbu_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671515437731"
		let event_params={"caller_name":"single_back_ui_back__sp_for_sbu_back","event_desc":"SP for SBU Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1671514726628"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove account"
	navigation_ui_remove_account__cc_for_remove_enab_disab() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_remove_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671516660958"
		let event_params={"caller_name":"navigation_ui_remove_account__cc_for_remove_enab_disab","event_desc":"CC for remove enab disab","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_remove_account","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove account"
	navigation_ui_remove_account__sp_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_remove_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671516729572"
		let event_params={"caller_name":"navigation_ui_remove_account__sp_for_remove_account","event_desc":"SP for Remove account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_remove_account","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove account"
	navigation_ui_remove_account__se_for_a_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_remove_account"
		let destn_id="action_remove_bank_account"
		let parent_source_id=""
		let event_code="e_1671516831749"
		let event_params={"caller_name":"navigation_ui_remove_account__se_for_a_remove_account","event_desc":"SE for A Remove account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_remove_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action remove bank account"
	action_remove_bank_account__cc_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_remove_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671516873352"
		let event_params={"caller_name":"action_remove_bank_account__cc_for_remove_account","event_desc":"CC for remove account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_remove_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_remove_customer_bank_accountsService.fn_npss_cs_remove_customer_bank_accounts(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
