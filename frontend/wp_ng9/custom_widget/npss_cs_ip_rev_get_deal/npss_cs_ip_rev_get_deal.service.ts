
import { Injectable } from '@angular/core';
//Uncomment below lines when it is     required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service';
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables                       
@Injectable()
export class npss_cs_ip_rev_get_dealService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_ip_rev_get_deal(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var ClientParams: any = {}
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID");
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.RULE_CODE = 'NPSS_IP_REV_GET_DEAL'
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_ip_rev_get_deal/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == 'SUCCESS') {
                    if (res.data.CustRate == 'YES') {
                        var Controls = screenInstance['reversal_ui'].f_npss_reversal_n_ui.model
                        Controls.BUY_RATE = res.data.data.buy_rate
                        Controls.BUY_MARGIN = res.data.data.buy_margin
 this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                    } else {
                        var dat = res.data.data;
                        var dat1 = dat.replace(/(\n)/g, "")
                        var response = JSON.parse(dat1)
                        var ctrlscope = screenInstance['deal_ui'].f_npss_reversal_deal_plog_ui.model;
                        ctrlscope.BUY_CURRENCY = response.buy_currency
                        ctrlscope.SELL_CURRENCY = response.sell_currency
                        ctrlscope.DEALT_AMOUNT = response.dealt_amount
                        ctrlscope.CONTRA_AMOUNT = response.contra_amount
                        var Ctrlscope1 = screenInstance['reversal_ui'].f_npss_reversal_n_ui.model
                        Ctrlscope1.buy_rate = response.rate
                        this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                    }

               } else {
                    if (res.data.CustRate == 'YES') {
                       var Controls = screenInstance['reversal_ui'].f_npss_reversal_n_ui.model
                        Controls.BUY_RATE = ''
                        Controls.BUY_MARGIN = ''
 this.dialogHelper.ShowErrorDialog(res.data.status)
                    } else {
                        var ctrlscope = screenInstance['deal_ui'].f_npss_reversal_deal_plog_ui.model;
                        ctrlscope.BUY_CURRENCY = ''
                        ctrlscope.SELL_CURRENCY = ''
                        ctrlscope.DEALT_AMOUNT = ''
                        ctrlscope.CONTRA_AMOUNT = ''
                        var Ctrlscope1 = screenInstance['reversal_ui'].f_npss_reversal_n_ui.model
                        Ctrlscope1.buy_rate = ''
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