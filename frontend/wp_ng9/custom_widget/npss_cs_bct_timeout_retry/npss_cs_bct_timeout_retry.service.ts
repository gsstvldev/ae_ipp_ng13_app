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
export class npss_cs_bct_timeout_retryService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_bct_timeout_retry(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
   let Product_Code: any;

        let App_Id: any = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID")
        if (App_Id == "3") {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_CODE");
        } else {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");
        }
        let code: any;
        if (Product_Code != null || Product_Code != undefined) {
            code = Product_Code.split('_');
        }
        let Country_Code: any = code[1].slice(0, 2);
        let client_code: any = code[1];
        let system: any = code[0];
        var ClientParams: any = {
            'Tran_Id': this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID")||'',
            'eligible_status': this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS")||'',
            'eligible_process_status': this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS")||'',
            'Rule_Code': 'BCT_IP_TIMEOUT_RETRY',
            'Country_Code': Country_Code,
            'client_code': client_code,
            'TENANT_ID': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID"),
            'CREATED_BY': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID"),
            'CREATED_BY_NAME': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME"),
            'SYSTEM_ID': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID"),
            'SYSTEM_NAME': this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC"),
            'PRODUCT_CODE': Product_Code
        }
      
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_bct_timeout_retry/', ClientParams)
            .subscribe((res: any) => {
                if (res.data == "SUCCESS" || res.data.status == 'SUCCESS') {
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }else if(res.data.status == 'No Rule Code Found' || res.data == 'No Rule Code Found'){
                    this.dialogHelper.ShowErrorDialog('No Rule Code Found')
                } else if(res.data == "FAILURE" || res.data.status == 'FAILURE'){
                     this.appHandler.callInternals(internals, screenInstance, "FAILURE");
                }else {
                    this.dialogHelper.ShowInfoDialog(res.data.status)
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