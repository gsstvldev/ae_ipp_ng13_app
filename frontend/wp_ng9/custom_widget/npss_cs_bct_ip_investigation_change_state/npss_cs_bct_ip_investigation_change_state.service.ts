
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
export class npss_cs_bct_ip_investigation_change_stateService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_bct_ip_investigation_change_state(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let Product_Code: any;
        console.log('success')
        let searchParamObj;
        let search;

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

        let ClientParams: any = {};
        ///  Prepare input for Server call
       ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
             ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        ClientParams.system = system
        ClientParams.api_code = "BCT_IP_INVEST_INITIATE";


        if (screenInstance.wftpa_description === "s_bct_investigation") {
            search = screenInstance["search"].f_npss_investigation_srch.model;

        } searchParamObj = {


            "s_cdtr_iban": search.CDTR_IBAN,
            "s_uetr": search.UETR,
            "s_paymentmethod": search.memory67,
            "s_tran_ref_id": search.TRAN_REF_ID.value,
            "s_e2eref": search.PAYMENT_ENDTOEND_ID.value,
            "s_cdtr_acct_no": search.CDTR_ACCT_NO,
            "s_dbtr_acct_no": search.DBTR_ACCT_NO,
            "s_tranamountop": search.INTRBK_STTLM_AMNT.operator,
            "s_tranamountvalue": search.INTRBK_STTLM_AMNT.value,
            "s_tranamounttovalue": search.INTRBK_STTLM_AMNT.tovalue,
            
            "s_createddatetovalue": search.memory63.tovalue,
            "s_createddateop": search.memory63.operator,
            "s_createddatefromvalue": search.memory63.value,
            "s_valuedate": search.VALUE_DATE,
            "s_valuedateop": search.VALUE_DATE.operator,
            "s_valuedatetovalue": search.VALUE_DATE.tovalue,
            "s_valuedatevalue": search.VALUE_DATE.value
            

        }
        console.log("Search Params", searchParamObj);

        Object.assign(ClientParams, searchParamObj);
        console.log("Client Input Params with Search Params", ClientParams);

        this.CallUrlWithData(ClientParams, screenInstance, internals);

    }

CallUrlWithData(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_bct_ip_investigation_change_state/', ClientParams)
        .subscribe((res: any) => {
            console.log("Bulk Change Status Server Response", res);
            if (res.data == "SUCCESS") {
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
            } else if (res.data == "FAILURE") {
                this.appHandler.callInternals(internals, screenInstance, "FAILURE");
            }  else {
                this.dialogHelper.ShowInfoDialog(res.data);

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