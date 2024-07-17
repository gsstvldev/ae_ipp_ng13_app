
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear

@Injectable()
export class npss_c_disable_action_by_multiselectService {
    constructor(private http: Http,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_c_disable_action_by_multiselect(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let App_Id = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        let Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");
        if (Product_Code) {
            if (screenInstance.wftpa_description === "s_rct_posting_failures" || screenInstance.wftpa_description === "s_rct_rejected_returns" || screenInstance.wftpa_description === "s_op_rct_posting_failure" || screenInstance.wftpa_description === "s_lca_account_entries_exceptions" || screenInstance.wftpa_description === "s_camt54_posting_failure") {
               if(screenInstance.wftpa_description != "s_camt54_posting_failure"){
                if (this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID").length == 1) {
                    if (screenInstance["navigation_ui_view_message_log"]) {
                        screenInstance["navigation_ui_view_message_log"].disabled = false;
                    }
                    if (screenInstance["navigation_ui_view_process_log"]) {
                        screenInstance["navigation_ui_view_process_log"].disabled = false;
                    }
                    if (screenInstance["navigation_ui_view_tran"]) {
                        screenInstance["navigation_ui_view_tran"].disabled = false;
                    }
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                } else {
                    if (screenInstance["navigation_ui_view_message_log"]) {
                        screenInstance["navigation_ui_view_message_log"].disabled = true;
                    }
                    if (screenInstance["navigation_ui_view_process_log"]) {
                        screenInstance["navigation_ui_view_process_log"].disabled = true;
                    }
                    if (screenInstance["navigation_ui_view_tran"]) {
                        screenInstance["navigation_ui_view_tran"].disabled = true;
                    }
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }
               }else if(screenInstance.wftpa_description === "s_camt54_posting_failure"){
                if (this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NCACN_ID").length == 1) {
                    if (screenInstance["navigation_ui_view_message_log"]) {
                        screenInstance["navigation_ui_view_message_log"].disabled = false;
                    }
                    if (screenInstance["navigation_ui_view_process_log"]) {
                        screenInstance["navigation_ui_view_process_log"].disabled = false;
                    }
                    if (screenInstance["navigation_ui_view_tran"]) {
                        screenInstance["navigation_ui_view_tran"].disabled = false;
                    }
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                } else {
                    if (screenInstance["navigation_ui_view_message_log"]) {
                        screenInstance["navigation_ui_view_message_log"].disabled = true;
                    }
                    if (screenInstance["navigation_ui_view_process_log"]) {
                        screenInstance["navigation_ui_view_process_log"].disabled = true;
                    }
                    if (screenInstance["navigation_ui_view_tran"]) {
                        screenInstance["navigation_ui_view_tran"].disabled = true;
                    }
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }
               }
                

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