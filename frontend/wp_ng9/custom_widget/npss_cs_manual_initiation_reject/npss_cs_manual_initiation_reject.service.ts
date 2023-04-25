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
export class npss_cs_manual_initiation_rejectService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_manual_initiation_reject(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let ClientParams: any = {};
        ///  Prepare input for Server call
        // var CtrlScope
        // if (screenInstance.wftpa_description == 's_rct_reversal_non_aed') {
        //     CtrlScope = screenInstance['cancel_ui'].f_npss_pl_change_cancel_reason_ui.model
        //     ClientParams.T24_RETURN_CODE = CtrlScope.T24_RETURN_CODE
        //     ClientParams.CBUAE_RETURN_CODE = CtrlScope.CBUAE_RETURN_CODE 
        // } else {
        //     CtrlScope = screenInstance['cancel_return_ui'].f_npss_pl_change_cancel_reason_ui.model
        //     ClientParams.T24_RETURN_CODE = CtrlScope.T24_RETURN_CODE
        //     ClientParams.CBUAE_RETURN_CODE = CtrlScope.CBUAE_RETURN_CODE 
        // }

        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
        ClientParams.Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID") || '';
        ClientParams.NPSSTPL_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSTPL_ID") || '';

         ClientParams.roleId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_USER_ROLES");
        ClientParams.system_type = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ST_CODE")
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS") || '';
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS") || '';

        ClientParams.RULE_CODE = "RCT_OP_MANUAL_REJECT";
        this.CallUrlforGetparamvalue(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_manual_initiation_reject/', ClientParams)
        .subscribe((res: any) => {
            if (res.data.status == "SUCCESS") {
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
            } else {
                this.dialogHelper.ShowInfoDialog(res.data.status);

            }
        });
}
}