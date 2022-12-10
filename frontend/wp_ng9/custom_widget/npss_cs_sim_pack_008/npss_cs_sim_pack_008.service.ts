import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear

@Injectable()
export class npss_cs_sim_pack_008Service {
    constructor(private http: Http,
         private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_sim_pack_008(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let Product_Code: any;

        let App_Id: any = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID")
        if (App_Id == "3") {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_CODE");
        } else {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");
        }
        let code: any;
        if (Product_Code != null || Product_Code != undefined) {
            code = Product_Code.split('_');
        }
        let Country_Code: any = code[1].slice(0, 2);
        let client_code: any = code[1];
        let system: any = code[0];
        let ClientParams = {}

        var CtrlScope = screenInstance['data_entry']['f_npss_simulator_ui'].model;
        ClientParams = {

            'DBTR_COUNTRY': CtrlScope.DBTR_COUNTRY || '',
            'MIDDLEWARE_REF_NO': CtrlScope.MIDDLEWARE_REF_NO || '',
            'CBS_REF_NO': CtrlScope.CBS_REF_NO || '',

            'INSTRUMENT_TYPE': CtrlScope.INSTRUMENT_TYPE || '',



            'DBTR_PRVT_ID': CtrlScope.DBTR_PRVT_ID || '',



            'EXT_ORG_ID_CODE': CtrlScope.EXT_ORG_ID_CODE || '',



            'ISSUER_TYPE_CODE': CtrlScope.ISSUER_TYPE_CODE || '',

            'DBTR_BIRTH_DATE': CtrlScope.DBTR_BIRTH_DATE || '',

            'DBTR_CITY_BIRTH': CtrlScope.DBTR_CITY_BIRTH || '',


            'DBTR_DOCUMENT_ID': CtrlScope.DBTR_DOCUMENT_ID || '',

            'INDIVIDUALIDENTIFICATIONCODE': CtrlScope.INDIVIDUALIDENTIFICATIONCODE || '',



            'orderingCustomer_account': CtrlScope.DBTR_IBAN  || '',

            'orderingCustomer_otheraccount': CtrlScope.OTHERACCOUNT || '',

            'orderingCustomer_accountCur': CtrlScope.BASE_CURRENCY || '',

            'orderingCustomer_AccountName': CtrlScope.DBTR_ACCT_NAME || '',

            'orderingCustomer_companyCode': CtrlScope.COMPANYCODE || '',

            'VALUE_DATE': CtrlScope.VALUE_DATE || '',

            'INTRBK_STTLM_AMNT': CtrlScope.INTRBK_STTLM_AMNT || '',

            'CORETRANSACTIONTYPE': CtrlScope.CORETRANSACTIONTYPE || '',

            'beneficiaryCustomer_Account': CtrlScope.CDTR_IBAN || '',
            'beneficiaryCustomer_otherAccount': CtrlScope.OTHERACCOUNT || '',

            'beneficiaryCustomer_AccountName': CtrlScope.CDTR_ACCT_NAME || '',

            'beneficiaryBankBic': CtrlScope.CR_SORT_CODE || '',

            'CATEGORY_PURPOSE': CtrlScope.CATEGORY_PURPOSE || '',

            'CHARGE_BEARER': CtrlScope.CHARGE_BEARER || '',

            'REMITTANCE_INFO': CtrlScope.REMITTANCE_INFO || '',

            'CHARGEACCOUNT': CtrlScope.CHARGEACCOUNT || '',

            'CHARGECODE': CtrlScope.CHARGECODE || '',

            'CHARGETYPE': CtrlScope.CHARGETYPE || '',

            'CHARGEAMOUNT': CtrlScope.CHARGEAMOUNT || '',

            'CHARGENARRATION': CtrlScope.CHARGENARRATION || '',

            'VATACCOUNT': CtrlScope.VATACCOUNT || '',

            'VATAMOUNT': CtrlScope.VATAMOUNT || '',

            'VATNARRATION': CtrlScope.VATNARRATION || '',


            'CUSTOMERRATE': CtrlScope.CUSTOMERRATE || '',

            'TREASURYRATE': CtrlScope.TREASURYRATE || '',

            'CUSTOMERSPREAD': CtrlScope.CUSTOMERSPREAD || '',

            'CBS_POSTING_FLAG': CtrlScope.CBS_POSTING_FLAG || '',
            'CHANNEL_ID': CtrlScope.CHANNEL_ID || '',
            "CHANNEL_REFNO": CtrlScope.CHANNEL_REFNO || '',
            "CHANNEL_USERID": CtrlScope.CHANNEL_USERID || '',
            "CHANNEL_PRODUCT": CtrlScope.CHANNEL_PRODUCT || '',
            "SETTLEMENT_DATE": CtrlScope.HDR_SETTLEMENT_DATE || '',
            "DR_SORT_CODE": CtrlScope.DR_SORT_CODE || '',
            "CR_SORT_CODE": CtrlScope.CR_SORT_CODE || '',
            "DBTR_ACCT_NO": CtrlScope.DBTR_ACCT_NO || '',
            "CDTR_ACCT_NO": CtrlScope.CDTR_ACCT_NO || '',
            "hdr_msg_id": CtrlScope.HDR_MSG_ID || '',
            "hdr_created_date": CtrlScope.HDR_CREATED_DATE || '',
            "hdr_total_records": CtrlScope.HDR_TOTAL_RECORDS || '',
            "hdr_total_amount": CtrlScope.HDR_TOTAL_AMOUNT || '',
            "hdr_settlement_date": CtrlScope.HDR_SETTLEMENT_DATE || '',
            "hdr_settlement_method": CtrlScope.HDR_SETTLEMENT_METHOD || '',
            "hdr_clearing_system": CtrlScope.HDR_CLEARING_SYSTEM || '',
            "INSTRUCTION_ID": CtrlScope.INSTRUCTION_ID || '',
            "PAYMENT_ENDTOEND_ID": CtrlScope.PAYMENT_ENDTOEND_ID || '',
            "TRAN_REF_ID": CtrlScope.TRAN_REF_ID || '',
            "DBTR_IBAN": CtrlScope.DBTR_IBAN || '',
            "INTRBK_STTLM_CUR": CtrlScope.INTRBK_STTLM_CUR || '',

            "UETR": CtrlScope.UETR || '',
            "CATEGORY_PURPOSE_PRTY": CtrlScope.CATEGORY_PURPOSE_PRTY || '',
            "EXT_PERSON_ID_CODE": CtrlScope.EXT_PERSON_ID_CODE || '',
            "EXT_ACCT_ID_CODE": CtrlScope.EXT_ACCT_ID_CODE || '',
            "DBTR_CUST_TYPE": CtrlScope.DBTR_CUST_TYPE || '',
            "CR_ACCT_IDENTIFICATION": CtrlScope.CR_ACCT_IDENTIFICATION || '',
            "EXT_PURPOSE_CODE": CtrlScope.EXT_PURPOSE_CODE || '',
            "EXT_PURPOSE_PRTY": CtrlScope.EXT_PURPOSE_PRTY || '',
            'Country_Code': Country_Code,
            'client_code': client_code,
            'TENANT_ID': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID"),
            'CREATED_BY': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID"),
            'CREATED_BY_NAME': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME"),
            'SYSTEM_ID': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID"),
            'SYSTEM_NAME': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC"),
            'PRODUCT_CODE': Product_Code
        }

        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_sim_pack_008/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.message) {
                    console.log('sucess')
                } else {
                    var event = { eventId: "custom-connector", param: res.data, internals: internals }
                    screenInstance["npss_sim_pack008"].onChangecomponent.emit(event);
                }
            });
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}