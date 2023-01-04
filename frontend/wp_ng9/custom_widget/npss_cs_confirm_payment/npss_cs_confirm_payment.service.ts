
import { Injectable } from '@angular/core';
//Uncomment below lines when it is     required
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
export class npss_cs_confirm_paymentService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_confirm_payment(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let ClientParams: any = {};
        var CtrlScope = screenInstance['payment_type_ui'].f_npss_p2p_retrive_contact.model;
        ClientParams = {
            "channelId": CtrlScope.CHANNEL_ID || '',
            "bankUserId": CtrlScope.BANKUSERID || '',
            "amount": CtrlScope.memory21 || '',
            "currency": CtrlScope.memory22 || '',
            "bankAcctId": CtrlScope.memory23 || '',
            "proxy_type": CtrlScope.PROXY_TYPE || '',
            "proxy_value": CtrlScope.PROXY_VALUE || '',
            "Mobile_Number": CtrlScope.MOBILE || '',
            "paymentId":   this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PAYMENT_ID"); 
            "TenantId": this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID")


        }
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_confirm_payment/', ClientParams)
            .subscribe((res: any) => {
                var event
                if (res.data.status == 'SUCCESS') {
                    if (res.data.data) {
                        if (res.data.data.message) {
                            event = { eventId: "custom-connector", param: res.data.data.message, type: "Array", internals: internals }
                            screenInstance["retrieve_contact_cw"].onChangecomponent.emit(event);
                        } else {
                            event = { eventId: "custom-connector", param: res.data.data, type: "Object", internals: internals }
                            screenInstance["retrieve_contact_cw"].onChangecomponent.emit(event);
                        }
                    } else {
                        this.dialogHelper.ShowInfoDialog(res)
                    }

                }
                else {
                    this.dialogHelper.ShowInfoDialog(res)
                }
            });
    }
}