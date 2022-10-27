import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
                        
@Injectable()
export class npss_cs_reject_pack002Service {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_reject_pack002(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    let App_Id = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        let Product_Code;
        if (App_Id == "3") {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_CODE");
        } else {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");
        }
        let code;
       
        let Module = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "CURRENT_MODULE_NAME").toUpperCase();
       
        let process_type;
        if (Product_Code != null || Product_Code != undefined) {
            code = Product_Code.split('_');
        }
        let Country_Code = code[1].slice(0, 2);
        let client_code = code[1];
        let system = code[0];
       
        if (Module == "OUTWARD") {
            process_type = "OP";
        } else {
            process_type = "IP";
        }
       

  
        let ClientParams:any ={};
        ///  Prepare input for Server call
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
        ClientParams.Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_NPSST_ID') || '';
        ClientParams.tpl_id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_NPSSTPL_ID') || '';
       
        ClientParams.system_type = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ST_CODE")
       
     
        ClientParams.RULE_CODE = "RCT_IP_REV_RJCT_PLACE_PACS002";
         this.CallUrlforGetparamvalue (ClientParams, screenInstance, internals);
    }
     CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_reject_pack002/', ClientParams)
            .subscribe((res: any) => {
                if (res.data == "SUCCESS") {
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                  } else if (res.data == "NO_STATUS_FOUND") {
                    this.dialogHelper.ShowErrorDialog(res.data.data);
                    this.appHandler.callInternals(internals, screenInstance, "FAILURE");
                } else {
                    this.dialogHelper.ShowErrorDialog('Failure');
                    this.appHandler.callInternals(internals, screenInstance, "FAILURE");
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