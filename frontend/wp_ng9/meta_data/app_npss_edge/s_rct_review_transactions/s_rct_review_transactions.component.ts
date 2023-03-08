/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28528 
Modified By     : Admin 
Modified Date   : 2023-Mar-08 5:51 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_review_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_change_routingkeyService} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_rct_review_transactions',
	templateUrl: './s_rct_review_transactions.component.html',
	styleUrls: ['./s_rct_review_transactions.component.css'],
	providers:[torus_cs_change_routingkeyService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_rct_review_transactionsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_review_transactions"
	wftpa_id : string = "WFT_NPSS_P_1304_1669367059017_0"
	cg_code : string = "CG_1304_1669305752737"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "transaction_list"
	uicgc_2 : string = "view_dr_cr_details"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "main_back_ui"
	uicgc_6 : string = "queue"
	uicgc_7 : string = "process_log_list"
	uicgc_8 : string = "disable_refund_ui"
	uicgc_9 : string = "enable_refund_ui"
	uicgc_10 : string = "submit_ui"
	uicgc_11 : string = "response_ui"
	uicgc_12 : string = "request_ui"
	uicgc_13 : string = "history_detail"
	uicgc_14 : string = "hst_process_log_back"
	uicgc_15 : string = "hst_process_log_to_main_back"
	uicgc_16 : string = "message_detail"
	uicgc_17 : string = "message_detail_action"
	uicgc_18 : string = "message_detail_ui"
	uicgc_19 : string = "view_payment_details"
	key_events : any = {}
	btl_1304_1668661525669 : string = "p_view_message_ui_layout"
	btl_1304_1668581358650 : string = "p_view_message_layout"
	btl_1304_1666180789841 : string = "p_view_history_layout"
	btl_1304_1666176371576 : string = "p_view_response_layout"
	btl_1304_1666176333073 : string = "p_view_request_layout"
	btl_1304_1666068179786 : string = "p_refund_layout"
	btl_1304_1666010003163 : string = "p_search_layout"
	btl_1304_1666009903061 : string = "p_vertical_layout"
	btl_1304_1666009819055 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_12","uicgc_11","uicgc_18","uicgc_17","uicgc_15","uicgc_5","uicgc_14","uicgc_8","uicgc_9","uicgc_10","uicgc_3"]
	p_search_layout__spap_for_searchs_showpopup : boolean = false
	transaction_list : any = {}
	view_dr_cr_details : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_refund : any = {}
	navigation_ui_view_log_history : any = {}
	navigation_ui_view_message_history : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	main_back_ui : any = {}
	main_back_ui_back : any = {}
	queue : any = {}
	process_log_list : any = {}
	disable_refund_ui : any = {}
	enable_refund_ui : any = {}
	submit_ui : any = {}
	submit_ui_back : any = {}
	submit_ui_reject : any = {}
	submit_ui_accept : any = {}
	response_ui : any = {}
	request_ui : any = {}
	history_detail : any = {}
	hst_process_log_back : any = {}
	hst_process_log_back_back : any = {}
	hst_process_log_to_main_back : any = {}
	hst_process_log_to_main_back_back : any = {}
	hst_process_log_to_main_back_view_response : any = {}
	hst_process_log_to_main_back_view_request : any = {}
	message_detail : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	message_detail_ui : any = {}
	message_detail_ui_back : any = {}
	view_payment_details : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_change_routingkeyService:torus_cs_change_routingkeyService,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_1"
		this.transaction_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_2"
		this.view_dr_cr_details.params = {"need_search":"N","need_vertical":"Y","advance_dynamic_search":"N"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367679920","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false},{"column_name":"process_name","alias_name":"","mq_id":"MQ_1678100501565","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,process_name from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   fn_card_decrypt_and_mask(A.DBTR_ACCT_NO,   $PCIDSS_KEY) as DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   fn_card_decrypt_and_mask(A.CR_ACCT_IDENTIFICATION,   $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   ntpl.process_name   from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  inner join npss_trn_process_log ntpl on ntpl.uetr = a.uetr   order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_3"
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
		this.navigation_ui_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.navigation_ui_search.dynamic_param = {}
		this.navigation_ui_search.role = []
		this.navigation_ui_search.action = ""
		
		// "View Tran" Button of "Navigation UI" component
		this.navigation_ui_view_tran.label_name = "View Tran"
		this.navigation_ui_view_tran.show = true
		this.navigation_ui_view_tran.disabled = true
		this.navigation_ui_view_tran.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_tran.dynamic_param = {}
		this.navigation_ui_view_tran.role = []
		this.navigation_ui_view_tran.action = ""
		
		// "Refund" Button of "Navigation UI" component
		this.navigation_ui_refund.label_name = "Refund"
		this.navigation_ui_refund.show = true
		this.navigation_ui_refund.disabled = false
		this.navigation_ui_refund.params = {"icon_only":false,"uicgcc_style":"fa fa-location-arrow"}
		this.navigation_ui_refund.dynamic_param = {}
		this.navigation_ui_refund.role = []
		this.navigation_ui_refund.action = ""
		
		// "View Log History" Button of "Navigation UI" component
		this.navigation_ui_view_log_history.label_name = "View Log History"
		this.navigation_ui_view_log_history.show = true
		this.navigation_ui_view_log_history.disabled = false
		this.navigation_ui_view_log_history.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_log_history.dynamic_param = {}
		this.navigation_ui_view_log_history.role = []
		this.navigation_ui_view_log_history.action = ""
		
		// "View Message History" Button of "Navigation UI" component
		this.navigation_ui_view_message_history.label_name = "View Message History"
		this.navigation_ui_view_message_history.show = true
		this.navigation_ui_view_message_history.disabled = false
		this.navigation_ui_view_message_history.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_message_history.dynamic_param = {}
		this.navigation_ui_view_message_history.role = []
		this.navigation_ui_view_message_history.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS RCT Post PLOG srch","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_rct_post_plog_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_rct_post_plog_srch"
		
		// "Search" Button of "Search" component
		this.search_search.label_name = "Search"
		this.search_search.show = true
		this.search_search.disabled = false
		this.search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.search_search.dynamic_param = {}
		this.search_search.role = []
		this.search_search.action = ""
		
		// "Clear" Button of "Search" component
		this.search_clear.label_name = "Clear"
		this.search_clear.show = true
		this.search_clear.disabled = false
		this.search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.search_clear.dynamic_param = {}
		this.search_clear.role = []
		this.search_clear.action = ""
	
		// Component level properties - "Main Back UI" 
		this.main_back_ui.uictrl_code = "dynamic_ui"
		this.main_back_ui.uicgc_desc = "Main Back UI"
		this.main_back_ui.uicgc_code = "uicgc_5"
		this.main_back_ui.params = {}
		this.main_back_ui.datasource = {}
		this.main_back_ui.context_menu = []
		this.main_back_ui.views = {}
		this.main_back_ui.onChangecomponent = new EventEmitter<any>()
		this.main_back_ui.show = true
		this.main_back_ui.dynamic_param = {}
		this.main_back_ui.f_main_back_ui = {"show":true}
		this.main_back_ui.current_view = "f_main_back_ui"
		
		// "Back" Button of "Main Back UI" component
		this.main_back_ui_back.label_name = "Back"
		this.main_back_ui_back.show = true
		this.main_back_ui_back.disabled = false
		this.main_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.main_back_ui_back.dynamic_param = {}
		this.main_back_ui_back.role = []
		this.main_back_ui_back.action = ""
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_6"
		this.queue.params = {"need_pag_datatable":"N","need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367415229","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Group Name MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669177856684","date_format":false},{"column_name":"GROUP_COUNT","alias_name":"","mq_id":"MQ_1669177856860","date_format":false}],"joins":[]},"eq_text":"SELECT GROUP_NAME, GN_SORT_ORDER, COUNT(GROUP_NAME) AS GROUP_COUNT   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NT.TENANT_ID,                NT.DEPARTMENT_CODE,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                GN_SORT_ORDER           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            CD.SORT_ORDER AS GN_SORT_ORDER                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                      INNER JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CD ON CD.CD_CODE =                                                                 G.GROUP_NAME AND CD.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1                        AND CD.CD_CATEGORY = 'STATUS_GROUP') NTPL ON NT.UETR =                                                                     NTPL.UETR           LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  GROUP BY GN_SORT_ORDER, GROUP_NAME  ORDER BY GN_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Group Name LR  Chart CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"EXCEPTION/PENDING","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Count","target_column":"GROUP_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_7"
		this.process_log_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.process_log_list.datasource = {}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "Disable Refund UI" 
		this.disable_refund_ui.uictrl_code = "dynamic_ui"
		this.disable_refund_ui.uicgc_desc = "Disable Refund UI"
		this.disable_refund_ui.uicgc_code = "uicgc_8"
		this.disable_refund_ui.params = {}
		this.disable_refund_ui.datasource = {}
		this.disable_refund_ui.context_menu = []
		this.disable_refund_ui.views = {}
		this.disable_refund_ui.onChangecomponent = new EventEmitter<any>()
		this.disable_refund_ui.show = true
		this.disable_refund_ui.dynamic_param = {}
		this.disable_refund_ui.f_disable_refund_ui = {"show":true}
		this.disable_refund_ui.current_view = "f_disable_refund_ui"
	
		// Component level properties - "Enable Refund UI" 
		this.enable_refund_ui.uictrl_code = "dynamic_ui"
		this.enable_refund_ui.uicgc_desc = "Enable Refund UI"
		this.enable_refund_ui.uicgc_code = "uicgc_9"
		this.enable_refund_ui.params = {}
		this.enable_refund_ui.datasource = {}
		this.enable_refund_ui.context_menu = []
		this.enable_refund_ui.views = {}
		this.enable_refund_ui.onChangecomponent = new EventEmitter<any>()
		this.enable_refund_ui.show = true
		this.enable_refund_ui.dynamic_param = {}
		this.enable_refund_ui.f_enable_refund_ui = {"show":true}
		this.enable_refund_ui.current_view = "f_enable_refund_ui"
	
		// Component level properties - "Submit UI" 
		this.submit_ui.uictrl_code = "dynamic_ui"
		this.submit_ui.uicgc_desc = "Submit UI"
		this.submit_ui.uicgc_code = "uicgc_10"
		this.submit_ui.params = {}
		this.submit_ui.datasource = {}
		this.submit_ui.context_menu = []
		this.submit_ui.views = {}
		this.submit_ui.onChangecomponent = new EventEmitter<any>()
		this.submit_ui.show = true
		this.submit_ui.dynamic_param = {}
		this.submit_ui.f_submit_ui = {"show":true}
		this.submit_ui.current_view = "f_submit_ui"
		
		// "Back" Button of "Submit UI" component
		this.submit_ui_back.label_name = "Back"
		this.submit_ui_back.show = true
		this.submit_ui_back.disabled = false
		this.submit_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.submit_ui_back.dynamic_param = {}
		this.submit_ui_back.role = []
		this.submit_ui_back.action = ""
		
		// "Reject" Button of "Submit UI" component
		this.submit_ui_reject.label_name = "Reject"
		this.submit_ui_reject.show = true
		this.submit_ui_reject.disabled = false
		this.submit_ui_reject.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-down"}
		this.submit_ui_reject.dynamic_param = {}
		this.submit_ui_reject.role = []
		this.submit_ui_reject.action = ""
		
		// "Accept" Button of "Submit UI" component
		this.submit_ui_accept.label_name = "Accept"
		this.submit_ui_accept.show = true
		this.submit_ui_accept.disabled = false
		this.submit_ui_accept.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-up"}
		this.submit_ui_accept.dynamic_param = {}
		this.submit_ui_accept.role = []
		this.submit_ui_accept.action = ""
	
		// Component level properties - "Response UI" 
		this.response_ui.uictrl_code = "dynamic_ui"
		this.response_ui.uicgc_desc = "Response UI"
		this.response_ui.uicgc_code = "uicgc_11"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_target_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_target_response_ui"
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_12"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_target_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_target_request_ui"
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_13"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367829028","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  inner join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "HST Process Log Back" 
		this.hst_process_log_back.uictrl_code = "dynamic_ui"
		this.hst_process_log_back.uicgc_desc = "HST Process Log Back"
		this.hst_process_log_back.uicgc_code = "uicgc_14"
		this.hst_process_log_back.params = {}
		this.hst_process_log_back.datasource = {}
		this.hst_process_log_back.context_menu = []
		this.hst_process_log_back.views = {}
		this.hst_process_log_back.onChangecomponent = new EventEmitter<any>()
		this.hst_process_log_back.show = true
		this.hst_process_log_back.dynamic_param = {}
		this.hst_process_log_back.f_hst_process_log_back = {"show":true}
		this.hst_process_log_back.current_view = "f_hst_process_log_back"
		
		// "Back" Button of "HST Process Log Back" component
		this.hst_process_log_back_back.label_name = "Back"
		this.hst_process_log_back_back.show = true
		this.hst_process_log_back_back.disabled = false
		this.hst_process_log_back_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.hst_process_log_back_back.dynamic_param = {}
		this.hst_process_log_back_back.role = []
		this.hst_process_log_back_back.action = ""
	
		// Component level properties - "HST Process Log to Main Back" 
		this.hst_process_log_to_main_back.uictrl_code = "dynamic_ui"
		this.hst_process_log_to_main_back.uicgc_desc = "HST Process Log to Main Back"
		this.hst_process_log_to_main_back.uicgc_code = "uicgc_15"
		this.hst_process_log_to_main_back.params = {}
		this.hst_process_log_to_main_back.datasource = {}
		this.hst_process_log_to_main_back.context_menu = []
		this.hst_process_log_to_main_back.views = {}
		this.hst_process_log_to_main_back.onChangecomponent = new EventEmitter<any>()
		this.hst_process_log_to_main_back.show = true
		this.hst_process_log_to_main_back.dynamic_param = {}
		this.hst_process_log_to_main_back.f_hst_process_log_to_main_back = {"show":true}
		this.hst_process_log_to_main_back.current_view = "f_hst_process_log_to_main_back"
		
		// "Back" Button of "HST Process Log to Main Back" component
		this.hst_process_log_to_main_back_back.label_name = "Back"
		this.hst_process_log_to_main_back_back.show = true
		this.hst_process_log_to_main_back_back.disabled = false
		this.hst_process_log_to_main_back_back.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.hst_process_log_to_main_back_back.dynamic_param = {}
		this.hst_process_log_to_main_back_back.role = []
		this.hst_process_log_to_main_back_back.action = ""
		
		// "View Response" Button of "HST Process Log to Main Back" component
		this.hst_process_log_to_main_back_view_response.label_name = "View Response"
		this.hst_process_log_to_main_back_view_response.show = true
		this.hst_process_log_to_main_back_view_response.disabled = true
		this.hst_process_log_to_main_back_view_response.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.hst_process_log_to_main_back_view_response.dynamic_param = {}
		this.hst_process_log_to_main_back_view_response.role = []
		this.hst_process_log_to_main_back_view_response.action = ""
		
		// "View Request" Button of "HST Process Log to Main Back" component
		this.hst_process_log_to_main_back_view_request.label_name = "View Request"
		this.hst_process_log_to_main_back_view_request.show = true
		this.hst_process_log_to_main_back_view_request.disabled = true
		this.hst_process_log_to_main_back_view_request.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.hst_process_log_to_main_back_view_request.dynamic_param = {}
		this.hst_process_log_to_main_back_view_request.role = []
		this.hst_process_log_to_main_back_view_request.action = ""
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_16"
		this.message_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367797729","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "Message Detail Action" 
		this.message_detail_action.uictrl_code = "dynamic_ui"
		this.message_detail_action.uicgc_desc = "Message Detail Action"
		this.message_detail_action.uicgc_code = "uicgc_17"
		this.message_detail_action.params = {}
		this.message_detail_action.datasource = {}
		this.message_detail_action.context_menu = []
		this.message_detail_action.views = {}
		this.message_detail_action.onChangecomponent = new EventEmitter<any>()
		this.message_detail_action.show = true
		this.message_detail_action.dynamic_param = {}
		this.message_detail_action.f_message_detail_action = {"show":true}
		this.message_detail_action.current_view = "f_message_detail_action"
		
		// "Back" Button of "Message Detail Action" component
		this.message_detail_action_back.label_name = "Back"
		this.message_detail_action_back.show = true
		this.message_detail_action_back.disabled = false
		this.message_detail_action_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.message_detail_action_back.dynamic_param = {}
		this.message_detail_action_back.role = []
		this.message_detail_action_back.action = ""
		
		// "View Message" Button of "Message Detail Action" component
		this.message_detail_action_view_message.label_name = "View Message"
		this.message_detail_action_view_message.show = true
		this.message_detail_action_view_message.disabled = true
		this.message_detail_action_view_message.params = {"icon_only":false,"uicgcc_style":"fa fa-css3"}
		this.message_detail_action_view_message.dynamic_param = {}
		this.message_detail_action_view_message.role = []
		this.message_detail_action_view_message.action = ""
	
		// Component level properties - "Message Detail UI" 
		this.message_detail_ui.uictrl_code = "dynamic_ui"
		this.message_detail_ui.uicgc_desc = "Message Detail UI"
		this.message_detail_ui.uicgc_code = "uicgc_18"
		this.message_detail_ui.params = {}
		this.message_detail_ui.datasource = {}
		this.message_detail_ui.context_menu = []
		this.message_detail_ui.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS Message Data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Detail UI","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.message_detail_ui.show = true
		this.message_detail_ui.dynamic_param = {}
		this.message_detail_ui.f_npss_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_detail_ui.form_name = "f_npss_message_data_ui"
		
		// "Back" Button of "Message Detail UI" component
		this.message_detail_ui_back.label_name = "Back"
		this.message_detail_ui_back.show = true
		this.message_detail_ui_back.disabled = false
		this.message_detail_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.message_detail_ui_back.dynamic_param = {}
		this.message_detail_ui_back.role = []
		this.message_detail_ui_back.action = ""
	
		// Component level properties - "View Payment Details" 
		this.view_payment_details.uictrl_code = "datatable"
		this.view_payment_details.uicgc_desc = "View Payment Details"
		this.view_payment_details.uicgc_code = "uicgc_19"
		this.view_payment_details.params = {"need_vertical":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367697632","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false},{"column_name":"process_name","alias_name":"","mq_id":"MQ_1678100501565","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,process_name from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   fn_card_decrypt_and_mask(A.DBTR_ACCT_NO,   $PCIDSS_KEY) as DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   fn_card_decrypt_and_mask(A.CR_ACCT_IDENTIFICATION,   $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   ntpl.process_name   from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  inner join npss_trn_process_log ntpl on ntpl.uetr = a.uetr   order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__brfq_frm_wf_master()
		this.page_load__de_for_view_log_history()
		this.page_load__he_for_vlh()
		this.page_load__he_for_refund()
		this.page_load__he_for__vd()
		this.page_load__de_for_message_btn()
		this.page_load__e_1669369741498()
		this.page_load__routing_key()
	}

	//Handler for INTERNAL event of "routing key"
	routing_key__internal(parent_event_result){
		this.routing_key__cf_for_pl(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__internal(parent_event_result){
		this.cf_for_pl__cc_for_show_hide_queue(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cp_for_search()
		this.search_search__cui_for_tl()
		this.search_search__de_from_search_to_view_detail()
		this.search_search__de_from_search_to_view_log_hst()
		this.search_search__de_from_search_to_view_message_detail()
		this.search_search__de_from_search_to_view_response()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_for_search()
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tl()
		this.transaction_list__ssr_for_eer()
		this.transaction_list__ssr_for_de()
		this.transaction_list__ee_for_tl()
		this.transaction_list__ee_for_view_log_history()
		this.transaction_list__e_1669369335099()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__spap_for_searchs()
		this.navigation_ui_search__cui_for_navigation_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__sp_for_vl()
		this.navigation_ui_view_tran__brfq_for_view_transaction_list()
		this.navigation_ui_view_tran__brfq_for_payment_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "main back ui back"
	main_back_ui_back__action_button_click(){
		this.main_back_ui_back__sp_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__action_button_click(){
		this.navigation_ui_refund__ee_bind_tran()
		this.navigation_ui_refund__disable_element()
		this.navigation_ui_refund__sp_for_reversals()
		this.navigation_ui_refund__bt_for_der()
	}

	//Handler for ACTION_BUTTON_CLICK event of "submit ui back"
	submit_ui_back__action_button_click(){
		this.submit_ui_back__rs_for_back()
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_for_process_log_list()
		this.queue__ee_from_queue_to_search()
		this.queue__cu_queue_to_tran_list()
		this.queue__de_for_view_detail_from_queue()
		this.queue__de_for_view_log_hstl_from_queue()
		this.queue__de_from_queue_to_nuiviewmessagedetails()
	}

	//Handler for INTERNAL event of "svm for process log list"
	svm_for_process_log_list__internal(parent_event_result){
		this.svm_for_process_log_list__cc_forshow_hide__process_log_list(parent_event_result)
	}

	//Handler for INTERNAL event of "cc forshow hide  process log list"
	cc_forshow_hide__process_log_list__internal(parent_event_result){
		this.cc_forshow_hide__process_log_list__ssp_for_transaction_list(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for transaction list"
	ssp_for_transaction_list__internal(parent_event_result){
		this.ssp_for_transaction_list__brfq_for_tran_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tran list"
	brfq_for_tran_list__internal(parent_event_result){
		this.brfq_for_tran_list__sfr_for_tls(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__svm_for_progres_log_list()
		this.process_log_list__ee_from_process_log_list_to_n__view_message()
	}

	//Handler for INTERNAL event of "svm for progres log list"
	svm_for_progres_log_list__internal(parent_event_result){
		this.svm_for_progres_log_list__cc_for_show_hide_for_process_log_list(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for show hide for process log list"
	cc_for_show_hide_for_process_log_list__internal(parent_event_result){
		this.cc_for_show_hide_for_process_log_list__brfq_for_transaction_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for transaction list"
	brfq_for_transaction_list__internal(parent_event_result){
		this.brfq_for_transaction_list__ssr_for_transaction_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__action_button_click(){
		this.navigation_ui_view_log_history__sp_for_view_history()
		this.navigation_ui_view_log_history__brfq_for_hst_process_log_list()
		this.navigation_ui_view_log_history__se_for_vhl_to_plb()
		this.navigation_ui_view_log_history__he_for_vhl_to_mb()
	}

	//Handler for INTERNAL event of "brfq for hst process log list"
	brfq_for_hst_process_log_list__internal(parent_event_result){
		this.brfq_for_hst_process_log_list__sfr_for_hd(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message history"
	navigation_ui_view_message_history__action_button_click(){
		this.navigation_ui_view_message_history__brfq_for_view_message()
		this.navigation_ui_view_message_history__sp_for_vm()
	}

	//Handler for INTERNAL event of "brfq for view message"
	brfq_for_view_message__internal(parent_event_result){
		this.brfq_for_view_message__sfr_for_message_detail(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view response"
	hst_process_log_to_main_back_view_response__action_button_click(){
		this.hst_process_log_to_main_back_view_response__sp_from_hstplto_main_back_to_view_response()
		this.hst_process_log_to_main_back_view_response__se_for_vrb()
		this.hst_process_log_to_main_back_view_response__e_1669369862159()
	}

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view request"
	hst_process_log_to_main_back_view_request__action_button_click(){
		this.hst_process_log_to_main_back_view_request__sp_hstpltomain_to_vr()
		this.hst_process_log_to_main_back_view_request__se_for_back()
		this.hst_process_log_to_main_back_view_request__e_1669369832738()
	}

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back back"
	hst_process_log_to_main_back_back__action_button_click(){
		this.hst_process_log_to_main_back_back__he_for_plb_to_back()
		this.hst_process_log_to_main_back_back__se_for_plb_to_mb()
		this.hst_process_log_to_main_back_back__sp_for_hst_plt_to_main()
		this.hst_process_log_to_main_back_back__sfr_for_pll()
	}

	//Handler for ACTION_BUTTON_CLICK event of "hst process log back back"
	hst_process_log_back_back__action_button_click(){
		this.hst_process_log_back_back__sp_from_hstplbackt_to_view_history()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail ui back"
	message_detail_ui_back__action_button_click(){
		this.message_detail_ui_back__sp_from_mduiback_to_vm()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_from_mdaback_to_main()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__sp_for_message_detail_ui()
		this.message_detail_action_view_message__bt_for_message_detail_ui()
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ssr_for_message_detail_ui()
		this.message_detail__ee_from_msg_detail_to_show_message()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ee_from_hst_detail_to_view_req()
		this.history_detail__ee_from_hst_detail_to_view_response()
		this.history_detail__e_1669369960393()
		this.history_detail__e_1669369967586()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__brfq_frm_wf_master() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1666154151076"
		let event_params={"caller_name":"page_load__brfq_frm_wf_master","event_desc":"BRFQ frm WF Master","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367415229","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Group Name MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669177856684","date_format":false},{"column_name":"GROUP_COUNT","alias_name":"","mq_id":"MQ_1669177856860","date_format":false}],"joins":[]},"eq_text":"SELECT GROUP_NAME, GN_SORT_ORDER, COUNT(GROUP_NAME) AS GROUP_COUNT   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NT.TENANT_ID,                NT.DEPARTMENT_CODE,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                GN_SORT_ORDER           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            CD.SORT_ORDER AS GN_SORT_ORDER                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                      INNER JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CD ON CD.CD_CODE =                                                                 G.GROUP_NAME AND CD.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1                        AND CD.CD_CATEGORY = 'STATUS_GROUP') NTPL ON NT.UETR =                                                                     NTPL.UETR           LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  GROUP BY GN_SORT_ORDER, GROUP_NAME  ORDER BY GN_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Group Name LR  Chart CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"EXCEPTION/PENDING","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Count","target_column":"GROUP_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_view_log_history() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1666184334443"
		let event_params={"caller_name":"page_load__de_for_view_log_history","event_desc":"DE for view log history","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1667554660009"
		let event_params={"caller_name":"page_load__he_for_vlh","event_desc":"HE for VLH","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_refund() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_refund"
		let parent_source_id=""
		let event_code="e_1667554738468"
		let event_params={"caller_name":"page_load__he_for_refund","event_desc":"HE for refund","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for__vd() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1667554760539"
		let event_params={"caller_name":"page_load__he_for__vd","event_desc":"HE for  VD","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de_for_message_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668582457431"
		let event_params={"caller_name":"page_load__de_for_message_btn","event_desc":"DE for message btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__e_1669369741498() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1669369741498"
		let event_params={"caller_name":"page_load__e_1669369741498","event_desc":"E_1669369741498","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__routing_key() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669384321321"
		let event_params={"caller_name":"page_load__routing_key","event_desc":"routing key","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="routing_key__cf_for_pl,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_change_routingkeyService.fn_torus_cs_change_routingkey(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "routing key"
	routing_key__cf_for_pl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="routing_key"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1669384346519"
		let event_params={"caller_name":"routing_key__cf_for_pl","event_desc":"CF for PL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_pl__cc_for_show_hide_queue,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__cc_for_show_hide_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_pl"
		let destn_id=""
		let parent_source_id="routing_key"
		let event_code="e_1669384363311"
		let event_params={"caller_name":"cf_for_pl__cc_for_show_hide_queue","event_desc":"CC for show hide Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010170239"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_for_search","event_desc":"CP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__cui_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666199299048"
		let event_params={"caller_name":"search_search__cui_for_tl","event_desc":"CUI for TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_from_search_to_view_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1668690759993"
		let event_params={"caller_name":"search_search__de_from_search_to_view_detail","event_desc":"DE from Search to View Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_from_search_to_view_log_hst() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1668690796661"
		let event_params={"caller_name":"search_search__de_from_search_to_view_log_hst","event_desc":"DE from Search to View Log Hst","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_from_search_to_view_message_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668690822301"
		let event_params={"caller_name":"search_search__de_from_search_to_view_message_detail","event_desc":"DE from Search to View Message Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_from_search_to_view_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="hst_process_log_to_main_back_view_response"
		let parent_source_id=""
		let event_code="e_1668690862540"
		let event_params={"caller_name":"search_search__de_from_search_to_view_response","event_desc":"DE from Search to View Response","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666010147600"
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666010193687"
		let event_params={"caller_name":"transaction_list__svm_for_tl","event_desc":"SVM for TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"transaction_list":{"e_1666010193687":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666010193687","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ssr_for_eer() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="enable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666073974266"
		let event_params={"caller_name":"transaction_list__ssr_for_eer","event_desc":"SSR FOR EER","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ssr_for_de() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="disable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666073981493"
		let event_params={"caller_name":"transaction_list__ssr_for_de","event_desc":"SSR for DE","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1666105066141"
		let event_params={"caller_name":"transaction_list__ee_for_tl","event_desc":"EE for TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_view_log_history() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1666184379416"
		let event_params={"caller_name":"transaction_list__ee_for_view_log_history","event_desc":"EE for view log history","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__e_1669369335099() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1669369335099"
		let event_params={"caller_name":"transaction_list__e_1669369335099","event_desc":"E_1669369335099","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_searchs() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010219246"
		let event_params={"caller_name":"navigation_ui_search__spap_for_searchs","event_desc":"SPAP for searchs","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_searchs","selector":"p_search_layout","profile_code":"BTL_1304_1666010003163","window_title":"Search","window_height":"","window_width":"auto","window_close_icon":"Y","eventdes":"spap_for_searchs","eventcode":"E_1666010219246"}}
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
	navigation_ui_search__cui_for_navigation_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666010245150"
		let event_params={"caller_name":"navigation_ui_search__cui_for_navigation_search","event_desc":"CUI for Navigation search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__sp_for_vl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010903736"
		let event_params={"caller_name":"navigation_ui_view_tran__sp_for_vl","event_desc":"SP for VL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"profile_code":"BTL_1304_1666009903061"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_for_view_transaction_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_dr_cr_details"
		let parent_source_id=""
		let event_code="e_1666100915090"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_view_transaction_list","event_desc":"BRFQ for view transaction list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367679920","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false},{"column_name":"process_name","alias_name":"","mq_id":"MQ_1678100501565","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,process_name from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   fn_card_decrypt_and_mask(A.DBTR_ACCT_NO,   $PCIDSS_KEY) as DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   fn_card_decrypt_and_mask(A.CR_ACCT_IDENTIFICATION,   $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   ntpl.process_name   from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  inner join npss_trn_process_log ntpl on ntpl.uetr = a.uetr   order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_for_payment_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_payment_details"
		let parent_source_id=""
		let event_code="e_1669285222385"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_payment_list","event_desc":"BRFQ for Payment list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367697632","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673072381673","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1675409311721","date_format":false},{"column_name":"process_name","alias_name":"","mq_id":"MQ_1678100501565","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,process_name from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   fn_card_decrypt_and_mask(A.DBTR_ACCT_NO,   $PCIDSS_KEY) as DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   fn_card_decrypt_and_mask(A.CR_ACCT_IDENTIFICATION,   $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   ntpl.process_name   from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  inner join npss_trn_process_log ntpl on ntpl.uetr = a.uetr   order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "main back ui back"
	main_back_ui_back__sp_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="main_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010865737"
		let event_params={"caller_name":"main_back_ui_back__sp_for_back","event_desc":"SP for Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"main_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666009819055"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__ee_bind_tran() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id="enable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666068338623"
		let event_params={"caller_name":"navigation_ui_refund__ee_bind_tran","event_desc":"EE Bind Tran","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__disable_element() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id="disable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666068386486"
		let event_params={"caller_name":"navigation_ui_refund__disable_element","event_desc":"Disable Element","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__sp_for_reversals() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666070453302"
		let event_params={"caller_name":"navigation_ui_refund__sp_for_reversals","event_desc":"SP for Reversals","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{"profile_code":"BTL_1304_1666068179786"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__bt_for_der() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id="disable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666073959732"
		let event_params={"caller_name":"navigation_ui_refund__bt_for_der","event_desc":"BT for DER","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "submit ui back"
	submit_ui_back__rs_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="submit_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666069333455"
		let event_params={"caller_name":"submit_ui_back__rs_for_back","event_desc":"RS for Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"submit_ui_back","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_for_process_log_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1666097608399"
		let event_params={"caller_name":"queue__svm_for_process_log_list","event_desc":"SVM for process log list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_process_log_list__cc_forshow_hide__process_log_list,"
		let event_data={"queue":{"e_1666097608399":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_6","event_code":"E_1666097608399","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS TRN REQ RESP DTLS","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"GROUP_NAME","level":"MI_LEVEL","name":"MI_LEVEL_GROUP_NAME","setd3name":"GROUP_NAME"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367415229","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Row Group Name MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"GROUP_NAME","alias_name":"","mq_id":"MQ_1669177856684","date_format":false},{"column_name":"GROUP_COUNT","alias_name":"","mq_id":"MQ_1669177856860","date_format":false}],"joins":[]},"eq_text":"SELECT GROUP_NAME, GN_SORT_ORDER, COUNT(GROUP_NAME) AS GROUP_COUNT   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NT.TENANT_ID,                NT.DEPARTMENT_CODE,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                GN_SORT_ORDER           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            CD.SORT_ORDER AS GN_SORT_ORDER                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                      INNER JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CD ON CD.CD_CODE =                                                                 G.GROUP_NAME AND CD.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1                        AND CD.CD_CATEGORY = 'STATUS_GROUP') NTPL ON NT.UETR =                                                                     NTPL.UETR           LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  GROUP BY GN_SORT_ORDER, GROUP_NAME  ORDER BY GN_SORT_ORDER"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Group Name LR  Chart CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"EXCEPTION/PENDING","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Group Name","target_column":"GROUP_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Group Count","target_column":"GROUP_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__ee_from_queue_to_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_search"
		let parent_source_id=""
		let event_code="e_1666154268260"
		let event_params={"caller_name":"queue__ee_from_queue_to_search","event_desc":"EE from Queue to Search","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__cu_queue_to_tran_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666183875425"
		let event_params={"caller_name":"queue__cu_queue_to_tran_list","event_desc":"CU Queue to tran list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__de_for_view_detail_from_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1666184023865"
		let event_params={"caller_name":"queue__de_for_view_detail_from_queue","event_desc":"DE for view detail from queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__de_for_view_log_hstl_from_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1666184079127"
		let event_params={"caller_name":"queue__de_for_view_log_hstl_from_queue","event_desc":"DE for view log hstl from queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__de_from_queue_to_nuiviewmessagedetails() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668681002307"
		let event_params={"caller_name":"queue__de_from_queue_to_nuiviewmessagedetails","event_desc":"DE from Queue to NUIViewMessageDetails","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
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

	//Handler for INTERNAL event of "svm for process log list"
	svm_for_process_log_list__cc_forshow_hide__process_log_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_process_log_list"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1666097658396"
		let event_params={"caller_name":"svm_for_process_log_list__cc_forshow_hide__process_log_list","event_desc":"CC forShow hide  process log list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_forshow_hide__process_log_list__ssp_for_transaction_list,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc forshow hide  process log list"
	cc_forshow_hide__process_log_list__ssp_for_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_forshow_hide__process_log_list"
		let destn_id="search"
		let parent_source_id="svm_for_process_log_list"
		let event_code="e_1666098015720"
		let event_params={"caller_name":"cc_forshow_hide__process_log_list__ssp_for_transaction_list","event_desc":"SSP for Transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_transaction_list__brfq_for_tran_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for transaction list"
	ssp_for_transaction_list__brfq_for_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_transaction_list"
		let destn_id="transaction_list"
		let parent_source_id="cc_forshow_hide__process_log_list"
		let event_code="e_1669369075857"
		let event_params={"caller_name":"ssp_for_transaction_list__brfq_for_tran_list","event_desc":"Brfq FOR TRAN LIST","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tran_list__sfr_for_tls,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tran list"
	brfq_for_tran_list__sfr_for_tls(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tran_list"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_transaction_list"
		let event_code="e_1669369101983"
		let event_params={"caller_name":"brfq_for_tran_list__sfr_for_tls","event_desc":"SFR for tls","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_progres_log_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666098890884"
		let event_params={"caller_name":"process_log_list__svm_for_progres_log_list","event_desc":"SVM for progres log list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_progres_log_list__cc_for_show_hide_for_process_log_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_from_process_log_list_to_n__view_message() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_message_history"
		let parent_source_id=""
		let event_code="e_1668587195481"
		let event_params={"caller_name":"process_log_list__ee_from_process_log_list_to_n__view_message","event_desc":"EE from process log list to n  View Message","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svm for progres log list"
	svm_for_progres_log_list__cc_for_show_hide_for_process_log_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_progres_log_list"
		let destn_id=""
		let parent_source_id="process_log_list"
		let event_code="e_1666099009714"
		let event_params={"caller_name":"svm_for_progres_log_list__cc_for_show_hide_for_process_log_list","event_desc":"CC for show hide for process log list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_for_process_log_list__brfq_for_transaction_list,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for show hide for process log list"
	cc_for_show_hide_for_process_log_list__brfq_for_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_for_process_log_list"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_progres_log_list"
		let event_code="e_1666105140236"
		let event_params={"caller_name":"cc_for_show_hide_for_process_log_list__brfq_for_transaction_list","event_desc":"BRFQ for transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_transaction_list__ssr_for_transaction_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for transaction list"
	brfq_for_transaction_list__ssr_for_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_transaction_list"
		let destn_id="transaction_list"
		let parent_source_id="cc_for_show_hide_for_process_log_list"
		let event_code="e_1666105159955"
		let event_params={"caller_name":"brfq_for_transaction_list__ssr_for_transaction_list","event_desc":"SSR for Transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367543953","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processlog LR MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"npsst_id","alias_name":"","mq_id":"MQ_1669178086386","date_format":false},{"column_name":"uetr","alias_name":"","mq_id":"MQ_1669178086562","date_format":false},{"column_name":"value_date","alias_name":"","mq_id":"MQ_1669178086753","date_format":true},{"column_name":"accp_date_time","alias_name":"","mq_id":"MQ_1669178086930","date_format":false},{"column_name":"created_date","alias_name":"","mq_id":"MQ_1669178147671","date_format":false},{"column_name":"exhf_id","alias_name":"","mq_id":"MQ_1669178153368","date_format":false},{"column_name":"cdtr_iban","alias_name":"","mq_id":"MQ_1669178153567","date_format":false},{"column_name":"tran_ref_id","alias_name":"","mq_id":"MQ_1669178153751","date_format":false},{"column_name":"payment_endtoend_id","alias_name":"","mq_id":"MQ_1669178153943","date_format":false},{"column_name":"clrsysref","alias_name":"","mq_id":"MQ_1669178154119","date_format":false},{"column_name":"cdtr_acct_no","alias_name":"","mq_id":"MQ_1669178191046","date_format":false},{"column_name":"dbtr_acct_no","alias_name":"","mq_id":"MQ_1669178191237","date_format":false},{"column_name":"intrbk_sttlm_amnt","alias_name":"","mq_id":"MQ_1669178191445","date_format":false,"currency_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1669178191661","date_format":false},{"column_name":"processing_system","alias_name":"","mq_id":"MQ_1669178227517","date_format":false},{"column_name":"process_status","alias_name":"","mq_id":"MQ_1669178227717","date_format":false},{"column_name":"Group_Name","alias_name":"","mq_id":"MQ_1669178227908","date_format":false},{"column_name":"Process_type","alias_name":"","mq_id":"MQ_1669178239274","date_format":false},{"column_name":"payment_mode","alias_name":"","mq_id":"MQ_1669178239466","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1669179866186","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1669179866480","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1669180239582","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1669714936628","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1669714936809","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669714937008","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1669714937193","date_format":false},{"column_name":"RR_MESSAGE_DESC","alias_name":"","mq_id":"MQ_1669714937383","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1669714937535","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028203","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1669715028433","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1669715062065","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1669715075448","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716335899","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716336337","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716336495","date_format":false},{"column_name":"DBTR_CUST_TYPE","alias_name":"","mq_id":"MQ_1669716336659","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669716336826","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669716336982","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1669716337154","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1669716337311","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1669716337475","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1669716337634","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337798","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669716337958","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1669716338118","date_format":false},{"column_name":"CATEGORY_PURPOSE_PRTY","alias_name":"","mq_id":"MQ_1669716338271","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1669716460635","date_format":false},{"column_name":"BASE_CURRENCY","alias_name":"","mq_id":"MQ_1669716460839","date_format":false},{"column_name":"BASE_AMOUNT","alias_name":"","mq_id":"MQ_1669716461033","date_format":false},{"column_name":"HDR_TOTAL_RECORDS","alias_name":"","mq_id":"MQ_1669716461209","date_format":false},{"column_name":"HDR_TOTAL_AMOUNT","alias_name":"","mq_id":"MQ_1669716488348","date_format":false,"currency_format":true},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1669716488527","date_format":false},{"column_name":"CHARGE_BEARER","alias_name":"","mq_id":"MQ_1669716488729","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669716578903","date_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"","mq_id":"MQ_1669716579064","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1669716579241","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1669716579389","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1669716601499","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1669716601675","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1669716623271","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1669716623501","date_format":false},{"column_name":"ISSUER_TYPE_CODE","alias_name":"","mq_id":"MQ_1669716639834","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1669718495740","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1669719333386","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1669719333580","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1669719333798","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1669719336508","date_format":false},{"column_name":"CBS_REF_NO","alias_name":"","mq_id":"MQ_1669721618850","date_format":false},{"column_name":"CBS_POSTING_FLAG","alias_name":"","mq_id":"MQ_1669721627964","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,        UETR,        VALUE_DATE,        ACCP_DATE_TIME,        CREATED_DATE,        DATEMI,        EXHF_ID,        CDTR_IBAN,        TENANT_ID,        TRAN_REF_ID,        DEPARTMENT_CODE,        PAYMENT_ENDTOEND_ID,        CLRSYSREF,        CDTR_ACCT_NO,        DBTR_ACCT_NO,        INTRBK_STTLM_CUR,        INTRBK_STTLM_AMNT,        STATUS,        PROCESSING_SYSTEM,        PROCESS_STATUS,        GROUP_NAME,        PROCESS_TYPE,        PAYMENT_MODE,        RULE_GROUP,        NPSSTPL_ID,        DT_CODE,        DTT_CODE,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        MSG_ID,        PROCESS_NAME,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        ADDITIONAL_INFO,        V_CODE,        AMOUNT_CREDITED,        AMT_CR_LOC_CUR,        CHARGE_AMOUNT,        REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTRRD_ID,        RR_DT_CODE,        RR_DTT_CODE,        MESSAGE_DATA,        PROCESS_CODE,        PROCESS_DETAIL,        RR_PROCESS_NAME,        RR_MESSAGE_DESC,        DBTR_ACCT_NAME,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        DBTR_CUST_TYPE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        CDTR_ACCT_NAME,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        DR_SORT_CODE,        CR_SORT_CODE,        CATEGORY_PURPOSE,        CATEGORY_PURPOSE_PRTY,        CR_ACCT_IDENTIFICATION,        BASE_CURRENCY,        BASE_AMOUNT,        HDR_TOTAL_RECORDS,        HDR_TOTAL_AMOUNT,        HDR_CLEARING_SYSTEM,        CHARGE_BEARER,        REMITTANCE_INFO,        ACCOUNT_CURRENCY,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        ISSUER_TYPE_CODE,        PROCESS_REF_NO,        RESPONSE_CODE,        CBS_REF_NO,        CBS_POSTING_FLAG   FROM (SELECT NT.NPSST_ID,                NT.UETR,                NT.VALUE_DATE,                NT.ACCP_DATE_TIME,                NT.CREATED_DATE,                TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                NT.DEPARTMENT_CODE,                NT.TENANT_ID,                NT.EXHF_ID,                NT.CDTR_IBAN,                NT.TRAN_REF_ID,                NT.PAYMENT_ENDTOEND_ID,                NT.CLRSYSREF,                NT.CDTR_ACCT_NO,                NT.DBTR_ACCT_NO,                NT.INTRBK_STTLM_CUR,                NT.INTRBK_STTLM_AMNT,                NTPL.STATUS,                NTPL.PROCESSING_SYSTEM,                NTPL.PROCESS_STATUS,                NTPL.GROUP_NAME,                NTPL.PROCESS_TYPE,                NTPL.PAYMENT_MODE,                NTPL.RULE_GROUP,                NTPL.NPSSTPL_ID,                NTPL.DT_CODE,                NTPL.DTT_CODE,                NTPL.REQUEST_DATA_JSON,                NTPL.RESPONSE_DATA_JSON,                NTPL.MSG_ID,                NTPL.PROCESS_NAME,                NTPL.T24_RETURN_CODE,                NTPL.CBUAE_RETURN_CODE,                NTPL.REVERSAL_CODE,                NTPL.ADDITIONAL_INFO,                NTPL.V_CODE,                NTPL.AMOUNT_CREDITED,                NTPL.AMT_CR_LOC_CUR,                NTPL.CHARGE_AMOUNT,                NTPL.PROCESS_REF_NO,                NTPL.RESPONSE_CODE,                CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION,                CONCAT(NTPL.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                CONCAT(NTPL.CBUAE_RETURN_CODE,                       '-',                       CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                RR.NPSSTRRD_ID,                RR.RR_MSG_ID,                RR.PARENT_NPSSTRRD_REFNO,                RR.MESSAGE_DATA,                RR.PROCESS_CODE,                RR.PROCESS_DETAIL,                RR.NPSSTRRD_REFNO,                RR.RR_DT_CODE,                RR.RR_DTT_CODE,                RR.RR_PROCESS_NAME,                RR.RR_MESSAGE_DESC,                NT.DBTR_ACCT_NAME,                NT.DBTR_PHONE_NO,                NT.DBTR_EMAIL_ID,                NT.DBTR_DOCUMENT_ID,                NT.DBTR_IBAN,                NT.DBTR_CUST_TYPE,                NT.DBTR_PRVT_ID,                NT.DBTR_OTHER_ISSUER,                NT.CDTR_ACCT_NAME,                NT.CDTR_PHONE_NO,                NT.CDTR_EMAIL_ID,                NT.CDTR_DOCUMENT_ID,                NT.DR_SORT_CODE,                NT.CR_SORT_CODE,                NT.CATEGORY_PURPOSE,                NT.CATEGORY_PURPOSE_PRTY,                NT.CR_ACCT_IDENTIFICATION,                NT.BASE_CURRENCY,                NT.BASE_AMOUNT,                NT.HDR_TOTAL_RECORDS,                NT.HDR_TOTAL_AMOUNT,                NT.HDR_CLEARING_SYSTEM,                NT.CHARGE_BEARER,                NT.REMITTANCE_INFO,                NT.ACCOUNT_CURRENCY,                NT.CHANNEL_ID,                NT.CHANNEL_REFNO,                NT.CHANNEL_USERID,                NT.CHANNEL_PRODUCT,                NT.CHANNEL_SUB_PRODUCT,                NT.CHANNEL_TRAN_CODE,                NT.ISSUER_TYPE_CODE,                NT.CBS_REF_NO,                NT.CBS_POSTING_FLAG           FROM NPSS_TRANSACTIONS NT          INNER JOIN (SELECT T.NPSSTPL_ID,                            T.UETR,                            T.STATUS,                            T.PROCESSING_SYSTEM,                            T.PROCESS_STATUS,                            G.GROUP_NAME,                            G.PROCESS_TYPE,                            G.PAYMENT_MODE,                            G.RULE_GROUP,                            T.DT_CODE,                            T.DTT_CODE,                            T.REQUEST_DATA_JSON,                            T.RESPONSE_DATA_JSON,                            T.MSG_ID,                            T.PROCESS_NAME,                            T.T24_RETURN_CODE,                            T.CBUAE_RETURN_CODE,                            T.REVERSAL_CODE,                            T.ADDITIONAL_INFO,                            T.V_CODE,                            T.AMOUNT_CREDITED,                            T.AMT_CR_LOC_CUR,                            T.CHARGE_AMOUNT,                            T.PROCESS_REF_NO,                            T.RESPONSE_CODE                       FROM (SELECT A.NPSSTPL_ID,                                    A.UETR,                                    A.STATUS,                                    A.PROCESSING_SYSTEM,                                    A.PROCESS_STATUS,                                    A.DT_CODE,                                    A.DTT_CODE,                                    A.REQUEST_DATA_JSON,                                    A.RESPONSE_DATA_JSON,                                    A.MSG_ID,                                    A.PROCESS_NAME,                                    A.T24_RETURN_CODE,                                    A.CBUAE_RETURN_CODE,                                    A.REVERSAL_CODE,                                    A.ADDITIONAL_INFO,                                    A.V_CODE,                                    A.AMOUNT_CREDITED,                                    A.AMT_CR_LOC_CUR,                                    A.CHARGE_AMOUNT,                                    A.PROCESS_REF_NO,                                    A.RESPONSE_CODE,                                    ROW_NUMBER() OVER(PARTITION BY A.UETR ORDER BY A.NPSSTPL_ID DESC) AS ROW_NUM                               FROM NPSS_TRN_PROCESS_LOG A) T                      INNER JOIN <tran_db>.CORE_NC_STATUS_GROUP G ON G.QUEUE_CODE =                                                           T.PROCESS_STATUS                                                       AND G.PROCESS_QUEUE_STATUS =                                                           T.STATUS AND G.STATUS = 'APPROVED'                       WHERE T.ROW_NUM = 1) NTPL ON NT.UETR = NTPL.UETR           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                      NTPL.REVERSAL_CODE                                                  AND CCD.CD_CATEGORY =                                                      'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                   NTPL.T24_RETURN_CODE                                               AND T24RC.PROCESSING_SYSTEM =                                                   'T24' AND T24RC.STATUS = 'APPROVED'            LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                     NTPL.CBUAE_RETURN_CODE                                                 AND CBUAERC.PROCESSING_SYSTEM =                                                     'CBUAE' AND CBUAERC.STATUS = 'APPROVED'            LEFT JOIN (SELECT B.NPSSTRRD_ID,                            B.MSG_ID AS RR_MSG_ID,                            B.PARENT_NPSSTRRD_REFNO,                            B.MESSAGE_DATA,                            B.PROCESS_CODE,                            B.PROCESS_DETAIL,                            B.NPSSTRRD_REFNO,                            B.UETR,                            B.DT_CODE AS RR_DT_CODE,                            B.DTT_CODE AS RR_DTT_CODE,                            B.PROCESS_NAME AS RR_PROCESS_NAME,                            B.MESSAGE_DESC AS RR_MESSAGE_DESC,                            ROW_NUMBER() OVER(PARTITION BY B.UETR ORDER BY B.NPSSTRRD_ID DESC) AS ROW_NUM                       FROM NPSS_TRN_REQ_RESP_DTLS B) RR ON RR.UETR = NT.UETR                                                        AND RR.ROW_NUM = 1) V $WHERE  ORDER BY NPSST_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Tran processLog LR CCD","filter":[{"filter_name":"GROUP_NAME","binding_name":"GROUP_NAME","binding_value":"","source_name":"MI_LEVEL_GROUP_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PAYMENT_MODE","binding_name":"PAYMENT_MODE","binding_value":"","source_name":"RCT","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"intrbk_sttlm_amnt","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"cdtr_iban","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"uetr","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"payment_endtoend_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"clrsysref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__sp_for_view_history() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666180988003"
		let event_params={"caller_name":"navigation_ui_view_log_history__sp_for_view_history","event_desc":"SP for View History","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"profile_code":"BTL_1304_1666180789841"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__brfq_for_hst_process_log_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1666181359734"
		let event_params={"caller_name":"navigation_ui_view_log_history__brfq_for_hst_process_log_list","event_desc":"BRFQ for HST Process Log List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hst_process_log_list__sfr_for_hd,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367829028","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  inner join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__se_for_vhl_to_plb() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id="hst_process_log_back_back"
		let parent_source_id=""
		let event_code="e_1668582850350"
		let event_params={"caller_name":"navigation_ui_view_log_history__se_for_vhl_to_plb","event_desc":"SE for VHL to PLB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__he_for_vhl_to_mb() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id="main_back_ui_back"
		let parent_source_id=""
		let event_code="e_1668583071628"
		let event_params={"caller_name":"navigation_ui_view_log_history__he_for_vhl_to_mb","event_desc":"HE for VHL to MB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "brfq for hst process log list"
	brfq_for_hst_process_log_list__sfr_for_hd(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hst_process_log_list"
		let destn_id="history_detail"
		let parent_source_id="navigation_ui_view_log_history"
		let event_code="e_1668582702823"
		let event_params={"caller_name":"brfq_for_hst_process_log_list__sfr_for_hd","event_desc":"SFR for HD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_13","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367829028","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  inner join NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message history"
	navigation_ui_view_message_history__brfq_for_view_message() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_history"
		let destn_id="message_detail"
		let parent_source_id=""
		let event_code="e_1668582527000"
		let event_params={"caller_name":"navigation_ui_view_message_history__brfq_for_view_message","event_desc":"BRFQ for View Message","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_history","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_view_message__sfr_for_message_detail,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367797729","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message history"
	navigation_ui_view_message_history__sp_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_history"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668582562147"
		let event_params={"caller_name":"navigation_ui_view_message_history__sp_for_vm","event_desc":"SP for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_history","raiseparam":{"profile_code":"BTL_1304_1668581358650"}}
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

	//Handler for INTERNAL event of "brfq for view message"
	brfq_for_view_message__sfr_for_message_detail(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_view_message"
		let destn_id="message_detail"
		let parent_source_id="navigation_ui_view_message_history"
		let event_code="e_1668663286911"
		let event_params={"caller_name":"brfq_for_view_message__sfr_for_message_detail","event_desc":"SFR for Message Detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_history","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS TRN REQ RESP DTLS","ds_eligible":"DS_1669367797729","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view response"
	hst_process_log_to_main_back_view_response__sp_from_hstplto_main_back_to_view_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668583265376"
		let event_params={"caller_name":"hst_process_log_to_main_back_view_response__sp_from_hstplto_main_back_to_view_response","event_desc":"SP from hstplto main back to View Response","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_view_response","raiseparam":{"profile_code":"BTL_1304_1666176371576"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view response"
	hst_process_log_to_main_back_view_response__se_for_vrb() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_view_response"
		let destn_id="hst_process_log_back_back"
		let parent_source_id=""
		let event_code="e_1668584035073"
		let event_params={"caller_name":"hst_process_log_to_main_back_view_response__se_for_vrb","event_desc":"SE for VRB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_view_response","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view response"
	hst_process_log_to_main_back_view_response__e_1669369862159() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_view_response"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669369862159"
		let event_params={"caller_name":"hst_process_log_to_main_back_view_response__e_1669369862159","event_desc":"E_1669369862159","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_view_response","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view request"
	hst_process_log_to_main_back_view_request__sp_hstpltomain_to_vr() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_view_request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668583234881"
		let event_params={"caller_name":"hst_process_log_to_main_back_view_request__sp_hstpltomain_to_vr","event_desc":"SP HSTPLTOMAIN to VR","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_view_request","raiseparam":{"profile_code":"BTL_1304_1666176333073"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view request"
	hst_process_log_to_main_back_view_request__se_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_view_request"
		let destn_id="hst_process_log_back_back"
		let parent_source_id=""
		let event_code="e_1668583980205"
		let event_params={"caller_name":"hst_process_log_to_main_back_view_request__se_for_back","event_desc":"SE for back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_view_request","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back view request"
	hst_process_log_to_main_back_view_request__e_1669369832738() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_view_request"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669369832738"
		let event_params={"caller_name":"hst_process_log_to_main_back_view_request__e_1669369832738","event_desc":"E_1669369832738","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_view_request","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back back"
	hst_process_log_to_main_back_back__he_for_plb_to_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_back"
		let destn_id="hst_process_log_back_back"
		let parent_source_id=""
		let event_code="e_1668582945847"
		let event_params={"caller_name":"hst_process_log_to_main_back_back__he_for_plb_to_back","event_desc":"HE for PLB to back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back back"
	hst_process_log_to_main_back_back__se_for_plb_to_mb() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_back"
		let destn_id="main_back_ui_back"
		let parent_source_id=""
		let event_code="e_1668583050181"
		let event_params={"caller_name":"hst_process_log_to_main_back_back__se_for_plb_to_mb","event_desc":"SE for PLB to MB","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_back","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back back"
	hst_process_log_to_main_back_back__sp_for_hst_plt_to_main() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668583183783"
		let event_params={"caller_name":"hst_process_log_to_main_back_back__sp_for_hst_plt_to_main","event_desc":"SP for HST PLT to main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_back","raiseparam":{"profile_code":"BTL_1304_1666009819055"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "hst process log to main back back"
	hst_process_log_to_main_back_back__sfr_for_pll() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_to_main_back_back"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1668587934753"
		let event_params={"caller_name":"hst_process_log_to_main_back_back__sfr_for_pll","event_desc":"SFR for PLL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_to_main_back_back","raiseparam":{}}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "hst process log back back"
	hst_process_log_back_back__sp_from_hstplbackt_to_view_history() { 
		let Dest_Is_ctrl=true
		
		let source_id="hst_process_log_back_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668583108619"
		let event_params={"caller_name":"hst_process_log_back_back__sp_from_hstplbackt_to_view_history","event_desc":"SP from HSTPLBACKT to View History","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"hst_process_log_back_back","raiseparam":{"profile_code":"BTL_1304_1666180789841"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail ui back"
	message_detail_ui_back__sp_from_mduiback_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668661686029"
		let event_params={"caller_name":"message_detail_ui_back__sp_from_mduiback_to_vm","event_desc":"SP from MDUIBACK to VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_ui_back","raiseparam":{"profile_code":"BTL_1304_1668581358650"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__sp_from_mdaback_to_main() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668661860114"
		let event_params={"caller_name":"message_detail_action_back__sp_from_mdaback_to_main","event_desc":"SP from MDABACK to Main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{"profile_code":"BTL_1304_1666009819055"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__sp_for_message_detail_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668663240432"
		let event_params={"caller_name":"message_detail_action_view_message__sp_for_message_detail_ui","event_desc":"SP for Message Detail UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1668661525669"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__bt_for_message_detail_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1668663466170"
		let event_params={"caller_name":"message_detail_action_view_message__bt_for_message_detail_ui","event_desc":"BT for Message Detail UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ssr_for_message_detail_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1668663416979"
		let event_params={"caller_name":"message_detail__ssr_for_message_detail_ui","event_desc":"SSR for Message Detail UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ee_from_msg_detail_to_show_message() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_action_view_message"
		let parent_source_id=""
		let event_code="e_1668690265634"
		let event_params={"caller_name":"message_detail__ee_from_msg_detail_to_show_message","event_desc":"EE from MSG Detail to Show Message","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ee_from_hst_detail_to_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="hst_process_log_to_main_back_view_request"
		let parent_source_id=""
		let event_code="e_1668689953892"
		let event_params={"caller_name":"history_detail__ee_from_hst_detail_to_view_req","event_desc":"EE from HST Detail to View Req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ee_from_hst_detail_to_view_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="hst_process_log_to_main_back_view_response"
		let parent_source_id=""
		let event_code="e_1668690153348"
		let event_params={"caller_name":"history_detail__ee_from_hst_detail_to_view_response","event_desc":"EE from HST Detail to View Response","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__e_1669369960393() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669369960393"
		let event_params={"caller_name":"history_detail__e_1669369960393","event_desc":"E_1669369960393","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__e_1669369967586() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669369967586"
		let event_params={"caller_name":"history_detail__e_1669369967586","event_desc":"E_1669369967586","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
