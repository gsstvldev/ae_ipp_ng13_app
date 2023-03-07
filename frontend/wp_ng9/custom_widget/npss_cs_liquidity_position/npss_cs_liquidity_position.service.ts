
import { Injectable } from '@angular/core';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server  call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session  information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { CoreService } from '../../scripts/fx/core.service';

//import 'rxjs/add/operator/catch';

@Injectable()
export class npss_cs_liquidity_positionService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_liquidity_position(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var ClientParams: any = {}
        var CtrlScope = screenInstance['api_details'].f_npss_liq_pos_ui.model;
        ClientParams.PROCESS_NAME = CtrlScope.PROCESS_NAME;
        ClientParams.CURRENCY = CtrlScope.CURRENCY;
        ClientParams.ACCOUNTHOLDERBIC = CtrlScope.ACCOUNTHOLDERBIC;
        ClientParams.ACCOUNTNUMBER = CtrlScope.ACCOUNTNUMBER;
        ClientParams.DATETIME = CtrlScope.DATETIME;
        ClientParams.DATASOURCE = CtrlScope.DATASOURCE;
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
       
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.RULE_CODE = 'CORE_API_LIQUIDITY_POSITION'
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID"),
            ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC"),

            this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_liquidity_position/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == 'SUCCESS') {

                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }

                else {
                   // this.appHandler.callInternals(internals, screenInstance, "FAILURE");
                    this.dialogHelper.ShowInfoDialog(res.data.data);
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