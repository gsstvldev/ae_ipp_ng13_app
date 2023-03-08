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
export class npss_cs_volume_valuesService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_volume_values(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        var ClientParams: any = {}
        var CtrlScope = screenInstance['api_details'].f_npss_volume_values_ui.model;
        ClientParams.PROCESS_NAME = CtrlScope.PROCESS_NAME;
        ClientParams.FROMDATE = CtrlScope.FROMDATE;
        ClientParams.FROMTIME = CtrlScope.FROMTIME;
        ClientParams.SENDERBIC = CtrlScope.SENDERBIC;
        ClientParams.TODATE = CtrlScope.TODATE;
        ClientParams.TOTIME = CtrlScope.TOTIME;
        ClientParams.DATASOURCE = CtrlScope.DATASOURCE;
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
       
       
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallUrlWithData(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_volume_values/', ClientParams)
        .subscribe((res: any) => {
            if (res.data.status == "SUCCESS" || res.data.status == "SUCCESS" || res.data.status == "Success" || res.data.status == "Success") {
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
            } else {
                this.dialogHelper.ShowInfoDialog(res.data.status);
            }
        });
}
}