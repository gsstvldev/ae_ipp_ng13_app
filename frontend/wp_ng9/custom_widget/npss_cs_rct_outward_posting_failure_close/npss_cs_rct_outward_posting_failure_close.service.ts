import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables

@Injectable()
export class npss_cs_rct_outward_posting_failure_closeService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_rct_outward_posting_failure_close(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var ClientParams: any = {}
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID");
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS") || '';
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS") || '';
        ClientParams.Roleid = this.sessionHelper.GetVariable('SESSION_LEVEL', 'APP_USER_ROLES')
        ClientParams.Rule_Code = 'RCT_OP_POSTING_MAN_CLOSE'
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_rct_outward_posting_failure_close/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS" || res.data.status == 'Success') {
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                } else {
                    this.dialogHelper.ShowInfoDialog(res.data.status)
                }
            });
    }
}