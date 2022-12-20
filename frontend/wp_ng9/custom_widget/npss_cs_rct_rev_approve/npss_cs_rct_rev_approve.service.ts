
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
import { DialogService } from '../../scripts/fx/dialog.service';
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables      
                        
@Injectable()
export class npss_cs_rct_rev_approveService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_rct_rev_approve(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        var  ClientParams: any = {}
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
      ClientParams.UETR = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_UETR");
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID");
        ClientParams.NPSSTPL_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSTPL_ID");
        ClientParams.REVERSAL_CODE= this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_REVERSAL_CODE");
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID"),
            ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC"),
        ClientParams.RULE_CODE = 'RCT_OP_REV_APPROVE'
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }

    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_rct_rev_approve/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == 'SUCCESS') {
                    var response = res.data.data;
                    console.log(res.data.data);
              
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }
                // } else if (res.data.status == 'No Rule Code Found' || res.data == 'No Rule Code Found') {
                //     this.dialogHelper.ShowErrorDialog('No Rule Code Found')

                // } else if (res.data.status == 'No Data found in System Setup table' || res.data == 'No Data found in System Setup table') {
                //     this.dialogHelper.ShowErrorDialog('"No Data found in System Setup table')

                // }
                // else if (res.data.status == 'No Data found in Transaction table' || res.data == 'No Data found in Transaction table') {
                //     this.dialogHelper.ShowErrorDialog('No Data found in Transaction table')

                // }
                // else if (res.data.status == 'No Data found in accounts table' || res.data == 'No Data found in accounts table') {
                //     this.dialogHelper.ShowErrorDialog('No Data found in accounts table')

                // }
                // else if (res.data.status == 'No Data found in workflow table' || res.data == 'No Data found in workflow table') {
                //     this.dialogHelper.ShowErrorDialog('No Data found in workflow table')

                // }
                else {
                    this.dialogHelper.ShowErrorDialog(res.data.status)
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