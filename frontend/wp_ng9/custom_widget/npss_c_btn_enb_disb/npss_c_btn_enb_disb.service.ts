import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { LoaderService } from '../../scripts/fx/loader.service'; // Loader box appear for form loader  view

@Injectable()
export class npss_c_btn_enb_disbService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService,
        private loaderHelper: LoaderService) { }
    //Default calling function
    fn_npss_c_btn_enb_disb(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var CtrlScope = screenInstance['customer_detail'].f_npss_customer_proxy_ui.controls; // for customer details
        var CtrlScope1 = screenInstance['account__detail'].f_npss_customer_account_ui.controls; // for Account details
        var btnName = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "CURRENT_BTN_LABEL").toUpperCase();
        if(screenInstance.wftpa_description == 's_customer_setup'){
        if (btnName == 'ENTROLMENT') {
            CtrlScope1.memory9.show = false //hide block/unblock dorpdown
            CtrlScope1.memory10.show = false //hide block/unblock dorpdown
        }else if(btnName == 'BLOCK UNBLOCK ACCOUNT'){
            CtrlScope1.memory9.show = true //show block/unblock dorpdown
            CtrlScope1.memory10.show = true //show block/unblock dorpdown
            CtrlScope1.iban.show = false
            CtrlScope1.currency.show = false
            CtrlScope1.instant_payment.show = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }else if(btnName == 'CHANGE MOBILE NO'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope1.instant_payment.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = false
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }else if(btnName == 'UPDATE PERSONAL'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope1.instant_payment.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = false
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = false
        }
        else if(btnName == 'UNENTROLMENT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope1.instant_payment.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }else if(btnName == 'ADD BANK ACCOUNT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.iban.disabled = false
            CtrlScope1.currency.disabled = false
            CtrlScope1.instant_payment.disabled = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }
        }
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}