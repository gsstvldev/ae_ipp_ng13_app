import { Injectable } from '@angular/core';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables        
                        
@Injectable()
export class npssp_cs_verify_recepient_ibanService {
    // compID: any = "";
    // fUICG: any = "";
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npssp_cs_verify_recepient_iban(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
     /*   if (!screenInstance.hasOwnProperty('Current_tab_view') || screenInstance.Current_tab_view.header === "Payment") {
        this.compID = 'payment_form'
        this.fUICG = 'f_customer_payment_ui'
    }
    var CtrlScope = screenInstance[this.compID][this.fUICG].model; */
    var MsgId = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_MSG_ID')
    let transaction_id = Date.now();
   
        this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_UNIQUE_ID", transaction_id);
        var ClientParams = {
        'Id': MsgId,
        'unique_id': transaction_id,
        'cr_phone_no':this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_CR_PHN_NO')|| '',
        'amount':this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_AMOUNT')|| ''
      


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
    this.httpHelper.HttpPost('/microsvc/npssp_cs_verify_recepient_iban/', ClientParams)
        .subscribe((res: any) => {
            var event
            // if (res.data.status == "SUCCESS") {
            //     screenInstance.payment_form_action_verify_recipient_iban.show = false
            //     screenInstance.payment_form_action_response.show = true
            //     event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '201 - 000 - Recepient IBAN Verified SuccessFully', case: 'success' }
            //     screenInstance["ipsp_error_widget"].onChangecomponent.emit(event);
            // } else if (res.data.status == "FAILURE") {
            //     event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: 'No Data Found', case: 'failure' }
            //     screenInstance["ipsp_error_widget"].onChangecomponent.emit(event);
            // } else {
            //     event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: res.data.status.statuscode + '-' + res.data.status.outcome + '- ' + res.data.status.errorMsg, case: 'failure' }
            //     screenInstance["ipsp_error_widget"].onChangecomponent.emit(event);
            // }
            if (res.data.status == "Active") {
                screenInstance.ip_payment_form_action_verify_recipient_iban.show = false
                screenInstance.ip_payment_form_action_response.show = true
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '201 - 000 - Recepient IBAN verified successFully', case: 'success' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else if (res.data.status == " There is no account no found in CBS") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 120 - Recipient not valid', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else if (res.data.status == "The given account number is Dormant.Kindly check it") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 127 - Payee Iban invalid', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else if (res.data.status == "The given account number is Inactive .Kindly check it") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 128 - Payee bank account closed', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else if (res.data.status == " The given account number is Freeze.Kindly check it") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 125 - Payee IBAN blocked', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else if (res.data.status == "The given account number is Closed.Kindly check it") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 128 - Payee bank account closed', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else if (res.data.status == "Account NO is exists but data is mistached...pl check log") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 199 - Account number mismatched', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else if (res.data.status == "There is no sufficient balance in this account") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 104 - Insufficient funds', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            }else if (res.data.status == "Inactive") {
                event = { eventId: "custom-connector", param: ClientParams, internals: internals, errormsg: '400 - 128 - Payee bank account closed', case: 'failure' }
                screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            }  
        })
}
}