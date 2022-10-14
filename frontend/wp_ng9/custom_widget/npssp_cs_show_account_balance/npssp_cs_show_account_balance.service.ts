
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
export class npssp_cs_show_account_balanceService {
    constructor(private httpHelper: HttphelperService,
         private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npssp_cs_show_account_balance(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
     let ClientParams: any = {};
        ClientParams.api_code = "NPSSCreditTransferShowBalance";
        let dr_phoneno=screenInstance["payment_form"].f_op_cust_transaction_ui.model.DBTR_PHONE_NO; 
        ClientParams.dr_phoneno=dr_phoneno;
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
      CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npssp_cs_show_account_balance/', ClientParams)
            .subscribe((res: any) => {
                console.log("Show Account Balance Server Response", res);
                let CtrlScope = screenInstance["payment_form"].f_op_cust_transaction_ui.model;
                if (res.data.outcome == "000") {

                    
                    let data = res.data.balanceInquiryResponse.ibanBalance;
                  
                    CtrlScope.DBTR_ACCT_BALANCE = data;
                   // screenInstance.payment_form_action_verify_credit_transfer.show =  true;
                   screenInstance.payment_form_action_confirm_payment.show = true
                    screenInstance.data_entry_ui_show_payor_account_bal.show = false;
                   // this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                 
                   var event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg: '201 - 000 - Account balance has been verified successfully' }
                   screenInstance["npss_op_error_widget"].onChangecomponent.emit(event);
                   
                  // this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }else if(res.data.status == 'No Data For this payee Number' || res.data.status == 'No Data For this payor Number' || res.data.status == 'No URL found in Rule code'){
                     event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg: res.data.status }
                    screenInstance["npss_op_error_widget"].onChangecomponent.emit(event);
                } else {
                    
                     event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg:res.data.statuscode +'-'+ res.data.outcome + '- '+res.data.errorMsg }
                    screenInstance["npss_op_error_widget"].onChangecomponent.emit(event);
                   //this.dialogHelper.ShowErrorDialog(res.data.errorMsg);

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