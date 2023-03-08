
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
export class npss_cs_reversal_set_status_and_bind_valueService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
         private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_reversal_set_status_and_bind_value(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
      
        let Clientparam: any = {}
          let roleId  = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_USER_ROLES")
            Clientparam.roleId = roleId
            Clientparam.PRODUCT_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE")
              Clientparam.uetr = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_UETR")
       
        Clientparam.screenName = screenInstance.wftpa_description
        this.CallUrlWithData(Clientparam, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlWithData(ClientParam, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_reversal_set_status_and_bind_value/', ClientParam)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS") {
                    // if (res.data.data.status && res.data.data.process_status) {
                    //     this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_REVPL_STATUS", res.data.data.status);
                    //     this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_REVPL_PROCESSSTATUS", res.data.data.process_status);
                    // }
                     if (res.data.data.status && res.data.data.process_status) {
                        this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_REVPL_STATUS", res.data.data.status);
                        this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_REVPL_PROCESSSTATUS", res.data.data.process_status);
                    }else if(res.data.data.status != '' && res.data.data.process_status == ''){
                        this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_REVPL_STATUS", res.data.data.status);
                    }else if(res.data.data.status == '' && res.data.data.process_status != ''){
                        this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_REVPL_PROCESSSTATUS", res.data.data.process_status);
                    }
                    var CtrlScope = screenInstance['process_log_control_ui'].f_npss_reversal_plog_ui.model
                    CtrlScope.AMOUNT_CREDITED = res.data.data.amount_credited
                    CtrlScope.AMT_CR_LOC_CUR = res.data.data.amt_cr_loc_cur
                    CtrlScope.CHARGE_AMOUNT = res.data.data.charge_amount
                     CtrlScope.PROCESS_REF_NO = res.data.data.process_ref_no

                    let roleId  = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_USER_ROLES")
                    if (roleId == '738' && screenInstance.wftpa_description == 's_rct_reversal_non_aed') {
                        var CtrlScope1 = screenInstance['deal_ui'].f_npss_reversal_deal_plog_ui.model
                        CtrlScope1.EXCHANGE_RATE = res.data.data.exchange_rate
                        CtrlScope1.BUY_CURRENCY = res.data.data.contra_amount
                        CtrlScope1.SELL_CURRENCY = res.data.data.sell_currency
                        CtrlScope1.CONTRA_AMOUNT = res.data.data.buy_currency
                        CtrlScope1.DEALT_AMOUNT = res.data.data.dealt_amount
                        this.appHandler.callInternals(internals, screenInstance, "SUCCESS");

                    }else{
                        this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                    }

                }
                else if(res.data.status == 'FAILURE') {
                    this.dialogHelper.ShowInfoDialog(res.data.data.msg);

                }else{
                     this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }
            });
    }
}