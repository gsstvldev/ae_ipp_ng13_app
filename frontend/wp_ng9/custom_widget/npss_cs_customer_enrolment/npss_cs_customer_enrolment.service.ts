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
export class npss_cs_customer_enrolmentService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_customer_enrolment(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let ClientParams = {}

        var CtrlScope = screenInstance['customer_detail'].f_npss_customer_proxy_ui.model;
        var CtrlScope1 = screenInstance['account__detail'].f_npss_customer_account_ui.model;
        ClientParams = {
            "bankUserId": CtrlScope.BANKUSERID,
            "name": CtrlScope.CUSTOMER_NAME,
            "surname": CtrlScope.SURNAME,
            "mobile": CtrlScope.MOBILE,
            "IBAN": CtrlScope1.IBAN,
            "currency": CtrlScope1.CURRENCY,
            "instantPayment": CtrlScope1.INSTANT_PAYMENT,
            "type": CtrlScope.PROXY_TYPE,
            "value": CtrlScope.PROXY_VALUE,
            "channelId": CtrlScope.CHANNEL_ID
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
        this.httpHelper.HttpPost('/microsvc/npss_cs_customer_enrolment/', ClientParams)
            .subscribe((res: any) => {
              var event
              if(res.data.status == 'SUCCESS'){ 
                          
                  event = { eventId: "custom-connector", param:res.data.data , idename:"Customerenrolment", internals: internals }
              screenInstance["customer_setup_widget"].onChangecomponent.emit(event);
          } else {
              this.dialogHelper.ShowInfoDialog(res.data.status)
             
          }
            });
    }
}