/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27512 
Modified By     : Admin 
Modified Date   : 2022-Dec-23 10:31 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_setup
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_c_btn_enb_disbService} from '../../../custom_widget/npss_c_btn_enb_disb/npss_c_btn_enb_disb.service'
import {npss_cs_mch_change_mobileService} from '../../../custom_widget/npss_cs_mch_change_mobile/npss_cs_mch_change_mobile.service'
import {npss_cs_mch_enrolmentService} from '../../../custom_widget/npss_cs_mch_enrolment/npss_cs_mch_enrolment.service'
import {npss_cs_mch_unblock_bank_accountService} from '../../../custom_widget/npss_cs_mch_unblock_bank_account/npss_cs_mch_unblock_bank_account.service'
import {npss_cs_mch_remove_bank_accountsService} from '../../../custom_widget/npss_cs_mch_remove_bank_accounts/npss_cs_mch_remove_bank_accounts.service'
import {npss_cs_mch_disableService} from '../../../custom_widget/npss_cs_mch_disable/npss_cs_mch_disable.service'
import {npss_cs_mch_update_personal_dataService} from '../../../custom_widget/npss_cs_mch_update_personal_data/npss_cs_mch_update_personal_data.service'
import {npss_cs_mch_add_bank_accountsService} from '../../../custom_widget/npss_cs_mch_add_bank_accounts/npss_cs_mch_add_bank_accounts.service'
import {npss_cs_mch_block_bank_accountService} from '../../../custom_widget/npss_cs_mch_block_bank_account/npss_cs_mch_block_bank_account.service'
import {npss_cs_shop_enrolmentService} from '../../../custom_widget/npss_cs_shop_enrolment/npss_cs_shop_enrolment.service'
import {npss_cs_shop_updateService} from '../../../custom_widget/npss_cs_shop_update/npss_cs_shop_update.service'
import {npss_cs_shop_set_bank_accountService} from '../../../custom_widget/npss_cs_shop_set_bank_account/npss_cs_shop_set_bank_account.service'
import {npss_cs_shop_remove_bank_accountService} from '../../../custom_widget/npss_cs_shop_remove_bank_account/npss_cs_shop_remove_bank_account.service'
import {npss_cs_shop_disableService} from '../../../custom_widget/npss_cs_shop_disable/npss_cs_shop_disable.service'

@Component({
	selector: 's_merchant_setup',
	templateUrl: './s_merchant_setup.component.html',
	styleUrls: ['./s_merchant_setup.component.css'],
	providers:[torus_cs_show_hideService,npss_c_btn_enb_disbService,npss_cs_mch_change_mobileService,npss_cs_mch_enrolmentService,npss_cs_mch_unblock_bank_accountService,npss_cs_mch_remove_bank_accountsService,npss_cs_mch_disableService,npss_cs_mch_update_personal_dataService,npss_cs_mch_add_bank_accountsService,npss_cs_mch_block_bank_accountService,npss_cs_shop_enrolmentService,npss_cs_shop_updateService,npss_cs_shop_set_bank_accountService,npss_cs_shop_remove_bank_accountService,npss_cs_shop_disableService]
})
    
