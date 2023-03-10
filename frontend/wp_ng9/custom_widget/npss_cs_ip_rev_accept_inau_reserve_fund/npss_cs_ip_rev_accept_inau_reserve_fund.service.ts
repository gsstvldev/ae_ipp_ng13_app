
import { Injectable } from '@angular/core';
//Uncomment below lines when it is   required
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
export class npss_cs_ip_rev_accept_inau_reserve_fundService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling  function
    fn_npss_cs_ip_rev_accept_inau_reserve_fund(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        //var CtrlScope = screenInstance["accept_ui"].f_npss_pl_rtn_reason_ui.model
        var ClientParams: any = {}
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        // ClientParams.T24_Return_Code = CtrlScope.T24_RETURN_CODE
        // ClientParams.CBUAE_Return_Code = CtrlScope.CBUAE_RETURN_CODE
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID");
        ClientParams.NPSSTPL_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSTPL_ID");
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.roleId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_USER_ROLES");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.RULE_CODE = 'RCT_IP_REV_REQ_ACCEPT'
        ClientParams.screenName = screenInstance.wftpa_description
       if (screenInstance.wftpa_description == 's_rct_reversal_non_aed') {
            var CtrlScope1 = screenInstance['reversal_ui'].f_npss_reversal_n_ui.model
            ClientParams.buy_rate = CtrlScope1.BUY_RATE ? CtrlScope1.BUY_RATE : 0
            ClientParams.buy_margin = CtrlScope1.BUY_MARGIN ? CtrlScope1.BUY_MARGIN : 0
            ClientParams.tran_charge = CtrlScope1.TRAN_CHARGE ? CtrlScope1.TRAN_CHARGE : 0
            ClientParams.tran_amount = CtrlScope1.TRAN_AMOUNT ? CtrlScope1.TRAN_AMOUNT : 0
        }else{
            ClientParams.buy_rate = ''
            ClientParams.buy_margin = ''
        }
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_ip_rev_accept_inau_reserve_fund/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS" || res.data == "SUCCESS") {
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                } else if (res.data.status == 'No Rule Code Found' || res.data == 'No Rule Code Found') {
                    this.dialogHelper.ShowErrorDialog('No Rule Code Found')

                } else if (res.data.status == 'No Data found in System Setup table' || res.data == 'No Data found in System Setup table') {
                    this.dialogHelper.ShowErrorDialog('"No Data found in System Setup table')

                }
                else if (res.data.status == 'No Data found in Transaction table' || res.data == 'No Data found in Transaction table') {
                    this.dialogHelper.ShowErrorDialog('No Data found in Transaction table')

                }
                else if (res.data.status == 'No Data found in accounts table' || res.data == 'No Data found in accounts table') {
                    this.dialogHelper.ShowErrorDialog('No Data found in accounts table')

                }
                else if (res.data.status == 'No Data found in workflow table' || res.data == 'No Data found in workflow table') {
                    this.dialogHelper.ShowErrorDialog('No Data found in workflow table')

                }
                else {
                   if(res.data.flag == 'Y'){
                        screenInstance.reversal_action_ui_force_post.disabled = false;
                        this.dialogHelper.ShowErrorDialog(res.data.status)
                    }else{
                        screenInstance.reversal_action_ui_force_post.disabled = true;
                        this.dialogHelper.ShowErrorDialog(res.data.status) 
                    }
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