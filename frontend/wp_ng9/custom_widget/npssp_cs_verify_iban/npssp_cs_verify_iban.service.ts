import { Injectable } from '@angular/core';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear

                        
@Injectable()
export class npssp_cs_verify_ibanService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        public dialogHelper: DialogService) { }
    //Default calling  function
    compID: any = "";
    fUICG: any = "";
    fn_npssp_cs_verify_iban(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
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
            'DBTR_SANCTION_LIMIT': CtrlScope.DBTR_SANCTION_LIMIT || '',
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

        this.CallApiManagerTbl(ClientParams, internals, screenInstance,CtrlScope)
    }
    CallApiManagerTbl(ClientParams, internals, screenInstance,CtrlScope) {
        this.httpHelper.HttpPost('/microsvc/npssp_cs_verify_iban/', ClientParams)
            .subscribe((res: any) => {
                var event
                if (res.data.status == "SUCCESS") {
                    screenInstance.payment_form_action_verify_sender_iban.show = false;
                    screenInstance.payment_form_action_verify_sender_balance.show = true;
                    CtrlScope.PAYEE_IBAN=res.data.CDTR_IBAN;
                    CtrlScope.PAYEE_ACCT_NAME=res.data.CDTR_ACCT_NAME;
                   // this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                 
                    event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg: '201 - 000 - IBAN has been verified successfully',case:'success' }
                   screenInstance["npss_op_error_widget"].onChangecomponent.emit(event);
                } else if (res.data.status == '120 - Recipient Not Valid' || res.data.status == 'No Bank Code For this Payee Number' || res.data.status == 'No Bank Code For this payor Number' || res.data.status == 'No Data For this payor Number') {
                 event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg:res.data.status,case:'failure'  }
                   screenInstance["npss_op_error_widget"].onChangecomponent.emit(event);

                } else {
                  //  this.dialogHelper.ShowErrorDialog(res.data.status)
                 
                   event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg:res.data.status.statuscode +'-'+res.data.status.outcome + '- '+res.data.status.errorMsg,case:'failure'  }
                  screenInstance["npss_op_error_widget"].onChangecomponent.emit(event);
                }
            })
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
}