// Start of class 
export class s_merchant_setupComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_merchant_setup"
	wftpa_id : string = "WFT_NPSS_P_1304_1671274130171_0"
	cg_code : string = "CG_1304_1671274049292"
	key_column : any = {"dtt_1304_1666846129395":"NPSSMP_ID","dtt_1304_1666847369565":"NPSSMA_ID","dtt_1304_1666847660575":"NPSSMS_ID","dtt_1304_1666848298941":"NPSSMC_ID","dtt_1304_1666847230281":"NPSSSMTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "navigation_ui"
	uicgc_2 : string = "merchant"
	uicgc_3 : string = "accounts"
	uicgc_4 : string = "merchant_detail"
	uicgc_6 : string = "search"
	uicgc_7 : string = "account__detail"
	uicgc_8 : string = "action"
	uicgc_9 : string = "merchant_setup_widget"
	uicgc_10 : string = "queue"
	uicgc_11 : string = "sub_navigation_ui"
	uicgc_12 : string = "shop_detail"
	uicgc_13 : string = "process_log_ui"
	uicgc_14 : string = "history_detail"
	uicgc_15 : string = "response_ui"
	uicgc_16 : string = "request_ui"
	uicgc_17 : string = "single_back_ui"
	uicgc_18 : string = "shop"
	uicgc_19 : string = "cash_desk"
	uicgc_20 : string = "cash_desk_detail"
	uicgc_21 : string = "shop_action"
	uicgc_22 : string = "cash_desk_action"
	key_events : any = {}
	btl_1304_1671687995972 : string = "p_shop_and_cashdesk_layout"
	btl_1304_1671515720595 : string = "p_view_req_and_res_profile"
	btl_1304_1671514266975 : string = "p_view_history_layout"
	btl_1304_1670997076000 : string = "p_search_layout"
	btl_1304_1670996891370 : string = "p_action_layout"
	btl_1304_1670996775588 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_7","uicgc_15","uicgc_6","uicgc_12","uicgc_16","uicgc_20","uicgc_21","uicgc_22","uicgc_17","uicgc_13","uicgc_8","uicgc_1","uicgc_11"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_enrolment : any = {}
	navigation_ui_disable : any = {}
	navigation_ui_update_personal : any = {}
	navigation_ui_change_mobile_no : any = {}
	navigation_ui_update_mcc : any = {}
	navigation_ui_add_account : any = {}
	navigation_ui_block_accounts : any = {}
	navigation_ui_view_process_log : any = {}
	navigation_ui_unblock_accounts : any = {}
	navigation_ui_remove_accounts : any = {}
	navigation_ui_tri_btn1 : any = {}
	navigation_ui_trg_btn2 : any = {}
	navigation_ui_tri_btn3 : any = {}
	navigation_ui_tri_btn4 : any = {}
	navigation_ui_view_shop : any = {}
	navigation_ui_trg_hide_all_navigation : any = {}
	merchant : any = {}
	accounts : any = {}
	merchant_detail : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	account__detail : any = {}
	action : any = {}
	action_back : any = {}
	action_disable_merchant : any = {}
	action_update_personal_data : any = {}
	action_update_mcc : any = {}
	action_change_mobile_number : any = {}
	action_add_bank_account : any = {}
	action_block_bank_account : any = {}
	action_unblock_bank_account : any = {}
	action_remove_bank_account : any = {}
	action_enroll : any = {}
	action_enroll_shop : any = {}
	action_update_shop_details : any = {}
	action_disable_shop_details : any = {}
	action_set_shop_account : any = {}
	action_remove_shop_bank_account : any = {}
	action_enroll_cash_desk : any = {}
	action_update_cash_desk_details : any = {}
	action_disable_cash_desk_details : any = {}
	action_back_to_view_shop : any = {}
	merchant_setup_widget : any = {}
	queue : any = {}
	sub_navigation_ui : any = {}
	sub_navigation_ui_remove_account : any = {}
	sub_navigation_ui_unblock_account : any = {}
	sub_navigation_ui_block_account : any = {}
	sub_navigation_ui_set_default : any = {}
	sub_navigation_ui_add_bank_accountss : any = {}
	shop_detail : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_req_and_res : any = {}
	history_detail : any = {}
	response_ui : any = {}
	request_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	shop : any = {}
	cash_desk : any = {}
	cash_desk_detail : any = {}
	shop_action : any = {}
	shop_action_enrolment_shop : any = {}
	shop_action_update_shop : any = {}
	shop_action_disable_shop : any = {}
	shop_action_set_shop_default : any = {}
	shop_action_remove_shop_account : any = {}
	cash_desk_action : any = {}
	cash_desk_action_back : any = {}
	cash_desk_action_enrolment_desk : any = {}
	cash_desk_action_update_desk : any = {}
	cash_desk_action_disable_desk : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_c_btn_enb_disbService:npss_c_btn_enb_disbService,private npss_cs_mch_change_mobileService:npss_cs_mch_change_mobileService,private npss_cs_mch_enrolmentService:npss_cs_mch_enrolmentService,private npss_cs_mch_unblock_bank_accountService:npss_cs_mch_unblock_bank_accountService,private npss_cs_mch_remove_bank_accountsService:npss_cs_mch_remove_bank_accountsService,private npss_cs_mch_disableService:npss_cs_mch_disableService,private npss_cs_mch_update_personal_dataService:npss_cs_mch_update_personal_dataService,private npss_cs_mch_add_bank_accountsService:npss_cs_mch_add_bank_accountsService,private npss_cs_mch_block_bank_accountService:npss_cs_mch_block_bank_accountService,private npss_cs_shop_enrolmentService:npss_cs_shop_enrolmentService,private npss_cs_shop_updateService:npss_cs_shop_updateService,private npss_cs_shop_set_bank_accountService:npss_cs_shop_set_bank_accountService,private npss_cs_shop_remove_bank_accountService:npss_cs_shop_remove_bank_accountService,private npss_cs_shop_disableService:npss_cs_shop_disableService) {
    
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
		
		// "Disable" Button of "Navigation UI" component
		this.navigation_ui_disable.label_name = "Disable"
		this.navigation_ui_disable.show = true
		this.navigation_ui_disable.disabled = true
		this.navigation_ui_disable.params = {"icon_only":false,"uicgcc_style":"fa fa-file-zip-o"}
		this.navigation_ui_disable.dynamic_param = {}
		this.navigation_ui_disable.role = []
		this.navigation_ui_disable.action = ""
		
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
		
		// "Update Mcc" Button of "Navigation UI" component
		this.navigation_ui_update_mcc.label_name = "Update Mcc"
		this.navigation_ui_update_mcc.show = true
		this.navigation_ui_update_mcc.disabled = true
		this.navigation_ui_update_mcc.params = {"icon_only":false,"uicgcc_style":"fa fa-chevron-circle-up"}
		this.navigation_ui_update_mcc.dynamic_param = {}
		this.navigation_ui_update_mcc.role = []
		this.navigation_ui_update_mcc.action = ""
		
		// "Add Account" Button of "Navigation UI" component
		this.navigation_ui_add_account.label_name = "Add Account"
		this.navigation_ui_add_account.show = true
		this.navigation_ui_add_account.disabled = true
		this.navigation_ui_add_account.params = {"icon_only":false,"uicgcc_style":"fa fa-plus"}
		this.navigation_ui_add_account.dynamic_param = {}
		this.navigation_ui_add_account.role = []
		this.navigation_ui_add_account.action = ""
		
		// "Block Accounts" Button of "Navigation UI" component
		this.navigation_ui_block_accounts.label_name = "Block Accounts"
		this.navigation_ui_block_accounts.show = true
		this.navigation_ui_block_accounts.disabled = true
		this.navigation_ui_block_accounts.params = {"icon_only":false,"uicgcc_style":"fa fa-ban"}
		this.navigation_ui_block_accounts.dynamic_param = {}
		this.navigation_ui_block_accounts.role = []
		this.navigation_ui_block_accounts.action = ""
		
		// "View Process Log" Button of "Navigation UI" component
		this.navigation_ui_view_process_log.label_name = "View Process Log"
		this.navigation_ui_view_process_log.show = true
		this.navigation_ui_view_process_log.disabled = false
		this.navigation_ui_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_process_log.dynamic_param = {}
		this.navigation_ui_view_process_log.role = []
		this.navigation_ui_view_process_log.action = ""
		
		// "Unblock Accounts" Button of "Navigation UI" component
		this.navigation_ui_unblock_accounts.label_name = "Unblock Accounts"
		this.navigation_ui_unblock_accounts.show = true
		this.navigation_ui_unblock_accounts.disabled = true
		this.navigation_ui_unblock_accounts.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.navigation_ui_unblock_accounts.dynamic_param = {}
		this.navigation_ui_unblock_accounts.role = []
		this.navigation_ui_unblock_accounts.action = ""
		
		// "Remove Accounts" Button of "Navigation UI" component
		this.navigation_ui_remove_accounts.label_name = "Remove Accounts"
		this.navigation_ui_remove_accounts.show = true
		this.navigation_ui_remove_accounts.disabled = true
		this.navigation_ui_remove_accounts.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.navigation_ui_remove_accounts.dynamic_param = {}
		this.navigation_ui_remove_accounts.role = []
		this.navigation_ui_remove_accounts.action = ""
		
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
		
		// "Tri Btn3" Button of "Navigation UI" component
		this.navigation_ui_tri_btn3.label_name = "Tri Btn3"
		this.navigation_ui_tri_btn3.show = true
		this.navigation_ui_tri_btn3.disabled = false
		this.navigation_ui_tri_btn3.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_tri_btn3.dynamic_param = {}
		this.navigation_ui_tri_btn3.role = []
		this.navigation_ui_tri_btn3.action = ""
		
		// "Tri Btn4" Button of "Navigation UI" component
		this.navigation_ui_tri_btn4.label_name = "Tri Btn4"
		this.navigation_ui_tri_btn4.show = true
		this.navigation_ui_tri_btn4.disabled = false
		this.navigation_ui_tri_btn4.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_tri_btn4.dynamic_param = {}
		this.navigation_ui_tri_btn4.role = []
		this.navigation_ui_tri_btn4.action = ""
		
		// "View Shop" Button of "Navigation UI" component
		this.navigation_ui_view_shop.label_name = "View Shop"
		this.navigation_ui_view_shop.show = true
		this.navigation_ui_view_shop.disabled = false
		this.navigation_ui_view_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_shop.dynamic_param = {}
		this.navigation_ui_view_shop.role = []
		this.navigation_ui_view_shop.action = ""
		
		// "Trg Hide All Navigation" Button of "Navigation UI" component
		this.navigation_ui_trg_hide_all_navigation.label_name = "Trg Hide All Navigation"
		this.navigation_ui_trg_hide_all_navigation.show = true
		this.navigation_ui_trg_hide_all_navigation.disabled = false
		this.navigation_ui_trg_hide_all_navigation.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_trg_hide_all_navigation.dynamic_param = {}
		this.navigation_ui_trg_hide_all_navigation.role = []
		this.navigation_ui_trg_hide_all_navigation.action = ""
	
		// Component level properties - "Merchant" 
		this.merchant.uictrl_code = "datatable"
		this.merchant.uicgc_desc = "Merchant"
		this.merchant.uicgc_code = "uicgc_2"
		this.merchant.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.merchant.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276266014","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_PROXY ~NPSSMP","category":"NPSS_MERCHANT_PROXY","loc":"253.99675934606216 386.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssmp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"merchant_name_checked":true,"merchant_tag_checked":true,"mcc_checked":true,"mobile_checked":true,"denomination_checked":true,"vat_number_checked":true,"product_code_checked":true,"group_code_checked":true,"surname_checked":true,"bank_code_checked":true,"proxy_value_checked":true,"proxy_type_checked":true,"email_checked":true,"document_id_checked":true,"channel_name_checked":true,"exhf_id_checked":true,"logo_checked":true,"channel_id_checked":true,"channel_userid_checked":true,"channel_product_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true,"channel_refno_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_TAG","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MCC","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DENOMINATION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VAT_NUMBER","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"LOGO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_PROXY ","alias_name":"NPSSMP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,MERCHANT_NAME,MERCHANT_TAG,MCC,MOBILE,DENOMINATION,VAT_NUMBER,PRODUCT_CODE,GROUP_CODE,BANK_CODE,SURNAME,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,CHANNEL_NAME,LOGO,EXHF_ID,CHANNEL_ID,CHANNEL_USERID,CHANNEL_PRODUCT,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CHANNEL_REFNO,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMP.NPSSMP_ID,NPSSMP.BANKUSERID,NPSSMP.MERCHANT_NAME,NPSSMP.MERCHANT_TAG,NPSSMP.MCC,NPSSMP.MOBILE,NPSSMP.DENOMINATION,NPSSMP.VAT_NUMBER,NPSSMP.PRODUCT_CODE,NPSSMP.GROUP_CODE,NPSSMP.BANK_CODE,NPSSMP.SURNAME,NPSSMP.PROXY_TYPE,NPSSMP.PROXY_VALUE,NPSSMP.EMAIL,NPSSMP.DOCUMENT_ID,NPSSMP.CHANNEL_NAME,NPSSMP.LOGO,NPSSMP.EXHF_ID,NPSSMP.CHANNEL_ID,NPSSMP.CHANNEL_USERID,NPSSMP.CHANNEL_PRODUCT,NPSSMP.CHANNEL_SUB_PRODUCT,NPSSMP.CHANNEL_TRAN_CODE,NPSSMP.CHANNEL_REFNO,NPSSMP.CREATED_BY,NPSSMP.CREATED_BY_NAME,NPSSMP.CREATED_BY_STS_ID,NPSSMP.CREATED_DATE,NPSSMP.DT_CODE,NPSSMP.DT_DESCRIPTION,NPSSMP.DTT_CODE,NPSSMP.DTT_DESCRIPTION,NPSSMP.MODIFIED_BY,NPSSMP.MODIFIED_BY_NAME,NPSSMP.MODIFIED_BY_STS_ID,NPSSMP.MODIFIED_DATE,NPSSMP.PRCT_ID,NPSSMP.STATUS,NPSSMP.PROCESS_STATUS,NPSSMP.SYSTEM_ID,NPSSMP.SYSTEM_NAME,NPSSMP.TENANT_ID,NPSSMP.APP_ID,NPSSMP.VERSION_NO FROM NPSS_MERCHANT_PROXY  NPSSMP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchat Tag","target_column":"MERCHANT_TAG","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		this.merchant.context_menu = []
		this.merchant.views = {}
		this.merchant.onChangecomponent = new EventEmitter<any>()
		this.merchant.show = true
		this.merchant.dynamic_param = {}
	
		// Component level properties - "Accounts" 
		this.accounts.uictrl_code = "datatable"
		this.accounts.uicgc_desc = "Accounts"
		this.accounts.uicgc_code = "uicgc_3"
		this.accounts.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.accounts.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276169608","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_ACCOUNTS ~NPSSMA","category":"NPSS_MERCHANT_ACCOUNTS","loc":"-203.00324065393784 189.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssma_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"default_account_checked":true,"exhf_id_checked":true,"npssmp_id_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395","DTT_1304_1666847369565"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"NPSSMP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_ACCOUNTS ","alias_name":"NPSSMA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,DEFAULT_ACCOUNT,EXHF_ID,NPSSMP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMA.NPSSMA_ID,NPSSMA.PRODUCT_CODE,NPSSMA.BANKUSERID,NPSSMA.IBAN,NPSSMA.CURRENCY,NPSSMA.DEFAULT_ACCOUNT,NPSSMA.EXHF_ID,NPSSMA.NPSSMP_ID,NPSSMA.CREATED_BY,NPSSMA.CREATED_BY_NAME,NPSSMA.CREATED_BY_STS_ID,NPSSMA.CREATED_DATE,NPSSMA.DT_CODE,NPSSMA.DT_DESCRIPTION,NPSSMA.DTT_CODE,NPSSMA.DTT_DESCRIPTION,NPSSMA.MODIFIED_BY,NPSSMA.MODIFIED_BY_NAME,NPSSMA.MODIFIED_BY_STS_ID,NPSSMA.MODIFIED_DATE,NPSSMA.PRCT_ID,NPSSMA.STATUS,NPSSMA.PROCESS_STATUS,NPSSMA.SYSTEM_ID,NPSSMA.SYSTEM_NAME,NPSSMA.TENANT_ID,NPSSMA.APP_ID,NPSSMA.VERSION_NO FROM NPSS_MERCHANT_ACCOUNTS  NPSSMA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Account AQ","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		this.accounts.context_menu = []
		this.accounts.views = {}
		this.accounts.onChangecomponent = new EventEmitter<any>()
		this.accounts.show = true
		this.accounts.dynamic_param = {}
	
		// Component level properties - "Merchant Detail" 
		this.merchant_detail.uictrl_code = "dynamic_ui"
		this.merchant_detail.uicgc_desc = "Merchant Detail"
		this.merchant_detail.uicgc_code = "uicgc_4"
		this.merchant_detail.params = {}
		this.merchant_detail.datasource = {}
		this.merchant_detail.context_menu = []
		this.merchant_detail.views = {"first":"DTT_1304_1666846129395","is_tab_mode":"N","dtt_1304_1666846129395":{"0":[{"dttv_id":"NPSS Merchant UI","tab_order":0,"tab_name":"","uicgc_description":"Merchant Detail","role_description":"default","dtt_description":"NPSS Merchant Proxy"}]}}
		this.merchant_detail.onChangecomponent = new EventEmitter<any>()
		this.merchant_detail.show = true
		this.merchant_detail.dynamic_param = {}
		this.merchant_detail.f_npss_merchant_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.merchant_detail.form_name = "f_npss_merchant_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_6"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1666846129395","is_tab_mode":"N","dtt_1304_1666846129395":{"0":[{"dttv_id":"NPSS Merchant Setup SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Merchant Proxy"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_merchant_setup_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_merchant_setup_srch"
		
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
		this.account__detail.views = {"first":"DTT_1304_1666847369565","is_tab_mode":"N","dtt_1304_1666847369565":{"0":[{"dttv_id":"NPSS Mer Account UI","tab_order":0,"tab_name":"","uicgc_description":"Account  Detail","role_description":"default","dtt_description":"NPSS Merchant Accounts"}]}}
		this.account__detail.onChangecomponent = new EventEmitter<any>()
		this.account__detail.show = true
		this.account__detail.dynamic_param = {}
		this.account__detail.f_npss_mer_account_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.account__detail.form_name = "f_npss_mer_account_ui"
	
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
		
		// "Disable Merchant" Button of "Action" component
		this.action_disable_merchant.label_name = "Disable Merchant"
		this.action_disable_merchant.show = true
		this.action_disable_merchant.disabled = false
		this.action_disable_merchant.params = {"icon_only":false,"uicgcc_style":"fa fa-file-text-o"}
		this.action_disable_merchant.dynamic_param = {}
		this.action_disable_merchant.role = []
		this.action_disable_merchant.action = ""
		
		// "Update Personal Data" Button of "Action" component
		this.action_update_personal_data.label_name = "Update Personal Data"
		this.action_update_personal_data.show = true
		this.action_update_personal_data.disabled = false
		this.action_update_personal_data.params = {"icon_only":false,"uicgcc_style":"fa fa-stack-exchange"}
		this.action_update_personal_data.dynamic_param = {}
		this.action_update_personal_data.role = []
		this.action_update_personal_data.action = ""
		
		// "Update MCC" Button of "Action" component
		this.action_update_mcc.label_name = "Update MCC"
		this.action_update_mcc.show = true
		this.action_update_mcc.disabled = false
		this.action_update_mcc.params = {"icon_only":false,"uicgcc_style":"fa fa-chevron-circle-up"}
		this.action_update_mcc.dynamic_param = {}
		this.action_update_mcc.role = []
		this.action_update_mcc.action = ""
		
		// "Change Mobile Number" Button of "Action" component
		this.action_change_mobile_number.label_name = "Change Mobile Number"
		this.action_change_mobile_number.show = true
		this.action_change_mobile_number.disabled = false
		this.action_change_mobile_number.params = {"icon_only":false,"uicgcc_style":"fa fa-mobile-phone"}
		this.action_change_mobile_number.dynamic_param = {}
		this.action_change_mobile_number.role = []
		this.action_change_mobile_number.action = ""
		
		// "Add Bank Account" Button of "Action" component
		this.action_add_bank_account.label_name = "Add Bank Account"
		this.action_add_bank_account.show = true
		this.action_add_bank_account.disabled = false
		this.action_add_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-bank"}
		this.action_add_bank_account.dynamic_param = {}
		this.action_add_bank_account.role = []
		this.action_add_bank_account.action = ""
		
		// "Block Bank Account" Button of "Action" component
		this.action_block_bank_account.label_name = "Block Bank Account"
		this.action_block_bank_account.show = true
		this.action_block_bank_account.disabled = false
		this.action_block_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-ban"}
		this.action_block_bank_account.dynamic_param = {}
		this.action_block_bank_account.role = []
		this.action_block_bank_account.action = ""
		
		// "Unblock Bank Account" Button of "Action" component
		this.action_unblock_bank_account.label_name = "Unblock Bank Account"
		this.action_unblock_bank_account.show = true
		this.action_unblock_bank_account.disabled = false
		this.action_unblock_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.action_unblock_bank_account.dynamic_param = {}
		this.action_unblock_bank_account.role = []
		this.action_unblock_bank_account.action = ""
		
		// "Remove Bank Account" Button of "Action" component
		this.action_remove_bank_account.label_name = "Remove Bank Account"
		this.action_remove_bank_account.show = true
		this.action_remove_bank_account.disabled = false
		this.action_remove_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.action_remove_bank_account.dynamic_param = {}
		this.action_remove_bank_account.role = []
		this.action_remove_bank_account.action = ""
		
		// "Enroll" Button of "Action" component
		this.action_enroll.label_name = "Enroll"
		this.action_enroll.show = true
		this.action_enroll.disabled = false
		this.action_enroll.params = {"icon_only":false,"uicgcc_style":"fa fa-file-word-o"}
		this.action_enroll.dynamic_param = {}
		this.action_enroll.role = []
		this.action_enroll.action = ""
		
		// "Enroll Shop" Button of "Action" component
		this.action_enroll_shop.label_name = "Enroll Shop"
		this.action_enroll_shop.show = true
		this.action_enroll_shop.disabled = false
		this.action_enroll_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-file-word-o"}
		this.action_enroll_shop.dynamic_param = {}
		this.action_enroll_shop.role = []
		this.action_enroll_shop.action = ""
		
		// "Update Shop Details" Button of "Action" component
		this.action_update_shop_details.label_name = "Update Shop Details"
		this.action_update_shop_details.show = true
		this.action_update_shop_details.disabled = false
		this.action_update_shop_details.params = {"icon_only":false,"uicgcc_style":"fa fa-user-o"}
		this.action_update_shop_details.dynamic_param = {}
		this.action_update_shop_details.role = []
		this.action_update_shop_details.action = ""
		
		// "Disable Shop Details" Button of "Action" component
		this.action_disable_shop_details.label_name = "Disable Shop Details"
		this.action_disable_shop_details.show = true
		this.action_disable_shop_details.disabled = false
		this.action_disable_shop_details.params = {"icon_only":false,"uicgcc_style":"fa fa-file-zip-o"}
		this.action_disable_shop_details.dynamic_param = {}
		this.action_disable_shop_details.role = []
		this.action_disable_shop_details.action = ""
		
		// "Set Shop Account" Button of "Action" component
		this.action_set_shop_account.label_name = "Set Shop Account"
		this.action_set_shop_account.show = true
		this.action_set_shop_account.disabled = false
		this.action_set_shop_account.params = {"icon_only":false,"uicgcc_style":"fa fa-plus"}
		this.action_set_shop_account.dynamic_param = {}
		this.action_set_shop_account.role = []
		this.action_set_shop_account.action = ""
		
		// "Remove Shop Bank Account" Button of "Action" component
		this.action_remove_shop_bank_account.label_name = "Remove Shop Bank Account"
		this.action_remove_shop_bank_account.show = true
		this.action_remove_shop_bank_account.disabled = false
		this.action_remove_shop_bank_account.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.action_remove_shop_bank_account.dynamic_param = {}
		this.action_remove_shop_bank_account.role = []
		this.action_remove_shop_bank_account.action = ""
		
		// "Enroll Cash Desk" Button of "Action" component
		this.action_enroll_cash_desk.label_name = "Enroll Cash Desk"
		this.action_enroll_cash_desk.show = true
		this.action_enroll_cash_desk.disabled = false
		this.action_enroll_cash_desk.params = {"icon_only":false,"uicgcc_style":""}
		this.action_enroll_cash_desk.dynamic_param = {}
		this.action_enroll_cash_desk.role = []
		this.action_enroll_cash_desk.action = ""
		
		// "Update Cash Desk Details" Button of "Action" component
		this.action_update_cash_desk_details.label_name = "Update Cash Desk Details"
		this.action_update_cash_desk_details.show = true
		this.action_update_cash_desk_details.disabled = false
		this.action_update_cash_desk_details.params = {"icon_only":false,"uicgcc_style":"fa fa-user-o"}
		this.action_update_cash_desk_details.dynamic_param = {}
		this.action_update_cash_desk_details.role = []
		this.action_update_cash_desk_details.action = ""
		
		// "Disable Cash Desk Details" Button of "Action" component
		this.action_disable_cash_desk_details.label_name = "Disable Cash Desk Details"
		this.action_disable_cash_desk_details.show = true
		this.action_disable_cash_desk_details.disabled = false
		this.action_disable_cash_desk_details.params = {"icon_only":false,"uicgcc_style":"fa fa-file-zip-o"}
		this.action_disable_cash_desk_details.dynamic_param = {}
		this.action_disable_cash_desk_details.role = []
		this.action_disable_cash_desk_details.action = ""
		
		// "Back to View Shop" Button of "Action" component
		this.action_back_to_view_shop.label_name = "Back to View Shop"
		this.action_back_to_view_shop.show = true
		this.action_back_to_view_shop.disabled = false
		this.action_back_to_view_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.action_back_to_view_shop.dynamic_param = {}
		this.action_back_to_view_shop.role = []
		this.action_back_to_view_shop.action = ""
	
		// Component level properties - "Merchant Setup Widget" 
		this.merchant_setup_widget.uictrl_code = "custom_widget"
		this.merchant_setup_widget.uicgc_desc = "Merchant Setup Widget"
		this.merchant_setup_widget.uicgc_code = "uicgc_9"
		this.merchant_setup_widget.params = {}
		this.merchant_setup_widget.datasource = {}
		this.merchant_setup_widget.context_menu = []
		this.merchant_setup_widget.views = {}
		this.merchant_setup_widget.onChangecomponent = new EventEmitter<any>()
		this.merchant_setup_widget.show = true
		this.merchant_setup_widget.dynamic_param = {}
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_10"
		this.queue.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.queue.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276345803","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671275017464","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSMP_ID,   T.BANKUSERID,   T.MERCHANT_NAME,   T.MERCHANT_TAG,   T.MCC,   T.MOBILE,   T.DENOMINATION,   T.VAT_NUMBER,   T.PRODUCT_CODE,   T.GROUP_CODE,   T.BANK_CODE,   T.SURNAME,   T.PROXY_TYPE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.CHANNEL_NAME,   T.LOGO,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.CHANNEL_REFNO,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   npss_merchant_proxy T  left join TRANSACTION_SET TS on   T.NPSSMP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		
		// "Remove Account" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_remove_account.label_name = "Remove Account"
		this.sub_navigation_ui_remove_account.show = true
		this.sub_navigation_ui_remove_account.disabled = true
		this.sub_navigation_ui_remove_account.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.sub_navigation_ui_remove_account.dynamic_param = {}
		this.sub_navigation_ui_remove_account.role = []
		this.sub_navigation_ui_remove_account.action = ""
		
		// "Unblock Account" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_unblock_account.label_name = "Unblock Account"
		this.sub_navigation_ui_unblock_account.show = true
		this.sub_navigation_ui_unblock_account.disabled = false
		this.sub_navigation_ui_unblock_account.params = {"icon_only":false,"uicgcc_style":"fa fa-check-circle"}
		this.sub_navigation_ui_unblock_account.dynamic_param = {}
		this.sub_navigation_ui_unblock_account.role = []
		this.sub_navigation_ui_unblock_account.action = ""
		
		// "Block Account" Button of "Sub Navigation UI" component
		this.sub_navigation_ui_block_account.label_name = "Block Account"
		this.sub_navigation_ui_block_account.show = true
		this.sub_navigation_ui_block_account.disabled = false
		this.sub_navigation_ui_block_account.params = {"icon_only":false,"uicgcc_style":""}
		this.sub_navigation_ui_block_account.dynamic_param = {}
		this.sub_navigation_ui_block_account.role = []
		this.sub_navigation_ui_block_account.action = ""
		
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
	
		// Component level properties - "Shop Detail" 
		this.shop_detail.uictrl_code = "dynamic_ui"
		this.shop_detail.uicgc_desc = "Shop Detail"
		this.shop_detail.uicgc_code = "uicgc_12"
		this.shop_detail.params = {}
		this.shop_detail.datasource = {}
		this.shop_detail.context_menu = []
		this.shop_detail.views = {"first":"DTT_1304_1666847660575","is_tab_mode":"N","dtt_1304_1666847660575":{"0":[{"dttv_id":"NPSS Shop UI","tab_order":0,"tab_name":"","uicgc_description":"Shop Detail","role_description":"default","dtt_description":"NPSS Merchant Shops"}]}}
		this.shop_detail.onChangecomponent = new EventEmitter<any>()
		this.shop_detail.show = true
		this.shop_detail.dynamic_param = {}
		this.shop_detail.f_npss_shop_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.shop_detail.form_name = "f_npss_shop_ui"
	
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
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_14"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671521464798","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM HST Plog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1671521093141","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1671521093317","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1671521093493","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1671521093669","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1671521093853","date_format":false},{"column_name":"process_ref_no","alias_name":"","mq_id":"MQ_1671521134065","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  RESULT,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  DTT_CODE,  TENANT_ID,  DT_CODE FROM  (  SELECT   NSTPL.NPSSSMTPL_ID,  NSTPL.BANKUSERID,  NSTPL.PROCESS_NAME,  NSTPL.PROCESSING_SYSTEM,  NSTPL.RESULT_CODE,  NSTPL.RESULT,  NSTPL.RESULT_MESSAGE,  NSTPL.RESULT_X_REQUEST_ID,  NSTPL.PROCESS_REF_NO,  NSTPL.REQUEST_DATA_JSON,  NSTPL.RESPONSE_DATA_JSON,  NSTPL.CHANNEL_ID,  NSTPL.CHANNEL_REFNO,  NSTPL.CHANNEL_USERID,  NSTPL.CHANNEL_PRODUCT,  NSTPL.CHANNEL_SUB_PRODUCT,  NSTPL.CHANNEL_TRAN_CODE,  NSTPL.DTT_CODE,  NSTPL.TENANT_ID,  NSTPL.DT_CODE  FROM   NPSS_SM_TRN_PROCESS_LOG NSTPL    ORDER BY NPSSSMTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM HST Plog MQ CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Ref No","target_column":"process_ref_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Response UI" 
		this.response_ui.uictrl_code = "dynamic_ui"
		this.response_ui.uicgc_desc = "Response UI"
		this.response_ui.uicgc_code = "uicgc_15"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1666847230281","is_tab_mode":"N","dtt_1304_1666847230281":{"0":[{"dttv_id":"NPSS SM Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS SM Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_sm_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_sm_response_ui"
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_16"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1666847230281","is_tab_mode":"N","dtt_1304_1666847230281":{"0":[{"dttv_id":"NPSS SM Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS SM Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_sm_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_sm_request_ui"
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_17"
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
	
		// Component level properties - "Shop" 
		this.shop.uictrl_code = "datatable"
		this.shop.uicgc_desc = "Shop"
		this.shop.uicgc_code = "uicgc_18"
		this.shop.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.shop.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671692481619","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMS_ID,        BANKUSERID,        SHOP_MID,        SHOP_NAME,        SHOP_ID,        SHOP_TYPE,        SHOP_MCC,        SHOP_IBAN,        BUILDING,        STREET,        CITY,        POSTAL_CODE,        COUNTY,        COUNTRY,        STATUS,        PROCESS_STATUS,        TENANT_ID,        CREATED_DATE   FROM (SELECT S.NPSSMS_ID,                S.PRODUCT_CODE,                S.BANKUSERID,                S.SHOP_NAME,                S.SHOP_MID,                S.SHOP_ID,                S.SHOP_TYPE,                S.SHOP_MCC,                S.SHOP_IBAN,                S.BUILDING,                S.STREET,                S.CITY,                S.POSTAL_CODE,                S.COUNTY,                S.COUNTRY,                S.EXHF_ID,                S.STATUS,                S.PROCESS_STATUS,                S.TENANT_ID,                S.CREATED_DATE           FROM NPSS_MERCHANT_SHOPS S) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.shop.context_menu = []
		this.shop.views = {}
		this.shop.onChangecomponent = new EventEmitter<any>()
		this.shop.show = true
		this.shop.dynamic_param = {}
	
		// Component level properties - "Cash Desk" 
		this.cash_desk.uictrl_code = "datatable"
		this.cash_desk.uicgc_desc = "Cash Desk"
		this.cash_desk.uicgc_code = "uicgc_19"
		this.cash_desk.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.cash_desk.datasource = {"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671623568676","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMC_ID,        BANKUSERID,        CASHDESK_ID,        CASHDESK_OVERLAY_ID,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT C.NPSSMC_ID,                C.BANKUSERID,                C.CASHDESK_ID,                C.CASHDESK_OVERLAY_ID,                C.CREATED_DATE,                C.STATUS,                C.PROCESS_STATUS,                C.TENANT_ID,                C.DTT_CODE,                C.DT_CODE           FROM NPSS_MERCHANT_CASHDESK C) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.cash_desk.context_menu = []
		this.cash_desk.views = {}
		this.cash_desk.onChangecomponent = new EventEmitter<any>()
		this.cash_desk.show = true
		this.cash_desk.dynamic_param = {}
	
		// Component level properties - "Cash Desk Detail" 
		this.cash_desk_detail.uictrl_code = "dynamic_ui"
		this.cash_desk_detail.uicgc_desc = "Cash Desk Detail"
		this.cash_desk_detail.uicgc_code = "uicgc_20"
		this.cash_desk_detail.params = {}
		this.cash_desk_detail.datasource = {}
		this.cash_desk_detail.context_menu = []
		this.cash_desk_detail.views = {"first":"DTT_1304_1666848298941","is_tab_mode":"N","dtt_1304_1666848298941":{"0":[{"dttv_id":"NPSS Cash Desk UI","tab_order":0,"tab_name":"","uicgc_description":"Cash Desk Detail","role_description":"default","dtt_description":"NPSS Merchant Cashdesk"}]}}
		this.cash_desk_detail.onChangecomponent = new EventEmitter<any>()
		this.cash_desk_detail.show = true
		this.cash_desk_detail.dynamic_param = {}
		this.cash_desk_detail.f_npss_cash_desk_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.cash_desk_detail.form_name = "f_npss_cash_desk_ui"
	
		// Component level properties - "Shop Action" 
		this.shop_action.uictrl_code = "dynamic_ui"
		this.shop_action.uicgc_desc = "Shop Action"
		this.shop_action.uicgc_code = "uicgc_21"
		this.shop_action.params = {}
		this.shop_action.datasource = {}
		this.shop_action.context_menu = []
		this.shop_action.views = {}
		this.shop_action.onChangecomponent = new EventEmitter<any>()
		this.shop_action.show = true
		this.shop_action.dynamic_param = {}
		this.shop_action.f_shop_action = {"show":true}
		this.shop_action.current_view = "f_shop_action"
		
		// "Enrolment Shop" Button of "Shop Action" component
		this.shop_action_enrolment_shop.label_name = "Enrolment Shop"
		this.shop_action_enrolment_shop.show = true
		this.shop_action_enrolment_shop.disabled = true
		this.shop_action_enrolment_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-file-archive-o"}
		this.shop_action_enrolment_shop.dynamic_param = {}
		this.shop_action_enrolment_shop.role = []
		this.shop_action_enrolment_shop.action = ""
		
		// "Update Shop" Button of "Shop Action" component
		this.shop_action_update_shop.label_name = "Update Shop"
		this.shop_action_update_shop.show = true
		this.shop_action_update_shop.disabled = true
		this.shop_action_update_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-user-o"}
		this.shop_action_update_shop.dynamic_param = {}
		this.shop_action_update_shop.role = []
		this.shop_action_update_shop.action = ""
		
		// "Disable Shop" Button of "Shop Action" component
		this.shop_action_disable_shop.label_name = "Disable Shop"
		this.shop_action_disable_shop.show = true
		this.shop_action_disable_shop.disabled = true
		this.shop_action_disable_shop.params = {"icon_only":false,"uicgcc_style":"fa fa-file-zip-o"}
		this.shop_action_disable_shop.dynamic_param = {}
		this.shop_action_disable_shop.role = []
		this.shop_action_disable_shop.action = ""
		
		// "Set Shop Default" Button of "Shop Action" component
		this.shop_action_set_shop_default.label_name = "Set Shop Default"
		this.shop_action_set_shop_default.show = true
		this.shop_action_set_shop_default.disabled = true
		this.shop_action_set_shop_default.params = {"icon_only":false,"uicgcc_style":"fa fa-plus"}
		this.shop_action_set_shop_default.dynamic_param = {}
		this.shop_action_set_shop_default.role = []
		this.shop_action_set_shop_default.action = ""
		
		// "Remove Shop Account" Button of "Shop Action" component
		this.shop_action_remove_shop_account.label_name = "Remove Shop Account"
		this.shop_action_remove_shop_account.show = true
		this.shop_action_remove_shop_account.disabled = true
		this.shop_action_remove_shop_account.params = {"icon_only":false,"uicgcc_style":"fa fa-remove"}
		this.shop_action_remove_shop_account.dynamic_param = {}
		this.shop_action_remove_shop_account.role = []
		this.shop_action_remove_shop_account.action = ""
	
		// Component level properties - "Cash Desk Action" 
		this.cash_desk_action.uictrl_code = "dynamic_ui"
		this.cash_desk_action.uicgc_desc = "Cash Desk Action"
		this.cash_desk_action.uicgc_code = "uicgc_22"
		this.cash_desk_action.params = {}
		this.cash_desk_action.datasource = {}
		this.cash_desk_action.context_menu = []
		this.cash_desk_action.views = {}
		this.cash_desk_action.onChangecomponent = new EventEmitter<any>()
		this.cash_desk_action.show = true
		this.cash_desk_action.dynamic_param = {}
		this.cash_desk_action.f_cash_desk_action = {"show":true}
		this.cash_desk_action.current_view = "f_cash_desk_action"
		
		// "Back" Button of "Cash Desk Action" component
		this.cash_desk_action_back.label_name = "Back"
		this.cash_desk_action_back.show = true
		this.cash_desk_action_back.disabled = false
		this.cash_desk_action_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.cash_desk_action_back.dynamic_param = {}
		this.cash_desk_action_back.role = []
		this.cash_desk_action_back.action = ""
		
		// "Enrolment Desk" Button of "Cash Desk Action" component
		this.cash_desk_action_enrolment_desk.label_name = "Enrolment Desk"
		this.cash_desk_action_enrolment_desk.show = true
		this.cash_desk_action_enrolment_desk.disabled = true
		this.cash_desk_action_enrolment_desk.params = {"icon_only":false,"uicgcc_style":"fa fa-file-word-o"}
		this.cash_desk_action_enrolment_desk.dynamic_param = {}
		this.cash_desk_action_enrolment_desk.role = []
		this.cash_desk_action_enrolment_desk.action = ""
		
		// "Update Desk" Button of "Cash Desk Action" component
		this.cash_desk_action_update_desk.label_name = "Update Desk"
		this.cash_desk_action_update_desk.show = true
		this.cash_desk_action_update_desk.disabled = true
		this.cash_desk_action_update_desk.params = {"icon_only":false,"uicgcc_style":"fa fa-user-o"}
		this.cash_desk_action_update_desk.dynamic_param = {}
		this.cash_desk_action_update_desk.role = []
		this.cash_desk_action_update_desk.action = ""
		
		// "Disable Desk" Button of "Cash Desk Action" component
		this.cash_desk_action_disable_desk.label_name = "Disable Desk"
		this.cash_desk_action_disable_desk.show = true
		this.cash_desk_action_disable_desk.disabled = true
		this.cash_desk_action_disable_desk.params = {"icon_only":false,"uicgcc_style":"fa fa-file-zip-o"}
		this.cash_desk_action_disable_desk.dynamic_param = {}
		this.cash_desk_action_disable_desk.role = []
		this.cash_desk_action_disable_desk.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__de_for_un_entrol()
		this.page_load__de_for_cmn()
		this.page_load__de_for_up()
		this.page_load__he_for_trg_btn_2()
		this.page_load__he_for_trg_btn1()
		this.page_load__he_for_add_account()
		this.page_load__de_for_remove()
		this.page_load__de_for_set_default()
		this.page_load__he_for_block_unblk()
		this.page_load__de_for_nav_block()
		this.page_load__de_for_nav_add_acc()
		this.page_load__de_for_vpl_from_pl()
		this.page_load__de_for_unblock_btn()
		this.page_load__de_for_update_mcc_btn()
		this.page_load__he_for_bun_3()
		this.page_load__he_for_btn_4()
		this.page_load__de_for_vscd_button()
		this.page_load__de_frompl()
		this.page_load__he_for_trg_hide_all_nav()
		this.page_load__tbc_for_trg_hide_all_nav_btn()
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
		this.search_search__ssp_for_search_btn()
	}

	//Handler for INTERNAL event of "ssp for search btn"
	ssp_for_search_btn__internal(parent_event_result){
		this.ssp_for_search_btn__brfq_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__internal(parent_event_result){
		this.brfq_for_queue__sfr_for_queue(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "merchant"
	merchant__selection_changed(){
		this.merchant__svmfor_cpl()
		this.merchant__ssr_for_customer_to_cust_detail()
		this.merchant__tbc_for_cpl()
		this.merchant__ee_for_vpl()
		this.merchant__ee_for_vscd_btn()
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui disable"
	navigation_ui_disable__action_button_click(){
		this.navigation_ui_disable__sp_for_unentrol()
		this.navigation_ui_disable__se_for_nav_to_action_unentrol()
		this.navigation_ui_disable__cc_for_unentrol_enab_disab()
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
		this.accounts__ee_for_remove()
		this.accounts__ee_for_set_default()
		this.accounts__ee_for_block_unblk()
		this.accounts__ee_for_nav_block()
		this.accounts__ee_for_nav_add_ac()
		this.accounts__ee_for_unblock_btn()
		this.accounts__ee_for_update_mcc_btn()
		this.accounts__ee_for_remove_account()
		this.accounts__ee_for_enroll_shop()
	}

	//Handler for INTERNAL event of "svm for accounts"
	svm_for_accounts__internal(parent_event_result){
		this.svm_for_accounts__cc_for_acc_show_hide(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for acc show hide"
	cc_for_acc_show_hide__internal(parent_event_result){
		this.cc_for_acc_show_hide__brfq_for_shop_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for shop list"
	brfq_for_shop_list__internal(parent_event_result){
		this.brfq_for_shop_list__sfr_for_shop(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "action change mobile number"
	action_change_mobile_number__action_button_click(){
		this.action_change_mobile_number__cc_for_change_mob_no()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action back"
	action_back__action_button_click(){
		this.action_back__rs_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action enroll"
	action_enroll__action_button_click(){
		this.action_enroll__cc_for_customer_entroll()
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove account"
	sub_navigation_ui_remove_account__action_button_click(){
		this.sub_navigation_ui_remove_account__cc_for_enable_disable_for_remove()
		this.sub_navigation_ui_remove_account__sp_for_rem_acc()
		this.sub_navigation_ui_remove_account__se_for_act_rem_bank_acc()
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui set default"
	sub_navigation_ui_set_default__action_button_click(){
		this.sub_navigation_ui_set_default__cc_for_enable_disable_for_set_default()
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui unblock account"
	sub_navigation_ui_unblock_account__action_button_click(){
		this.sub_navigation_ui_unblock_account__sp_for_unblock()
		this.sub_navigation_ui_unblock_account__cc_for_enable_disable_for_unblk()
		this.sub_navigation_ui_unblock_account__se_for_unblock_accpunt()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui add account"
	navigation_ui_add_account__action_button_click(){
		this.navigation_ui_add_account__sp_for_nav_add_acc()
		this.navigation_ui_add_account__cc_for_nav_add_acc()
		this.navigation_ui_add_account__se_for_nav_add_acc()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block accounts"
	navigation_ui_block_accounts__action_button_click(){
		this.navigation_ui_block_accounts__sp_for_nav_block()
		this.navigation_ui_block_accounts__cc_for_nav_block()
		this.navigation_ui_block_accounts__se_for_nav_block()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__action_button_click(){
		this.navigation_ui_view_process_log__sp_for_vpl()
		this.navigation_ui_view_process_log__brfq_for_hdl()
	}

	//Handler for INTERNAL event of "brfq for hdl"
	brfq_for_hdl__internal(parent_event_result){
		this.brfq_for_hdl__sfr_for_history_detail(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_reqres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__sp_for_vreq()
		this.process_log_ui_view_req_and_res__bt_vreq()
		this.process_log_ui_view_req_and_res__bt_vres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_to_main_layout()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ee_for_vreq_vres()
		this.history_detail__ssr_from_hd_to_response()
		this.history_detail__ssr_from_hd_to_req()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unblock accounts"
	navigation_ui_unblock_accounts__action_button_click(){
		this.navigation_ui_unblock_accounts__se_for_unblock_btn()
		this.navigation_ui_unblock_accounts__sp_for_unblock_btn()
		this.navigation_ui_unblock_accounts__cc_for_unblock_btn_enab_disab()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action unblock bank account"
	action_unblock_bank_account__action_button_click(){
		this.action_unblock_bank_account__cc_for_unblock_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update mcc"
	navigation_ui_update_mcc__action_button_click(){
		this.navigation_ui_update_mcc__se_for_update_mcc_btn()
		this.navigation_ui_update_mcc__sp_for_update_mcc()
		this.navigation_ui_update_mcc__cc_for_update_mcc_en_di()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action update mcc"
	action_update_mcc__action_button_click(){
		this.action_update_mcc__cc_for_update_mcc()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove accounts"
	navigation_ui_remove_accounts__action_button_click(){
		this.navigation_ui_remove_accounts__se_for_remove_account()
		this.navigation_ui_remove_accounts__sp_for_remove_account()
		this.navigation_ui_remove_accounts__cc_for_remove_account_en_di()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action remove bank account"
	action_remove_bank_account__action_button_click(){
		this.action_remove_bank_account__cc_for_remove_account()
	}

	//Handler for SELECTION_CHANGED event of "shop"
	shop__selection_changed(){
		this.shop__ee_for_remove_shop()
		this.shop__ee_for_update_shop()
		this.shop__ee_for_diasble_shop()
		this.shop__ee_for_set_shop_bank_account()
		this.shop__tbc_for_button_3()
		this.shop__ssr_for_shop_detail()
		this.shop__ee_for_enrollment_cashdesk()
		this.shop__svm_for_shop()
		this.shop__ee_for_shop_enrolment_btn()
		this.shop__bt_for_shop_dtl()
		this.shop__bt_for_accountdtl()
		this.shop__bt_for_cashdesk_detail()
		this.shop__bt_for_merchant_detail()
	}

	//Handler for INTERNAL event of "svm for shop"
	svm_for_shop__internal(parent_event_result){
		this.svm_for_shop__brfq_for_cashdesk_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for cashdesk list"
	brfq_for_cashdesk_list__internal(){
		this.brfq_for_cashdesk_list__sfr_for_cashdesk()
	}

	//Handler for SELECTION_CHANGED event of "cash desk"
	cash_desk__selection_changed(){
		this.cash_desk__ee_for_disable_cd()
		this.cash_desk__ee_for_entrol_cd()
		this.cash_desk__ee_for_update_cd()
		this.cash_desk__ssr_for_cashdesk_dtl()
		this.cash_desk__tbc_for_btn4()
	}

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action disable desk"
	cash_desk_action_disable_desk__action_button_click(){
		this.cash_desk_action_disable_desk__sp_for_disable_cd()
		this.cash_desk_action_disable_desk__cc__for_disable_cd_ena_dis()
		this.cash_desk_action_disable_desk__se_for_disable_cd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action enrolment desk"
	cash_desk_action_enrolment_desk__action_button_click(){
		this.cash_desk_action_enrolment_desk__sp_for_enroll_cd()
		this.cash_desk_action_enrolment_desk__cc__for_enroll_cd_ena_dis()
		this.cash_desk_action_enrolment_desk__se_for_enroll_cd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action update desk"
	cash_desk_action_update_desk__action_button_click(){
		this.cash_desk_action_update_desk__sp_for_update_cd()
		this.cash_desk_action_update_desk__cc__for_update_cd_ena_dis()
		this.cash_desk_action_update_desk__se_for_update_cd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action enroll cash desk"
	action_enroll_cash_desk__action_button_click(){
		this.action_enroll_cash_desk__cc_for_enroll_cd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action update cash desk details"
	action_update_cash_desk_details__action_button_click(){
		this.action_update_cash_desk_details__cc__for_update_cd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action disable cash desk details"
	action_disable_cash_desk_details__action_button_click(){
		this.action_disable_cash_desk_details__cc__for_disable_cd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action disable merchant"
	action_disable_merchant__action_button_click(){
		this.action_disable_merchant__cc_for_disable()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action update personal data"
	action_update_personal_data__action_button_click(){
		this.action_update_personal_data__cc_for_update_perosal()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action add bank account"
	action_add_bank_account__action_button_click(){
		this.action_add_bank_account__cc_for_add_acoount_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action block bank account"
	action_block_bank_account__action_button_click(){
		this.action_block_bank_account__cc_for_block_account()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop action enrolment shop"
	shop_action_enrolment_shop__action_button_click(){
		this.shop_action_enrolment_shop__se_for_entrol_shop()
		this.shop_action_enrolment_shop__cc_for_shop_enrollment_enab()
		this.shop_action_enrolment_shop__sp_for_shop_enroll()
		this.shop_action_enrolment_shop__cu_for_enroll_shop_to_shop_dtl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop action disable shop"
	shop_action_disable_shop__action_button_click(){
		this.shop_action_disable_shop__se_for_disable_shop()
		this.shop_action_disable_shop__cc_for_disable_shop_ena()
		this.shop_action_disable_shop__sp_for_disable_shop()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop action update shop"
	shop_action_update_shop__action_button_click(){
		this.shop_action_update_shop__se_for_update_shop()
		this.shop_action_update_shop__sp_for_update_shop()
		this.shop_action_update_shop__cc_for_update_shop_ena()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop action set shop default"
	shop_action_set_shop_default__action_button_click(){
		this.shop_action_set_shop_default__se_for_set_bank_account()
		this.shop_action_set_shop_default__sp_for_set_shop_account()
		this.shop_action_set_shop_default__cc_for_set_shop_bank_account_enab()
	}

	//Handler for ACTION_BUTTON_CLICK event of "shop action remove shop account"
	shop_action_remove_shop_account__action_button_click(){
		this.shop_action_remove_shop_account__se_for_remove_shop_account()
		this.shop_action_remove_shop_account__cc_for_remove_shop_account_ena_dis()
		this.shop_action_remove_shop_account__sp_for_remove_shop_account()
		this.shop_action_remove_shop_account__he_for_act_rba()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action enroll shop"
	action_enroll_shop__action_button_click(){
		this.action_enroll_shop__cc_for_enroll_shop()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action update shop details"
	action_update_shop_details__action_button_click(){
		this.action_update_shop_details__cc_for_update_shop()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action set shop account"
	action_set_shop_account__action_button_click(){
		this.action_set_shop_account__cc_for_set_shop_account()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action remove shop bank account"
	action_remove_shop_bank_account__action_button_click(){
		this.action_remove_shop_bank_account__cc_for_remove__shop()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action disable shop details"
	action_disable_shop_details__action_button_click(){
		this.action_disable_shop_details__cc_for_disable_shop()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui tri btn3"
	navigation_ui_tri_btn3__action_button_click(){
		this.navigation_ui_tri_btn3__bt_for_shop_detail()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui tri btn4"
	navigation_ui_tri_btn4__action_button_click(){
		this.navigation_ui_tri_btn4__bt_for_cashdesk()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view shop"
	navigation_ui_view_shop__action_button_click(){
		this.navigation_ui_view_shop__sp_for_view_sh_cash_desk_btn()
		this.navigation_ui_view_shop__brfq_from_shop_to_vscd_btn()
	}

	//Handler for INTERNAL event of "brfq from shop to vscd btn"
	brfq_from_shop_to_vscd_btn__internal(parent_event_result){
		this.brfq_from_shop_to_vscd_btn__sfr_for_shop_details(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action back"
	cash_desk_action_back__action_button_click(){
		this.cash_desk_action_back__sp_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "action back to view shop"
	action_back_to_view_shop__action_button_click(){
		this.action_back_to_view_shop__sp_for_action_view_shop()
		this.action_back_to_view_shop__tbc_for_trg_hide_all_nav()
	}

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block account"
	sub_navigation_ui_block_account__action_button_click(){
		this.sub_navigation_ui_block_account__cc_for_show_hide_for_block_acc()
		this.sub_navigation_ui_block_account__sp_for_block_acc()
		this.sub_navigation_ui_block_account__se_for_block_cnk_acc()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__action_button_click(){
		this.navigation_ui_trg_hide_all_navigation__he_for_enroll_shop()
		this.navigation_ui_trg_hide_all_navigation__he_for_disable_shop()
		this.navigation_ui_trg_hide_all_navigation__he_for_set_shop_account()
		this.navigation_ui_trg_hide_all_navigation__he_for_action_add_account()
		this.navigation_ui_trg_hide_all_navigation__he_for_action_change_mob()
		this.navigation_ui_trg_hide_all_navigation__he_for_remove_account()
		this.navigation_ui_trg_hide_all_navigation__he_for_enroll_cd()
		this.navigation_ui_trg_hide_all_navigation__he_for_block_unblock()
		this.navigation_ui_trg_hide_all_navigation__e_1671620248127()
		this.navigation_ui_trg_hide_all_navigation__he_for_update_personal_data()
		this.navigation_ui_trg_hide_all_navigation__he_for_unblock_btn()
		this.navigation_ui_trg_hide_all_navigation__he_for_action_unentrol()
		this.navigation_ui_trg_hide_all_navigation__he_for_action_entrol()
		this.navigation_ui_trg_hide_all_navigation__he_for_remove_shop()
		this.navigation_ui_trg_hide_all_navigation__he_for_disable_cd()
		this.navigation_ui_trg_hide_all_navigation__he_for_update_mcc_btn()
		this.navigation_ui_trg_hide_all_navigation__he_for_update_cd()
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
	page_load__de_for_un_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_disable"
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
	page_load__de_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sub_navigation_ui_remove_account"
		let parent_source_id=""
		let event_code="e_1671021691214"
		let event_params={"caller_name":"page_load__de_for_remove","event_desc":"DE for Remove","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
		let destn_id="sub_navigation_ui_unblock_account"
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
	page_load__de_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_block_accounts"
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
	page_load__de_for_vpl_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1671513805792"
		let event_params={"caller_name":"page_load__de_for_vpl_from_pl","event_desc":"DE for VPL from PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_unblock_accounts"
		let parent_source_id=""
		let event_code="e_1671598877588"
		let event_params={"caller_name":"page_load__de_for_unblock_btn","event_desc":"DE for unblock btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_update_mcc_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_update_mcc"
		let parent_source_id=""
		let event_code="e_1671599264162"
		let event_params={"caller_name":"page_load__de_for_update_mcc_btn","event_desc":"DE for Update MCC btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_bun_3() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_tri_btn3"
		let parent_source_id=""
		let event_code="e_1671623187273"
		let event_params={"caller_name":"page_load__he_for_bun_3","event_desc":"HE for bun 3","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_btn_4() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_tri_btn4"
		let parent_source_id=""
		let event_code="e_1671623226073"
		let event_params={"caller_name":"page_load__he_for_btn_4","event_desc":"HE for btn 4","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de_for_vscd_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_shop"
		let parent_source_id=""
		let event_code="e_1671688626929"
		let event_params={"caller_name":"page_load__de_for_vscd_button","event_desc":"DE for vscd button","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_frompl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_remove_accounts"
		let parent_source_id=""
		let event_code="e_1671774089662"
		let event_params={"caller_name":"page_load__de_frompl","event_desc":"DE frompl","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_trg_hide_all_nav() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_trg_hide_all_navigation"
		let parent_source_id=""
		let event_code="e_1671789258696"
		let event_params={"caller_name":"page_load__he_for_trg_hide_all_nav","event_desc":"HE for Trg hide all nav","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__tbc_for_trg_hide_all_nav_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_trg_hide_all_navigation"
		let parent_source_id=""
		let event_code="e_1671789321325"
		let event_params={"caller_name":"page_load__tbc_for_trg_hide_all_nav_btn","event_desc":"TBC for Trg hide all nav btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276169608","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_ACCOUNTS ~NPSSMA","category":"NPSS_MERCHANT_ACCOUNTS","loc":"-203.00324065393784 189.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssma_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"default_account_checked":true,"exhf_id_checked":true,"npssmp_id_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395","DTT_1304_1666847369565"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"NPSSMP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_ACCOUNTS ","alias_name":"NPSSMA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,DEFAULT_ACCOUNT,EXHF_ID,NPSSMP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMA.NPSSMA_ID,NPSSMA.PRODUCT_CODE,NPSSMA.BANKUSERID,NPSSMA.IBAN,NPSSMA.CURRENCY,NPSSMA.DEFAULT_ACCOUNT,NPSSMA.EXHF_ID,NPSSMA.NPSSMP_ID,NPSSMA.CREATED_BY,NPSSMA.CREATED_BY_NAME,NPSSMA.CREATED_BY_STS_ID,NPSSMA.CREATED_DATE,NPSSMA.DT_CODE,NPSSMA.DT_DESCRIPTION,NPSSMA.DTT_CODE,NPSSMA.DTT_DESCRIPTION,NPSSMA.MODIFIED_BY,NPSSMA.MODIFIED_BY_NAME,NPSSMA.MODIFIED_BY_STS_ID,NPSSMA.MODIFIED_DATE,NPSSMA.PRCT_ID,NPSSMA.STATUS,NPSSMA.PROCESS_STATUS,NPSSMA.SYSTEM_ID,NPSSMA.SYSTEM_NAME,NPSSMA.TENANT_ID,NPSSMA.APP_ID,NPSSMA.VERSION_NO FROM NPSS_MERCHANT_ACCOUNTS  NPSSMA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Account AQ","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		let destn_id="merchant"
		let parent_source_id=""
		let event_code="e_1671013056752"
		let event_params={"caller_name":"search_search__cu_for_customer","event_desc":"CU for customer","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276266014","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_PROXY ~NPSSMP","category":"NPSS_MERCHANT_PROXY","loc":"253.99675934606216 386.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssmp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"merchant_name_checked":true,"merchant_tag_checked":true,"mcc_checked":true,"mobile_checked":true,"denomination_checked":true,"vat_number_checked":true,"product_code_checked":true,"group_code_checked":true,"surname_checked":true,"bank_code_checked":true,"proxy_value_checked":true,"proxy_type_checked":true,"email_checked":true,"document_id_checked":true,"channel_name_checked":true,"exhf_id_checked":true,"logo_checked":true,"channel_id_checked":true,"channel_userid_checked":true,"channel_product_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true,"channel_refno_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_TAG","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MCC","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DENOMINATION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VAT_NUMBER","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"LOGO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_PROXY ","alias_name":"NPSSMP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,MERCHANT_NAME,MERCHANT_TAG,MCC,MOBILE,DENOMINATION,VAT_NUMBER,PRODUCT_CODE,GROUP_CODE,BANK_CODE,SURNAME,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,CHANNEL_NAME,LOGO,EXHF_ID,CHANNEL_ID,CHANNEL_USERID,CHANNEL_PRODUCT,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CHANNEL_REFNO,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMP.NPSSMP_ID,NPSSMP.BANKUSERID,NPSSMP.MERCHANT_NAME,NPSSMP.MERCHANT_TAG,NPSSMP.MCC,NPSSMP.MOBILE,NPSSMP.DENOMINATION,NPSSMP.VAT_NUMBER,NPSSMP.PRODUCT_CODE,NPSSMP.GROUP_CODE,NPSSMP.BANK_CODE,NPSSMP.SURNAME,NPSSMP.PROXY_TYPE,NPSSMP.PROXY_VALUE,NPSSMP.EMAIL,NPSSMP.DOCUMENT_ID,NPSSMP.CHANNEL_NAME,NPSSMP.LOGO,NPSSMP.EXHF_ID,NPSSMP.CHANNEL_ID,NPSSMP.CHANNEL_USERID,NPSSMP.CHANNEL_PRODUCT,NPSSMP.CHANNEL_SUB_PRODUCT,NPSSMP.CHANNEL_TRAN_CODE,NPSSMP.CHANNEL_REFNO,NPSSMP.CREATED_BY,NPSSMP.CREATED_BY_NAME,NPSSMP.CREATED_BY_STS_ID,NPSSMP.CREATED_DATE,NPSSMP.DT_CODE,NPSSMP.DT_DESCRIPTION,NPSSMP.DTT_CODE,NPSSMP.DTT_DESCRIPTION,NPSSMP.MODIFIED_BY,NPSSMP.MODIFIED_BY_NAME,NPSSMP.MODIFIED_BY_STS_ID,NPSSMP.MODIFIED_DATE,NPSSMP.PRCT_ID,NPSSMP.STATUS,NPSSMP.PROCESS_STATUS,NPSSMP.SYSTEM_ID,NPSSMP.SYSTEM_NAME,NPSSMP.TENANT_ID,NPSSMP.APP_ID,NPSSMP.VERSION_NO FROM NPSS_MERCHANT_PROXY  NPSSMP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchat Tag","target_column":"MERCHANT_TAG","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_for_search_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1671434442714"
		let event_params={"caller_name":"search_search__ssp_for_search_btn","event_desc":"SSP for Search btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search_btn__brfq_for_queue,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for search btn"
	ssp_for_search_btn__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search_btn"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1671434486233"
		let event_params={"caller_name":"ssp_for_search_btn__brfq_for_queue","event_desc":"BRFQ for queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue__sfr_for_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276345803","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671275017464","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSMP_ID,   T.BANKUSERID,   T.MERCHANT_NAME,   T.MERCHANT_TAG,   T.MCC,   T.MOBILE,   T.DENOMINATION,   T.VAT_NUMBER,   T.PRODUCT_CODE,   T.GROUP_CODE,   T.BANK_CODE,   T.SURNAME,   T.PROXY_TYPE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.CHANNEL_NAME,   T.LOGO,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.CHANNEL_REFNO,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   npss_merchant_proxy T  left join TRANSACTION_SET TS on   T.NPSSMP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__sfr_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue"
		let destn_id="queue"
		let parent_source_id="ssp_for_search_btn"
		let event_code="e_1671434523033"
		let event_params={"caller_name":"brfq_for_queue__sfr_for_queue","event_desc":"SFR for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276345803","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671275017464","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSMP_ID,   T.BANKUSERID,   T.MERCHANT_NAME,   T.MERCHANT_TAG,   T.MCC,   T.MOBILE,   T.DENOMINATION,   T.VAT_NUMBER,   T.PRODUCT_CODE,   T.GROUP_CODE,   T.BANK_CODE,   T.SURNAME,   T.PROXY_TYPE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.CHANNEL_NAME,   T.LOGO,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.CHANNEL_REFNO,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   npss_merchant_proxy T  left join TRANSACTION_SET TS on   T.NPSSMP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "merchant"
	merchant__svmfor_cpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant"
		let destn_id="merchant"
		let parent_source_id=""
		let event_code="e_1670997376364"
		let event_params={"caller_name":"merchant__svmfor_cpl","event_desc":"SVMfor CPL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svmfor_cpl__cc_for_customer_show_hide,"
		let event_data={"merchant":{"e_1670997376364":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1670997376364","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Cashdesk","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"BANKUSERID","level":"MI_LEVEL","name":"MI_LEVEL_BANKUSERID","setd3name":"BANKUSERID"},{"type":"LOCAL","column_name":"NPSSMP_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMP_ID","setd3name":"NPSSMP_ID"},{"type":"LOCAL","column_name":"CHANNEL_ID","level":"MI_LEVEL","name":"MI_LEVEL_CHANNEL_ID","setd3name":"CHANNEL_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276266014","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_PROXY ~NPSSMP","category":"NPSS_MERCHANT_PROXY","loc":"253.99675934606216 386.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssmp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"merchant_name_checked":true,"merchant_tag_checked":true,"mcc_checked":true,"mobile_checked":true,"denomination_checked":true,"vat_number_checked":true,"product_code_checked":true,"group_code_checked":true,"surname_checked":true,"bank_code_checked":true,"proxy_value_checked":true,"proxy_type_checked":true,"email_checked":true,"document_id_checked":true,"channel_name_checked":true,"exhf_id_checked":true,"logo_checked":true,"channel_id_checked":true,"channel_userid_checked":true,"channel_product_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true,"channel_refno_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_TAG","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MCC","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DENOMINATION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VAT_NUMBER","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"LOGO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_PROXY ","alias_name":"NPSSMP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,MERCHANT_NAME,MERCHANT_TAG,MCC,MOBILE,DENOMINATION,VAT_NUMBER,PRODUCT_CODE,GROUP_CODE,BANK_CODE,SURNAME,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,CHANNEL_NAME,LOGO,EXHF_ID,CHANNEL_ID,CHANNEL_USERID,CHANNEL_PRODUCT,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CHANNEL_REFNO,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMP.NPSSMP_ID,NPSSMP.BANKUSERID,NPSSMP.MERCHANT_NAME,NPSSMP.MERCHANT_TAG,NPSSMP.MCC,NPSSMP.MOBILE,NPSSMP.DENOMINATION,NPSSMP.VAT_NUMBER,NPSSMP.PRODUCT_CODE,NPSSMP.GROUP_CODE,NPSSMP.BANK_CODE,NPSSMP.SURNAME,NPSSMP.PROXY_TYPE,NPSSMP.PROXY_VALUE,NPSSMP.EMAIL,NPSSMP.DOCUMENT_ID,NPSSMP.CHANNEL_NAME,NPSSMP.LOGO,NPSSMP.EXHF_ID,NPSSMP.CHANNEL_ID,NPSSMP.CHANNEL_USERID,NPSSMP.CHANNEL_PRODUCT,NPSSMP.CHANNEL_SUB_PRODUCT,NPSSMP.CHANNEL_TRAN_CODE,NPSSMP.CHANNEL_REFNO,NPSSMP.CREATED_BY,NPSSMP.CREATED_BY_NAME,NPSSMP.CREATED_BY_STS_ID,NPSSMP.CREATED_DATE,NPSSMP.DT_CODE,NPSSMP.DT_DESCRIPTION,NPSSMP.DTT_CODE,NPSSMP.DTT_DESCRIPTION,NPSSMP.MODIFIED_BY,NPSSMP.MODIFIED_BY_NAME,NPSSMP.MODIFIED_BY_STS_ID,NPSSMP.MODIFIED_DATE,NPSSMP.PRCT_ID,NPSSMP.STATUS,NPSSMP.PROCESS_STATUS,NPSSMP.SYSTEM_ID,NPSSMP.SYSTEM_NAME,NPSSMP.TENANT_ID,NPSSMP.APP_ID,NPSSMP.VERSION_NO FROM NPSS_MERCHANT_PROXY  NPSSMP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchat Tag","target_column":"MERCHANT_TAG","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "merchant"
	merchant__ssr_for_customer_to_cust_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant"
		let destn_id="merchant_detail"
		let parent_source_id=""
		let event_code="e_1670998482087"
		let event_params={"caller_name":"merchant__ssr_for_customer_to_cust_detail","event_desc":"SSR for customer to cust detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "merchant"
	merchant__tbc_for_cpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant"
		let destn_id="navigation_ui_tri_btn1"
		let parent_source_id=""
		let event_code="e_1671000312847"
		let event_params={"caller_name":"merchant__tbc_for_cpl","event_desc":"TBC for CPL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "merchant"
	merchant__ee_for_vpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1671523276382"
		let event_params={"caller_name":"merchant__ee_for_vpl","event_desc":"EE FOR VPL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "merchant"
	merchant__ee_for_vscd_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="merchant"
		let destn_id="navigation_ui_view_shop"
		let parent_source_id=""
		let event_code="e_1671688737680"
		let event_params={"caller_name":"merchant__ee_for_vscd_btn","event_desc":"EE for vscd btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svmfor cpl"
	svmfor_cpl__cc_for_customer_show_hide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svmfor_cpl"
		let destn_id=""
		let parent_source_id="merchant"
		let event_code="e_1671005066084"
		let event_params={"caller_name":"svmfor_cpl__cc_for_customer_show_hide","event_desc":"CC for customer show hide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let event_params={"caller_name":"cc_for_customer_show_hide__brfq_for_accounts","event_desc":"BRFQ for accounts","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_accounts__sfr_for_accounts,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276169608","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_ACCOUNTS ~NPSSMA","category":"NPSS_MERCHANT_ACCOUNTS","loc":"-203.00324065393784 189.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssma_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"default_account_checked":true,"exhf_id_checked":true,"npssmp_id_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395","DTT_1304_1666847369565"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"NPSSMP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_ACCOUNTS ","alias_name":"NPSSMA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,DEFAULT_ACCOUNT,EXHF_ID,NPSSMP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMA.NPSSMA_ID,NPSSMA.PRODUCT_CODE,NPSSMA.BANKUSERID,NPSSMA.IBAN,NPSSMA.CURRENCY,NPSSMA.DEFAULT_ACCOUNT,NPSSMA.EXHF_ID,NPSSMA.NPSSMP_ID,NPSSMA.CREATED_BY,NPSSMA.CREATED_BY_NAME,NPSSMA.CREATED_BY_STS_ID,NPSSMA.CREATED_DATE,NPSSMA.DT_CODE,NPSSMA.DT_DESCRIPTION,NPSSMA.DTT_CODE,NPSSMA.DTT_DESCRIPTION,NPSSMA.MODIFIED_BY,NPSSMA.MODIFIED_BY_NAME,NPSSMA.MODIFIED_BY_STS_ID,NPSSMA.MODIFIED_DATE,NPSSMA.PRCT_ID,NPSSMA.STATUS,NPSSMA.PROCESS_STATUS,NPSSMA.SYSTEM_ID,NPSSMA.SYSTEM_NAME,NPSSMA.TENANT_ID,NPSSMA.APP_ID,NPSSMA.VERSION_NO FROM NPSS_MERCHANT_ACCOUNTS  NPSSMA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Account AQ","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		let event_params={"caller_name":"brfq_for_accounts__sfr_for_accounts","event_desc":"SFR for accounts","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"merchant","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276169608","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_ACCOUNTS ~NPSSMA","category":"NPSS_MERCHANT_ACCOUNTS","loc":"-203.00324065393784 189.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssma_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"default_account_checked":true,"exhf_id_checked":true,"npssmp_id_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395","DTT_1304_1666847369565"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"NPSSMP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_ACCOUNTS ","alias_name":"NPSSMA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,DEFAULT_ACCOUNT,EXHF_ID,NPSSMP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMA.NPSSMA_ID,NPSSMA.PRODUCT_CODE,NPSSMA.BANKUSERID,NPSSMA.IBAN,NPSSMA.CURRENCY,NPSSMA.DEFAULT_ACCOUNT,NPSSMA.EXHF_ID,NPSSMA.NPSSMP_ID,NPSSMA.CREATED_BY,NPSSMA.CREATED_BY_NAME,NPSSMA.CREATED_BY_STS_ID,NPSSMA.CREATED_DATE,NPSSMA.DT_CODE,NPSSMA.DT_DESCRIPTION,NPSSMA.DTT_CODE,NPSSMA.DTT_DESCRIPTION,NPSSMA.MODIFIED_BY,NPSSMA.MODIFIED_BY_NAME,NPSSMA.MODIFIED_BY_STS_ID,NPSSMA.MODIFIED_DATE,NPSSMA.PRCT_ID,NPSSMA.STATUS,NPSSMA.PROCESS_STATUS,NPSSMA.SYSTEM_ID,NPSSMA.SYSTEM_NAME,NPSSMA.TENANT_ID,NPSSMA.APP_ID,NPSSMA.VERSION_NO FROM NPSS_MERCHANT_ACCOUNTS  NPSSMA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Account AQ","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		let destn_id="merchant_detail"
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
		let destn_id="action_enroll"
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
		let destn_id="merchant_detail"
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui disable"
	navigation_ui_disable__sp_for_unentrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_disable"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670997993994"
		let event_params={"caller_name":"navigation_ui_disable__sp_for_unentrol","event_desc":"SP for Unentrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_disable","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui disable"
	navigation_ui_disable__se_for_nav_to_action_unentrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_disable"
		let destn_id="action_disable_merchant"
		let parent_source_id=""
		let event_code="e_1670998007874"
		let event_params={"caller_name":"navigation_ui_disable__se_for_nav_to_action_unentrol","event_desc":"SE for nav to action unentrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_disable","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui disable"
	navigation_ui_disable__cc_for_unentrol_enab_disab() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_disable"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671005294412"
		let event_params={"caller_name":"navigation_ui_disable__cc_for_unentrol_enab_disab","event_desc":"CC for unentrol enab disab","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_disable","raiseparam":{}}
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
		let destn_id="navigation_ui_disable"
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
		let event_data={"accounts":{"e_1671012456913":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1671012456913","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Cashdesk","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"IBAN","level":"MI_LEVEL","name":"MI_LEVEL_IBAN","setd3name":"IBAN"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847369565":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847369565","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276169608","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Account AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_ACCOUNTS ~NPSSMA","category":"NPSS_MERCHANT_ACCOUNTS","loc":"-203.00324065393784 189.00184398283727","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssma_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"product_code_checked":true,"bankuserid_checked":true,"iban_checked":true,"currency_checked":true,"default_account_checked":true,"exhf_id_checked":true,"npssmp_id_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395","DTT_1304_1666847369565"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMA_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CURRENCY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"NPSSMP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMA","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMA","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_ACCOUNTS ","alias_name":"NPSSMA","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMA_ID,PRODUCT_CODE,BANKUSERID,IBAN,CURRENCY,DEFAULT_ACCOUNT,EXHF_ID,NPSSMP_ID,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMA.NPSSMA_ID,NPSSMA.PRODUCT_CODE,NPSSMA.BANKUSERID,NPSSMA.IBAN,NPSSMA.CURRENCY,NPSSMA.DEFAULT_ACCOUNT,NPSSMA.EXHF_ID,NPSSMA.NPSSMP_ID,NPSSMA.CREATED_BY,NPSSMA.CREATED_BY_NAME,NPSSMA.CREATED_BY_STS_ID,NPSSMA.CREATED_DATE,NPSSMA.DT_CODE,NPSSMA.DT_DESCRIPTION,NPSSMA.DTT_CODE,NPSSMA.DTT_DESCRIPTION,NPSSMA.MODIFIED_BY,NPSSMA.MODIFIED_BY_NAME,NPSSMA.MODIFIED_BY_STS_ID,NPSSMA.MODIFIED_DATE,NPSSMA.PRCT_ID,NPSSMA.STATUS,NPSSMA.PROCESS_STATUS,NPSSMA.SYSTEM_ID,NPSSMA.SYSTEM_NAME,NPSSMA.TENANT_ID,NPSSMA.APP_ID,NPSSMA.VERSION_NO FROM NPSS_MERCHANT_ACCOUNTS  NPSSMA)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Account AQ","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"IBAN","target_column":"IBAN","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Default Account","target_column":"DEFAULT_ACCOUNT","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"NPSSMA","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
	accounts__ee_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="sub_navigation_ui_remove_account"
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
		let destn_id="sub_navigation_ui_unblock_account"
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
		let destn_id="navigation_ui_block_accounts"
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
	accounts__ee_for_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_unblock_accounts"
		let parent_source_id=""
		let event_code="e_1671598984269"
		let event_params={"caller_name":"accounts__ee_for_unblock_btn","event_desc":"EE for unblock btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	accounts__ee_for_update_mcc_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="navigation_ui_update_mcc"
		let parent_source_id=""
		let event_code="e_1671599356728"
		let event_params={"caller_name":"accounts__ee_for_update_mcc_btn","event_desc":"EE for Update MCC btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let destn_id="navigation_ui_remove_accounts"
		let parent_source_id=""
		let event_code="e_1671599628864"
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

	//Handler for SELECTION_CHANGED event of "accounts"
	accounts__ee_for_enroll_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="accounts"
		let destn_id="shop_action_enrolment_shop"
		let parent_source_id=""
		let event_code="e_1671619516146"
		let event_params={"caller_name":"accounts__ee_for_enroll_shop","event_desc":"EE for enroll shop","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let internals="cc_for_acc_show_hide__brfq_for_shop_list,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for acc show hide"
	cc_for_acc_show_hide__brfq_for_shop_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_acc_show_hide"
		let destn_id="shop"
		let parent_source_id="svm_for_accounts"
		let event_code="e_1671691067034"
		let event_params={"caller_name":"cc_for_acc_show_hide__brfq_for_shop_list","event_desc":"BRFQ for Shop list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_shop_list__sfr_for_shop,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671692481619","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMS_ID,        BANKUSERID,        SHOP_MID,        SHOP_NAME,        SHOP_ID,        SHOP_TYPE,        SHOP_MCC,        SHOP_IBAN,        BUILDING,        STREET,        CITY,        POSTAL_CODE,        COUNTY,        COUNTRY,        STATUS,        PROCESS_STATUS,        TENANT_ID,        CREATED_DATE   FROM (SELECT S.NPSSMS_ID,                S.PRODUCT_CODE,                S.BANKUSERID,                S.SHOP_NAME,                S.SHOP_MID,                S.SHOP_ID,                S.SHOP_TYPE,                S.SHOP_MCC,                S.SHOP_IBAN,                S.BUILDING,                S.STREET,                S.CITY,                S.POSTAL_CODE,                S.COUNTY,                S.COUNTRY,                S.EXHF_ID,                S.STATUS,                S.PROCESS_STATUS,                S.TENANT_ID,                S.CREATED_DATE           FROM NPSS_MERCHANT_SHOPS S) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for shop list"
	brfq_for_shop_list__sfr_for_shop(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_shop_list"
		let destn_id="shop"
		let parent_source_id="cc_for_acc_show_hide"
		let event_code="e_1671691091482"
		let event_params={"caller_name":"brfq_for_shop_list__sfr_for_shop","event_desc":"SFR for Shop","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"accounts","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671692481619","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMS_ID,        BANKUSERID,        SHOP_MID,        SHOP_NAME,        SHOP_ID,        SHOP_TYPE,        SHOP_MCC,        SHOP_IBAN,        BUILDING,        STREET,        CITY,        POSTAL_CODE,        COUNTY,        COUNTRY,        STATUS,        PROCESS_STATUS,        TENANT_ID,        CREATED_DATE   FROM (SELECT S.NPSSMS_ID,                S.PRODUCT_CODE,                S.BANKUSERID,                S.SHOP_NAME,                S.SHOP_MID,                S.SHOP_ID,                S.SHOP_TYPE,                S.SHOP_MCC,                S.SHOP_IBAN,                S.BUILDING,                S.STREET,                S.CITY,                S.POSTAL_CODE,                S.COUNTY,                S.COUNTRY,                S.EXHF_ID,                S.STATUS,                S.PROCESS_STATUS,                S.TENANT_ID,                S.CREATED_DATE           FROM NPSS_MERCHANT_SHOPS S) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
			this.npss_cs_mch_change_mobileService.fn_npss_cs_mch_change_mobile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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

	//Handler for ACTION_BUTTON_CLICK event of "action enroll"
	action_enroll__cc_for_customer_entroll() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_enroll"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671002947221"
		let event_params={"caller_name":"action_enroll__cc_for_customer_entroll","event_desc":"CC for Customer entroll","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_enroll","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_mch_enrolmentService.fn_npss_cs_mch_enrolment(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_data={"queue":{"e_1671004187469":{"dts":{"dt_1304_1666846074129":{"dtts":{"":{"uicgc_code":"UICGC_10","event_code":"E_1671004187469","dt_code":"DT_1304_1666846074129","dtt_code":"","dt_desc":"NPSS Merchant Proxy DTG","dtt_desc":"NPSS Merchant Cashdesk","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276345803","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Setup Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671275017464","date_format":false}],"joins":[]},"eq_text":"select  distinct STATUS from  (  select   T.NPSSMP_ID,   T.BANKUSERID,   T.MERCHANT_NAME,   T.MERCHANT_TAG,   T.MCC,   T.MOBILE,   T.DENOMINATION,   T.VAT_NUMBER,   T.PRODUCT_CODE,   T.GROUP_CODE,   T.BANK_CODE,   T.SURNAME,   T.PROXY_TYPE,   T.PROXY_VALUE,   T.EMAIL,   T.DOCUMENT_ID,   T.CHANNEL_NAME,   T.LOGO,   T.EXHF_ID,   T.CHANNEL_ID,   T.CHANNEL_USERID,   T.CHANNEL_PRODUCT,   T.CHANNEL_SUB_PRODUCT,   T.CHANNEL_TRAN_CODE,   T.CHANNEL_REFNO,   T.PROCESS_STATUS,   T.TENANT_ID,   T.STATUS,   T.CREATED_DATE,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   T.CREATED_BY,   T.CREATED_BY_NAME,   T.SYSTEM_ID  from   npss_merchant_proxy T  left join TRANSACTION_SET TS on   T.NPSSMP_ID = TS.TRN_ID   and T.DTT_CODE = TS.DTT_CODE) VM $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Setup Queue CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let destn_id="merchant"
		let parent_source_id="sh_ide_connected_in_queue_ssp"
		let event_code="e_1671004587452"
		let event_params={"caller_name":"ssp_for_queue_to_cl__brfq_for_queue_to_customers","event_desc":"BRFQ for Queue to Customers","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue_to_customers__sfr_for_customers,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276266014","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_PROXY ~NPSSMP","category":"NPSS_MERCHANT_PROXY","loc":"253.99675934606216 386.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssmp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"merchant_name_checked":true,"merchant_tag_checked":true,"mcc_checked":true,"mobile_checked":true,"denomination_checked":true,"vat_number_checked":true,"product_code_checked":true,"group_code_checked":true,"surname_checked":true,"bank_code_checked":true,"proxy_value_checked":true,"proxy_type_checked":true,"email_checked":true,"document_id_checked":true,"channel_name_checked":true,"exhf_id_checked":true,"logo_checked":true,"channel_id_checked":true,"channel_userid_checked":true,"channel_product_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true,"channel_refno_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_TAG","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MCC","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DENOMINATION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VAT_NUMBER","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"LOGO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_PROXY ","alias_name":"NPSSMP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,MERCHANT_NAME,MERCHANT_TAG,MCC,MOBILE,DENOMINATION,VAT_NUMBER,PRODUCT_CODE,GROUP_CODE,BANK_CODE,SURNAME,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,CHANNEL_NAME,LOGO,EXHF_ID,CHANNEL_ID,CHANNEL_USERID,CHANNEL_PRODUCT,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CHANNEL_REFNO,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMP.NPSSMP_ID,NPSSMP.BANKUSERID,NPSSMP.MERCHANT_NAME,NPSSMP.MERCHANT_TAG,NPSSMP.MCC,NPSSMP.MOBILE,NPSSMP.DENOMINATION,NPSSMP.VAT_NUMBER,NPSSMP.PRODUCT_CODE,NPSSMP.GROUP_CODE,NPSSMP.BANK_CODE,NPSSMP.SURNAME,NPSSMP.PROXY_TYPE,NPSSMP.PROXY_VALUE,NPSSMP.EMAIL,NPSSMP.DOCUMENT_ID,NPSSMP.CHANNEL_NAME,NPSSMP.LOGO,NPSSMP.EXHF_ID,NPSSMP.CHANNEL_ID,NPSSMP.CHANNEL_USERID,NPSSMP.CHANNEL_PRODUCT,NPSSMP.CHANNEL_SUB_PRODUCT,NPSSMP.CHANNEL_TRAN_CODE,NPSSMP.CHANNEL_REFNO,NPSSMP.CREATED_BY,NPSSMP.CREATED_BY_NAME,NPSSMP.CREATED_BY_STS_ID,NPSSMP.CREATED_DATE,NPSSMP.DT_CODE,NPSSMP.DT_DESCRIPTION,NPSSMP.DTT_CODE,NPSSMP.DTT_DESCRIPTION,NPSSMP.MODIFIED_BY,NPSSMP.MODIFIED_BY_NAME,NPSSMP.MODIFIED_BY_STS_ID,NPSSMP.MODIFIED_DATE,NPSSMP.PRCT_ID,NPSSMP.STATUS,NPSSMP.PROCESS_STATUS,NPSSMP.SYSTEM_ID,NPSSMP.SYSTEM_NAME,NPSSMP.TENANT_ID,NPSSMP.APP_ID,NPSSMP.VERSION_NO FROM NPSS_MERCHANT_PROXY  NPSSMP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchat Tag","target_column":"MERCHANT_TAG","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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
		let destn_id="merchant"
		let parent_source_id="ssp_for_queue_to_cl"
		let event_code="e_1671004604522"
		let event_params={"caller_name":"brfq_for_queue_to_customers__sfr_for_customers","event_desc":"SFR for customers","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666846129395":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666846129395","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671276266014","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Merchant Proxy AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_MERCHANT_PROXY ~NPSSMP","category":"NPSS_MERCHANT_PROXY","loc":"253.99675934606216 386.0018439828373","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"npssmp_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"bankuserid_checked":true,"merchant_name_checked":true,"merchant_tag_checked":true,"mcc_checked":true,"mobile_checked":true,"denomination_checked":true,"vat_number_checked":true,"product_code_checked":true,"group_code_checked":true,"surname_checked":true,"bank_code_checked":true,"proxy_value_checked":true,"proxy_type_checked":true,"email_checked":true,"document_id_checked":true,"channel_name_checked":true,"exhf_id_checked":true,"logo_checked":true,"channel_id_checked":true,"channel_userid_checked":true,"channel_product_checked":true,"channel_sub_product_checked":true,"channel_tran_code_checked":true,"channel_refno_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1666846129395"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NPSSMP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANKUSERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MERCHANT_TAG","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MCC","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MOBILE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DENOMINATION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VAT_NUMBER","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRODUCT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"GROUP_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"BANK_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SURNAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_TYPE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROXY_VALUE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EMAIL","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DOCUMENT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"LOGO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"EXHF_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_USERID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NPSSMP","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NPSSMP","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_MERCHANT_PROXY ","alias_name":"NPSSMP","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NPSSMP_ID,BANKUSERID,MERCHANT_NAME,MERCHANT_TAG,MCC,MOBILE,DENOMINATION,VAT_NUMBER,PRODUCT_CODE,GROUP_CODE,BANK_CODE,SURNAME,PROXY_TYPE,PROXY_VALUE,EMAIL,DOCUMENT_ID,CHANNEL_NAME,LOGO,EXHF_ID,CHANNEL_ID,CHANNEL_USERID,CHANNEL_PRODUCT,CHANNEL_SUB_PRODUCT,CHANNEL_TRAN_CODE,CHANNEL_REFNO,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NPSSMP.NPSSMP_ID,NPSSMP.BANKUSERID,NPSSMP.MERCHANT_NAME,NPSSMP.MERCHANT_TAG,NPSSMP.MCC,NPSSMP.MOBILE,NPSSMP.DENOMINATION,NPSSMP.VAT_NUMBER,NPSSMP.PRODUCT_CODE,NPSSMP.GROUP_CODE,NPSSMP.BANK_CODE,NPSSMP.SURNAME,NPSSMP.PROXY_TYPE,NPSSMP.PROXY_VALUE,NPSSMP.EMAIL,NPSSMP.DOCUMENT_ID,NPSSMP.CHANNEL_NAME,NPSSMP.LOGO,NPSSMP.EXHF_ID,NPSSMP.CHANNEL_ID,NPSSMP.CHANNEL_USERID,NPSSMP.CHANNEL_PRODUCT,NPSSMP.CHANNEL_SUB_PRODUCT,NPSSMP.CHANNEL_TRAN_CODE,NPSSMP.CHANNEL_REFNO,NPSSMP.CREATED_BY,NPSSMP.CREATED_BY_NAME,NPSSMP.CREATED_BY_STS_ID,NPSSMP.CREATED_DATE,NPSSMP.DT_CODE,NPSSMP.DT_DESCRIPTION,NPSSMP.DTT_CODE,NPSSMP.DTT_DESCRIPTION,NPSSMP.MODIFIED_BY,NPSSMP.MODIFIED_BY_NAME,NPSSMP.MODIFIED_BY_STS_ID,NPSSMP.MODIFIED_DATE,NPSSMP.PRCT_ID,NPSSMP.STATUS,NPSSMP.PROCESS_STATUS,NPSSMP.SYSTEM_ID,NPSSMP.SYSTEM_NAME,NPSSMP.TENANT_ID,NPSSMP.APP_ID,NPSSMP.VERSION_NO FROM NPSS_MERCHANT_PROXY  NPSSMP)T $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Merchant Proxy AQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":true,"currency_format":false},{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchant Name","target_column":"MERCHANT_NAME","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Merchat Tag","target_column":"MERCHANT_TAG","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Mobile","target_column":"MOBILE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Type","target_column":"PROXY_TYPE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Value","target_column":"PROXY_VALUE","alias_name":"NPSSMP","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove account"
	sub_navigation_ui_remove_account__cc_for_enable_disable_for_remove() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_remove_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021559328"
		let event_params={"caller_name":"sub_navigation_ui_remove_account__cc_for_enable_disable_for_remove","event_desc":"CC for enable disable for remove","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_remove_account","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove account"
	sub_navigation_ui_remove_account__sp_for_rem_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_remove_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671782544886"
		let event_params={"caller_name":"sub_navigation_ui_remove_account__sp_for_rem_acc","event_desc":"SP FOR REM ACC","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_remove_account","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui remove account"
	sub_navigation_ui_remove_account__se_for_act_rem_bank_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_remove_account"
		let destn_id="action_remove_bank_account"
		let parent_source_id=""
		let event_code="e_1671782583458"
		let event_params={"caller_name":"sub_navigation_ui_remove_account__se_for_act_rem_bank_acc","event_desc":"SE FOR ACT REM BANK ACC","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_remove_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui unblock account"
	sub_navigation_ui_unblock_account__sp_for_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_unblock_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021446968"
		let event_params={"caller_name":"sub_navigation_ui_unblock_account__sp_for_unblock","event_desc":"SP for unblock","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_unblock_account","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui unblock account"
	sub_navigation_ui_unblock_account__cc_for_enable_disable_for_unblk() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_unblock_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671021624019"
		let event_params={"caller_name":"sub_navigation_ui_unblock_account__cc_for_enable_disable_for_unblk","event_desc":"CC for enable disable for unblk","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_unblock_account","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui unblock account"
	sub_navigation_ui_unblock_account__se_for_unblock_accpunt() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_unblock_account"
		let destn_id="action_unblock_bank_account"
		let parent_source_id=""
		let event_code="e_1671783500529"
		let event_params={"caller_name":"sub_navigation_ui_unblock_account__se_for_unblock_accpunt","event_desc":"se for unblock accpunt","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_unblock_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block accounts"
	navigation_ui_block_accounts__sp_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028145631"
		let event_params={"caller_name":"navigation_ui_block_accounts__sp_for_nav_block","event_desc":"SP for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_accounts","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block accounts"
	navigation_ui_block_accounts__cc_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671028240797"
		let event_params={"caller_name":"navigation_ui_block_accounts__cc_for_nav_block","event_desc":"CC for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_accounts","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui block accounts"
	navigation_ui_block_accounts__se_for_nav_block() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_block_accounts"
		let destn_id="action_block_bank_account"
		let parent_source_id=""
		let event_code="e_1671028489443"
		let event_params={"caller_name":"navigation_ui_block_accounts__se_for_nav_block","event_desc":"SE for nav block","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_block_accounts","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__sp_for_vpl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671513917161"
		let event_params={"caller_name":"navigation_ui_view_process_log__sp_for_vpl","event_desc":"SP for VPL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"profile_code":"BTL_1304_1671514266975"}}
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
	navigation_ui_view_process_log__brfq_for_hdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1671515141557"
		let event_params={"caller_name":"navigation_ui_view_process_log__brfq_for_hdl","event_desc":"BRFQ for HDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hdl__sfr_for_history_detail,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671521464798","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM HST Plog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1671521093141","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1671521093317","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1671521093493","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1671521093669","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1671521093853","date_format":false},{"column_name":"process_ref_no","alias_name":"","mq_id":"MQ_1671521134065","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  RESULT,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  DTT_CODE,  TENANT_ID,  DT_CODE FROM  (  SELECT   NSTPL.NPSSSMTPL_ID,  NSTPL.BANKUSERID,  NSTPL.PROCESS_NAME,  NSTPL.PROCESSING_SYSTEM,  NSTPL.RESULT_CODE,  NSTPL.RESULT,  NSTPL.RESULT_MESSAGE,  NSTPL.RESULT_X_REQUEST_ID,  NSTPL.PROCESS_REF_NO,  NSTPL.REQUEST_DATA_JSON,  NSTPL.RESPONSE_DATA_JSON,  NSTPL.CHANNEL_ID,  NSTPL.CHANNEL_REFNO,  NSTPL.CHANNEL_USERID,  NSTPL.CHANNEL_PRODUCT,  NSTPL.CHANNEL_SUB_PRODUCT,  NSTPL.CHANNEL_TRAN_CODE,  NSTPL.DTT_CODE,  NSTPL.TENANT_ID,  NSTPL.DT_CODE  FROM   NPSS_SM_TRN_PROCESS_LOG NSTPL    ORDER BY NPSSSMTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM HST Plog MQ CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Ref No","target_column":"process_ref_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for hdl"
	brfq_for_hdl__sfr_for_history_detail(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hdl"
		let destn_id="history_detail"
		let parent_source_id="navigation_ui_view_process_log"
		let event_code="e_1671515194947"
		let event_params={"caller_name":"brfq_for_hdl__sfr_for_history_detail","event_desc":"SFR for History Detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666847145490":{"dtt_1304_1666847230281":{"st_ds":{"default":{"uicgc_code":"UICGC_14","event_code":"DEFAULT","dt_code":"DT_1304_1666847145490","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847230281","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671521464798","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM HST Plog MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1671521093141","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1671521093317","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1671521093493","date_format":false},{"column_name":"RESULT_CODE","alias_name":"","mq_id":"MQ_1671521093669","date_format":false},{"column_name":"RESULT_MESSAGE","alias_name":"","mq_id":"MQ_1671521093853","date_format":false},{"column_name":"process_ref_no","alias_name":"","mq_id":"MQ_1671521134065","date_format":false}],"joins":[]},"eq_text":"SELECT  NPSSSMTPL_ID,  BANKUSERID,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESULT_CODE,  RESULT,  RESULT_MESSAGE,  RESULT_X_REQUEST_ID,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  DTT_CODE,  TENANT_ID,  DT_CODE FROM  (  SELECT   NSTPL.NPSSSMTPL_ID,  NSTPL.BANKUSERID,  NSTPL.PROCESS_NAME,  NSTPL.PROCESSING_SYSTEM,  NSTPL.RESULT_CODE,  NSTPL.RESULT,  NSTPL.RESULT_MESSAGE,  NSTPL.RESULT_X_REQUEST_ID,  NSTPL.PROCESS_REF_NO,  NSTPL.REQUEST_DATA_JSON,  NSTPL.RESPONSE_DATA_JSON,  NSTPL.CHANNEL_ID,  NSTPL.CHANNEL_REFNO,  NSTPL.CHANNEL_USERID,  NSTPL.CHANNEL_PRODUCT,  NSTPL.CHANNEL_SUB_PRODUCT,  NSTPL.CHANNEL_TRAN_CODE,  NSTPL.DTT_CODE,  NSTPL.TENANT_ID,  NSTPL.DT_CODE  FROM   NPSS_SM_TRN_PROCESS_LOG NSTPL    ORDER BY NPSSSMTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM HST Plog MQ CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Code","target_column":"RESULT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Result Message","target_column":"RESULT_MESSAGE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Ref No","target_column":"process_ref_no","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_reqres() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671514738478"
		let event_params={"caller_name":"single_back_ui_back__sp_for_reqres","event_desc":"SP for REQ,RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1671514266975"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__sp_for_vreq() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671514886155"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_vreq","event_desc":"SP for vreq","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1671515720595"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_vreq() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1671514969219"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_vreq","event_desc":"BT VReq","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_req_and_res__bt_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1671515007483"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_vres","event_desc":"BT VRes","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__sp_to_main_layout() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671515063894"
		let event_params={"caller_name":"process_log_ui_back__sp_to_main_layout","event_desc":"SP to Main layout","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1670996775588"}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ee_for_vreq_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1671515275580"
		let event_params={"caller_name":"history_detail__ee_for_vreq_vres","event_desc":"EE for VReq VRes","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_from_hd_to_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1671515346735"
		let event_params={"caller_name":"history_detail__ssr_from_hd_to_response","event_desc":"SSR from HD to Response","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__ssr_from_hd_to_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1671515366126"
		let event_params={"caller_name":"history_detail__ssr_from_hd_to_req","event_desc":"SSR from HD to Req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unblock accounts"
	navigation_ui_unblock_accounts__se_for_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unblock_accounts"
		let destn_id="action_unblock_bank_account"
		let parent_source_id=""
		let event_code="e_1671599038697"
		let event_params={"caller_name":"navigation_ui_unblock_accounts__se_for_unblock_btn","event_desc":"SE for unblock btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unblock_accounts","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unblock accounts"
	navigation_ui_unblock_accounts__sp_for_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unblock_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599065667"
		let event_params={"caller_name":"navigation_ui_unblock_accounts__sp_for_unblock_btn","event_desc":"SP for unblock btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unblock_accounts","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui unblock accounts"
	navigation_ui_unblock_accounts__cc_for_unblock_btn_enab_disab() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_unblock_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599127880"
		let event_params={"caller_name":"navigation_ui_unblock_accounts__cc_for_unblock_btn_enab_disab","event_desc":"CC for unblock btn enab disab","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_unblock_accounts","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action unblock bank account"
	action_unblock_bank_account__cc_for_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_unblock_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599185796"
		let event_params={"caller_name":"action_unblock_bank_account__cc_for_unblock_btn","event_desc":"CC for unblock btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_unblock_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_mch_unblock_bank_accountService.fn_npss_cs_mch_unblock_bank_account(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update mcc"
	navigation_ui_update_mcc__se_for_update_mcc_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_mcc"
		let destn_id="action_update_mcc"
		let parent_source_id=""
		let event_code="e_1671599324098"
		let event_params={"caller_name":"navigation_ui_update_mcc__se_for_update_mcc_btn","event_desc":"SE for Update MCC btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_mcc","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update mcc"
	navigation_ui_update_mcc__sp_for_update_mcc() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_mcc"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599376123"
		let event_params={"caller_name":"navigation_ui_update_mcc__sp_for_update_mcc","event_desc":"SP for update mcc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_mcc","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui update mcc"
	navigation_ui_update_mcc__cc_for_update_mcc_en_di() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_update_mcc"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599385272"
		let event_params={"caller_name":"navigation_ui_update_mcc__cc_for_update_mcc_en_di","event_desc":"CC for update mcc EN DI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_update_mcc","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action update mcc"
	action_update_mcc__cc_for_update_mcc() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_update_mcc"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599477829"
		let event_params={"caller_name":"action_update_mcc__cc_for_update_mcc","event_desc":"CC for update mcc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_update_mcc","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove accounts"
	navigation_ui_remove_accounts__se_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_remove_accounts"
		let destn_id="action_remove_bank_account"
		let parent_source_id=""
		let event_code="e_1671599696745"
		let event_params={"caller_name":"navigation_ui_remove_accounts__se_for_remove_account","event_desc":"SE for Remove account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_remove_accounts","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove accounts"
	navigation_ui_remove_accounts__sp_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_remove_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599737816"
		let event_params={"caller_name":"navigation_ui_remove_accounts__sp_for_remove_account","event_desc":"SP for Remove account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_remove_accounts","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui remove accounts"
	navigation_ui_remove_accounts__cc_for_remove_account_en_di() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_remove_accounts"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599748710"
		let event_params={"caller_name":"navigation_ui_remove_accounts__cc_for_remove_account_en_di","event_desc":"CC for Remove account EN DI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_remove_accounts","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action remove bank account"
	action_remove_bank_account__cc_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_remove_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671599756492"
		let event_params={"caller_name":"action_remove_bank_account__cc_for_remove_account","event_desc":"CC for Remove account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_remove_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_mch_remove_bank_accountsService.fn_npss_cs_mch_remove_bank_accounts(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "shop"
	shop__ee_for_remove_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop_action_remove_shop_account"
		let parent_source_id=""
		let event_code="e_1671619187016"
		let event_params={"caller_name":"shop__ee_for_remove_shop","event_desc":"EE for Remove shop","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__ee_for_update_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop_action_update_shop"
		let parent_source_id=""
		let event_code="e_1671619201480"
		let event_params={"caller_name":"shop__ee_for_update_shop","event_desc":"EE for Update shop","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__ee_for_diasble_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop_action_disable_shop"
		let parent_source_id=""
		let event_code="e_1671619254136"
		let event_params={"caller_name":"shop__ee_for_diasble_shop","event_desc":"EE for Diasble shop","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__ee_for_set_shop_bank_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop_action_set_shop_default"
		let parent_source_id=""
		let event_code="e_1671619341687"
		let event_params={"caller_name":"shop__ee_for_set_shop_bank_account","event_desc":"EE for Set shop bank account","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__tbc_for_button_3() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="navigation_ui_tri_btn3"
		let parent_source_id=""
		let event_code="e_1671622922107"
		let event_params={"caller_name":"shop__tbc_for_button_3","event_desc":"TBC for button 3","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__ssr_for_shop_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop_detail"
		let parent_source_id=""
		let event_code="e_1671623047093"
		let event_params={"caller_name":"shop__ssr_for_shop_detail","event_desc":"SSR for shop detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__ee_for_enrollment_cashdesk() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="cash_desk_action_enrolment_desk"
		let parent_source_id=""
		let event_code="e_1671629377173"
		let event_params={"caller_name":"shop__ee_for_enrollment_cashdesk","event_desc":"EE for enrollment cashdesk","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__svm_for_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop"
		let parent_source_id=""
		let event_code="e_1671691215600"
		let event_params={"caller_name":"shop__svm_for_shop","event_desc":"SVM for shop","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_shop__brfq_for_cashdesk_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671692481619","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMS_ID,        BANKUSERID,        SHOP_MID,        SHOP_NAME,        SHOP_ID,        SHOP_TYPE,        SHOP_MCC,        SHOP_IBAN,        BUILDING,        STREET,        CITY,        POSTAL_CODE,        COUNTY,        COUNTRY,        STATUS,        PROCESS_STATUS,        TENANT_ID,        CREATED_DATE   FROM (SELECT S.NPSSMS_ID,                S.PRODUCT_CODE,                S.BANKUSERID,                S.SHOP_NAME,                S.SHOP_MID,                S.SHOP_ID,                S.SHOP_TYPE,                S.SHOP_MCC,                S.SHOP_IBAN,                S.BUILDING,                S.STREET,                S.CITY,                S.POSTAL_CODE,                S.COUNTY,                S.COUNTRY,                S.EXHF_ID,                S.STATUS,                S.PROCESS_STATUS,                S.TENANT_ID,                S.CREATED_DATE           FROM NPSS_MERCHANT_SHOPS S) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "shop"
	shop__ee_for_shop_enrolment_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop_action_enrolment_shop"
		let parent_source_id=""
		let event_code="e_1671695245953"
		let event_params={"caller_name":"shop__ee_for_shop_enrolment_btn","event_desc":"EE for shop enrolment btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__bt_for_shop_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="shop_detail"
		let parent_source_id=""
		let event_code="e_1671717152300"
		let event_params={"caller_name":"shop__bt_for_shop_dtl","event_desc":"bt for shop dtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__bt_for_accountdtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="account__detail"
		let parent_source_id=""
		let event_code="e_1671717198605"
		let event_params={"caller_name":"shop__bt_for_accountdtl","event_desc":"bt for accountdtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__bt_for_cashdesk_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1671717276750"
		let event_params={"caller_name":"shop__bt_for_cashdesk_detail","event_desc":"bt for cashdesk detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "shop"
	shop__bt_for_merchant_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop"
		let destn_id="merchant_detail"
		let parent_source_id=""
		let event_code="e_1671717338649"
		let event_params={"caller_name":"shop__bt_for_merchant_detail","event_desc":"bt for merchant detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for INTERNAL event of "svm for shop"
	svm_for_shop__brfq_for_cashdesk_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_shop"
		let destn_id="cash_desk"
		let parent_source_id="shop"
		let event_code="e_1671691243217"
		let event_params={"caller_name":"svm_for_shop__brfq_for_cashdesk_list","event_desc":"brfq for cashdesk list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_cashdesk_list__sfr_for_cashdesk,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671623568676","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMC_ID,        BANKUSERID,        CASHDESK_ID,        CASHDESK_OVERLAY_ID,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT C.NPSSMC_ID,                C.BANKUSERID,                C.CASHDESK_ID,                C.CASHDESK_OVERLAY_ID,                C.CREATED_DATE,                C.STATUS,                C.PROCESS_STATUS,                C.TENANT_ID,                C.DTT_CODE,                C.DT_CODE           FROM NPSS_MERCHANT_CASHDESK C) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for cashdesk list"
	brfq_for_cashdesk_list__sfr_for_cashdesk() { 
		let Dest_Is_ctrl=true
		
		let source_id="brfq_for_cashdesk_list"
		let destn_id="cash_desk"
		let parent_source_id="svm_for_shop"
		let event_code="e_1671691277103"
		let event_params={"caller_name":"brfq_for_cashdesk_list__sfr_for_cashdesk","event_desc":"sfr for cashdesk","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"shop","raiseparam":{}}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666848298941":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666848298941","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671623568676","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Cash Desk Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666882336815","date_format":false},{"column_name":"CASHDESK_ID","alias_name":"","mq_id":"MQ_1666882337070","date_format":false},{"column_name":"CASHDESK_OVERLAY_ID","alias_name":"","mq_id":"MQ_1666882337573","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666882360517","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666882360725","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666882360901","date_format":true},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1666882395708","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1667365781652","date_format":false},{"column_name":"NPSSMC_ID","alias_name":"","mq_id":"MQ_1667365937621","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMC_ID,        BANKUSERID,        CASHDESK_ID,        CASHDESK_OVERLAY_ID,        CREATED_DATE,        STATUS,        PROCESS_STATUS,        TENANT_ID,        DTT_CODE,        DT_CODE   FROM (SELECT C.NPSSMC_ID,                C.BANKUSERID,                C.CASHDESK_ID,                C.CASHDESK_OVERLAY_ID,                C.CREATED_DATE,                C.STATUS,                C.PROCESS_STATUS,                C.TENANT_ID,                C.DTT_CODE,                C.DT_CODE           FROM NPSS_MERCHANT_CASHDESK C) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cash Desk Details CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Desk ID","target_column":"CASHDESK_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "cash desk"
	cash_desk__ee_for_disable_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk"
		let destn_id="cash_desk_action_disable_desk"
		let parent_source_id=""
		let event_code="e_1671603876518"
		let event_params={"caller_name":"cash_desk__ee_for_disable_cd","event_desc":"EE for Disable CD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "cash desk"
	cash_desk__ee_for_entrol_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk"
		let destn_id="cash_desk_action_enrolment_desk"
		let parent_source_id=""
		let event_code="e_1671603912942"
		let event_params={"caller_name":"cash_desk__ee_for_entrol_cd","event_desc":"EE for Entrol CD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "cash desk"
	cash_desk__ee_for_update_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk"
		let destn_id="cash_desk_action_update_desk"
		let parent_source_id=""
		let event_code="e_1671603932321"
		let event_params={"caller_name":"cash_desk__ee_for_update_cd","event_desc":"EE for Update CD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "cash desk"
	cash_desk__ssr_for_cashdesk_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk"
		let destn_id="cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1671623312627"
		let event_params={"caller_name":"cash_desk__ssr_for_cashdesk_dtl","event_desc":"SSR for cashdesk dtl","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "cash desk"
	cash_desk__tbc_for_btn4() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk"
		let destn_id="navigation_ui_tri_btn4"
		let parent_source_id=""
		let event_code="e_1671623388365"
		let event_params={"caller_name":"cash_desk__tbc_for_btn4","event_desc":"TBC for btn4","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"cash_desk","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action disable desk"
	cash_desk_action_disable_desk__sp_for_disable_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_disable_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671603985181"
		let event_params={"caller_name":"cash_desk_action_disable_desk__sp_for_disable_cd","event_desc":"SP for Disable CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_disable_desk","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action disable desk"
	cash_desk_action_disable_desk__cc__for_disable_cd_ena_dis() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_disable_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604097986"
		let event_params={"caller_name":"cash_desk_action_disable_desk__cc__for_disable_cd_ena_dis","event_desc":"CC  for Disable CD ENA DIS","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_disable_desk","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action disable desk"
	cash_desk_action_disable_desk__se_for_disable_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_disable_desk"
		let destn_id="action_disable_cash_desk_details"
		let parent_source_id=""
		let event_code="e_1671604585983"
		let event_params={"caller_name":"cash_desk_action_disable_desk__se_for_disable_cd","event_desc":"SE for Disable CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_disable_desk","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action enrolment desk"
	cash_desk_action_enrolment_desk__sp_for_enroll_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_enrolment_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604021518"
		let event_params={"caller_name":"cash_desk_action_enrolment_desk__sp_for_enroll_cd","event_desc":"SP for Enroll CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_enrolment_desk","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action enrolment desk"
	cash_desk_action_enrolment_desk__cc__for_enroll_cd_ena_dis() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_enrolment_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604085433"
		let event_params={"caller_name":"cash_desk_action_enrolment_desk__cc__for_enroll_cd_ena_dis","event_desc":"CC  for Enroll CD ENA DIS","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_enrolment_desk","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action enrolment desk"
	cash_desk_action_enrolment_desk__se_for_enroll_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_enrolment_desk"
		let destn_id="action_enroll_cash_desk"
		let parent_source_id=""
		let event_code="e_1671604550899"
		let event_params={"caller_name":"cash_desk_action_enrolment_desk__se_for_enroll_cd","event_desc":"SE for Enroll CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_enrolment_desk","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action update desk"
	cash_desk_action_update_desk__sp_for_update_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_update_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604055754"
		let event_params={"caller_name":"cash_desk_action_update_desk__sp_for_update_cd","event_desc":"SP for Update CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_update_desk","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action update desk"
	cash_desk_action_update_desk__cc__for_update_cd_ena_dis() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_update_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604077951"
		let event_params={"caller_name":"cash_desk_action_update_desk__cc__for_update_cd_ena_dis","event_desc":"CC  for Update CD ENA DIS","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_update_desk","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action update desk"
	cash_desk_action_update_desk__se_for_update_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_update_desk"
		let destn_id="action_update_cash_desk_details"
		let parent_source_id=""
		let event_code="e_1671604514608"
		let event_params={"caller_name":"cash_desk_action_update_desk__se_for_update_cd","event_desc":"SE for update CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_update_desk","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action enroll cash desk"
	action_enroll_cash_desk__cc_for_enroll_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_enroll_cash_desk"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604733882"
		let event_params={"caller_name":"action_enroll_cash_desk__cc_for_enroll_cd","event_desc":"CC for Enroll CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_enroll_cash_desk","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action update cash desk details"
	action_update_cash_desk_details__cc__for_update_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_update_cash_desk_details"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604742544"
		let event_params={"caller_name":"action_update_cash_desk_details__cc__for_update_cd","event_desc":"CC  for Update CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_update_cash_desk_details","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action disable cash desk details"
	action_disable_cash_desk_details__cc__for_disable_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_disable_cash_desk_details"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671604763685"
		let event_params={"caller_name":"action_disable_cash_desk_details__cc__for_disable_cd","event_desc":"CC  for Disable CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_disable_cash_desk_details","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action disable merchant"
	action_disable_merchant__cc_for_disable() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_disable_merchant"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671605028027"
		let event_params={"caller_name":"action_disable_merchant__cc_for_disable","event_desc":"CC for Disable","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_disable_merchant","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_mch_disableService.fn_npss_cs_mch_disable(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action update personal data"
	action_update_personal_data__cc_for_update_perosal() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_update_personal_data"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671605070545"
		let event_params={"caller_name":"action_update_personal_data__cc_for_update_perosal","event_desc":"CC for Update perosal","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_update_personal_data","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_mch_update_personal_dataService.fn_npss_cs_mch_update_personal_data(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action add bank account"
	action_add_bank_account__cc_for_add_acoount_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_add_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671605249876"
		let event_params={"caller_name":"action_add_bank_account__cc_for_add_acoount_btn","event_desc":"CC for Add acoount btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_add_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_mch_add_bank_accountsService.fn_npss_cs_mch_add_bank_accounts(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action block bank account"
	action_block_bank_account__cc_for_block_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_block_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671605310531"
		let event_params={"caller_name":"action_block_bank_account__cc_for_block_account","event_desc":"CC for Block account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_block_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_mch_block_bank_accountService.fn_npss_cs_mch_block_bank_account(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "shop action enrolment shop"
	shop_action_enrolment_shop__se_for_entrol_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_enrolment_shop"
		let destn_id="action_enroll_shop"
		let parent_source_id=""
		let event_code="e_1671620442427"
		let event_params={"caller_name":"shop_action_enrolment_shop__se_for_entrol_shop","event_desc":"SE for entrol shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_enrolment_shop","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action enrolment shop"
	shop_action_enrolment_shop__cc_for_shop_enrollment_enab() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_enrolment_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671622678459"
		let event_params={"caller_name":"shop_action_enrolment_shop__cc_for_shop_enrollment_enab","event_desc":"CC for Shop enrollment ENAB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_enrolment_shop","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action enrolment shop"
	shop_action_enrolment_shop__sp_for_shop_enroll() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_enrolment_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671622689332"
		let event_params={"caller_name":"shop_action_enrolment_shop__sp_for_shop_enroll","event_desc":"SP for shop enroll","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_enrolment_shop","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action enrolment shop"
	shop_action_enrolment_shop__cu_for_enroll_shop_to_shop_dtl() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_enrolment_shop"
		let destn_id="shop_detail"
		let parent_source_id=""
		let event_code="e_1671623119316"
		let event_params={"caller_name":"shop_action_enrolment_shop__cu_for_enroll_shop_to_shop_dtl","event_desc":"CU for enroll shop to shop dtl","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_enrolment_shop","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action disable shop"
	shop_action_disable_shop__se_for_disable_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_disable_shop"
		let destn_id="action_disable_shop_details"
		let parent_source_id=""
		let event_code="e_1671620504487"
		let event_params={"caller_name":"shop_action_disable_shop__se_for_disable_shop","event_desc":"SE for Disable shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_disable_shop","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action disable shop"
	shop_action_disable_shop__cc_for_disable_shop_ena() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_disable_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671621470001"
		let event_params={"caller_name":"shop_action_disable_shop__cc_for_disable_shop_ena","event_desc":"CC for Disable shop ENA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_disable_shop","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action disable shop"
	shop_action_disable_shop__sp_for_disable_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_disable_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671621480169"
		let event_params={"caller_name":"shop_action_disable_shop__sp_for_disable_shop","event_desc":"SP for Disable shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_disable_shop","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action update shop"
	shop_action_update_shop__se_for_update_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_update_shop"
		let destn_id="action_update_shop_details"
		let parent_source_id=""
		let event_code="e_1671620555412"
		let event_params={"caller_name":"shop_action_update_shop__se_for_update_shop","event_desc":"SE for update shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_update_shop","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action update shop"
	shop_action_update_shop__sp_for_update_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_update_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671627499457"
		let event_params={"caller_name":"shop_action_update_shop__sp_for_update_shop","event_desc":"SP for update shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_update_shop","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action update shop"
	shop_action_update_shop__cc_for_update_shop_ena() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_update_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671627509358"
		let event_params={"caller_name":"shop_action_update_shop__cc_for_update_shop_ena","event_desc":"CC for update shop ENA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_update_shop","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action set shop default"
	shop_action_set_shop_default__se_for_set_bank_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_set_shop_default"
		let destn_id="action_set_shop_account"
		let parent_source_id=""
		let event_code="e_1671620620010"
		let event_params={"caller_name":"shop_action_set_shop_default__se_for_set_bank_account","event_desc":"SE for set bank account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_set_shop_default","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action set shop default"
	shop_action_set_shop_default__sp_for_set_shop_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_set_shop_default"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671621287695"
		let event_params={"caller_name":"shop_action_set_shop_default__sp_for_set_shop_account","event_desc":"SP for Set shop account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_set_shop_default","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action set shop default"
	shop_action_set_shop_default__cc_for_set_shop_bank_account_enab() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_set_shop_default"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671621299093"
		let event_params={"caller_name":"shop_action_set_shop_default__cc_for_set_shop_bank_account_enab","event_desc":"CC for set shop bank account ENAB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_set_shop_default","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action remove shop account"
	shop_action_remove_shop_account__se_for_remove_shop_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_remove_shop_account"
		let destn_id="action_remove_shop_bank_account"
		let parent_source_id=""
		let event_code="e_1671620742304"
		let event_params={"caller_name":"shop_action_remove_shop_account__se_for_remove_shop_account","event_desc":"SE for remove shop account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_remove_shop_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action remove shop account"
	shop_action_remove_shop_account__cc_for_remove_shop_account_ena_dis() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_remove_shop_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671621189032"
		let event_params={"caller_name":"shop_action_remove_shop_account__cc_for_remove_shop_account_ena_dis","event_desc":"CC for Remove shop account ENA DIS","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_remove_shop_account","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action remove shop account"
	shop_action_remove_shop_account__sp_for_remove_shop_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_remove_shop_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671621199391"
		let event_params={"caller_name":"shop_action_remove_shop_account__sp_for_remove_shop_account","event_desc":"SP for Remove shop account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_remove_shop_account","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "shop action remove shop account"
	shop_action_remove_shop_account__he_for_act_rba() { 
		let Dest_Is_ctrl=true
		
		let source_id="shop_action_remove_shop_account"
		let destn_id="action_disable_shop_details"
		let parent_source_id=""
		let event_code="e_1671774579346"
		let event_params={"caller_name":"shop_action_remove_shop_account__he_for_act_rba","event_desc":"he for act rba","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"shop_action_remove_shop_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action enroll shop"
	action_enroll_shop__cc_for_enroll_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_enroll_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671620885118"
		let event_params={"caller_name":"action_enroll_shop__cc_for_enroll_shop","event_desc":"CC for Enroll shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_enroll_shop","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_shop_enrolmentService.fn_npss_cs_shop_enrolment(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action update shop details"
	action_update_shop_details__cc_for_update_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_update_shop_details"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671620893735"
		let event_params={"caller_name":"action_update_shop_details__cc_for_update_shop","event_desc":"CC for Update shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_update_shop_details","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_shop_updateService.fn_npss_cs_shop_update(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action set shop account"
	action_set_shop_account__cc_for_set_shop_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_set_shop_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671620903548"
		let event_params={"caller_name":"action_set_shop_account__cc_for_set_shop_account","event_desc":"CC for set Shop account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_set_shop_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_shop_set_bank_accountService.fn_npss_cs_shop_set_bank_account(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action remove shop bank account"
	action_remove_shop_bank_account__cc_for_remove__shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_remove_shop_bank_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671620916610"
		let event_params={"caller_name":"action_remove_shop_bank_account__cc_for_remove__shop","event_desc":"CC for Remove  shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_remove_shop_bank_account","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_shop_remove_bank_accountService.fn_npss_cs_shop_remove_bank_account(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "action disable shop details"
	action_disable_shop_details__cc_for_disable_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_disable_shop_details"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671620933141"
		let event_params={"caller_name":"action_disable_shop_details__cc_for_disable_shop","event_desc":"CC for Disable shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_disable_shop_details","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_shop_disableService.fn_npss_cs_shop_disable(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui tri btn3"
	navigation_ui_tri_btn3__bt_for_shop_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_tri_btn3"
		let destn_id="shop_detail"
		let parent_source_id=""
		let event_code="e_1671622988572"
		let event_params={"caller_name":"navigation_ui_tri_btn3__bt_for_shop_detail","event_desc":"BT for shop detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_tri_btn3","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui tri btn4"
	navigation_ui_tri_btn4__bt_for_cashdesk() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_tri_btn4"
		let destn_id="cash_desk_detail"
		let parent_source_id=""
		let event_code="e_1671623264070"
		let event_params={"caller_name":"navigation_ui_tri_btn4__bt_for_cashdesk","event_desc":"BT for cashdesk","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_tri_btn4","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view shop"
	navigation_ui_view_shop__sp_for_view_sh_cash_desk_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671688782908"
		let event_params={"caller_name":"navigation_ui_view_shop__sp_for_view_sh_cash_desk_btn","event_desc":"SP for view sh cash desk btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_shop","raiseparam":{"profile_code":"BTL_1304_1671687995972"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view shop"
	navigation_ui_view_shop__brfq_from_shop_to_vscd_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_shop"
		let destn_id="shop"
		let parent_source_id=""
		let event_code="e_1671688925790"
		let event_params={"caller_name":"navigation_ui_view_shop__brfq_from_shop_to_vscd_btn","event_desc":"BRFQ from shop to vscd btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_shop","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_shop_to_vscd_btn__sfr_for_shop_details,"
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671692481619","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMS_ID,        BANKUSERID,        SHOP_MID,        SHOP_NAME,        SHOP_ID,        SHOP_TYPE,        SHOP_MCC,        SHOP_IBAN,        BUILDING,        STREET,        CITY,        POSTAL_CODE,        COUNTY,        COUNTRY,        STATUS,        PROCESS_STATUS,        TENANT_ID,        CREATED_DATE   FROM (SELECT S.NPSSMS_ID,                S.PRODUCT_CODE,                S.BANKUSERID,                S.SHOP_NAME,                S.SHOP_MID,                S.SHOP_ID,                S.SHOP_TYPE,                S.SHOP_MCC,                S.SHOP_IBAN,                S.BUILDING,                S.STREET,                S.CITY,                S.POSTAL_CODE,                S.COUNTY,                S.COUNTRY,                S.EXHF_ID,                S.STATUS,                S.PROCESS_STATUS,                S.TENANT_ID,                S.CREATED_DATE           FROM NPSS_MERCHANT_SHOPS S) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from shop to vscd btn"
	brfq_from_shop_to_vscd_btn__sfr_for_shop_details(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_shop_to_vscd_btn"
		let destn_id="shop"
		let parent_source_id="navigation_ui_view_shop"
		let event_code="e_1671689139814"
		let event_params={"caller_name":"brfq_from_shop_to_vscd_btn__sfr_for_shop_details","event_desc":"SFR for shop details","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_shop","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1666846074129":{"dtt_1304_1666847660575":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1666846074129","dt_desc":"NPSS Merchant Proxy DTG","dtt_code":"DTT_1304_1666847660575","dtt_desc":"NPSS Merchant Cashdesk","ds_eligible":"DS_1671692481619","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS SM Merchant Shop Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"BANKUSERID","alias_name":"","mq_id":"MQ_1666932220178","date_format":false},{"column_name":"SHOP_MID","alias_name":"","mq_id":"MQ_1666932220593","date_format":false},{"column_name":"SHOP_NAME","alias_name":"","mq_id":"MQ_1666932220745","date_format":false},{"column_name":"SHOP_ID","alias_name":"","mq_id":"MQ_1666932220913","date_format":false},{"column_name":"SHOP_TYPE","alias_name":"","mq_id":"MQ_1666932221257","date_format":false},{"column_name":"SHOP_MCC","alias_name":"","mq_id":"MQ_1666932221417","date_format":false},{"column_name":"SHOP_IBAN","alias_name":"","mq_id":"MQ_1666932221577","date_format":false},{"column_name":"BUILDING","alias_name":"","mq_id":"MQ_1666932222401","date_format":false},{"column_name":"STREET","alias_name":"","mq_id":"MQ_1666932222561","date_format":false},{"column_name":"CITY","alias_name":"","mq_id":"MQ_1666932288472","date_format":false},{"column_name":"POSTAL_CODE","alias_name":"","mq_id":"MQ_1666932288632","date_format":false},{"column_name":"COUNTY","alias_name":"","mq_id":"MQ_1666932289064","date_format":false},{"column_name":"COUNTRY","alias_name":"","mq_id":"MQ_1666932350992","date_format":false},{"column_name":"NPSSMS_ID","alias_name":"","mq_id":"MQ_1667366133634","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSMS_ID,        BANKUSERID,        SHOP_MID,        SHOP_NAME,        SHOP_ID,        SHOP_TYPE,        SHOP_MCC,        SHOP_IBAN,        BUILDING,        STREET,        CITY,        POSTAL_CODE,        COUNTY,        COUNTRY,        STATUS,        PROCESS_STATUS,        TENANT_ID,        CREATED_DATE   FROM (SELECT S.NPSSMS_ID,                S.PRODUCT_CODE,                S.BANKUSERID,                S.SHOP_NAME,                S.SHOP_MID,                S.SHOP_ID,                S.SHOP_TYPE,                S.SHOP_MCC,                S.SHOP_IBAN,                S.BUILDING,                S.STREET,                S.CITY,                S.POSTAL_CODE,                S.COUNTY,                S.COUNTRY,                S.EXHF_ID,                S.STATUS,                S.PROCESS_STATUS,                S.TENANT_ID,                S.CREATED_DATE           FROM NPSS_MERCHANT_SHOPS S) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS SM Merchant Shop Details Horizontal CCD","filter":[{"filter_name":"BANKUSERID","binding_name":"BANKUSERID","binding_value":"","source_name":"MI_LEVEL_BANKUSERID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Bank User ID","target_column":"BANKUSERID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop MID","target_column":"SHOP_MID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Shop Name","target_column":"SHOP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "cash desk action back"
	cash_desk_action_back__sp_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="cash_desk_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671691473696"
		let event_params={"caller_name":"cash_desk_action_back__sp_for_back","event_desc":"sp for back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cash_desk_action_back","raiseparam":{"profile_code":"BTL_1304_1670996775588"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action back to view shop"
	action_back_to_view_shop__sp_for_action_view_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_back_to_view_shop"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671715602289"
		let event_params={"caller_name":"action_back_to_view_shop__sp_for_action_view_shop","event_desc":"SP for action view shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_back_to_view_shop","raiseparam":{"profile_code":"BTL_1304_1671687995972"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "action back to view shop"
	action_back_to_view_shop__tbc_for_trg_hide_all_nav() { 
		let Dest_Is_ctrl=true
		
		let source_id="action_back_to_view_shop"
		let destn_id="navigation_ui_trg_hide_all_navigation"
		let parent_source_id=""
		let event_code="e_1671789393031"
		let event_params={"caller_name":"action_back_to_view_shop__tbc_for_trg_hide_all_nav","event_desc":"TBC for trg hide all nav","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"action_back_to_view_shop","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block account"
	sub_navigation_ui_block_account__cc_for_show_hide_for_block_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_block_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671782956877"
		let event_params={"caller_name":"sub_navigation_ui_block_account__cc_for_show_hide_for_block_acc","event_desc":"cc for show hide for block acc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_block_account","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block account"
	sub_navigation_ui_block_account__sp_for_block_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_block_account"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671782990164"
		let event_params={"caller_name":"sub_navigation_ui_block_account__sp_for_block_acc","event_desc":"sp for block acc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_block_account","raiseparam":{"profile_code":"BTL_1304_1670996891370"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "sub navigation ui block account"
	sub_navigation_ui_block_account__se_for_block_cnk_acc() { 
		let Dest_Is_ctrl=true
		
		let source_id="sub_navigation_ui_block_account"
		let destn_id="action_block_bank_account"
		let parent_source_id=""
		let event_code="e_1671783272527"
		let event_params={"caller_name":"sub_navigation_ui_block_account__se_for_block_cnk_acc","event_desc":"SE for block cnk acc","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"sub_navigation_ui_block_account","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_enroll_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_enroll_shop"
		let parent_source_id=""
		let event_code="e_1671619586398"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_enroll_shop","event_desc":"HE for Enroll Shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_disable_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_disable_shop_details"
		let parent_source_id=""
		let event_code="e_1671619632915"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_disable_shop","event_desc":"HE for Disable shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_set_shop_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_set_shop_account"
		let parent_source_id=""
		let event_code="e_1671619990287"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_set_shop_account","event_desc":"HE for set shop account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_action_add_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_add_bank_account"
		let parent_source_id=""
		let event_code="e_1671000834042"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_action_add_account","event_desc":"HE for action add account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_action_change_mob() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_change_mobile_number"
		let parent_source_id=""
		let event_code="e_1670996990729"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_action_change_mob","event_desc":"HE for action change mob","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_remove_account() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_remove_bank_account"
		let parent_source_id=""
		let event_code="e_1671599674558"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_remove_account","event_desc":"HE for Remove account","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_enroll_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_enroll_cash_desk"
		let parent_source_id=""
		let event_code="e_1671604627015"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_enroll_cd","event_desc":"HE for Enroll CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_block_unblock() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_block_bank_account"
		let parent_source_id=""
		let event_code="e_1671025627076"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_block_unblock","event_desc":"HE for Block unblock","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__e_1671620248127() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_update_shop_details"
		let parent_source_id=""
		let event_code="e_1671620248127"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__e_1671620248127","event_desc":"E_1671620248127","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_update_personal_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_update_personal_data"
		let parent_source_id=""
		let event_code="e_1670997004020"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_update_personal_data","event_desc":"HE for Update personal data","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_unblock_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_unblock_bank_account"
		let parent_source_id=""
		let event_code="e_1671598890233"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_unblock_btn","event_desc":"HE for unblock btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_action_unentrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_disable_merchant"
		let parent_source_id=""
		let event_code="e_1670997015088"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_action_unentrol","event_desc":"HE for action unentrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_action_entrol() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_enroll"
		let parent_source_id=""
		let event_code="e_1670996997915"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_action_entrol","event_desc":"HE for action entrol","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_remove_shop() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_remove_shop_bank_account"
		let parent_source_id=""
		let event_code="e_1671620209065"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_remove_shop","event_desc":"HE for remove shop","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_disable_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_disable_cash_desk_details"
		let parent_source_id=""
		let event_code="e_1671604672206"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_disable_cd","event_desc":"HE for Disable CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_update_mcc_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_update_mcc"
		let parent_source_id=""
		let event_code="e_1671599283401"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_update_mcc_btn","event_desc":"HE for Update MCC btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trg hide all navigation"
	navigation_ui_trg_hide_all_navigation__he_for_update_cd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trg_hide_all_navigation"
		let destn_id="action_update_cash_desk_details"
		let parent_source_id=""
		let event_code="e_1671604706574"
		let event_params={"caller_name":"navigation_ui_trg_hide_all_navigation__he_for_update_cd","event_desc":"HE for Update CD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trg_hide_all_navigation","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
