
import { Injectable } from '@angular/core';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information

@Injectable()
export class npssp_cs_tran_insertService {
    compID: any = "";
    fUICG: any = "";
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService) { }
    //Default calling function
    fn_npssp_cs_tran_insert(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");

        var code = Product_Code.split('_');
        let Country_Code = code[1].slice(0, 2);
        let client_code = code[1];
        let application_code = code[0];
        let ClientParams = {}

        if (!screenInstance.hasOwnProperty('Current_tab_view') || screenInstance.Current_tab_view.header === "Payment") {
            this.compID = 'payment_form'
            this.fUICG = 'f_op_cust_transaction_ui'
        }
        var CtrlScope = screenInstance[this.compID][this.fUICG].model;
        ClientParams = {
            'DBTR_ACCT_NAME': CtrlScope.DBTR_ACCT_NAME || '',
            'DBTR_PHONE_NO': CtrlScope.DBTR_PHONE_NO || '',
            'DBTR_ACCT_BALANCE': CtrlScope.DBTR_ACCT_BALANCE || '',
            // 'DBTR_SANCTION_ LIMIT': CtrlScope.DBTR_SANCTION_LIMIT || '',
            'CDTR_PMT_TYPE': CtrlScope.CDTR_PMT_TYPE || '',
            'CDTR_PHONE_NO': CtrlScope.CDTR_PHONE_NO || '',
            'CDTR_EMAIL_ID': CtrlScope.CDTR_EMAIL_ID || '',
            'CDTR_EMIRATES': CtrlScope.CDTR_EMIRATES || '',
            'CDTR_IBAN': CtrlScope.CDTR_IBAN || '',
            'INTRBK_STTLM_AMNT': CtrlScope.INTRBK_STTLM_AMNT || '',
            'Country_Code': Country_Code,
            'client_code': client_code,
            'TENANT_ID': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID"),
            'CREATED_BY': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID"),
            'CREATED_BY_NAME': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME"),
            'SYSTEM_ID': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID"),
            'SYSTEM_NAME': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC"),
            'PRODUCT_CODE': Product_Code
        }

        this.CallApiManagerTbl(ClientParams, internals, screenInstance)
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallApiManagerTbl(ClientParams, internals, screenInstance) {
        this.httpHelper.HttpPost('/microsvc/npssp_cs_tran_insert/', ClientParams)
            .subscribe((res: any) => {
                console.log("IPS Save", res);
                if (res.data.status == "SUCCESS") {
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                } else {
                    this.appHandler.callInternals(internals, screenInstance, "FAILURE");
                }
            })
    }
}