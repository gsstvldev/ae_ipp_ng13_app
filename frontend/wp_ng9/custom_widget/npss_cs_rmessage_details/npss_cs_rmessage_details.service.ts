
import { Injectable } from '@angular/core';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { CoreService } from '../../scripts/fx/core.service';

//import 'rxjs/add/operator/catch';

@Injectable()
export class npss_cs_rmessage_detailsService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_rmessage_details(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var ClientParams: any = {}
        var CtrlScope = screenInstance['input_details'].f_npss_r_msg_detail_ui.model
        ClientParams.processName = CtrlScope.PROCESS_NAME
        ClientParams.senderbic = CtrlScope.SENDERBIC
        ClientParams.reftype = CtrlScope.REFTYPE
        ClientParams.ref = CtrlScope.REF
        ClientParams.datetime = CtrlScope.DATETIME
         ClientParams.datasource = CtrlScope.DATASOURCE

        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID"),
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC"),

        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_rmessage_details/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == 'SUCCESS') {

                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }

                else {
                    this.dialogHelper.ShowInfoDialog(res.data.status);
                }
            });
    }
}