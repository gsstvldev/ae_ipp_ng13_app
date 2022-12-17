
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

@Injectable()
export class npss_cs_ip_rev_reject_inau_reserve_fundService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_ip_rev_reject_inau_reserve_fund(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let App_Id = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        let Product_Code;
        if (App_Id == "3") {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_CODE");
        } else {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");
        }
        let code;

        let Module = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "CURRENT_MODULE_NAME").toUpperCase();

        let process_type;
        if (Product_Code != null || Product_Code != undefined) {
            code = Product_Code.split('_');
        }
        let Country_Code = code[1].slice(0, 2);
        let client_code = code[1];
        let system = code[0];


        var Ctrlscope = screenInstance["remarks_ui"].f_npss_remarks_ui.model
        var Ctrlscope1 = screenInstance["reject_ui"].f_npss_reject_ui.model
        var ResonCode = Ctrlscope.REMARKS
        let ClientParams: any = {};
        ///  Prepare input for Server call
        ClientParams.T24_RETURN_CODE = Ctrlscope1.T24_RETURN_CODE || '';
        ClientParams.CBUAE_RETURN_CODE = Ctrlscope1.CBUAE_RETURN_CODE || '';
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
        ClientParams.client_code = client_code,
            ClientParams.country_code = Country_Code,
            ClientParams.Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_NPSST_ID') || '';
        // ClientParams.COMMENT = ''
        // ClientParams.STPC_ID = ''
        ClientParams.system_type = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ST_CODE")
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        ClientParams.RULE_CODE = "RCT_IP_REV_REQ_REJECT";
        ClientParams.ResonCode = ResonCode
        ClientParams.tpl_id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSTPL_ID") || '';
        this.CallUrlforGetparamvalue(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_ip_rev_reject_inau_reserve_fund/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS") {
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                } else {
                    this.dialogHelper.ShowErrorDialog(res.data.status);
                    
                }
            });
    }
}