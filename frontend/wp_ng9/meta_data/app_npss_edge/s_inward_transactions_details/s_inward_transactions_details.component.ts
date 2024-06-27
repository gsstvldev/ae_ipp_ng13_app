/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35866 
Modified By     : Admin 
Modified Date   : 2024-Jun-27 9:59 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_inward_transactions_details
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_c_export_pdf_for_reportService} from '../../../custom_widget/npss_c_export_pdf_for_report/npss_c_export_pdf_for_report.service'
import {npss_cs_export_excel_for_reportService} from '../../../custom_widget/npss_cs_export_excel_for_report/npss_cs_export_excel_for_report.service'
import {npss_c_cond_ctrl_validationService} from '../../../custom_widget/npss_c_cond_ctrl_validation/npss_c_cond_ctrl_validation.service'
import {npss_cs_dashboard_titleService} from '../../../custom_widget/npss_cs_dashboard_title/npss_cs_dashboard_title.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_inward_transactions_details',
	templateUrl: './s_inward_transactions_details.component.html',
	styleUrls: ['./s_inward_transactions_details.component.css'],
	providers:[npss_c_export_pdf_for_reportService,npss_cs_export_excel_for_reportService,npss_c_cond_ctrl_validationService,npss_cs_dashboard_titleService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_inward_transactions_detailsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_inward_transactions_details"
	wftpa_id : string = "WFT_NPSS_P_1304_1710147659345_0"
	cg_code : string = "CG_1304_1708326278471"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID","dtt_1304_1711696447765":"NPSSFL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "list"
	uicgc_2 : string = "navigation"
	uicgc_4 : string = "search"
	uicgc_6 : string = "home_dashboard_title"
	key_events : any = {}
	btl_1304_1708326962657 : string = "p_search_layout"
	btl_1304_1708326855714 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_2"]
	p_search_layout__spap_from_search_btn_showpopup : boolean = false
	list : any = {}
	navigation : any = {}
	navigation_search : any = {}
	navigation_export_as_excel : any = {}
	navigation_export_as_pdf : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	home_dashboard_title : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_c_export_pdf_for_reportService:npss_c_export_pdf_for_reportService,private npss_cs_export_excel_for_reportService:npss_cs_export_excel_for_reportService,private npss_c_cond_ctrl_validationService:npss_c_cond_ctrl_validationService,private npss_cs_dashboard_titleService:npss_cs_dashboard_titleService,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_1"
		this.list.params = {"need_search":"N","advance_dynamic_search":"N","need_pag_datatable":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1710334578416","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Inward Transactions Details Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"department_code","alias_name":"","mq_id":"MQ_1710157338436","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1710157364995","date_format":false,"currency_format":true},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1710157391155","date_format":true},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1710157444544","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1710157482529","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1710157592759","date_format":false},{"column_name":"dbtr_acct_name","alias_name":"","mq_id":"MQ_1710157624221","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1710157645749","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1710157702756","date_format":false},{"column_name":"cdtr_acct_name","alias_name":"","mq_id":"MQ_1710157748059","date_format":false},{"column_name":"SENDER_BANK","alias_name":"","mq_id":"MQ_1710157759547","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1710157843154","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1710157857361","date_format":true},{"column_name":"ext_purpose_code","alias_name":"","mq_id":"MQ_1710157874665","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1710157887169","date_format":false},{"column_name":"Core_Bank_Errors","alias_name":"","mq_id":"MQ_1710157904401","date_format":false},{"column_name":"CB_ERRORS","alias_name":"","mq_id":"MQ_1710157917160","date_format":false},{"column_name":"maker","alias_name":"","mq_id":"MQ_1710157931648","date_format":false},{"column_name":"checker","alias_name":"","mq_id":"MQ_1710157942056","date_format":false},{"column_name":"hdr_msg_id","alias_name":"","mq_id":"MQ_1710157960832","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1710157976047","date_format":false},{"column_name":"category_purpose_prty","alias_name":"","mq_id":"MQ_1710157990159","date_format":false},{"column_name":"fx_resv_text1","alias_name":"","mq_id":"MQ_1710158013190","date_format":false},{"column_name":"BATCH_PAYMENT_FLAG","alias_name":"","mq_id":"MQ_1710239051794","date_format":false},{"column_name":"INWARD_FILE_NAME","alias_name":"","mq_id":"MQ_1710239069378","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1710239594249","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1719481786292","date_format":true}],"joins":[]},"eq_text":"select  distinct UETR,  process_status ,  status ,  created_date ,  value_date ,  VALUEDATE,  department_code ,  intrbk_sttlm_amnt ,  ext_purpose_code,  payment_endtoend_id ,  dbtr_iban ,  FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,  FN_CARD_DECRYPT_AND_MASK_RPT(DBTR_ACCT_NO) as DBTR_ACCT_NO,  dbtr_acct_name ,  cdtr_iban ,  clrsysref,  hdr_msg_id,  category_purpose_prty,  fx_resv_text1,  cdtr_acct_name ,  dr_sort_code ,  SOURCE_CHANNEL,  SENDER_BANK,  CB_ERRORS,  Core_Bank_Errors,  tran_ref_id,  SENDER_REFERENCE_NUMBER,  maker,  PROCESS_GROUP,  checker,  BATCH_PAYMENT_FLAG,  INWARD_FILE_NAME from  (  select   NTPL.UETR,   NT.process_status ,   NT.status ,   NT.created_date ,   NT.value_date ,   to_char(NT.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NT.hdr_msg_id,   NT.category_purpose_prty,   NT.fx_resv_text1,   nt.department_code,   NT.intrbk_sttlm_amnt,   NT.ext_purpose_code,   NT.payment_endtoend_id ,   NT.dbtr_iban,   NT.dbtr_acct_name,   NT.cdtr_iban,   NT.cdtr_acct_name,   NT.dr_sort_code ,   NT.channel_id as SOURCE_CHANNEL ,   NT.tran_ref_id as SENDER_REFERENCE_NUMBER,   NT.tran_ref_id,   NT.channel_refno,   a15.PROCESS_REF_NO as clrsysref,   NT.process_type ,   NT.tenant_id ,   NT.PROCESS_GROUP,   NT.maker,   NT.checker,   NT.cr_acct_identification,   NT.dbtr_acct_no,   NTPL.process_name ,   NT.INWARD_FILE_NAME,   plcduae.CBUAERETURNCODE as CB_ERRORS,   plc.T24RETURNCODE as Core_Bank_Errors,   cmb.bank_name as SENDER_BANK,   cse.s_description,   case    when NT.process_group = 'BCT' then 'Y'    else 'N'   end as BATCH_PAYMENT_FLAG,   case    when ntpl.process_name = 'Inward Credit Posting'    and ntpl.status = 'IP_RCT_POSTING_SUCCESS'    and ntpl.process_type = 'IP' then ntpl.PROCESS_REF_NO    else 'Others'   end as T24_FT_REFERENCE_NUMBER  from   <TRAN_DB>.npss_transactions nt  inner join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on   NT.UETR = NTPL.uetr  left join (   select    plr.npsstpl_id,    plr.uetr,    plr.CBUAE_RETURN_CODE,    plr.CBUAERETURNCODE,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.CBUAE_RETURN_CODE,     CONCAT (a.CBUAE_RETURN_CODE,     '-',     cnec.error_description) as CBUAERETURNCODE,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     <TRAN_DB>.npss_trn_process_log a    left join core_nc_error_codes cnec on     a.CBUAE_RETURN_CODE = cnec.error_code     and cnec.processing_system = 'CBUAE'    where     A.CBUAE_RETURN_CODE is not null     and A.status in ('IP_RCT_POSTING_FAILURE', 'IP_RCT_RR_POSTING_FAILURE')      and A.process_name in ('Inward Credit Posting', 'IR Return Reversal Posting') ) plr   where    plr.row_num = 1) plcduae on   plcduae.uetr = nt.uetr  left join (   select    pl.npsstpl_id,    pl.uetr,    pl.T24_RETURN_CODE,    pl.T24RETURNCODE,    pl.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.T24_RETURN_CODE,     CONCAT(A1.T24_RETURN_CODE,     '-',     cnec.error_description ) as T24RETURNCODE,     row_number() over (partition by uetr    order by     a1.npsstpl_id desc) as row_num    from     <TRAN_DB>.npss_trn_process_log a1    left join core_nc_error_codes cnec on     cnec.error_code = A1.T24_RETURN_CODE    where     A1.T24_RETURN_CODE is not null     and A1.status in ('IP_RCT_POSTING_FAILURE', 'IP_RCT_RR_POSTING_FAILURE')      and A1.process_name in ('Inward Credit Posting', 'IR Return Reversal Posting')) pl   where    pl.row_num = 1) plc on   plc.uetr = nt.uetr  left join core_member_banks cmb on   cmb.bic_code = nt.dr_sort_code   and cmb.NEED_SYNC = 'Y'  left join (   select    A15.npsstpl_id,    A15.uetr,    A15.PROCESS_REF_NO   from    (    select     A5.npsstpl_id,     A5.uetr,     A5.PROCESS_REF_NO    from     (     select      npsstpl_id,      uetr,      PROCESS_REF_NO,      ROW_NUM     from      (      select       npsstpl_id,       uetr,       PROCESS_REF_NO,       row_number() over (partition by uetr      order by       npsstpl_id desc) as row_num      from       <TRAN_DB>.npss_trn_process_log A05      where       A05.process_name = 'Receive Pacs002'       and A05.process_type = 'IP' ) F     where      F.row_num = 1 ) A5    order by     A5.npsstpl_id desc ) A15 ) a15 on   a15.uetr = nt.uetr  inner join CORE_SYSTEM_EXTN CSE on   CSE.department_code = nt.DEPARTMENT_CODE) V where  process_type = 'IP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Inward Transactions Details Report MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Department Name","target_column":"department_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Amount Range","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Transaction Date Range","target_column":"created_date","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy\"","date_format":true},{"header":"Sender Reference Number","target_column":"tran_ref_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Account","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Card Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Name","target_column":"dbtr_acct_name","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Account","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Name","target_column":"cdtr_acct_name","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender Bank","target_column":"SENDER_BANK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy\"","date_format":true},{"header":"Purpose code","target_column":"ext_purpose_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core bank Error","target_column":"Core_Bank_Errors","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Central Bank Error","target_column":"CB_ERRORS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Maker","target_column":"maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Checker","target_column":"checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Msg ID","target_column":"hdr_msg_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clrsysrefno","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose Code","target_column":"category_purpose_prty","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT/CI reference number","target_column":"fx_resv_text1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Reference ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Payment Flag","target_column":"BATCH_PAYMENT_FLAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward File Name","target_column":"INWARD_FILE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_2"
		this.navigation.params = {}
		this.navigation.datasource = {}
		this.navigation.context_menu = []
		this.navigation.views = {}
		this.navigation.onChangecomponent = new EventEmitter<any>()
		this.navigation.show = true
		this.navigation.dynamic_param = {}
		this.navigation.f_navigation = {"show":true}
		this.navigation.current_view = "f_navigation"
		
		// "Search" Button of "Navigation" component
		this.navigation_search.label_name = "Search"
		this.navigation_search.show = true
		this.navigation_search.disabled = false
		this.navigation_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.navigation_search.dynamic_param = {}
		this.navigation_search.role = []
		this.navigation_search.action = ""
		
		// "Export as Excel" Button of "Navigation" component
		this.navigation_export_as_excel.label_name = "Export as Excel"
		this.navigation_export_as_excel.show = true
		this.navigation_export_as_excel.disabled = false
		this.navigation_export_as_excel.params = {"icon_only":false,"uicgcc_style":"fa fa-file-excel-o"}
		this.navigation_export_as_excel.dynamic_param = {}
		this.navigation_export_as_excel.role = []
		this.navigation_export_as_excel.action = ""
		
		// "Export as PDF" Button of "Navigation" component
		this.navigation_export_as_pdf.label_name = "Export as PDF"
		this.navigation_export_as_pdf.show = true
		this.navigation_export_as_pdf.disabled = false
		this.navigation_export_as_pdf.params = {"icon_only":false,"uicgcc_style":"fa fa-file-pdf-o"}
		this.navigation_export_as_pdf.dynamic_param = {}
		this.navigation_export_as_pdf.role = []
		this.navigation_export_as_pdf.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Inward Transactions Details Report SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_inward_transactions_details_report_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_inward_transactions_details_report_srch"
		
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
	
		// Component level properties - "Home Dashboard Title" 
		this.home_dashboard_title.uictrl_code = "custom_widget"
		this.home_dashboard_title.uicgc_desc = "Home Dashboard Title"
		this.home_dashboard_title.uicgc_code = "uicgc_6"
		this.home_dashboard_title.params = {}
		this.home_dashboard_title.datasource = {}
		this.home_dashboard_title.context_menu = []
		this.home_dashboard_title.views = {}
		this.home_dashboard_title.onChangecomponent = new EventEmitter<any>()
		this.home_dashboard_title.show = true
		this.home_dashboard_title.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__dashboard_ides()
		this.page_load__e_1708425960961()
		this.page_load__de_from_page_load()
		this.page_load__de_for_pdf()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__spap_from_search_btn()
		this.navigation_search__cui_from_search_to_search_cmnt()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as pdf"
	navigation_export_as_pdf__action_button_click(){
		this.navigation_export_as_pdf__cc_for_export_as_pdf_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as excel"
	navigation_export_as_excel__action_button_click(){
		this.navigation_export_as_excel__cc_for_export_as_excel_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_from_clear_btn_to_search_cmnt()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cc_for_control()
	}

	//Handler for INTERNAL event of "cc for control"
	cc_for_control__internal(parent_event_result){
		this.cc_for_control__ssp_from_serach(parent_event_result)
		this.cc_for_control__close_popup(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from serach"
	ssp_from_serach__internal(parent_event_result){
		this.ssp_from_serach__brfq_from_list(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1708425960961"
	e_1708425960961__internal(parent_event_result){
		this.e_1708425960961__e_1708425977969(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "list"
	list__selection_changed(){
		this.list__ee_for_excel()
		this.list__ee_for_pdf()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__spap_from_search_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708327114228"
		let event_params={"caller_name":"navigation_search__spap_from_search_btn","event_desc":"SPAP From Search Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_from_search_btn","selector":"p_search_layout","profile_code":"BTL_1304_1708326962657","window_title":"Search","window_height":535,"window_width":"950px","window_close_icon":"Y","eventdes":"spap_from_search_btn","eventcode":"E_1708327114228"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__cui_from_search_to_search_cmnt() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1708327196131"
		let event_params={"caller_name":"navigation_search__cui_from_search_to_search_cmnt","event_desc":"CUI From Search to Search Cmnt","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as pdf"
	navigation_export_as_pdf__cc_for_export_as_pdf_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_export_as_pdf"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708327227186"
		let event_params={"caller_name":"navigation_export_as_pdf__cc_for_export_as_pdf_btn","event_desc":"CC For Export As PDF Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_export_as_pdf","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_export_pdf_for_reportService.fn_npss_c_export_pdf_for_report(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as excel"
	navigation_export_as_excel__cc_for_export_as_excel_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_export_as_excel"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708327326964"
		let event_params={"caller_name":"navigation_export_as_excel__cc_for_export_as_excel_btn","event_desc":"CC For Export as Excel Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_export_as_excel","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_export_excel_for_reportService.fn_npss_cs_export_excel_for_report(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_from_clear_btn_to_search_cmnt() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1708327376371"
		let event_params={"caller_name":"search_clear__cui_from_clear_btn_to_search_cmnt","event_desc":"CUI From Clear Btn to Search cmnt","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	search_search__cc_for_control() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1710480264849"
		let event_params={"caller_name":"search_search__cc_for_control","event_desc":"CC for control","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_control__ssp_from_serach,cc_for_control__close_popup,"
		let event_data={}
		let data_source={}
		try {
			this.npss_c_cond_ctrl_validationService.fn_npss_c_cond_ctrl_validation(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for control"
	cc_for_control__ssp_from_serach(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_control"
		let destn_id="search"
		let parent_source_id="search_search"
		let event_code="e_1710480365033"
		let event_params={"caller_name":"cc_for_control__ssp_from_serach","event_desc":"SSP from Serach","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_serach__brfq_from_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for control"
	cc_for_control__close_popup(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_control"
		let destn_id=""
		let parent_source_id="search_search"
		let event_code="e_1710497251127"
		let event_params={"popup_info":{"context":""},"caller_name":"cc_for_control__close_popup","event_desc":"Close popup","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp from serach"
	ssp_from_serach__brfq_from_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_serach"
		let destn_id="list"
		let parent_source_id="cc_for_control"
		let event_code="e_1710480399724"
		let event_params={"caller_name":"ssp_from_serach__brfq_from_list","event_desc":"BRFQ from List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1710334578416","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Inward Transactions Details Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"department_code","alias_name":"","mq_id":"MQ_1710157338436","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1710157364995","date_format":false,"currency_format":true},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1710157391155","date_format":true},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1710157444544","date_format":false},{"column_name":"dbtr_iban","alias_name":"","mq_id":"MQ_1710157482529","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1710157592759","date_format":false},{"column_name":"dbtr_acct_name","alias_name":"","mq_id":"MQ_1710157624221","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1710157645749","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1710157702756","date_format":false},{"column_name":"cdtr_acct_name","alias_name":"","mq_id":"MQ_1710157748059","date_format":false},{"column_name":"SENDER_BANK","alias_name":"","mq_id":"MQ_1710157759547","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1710157843154","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1710157857361","date_format":true},{"column_name":"ext_purpose_code","alias_name":"","mq_id":"MQ_1710157874665","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1710157887169","date_format":false},{"column_name":"Core_Bank_Errors","alias_name":"","mq_id":"MQ_1710157904401","date_format":false},{"column_name":"CB_ERRORS","alias_name":"","mq_id":"MQ_1710157917160","date_format":false},{"column_name":"maker","alias_name":"","mq_id":"MQ_1710157931648","date_format":false},{"column_name":"checker","alias_name":"","mq_id":"MQ_1710157942056","date_format":false},{"column_name":"hdr_msg_id","alias_name":"","mq_id":"MQ_1710157960832","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1710157976047","date_format":false},{"column_name":"category_purpose_prty","alias_name":"","mq_id":"MQ_1710157990159","date_format":false},{"column_name":"fx_resv_text1","alias_name":"","mq_id":"MQ_1710158013190","date_format":false},{"column_name":"BATCH_PAYMENT_FLAG","alias_name":"","mq_id":"MQ_1710239051794","date_format":false},{"column_name":"INWARD_FILE_NAME","alias_name":"","mq_id":"MQ_1710239069378","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1710239594249","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1719481786292","date_format":true}],"joins":[]},"eq_text":"select  distinct UETR,  process_status ,  status ,  created_date ,  value_date ,  VALUEDATE,  department_code ,  intrbk_sttlm_amnt ,  ext_purpose_code,  payment_endtoend_id ,  dbtr_iban ,  FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,  FN_CARD_DECRYPT_AND_MASK_RPT(DBTR_ACCT_NO) as DBTR_ACCT_NO,  dbtr_acct_name ,  cdtr_iban ,  clrsysref,  hdr_msg_id,  category_purpose_prty,  fx_resv_text1,  cdtr_acct_name ,  dr_sort_code ,  SOURCE_CHANNEL,  SENDER_BANK,  CB_ERRORS,  Core_Bank_Errors,  tran_ref_id,  SENDER_REFERENCE_NUMBER,  maker,  PROCESS_GROUP,  checker,  BATCH_PAYMENT_FLAG,  INWARD_FILE_NAME from  (  select   NTPL.UETR,   NT.process_status ,   NT.status ,   NT.created_date ,   NT.value_date ,   to_char(NT.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NT.hdr_msg_id,   NT.category_purpose_prty,   NT.fx_resv_text1,   nt.department_code,   NT.intrbk_sttlm_amnt,   NT.ext_purpose_code,   NT.payment_endtoend_id ,   NT.dbtr_iban,   NT.dbtr_acct_name,   NT.cdtr_iban,   NT.cdtr_acct_name,   NT.dr_sort_code ,   NT.channel_id as SOURCE_CHANNEL ,   NT.tran_ref_id as SENDER_REFERENCE_NUMBER,   NT.tran_ref_id,   NT.channel_refno,   a15.PROCESS_REF_NO as clrsysref,   NT.process_type ,   NT.tenant_id ,   NT.PROCESS_GROUP,   NT.maker,   NT.checker,   NT.cr_acct_identification,   NT.dbtr_acct_no,   NTPL.process_name ,   NT.INWARD_FILE_NAME,   plcduae.CBUAERETURNCODE as CB_ERRORS,   plc.T24RETURNCODE as Core_Bank_Errors,   cmb.bank_name as SENDER_BANK,   cse.s_description,   case    when NT.process_group = 'BCT' then 'Y'    else 'N'   end as BATCH_PAYMENT_FLAG,   case    when ntpl.process_name = 'Inward Credit Posting'    and ntpl.status = 'IP_RCT_POSTING_SUCCESS'    and ntpl.process_type = 'IP' then ntpl.PROCESS_REF_NO    else 'Others'   end as T24_FT_REFERENCE_NUMBER  from   <TRAN_DB>.npss_transactions nt  inner join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on   NT.UETR = NTPL.uetr  left join (   select    plr.npsstpl_id,    plr.uetr,    plr.CBUAE_RETURN_CODE,    plr.CBUAERETURNCODE,    plr.row_num   from    (    select     a.npsstpl_id,     a.uetr,     a.CBUAE_RETURN_CODE,     CONCAT (a.CBUAE_RETURN_CODE,     '-',     cnec.error_description) as CBUAERETURNCODE,     row_number() over( partition by a.uetr    order by     a.npsstpl_id desc) as row_num    from     <TRAN_DB>.npss_trn_process_log a    left join core_nc_error_codes cnec on     a.CBUAE_RETURN_CODE = cnec.error_code     and cnec.processing_system = 'CBUAE'    where     A.CBUAE_RETURN_CODE is not null     and A.status in ('IP_RCT_POSTING_FAILURE', 'IP_RCT_RR_POSTING_FAILURE')      and A.process_name in ('Inward Credit Posting', 'IR Return Reversal Posting') ) plr   where    plr.row_num = 1) plcduae on   plcduae.uetr = nt.uetr  left join (   select    pl.npsstpl_id,    pl.uetr,    pl.T24_RETURN_CODE,    pl.T24RETURNCODE,    pl.row_num   from    (    select     a1.npsstpl_id,     a1.uetr,     a1.T24_RETURN_CODE,     CONCAT(A1.T24_RETURN_CODE,     '-',     cnec.error_description ) as T24RETURNCODE,     row_number() over (partition by uetr    order by     a1.npsstpl_id desc) as row_num    from     <TRAN_DB>.npss_trn_process_log a1    left join core_nc_error_codes cnec on     cnec.error_code = A1.T24_RETURN_CODE    where     A1.T24_RETURN_CODE is not null     and A1.status in ('IP_RCT_POSTING_FAILURE', 'IP_RCT_RR_POSTING_FAILURE')      and A1.process_name in ('Inward Credit Posting', 'IR Return Reversal Posting')) pl   where    pl.row_num = 1) plc on   plc.uetr = nt.uetr  left join core_member_banks cmb on   cmb.bic_code = nt.dr_sort_code   and cmb.NEED_SYNC = 'Y'  left join (   select    A15.npsstpl_id,    A15.uetr,    A15.PROCESS_REF_NO   from    (    select     A5.npsstpl_id,     A5.uetr,     A5.PROCESS_REF_NO    from     (     select      npsstpl_id,      uetr,      PROCESS_REF_NO,      ROW_NUM     from      (      select       npsstpl_id,       uetr,       PROCESS_REF_NO,       row_number() over (partition by uetr      order by       npsstpl_id desc) as row_num      from       <TRAN_DB>.npss_trn_process_log A05      where       A05.process_name = 'Receive Pacs002'       and A05.process_type = 'IP' ) F     where      F.row_num = 1 ) A5    order by     A5.npsstpl_id desc ) A15 ) a15 on   a15.uetr = nt.uetr  inner join CORE_SYSTEM_EXTN CSE on   CSE.department_code = nt.DEPARTMENT_CODE) V where  process_type = 'IP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Inward Transactions Details Report MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Department Name","target_column":"department_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Amount Range","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Transaction Date Range","target_column":"created_date","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy\"","date_format":true},{"header":"Sender Reference Number","target_column":"tran_ref_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Account","target_column":"dbtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Card Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Name","target_column":"dbtr_acct_name","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Account","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Name","target_column":"cdtr_acct_name","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender Bank","target_column":"SENDER_BANK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy\"","date_format":true},{"header":"Purpose code","target_column":"ext_purpose_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core bank Error","target_column":"Core_Bank_Errors","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Central Bank Error","target_column":"CB_ERRORS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Maker","target_column":"maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Checker","target_column":"checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Msg ID","target_column":"hdr_msg_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clrsysrefno","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose Code","target_column":"category_purpose_prty","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT/CI reference number","target_column":"fx_resv_text1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Reference ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Payment Flag","target_column":"BATCH_PAYMENT_FLAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward File Name","target_column":"INWARD_FILE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__dashboard_ides() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708425163365"
		let event_params={"caller_name":"page_load__dashboard_ides","event_desc":"dashboard ides","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_dashboard_titleService.fn_npss_cs_dashboard_title(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1708425960961() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708425960961"
		let event_params={"caller_name":"page_load__e_1708425960961","event_desc":"E_1708425960961","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="e_1708425960961__e_1708425977969,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_from_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_export_as_excel"
		let parent_source_id=""
		let event_code="e_1710332916925"
		let event_params={"caller_name":"page_load__de_from_page_load","event_desc":"DE From Page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_pdf() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_export_as_pdf"
		let parent_source_id=""
		let event_code="e_1710332968676"
		let event_params={"caller_name":"page_load__de_for_pdf","event_desc":"DE For PDF","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "e 1708425960961"
	e_1708425960961__e_1708425977969(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1708425960961"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1708425977969"
		let event_params={"caller_name":"e_1708425960961__e_1708425977969","event_desc":"E_1708425977969","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_for_excel() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_export_as_excel"
		let parent_source_id=""
		let event_code="e_1710333142998"
		let event_params={"caller_name":"list__ee_for_excel","event_desc":"EE For Excel","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_for_pdf() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_export_as_pdf"
		let parent_source_id=""
		let event_code="e_1710333190841"
		let event_params={"caller_name":"list__ee_for_pdf","event_desc":"EE For Pdf","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
