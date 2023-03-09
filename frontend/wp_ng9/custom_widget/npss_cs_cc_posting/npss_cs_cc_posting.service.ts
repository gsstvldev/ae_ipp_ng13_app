
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
import { LoaderService } from '../../scripts/fx/loader.service'; // Loader box appear for form loader view
import { Subject } from 'rxjs';
import * as moment from 'moment';
                        
@Injectable()
export class npss_cs_cc_postingService {
    constructor(private http: Http, private httpHelper: HttphelperService, private coreHelper: CoreService, private appHandler: AppHandlerService, private sessionHelper: SessionService, private dialogHelper: DialogService, private loaderHelper: LoaderService) { }
    //Default calling  function
    fn_npss_cs_cc_posting(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let Product_Code: any;
        let searchParamObj;

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
        let uetr = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_UETR") || '';
      // let  Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID") || '';

        let ClientParams: any = {};
        ///  Prepare input for Server call
        ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        ClientParams.SYSTEM_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        ClientParams.SYSTEM_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_DESC");
        ClientParams.client_code = client_code,
            ClientParams.country_code = Country_Code,
         ClientParams.tran_id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_NPSST_ID') || '';
        ClientParams.system_type = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ST_CODE")
        ClientParams.STATUS = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
       ClientParams.ELIGIBLE_PROCESS_STATUS = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        ClientParams.system = system;
        ClientParams.uetr = uetr;
       

      
       // Batch_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_RRTGSB_ID") || '';
        /*  ClientParams = {
            
            "ELIGIBLE_PROCESS_STATUS": eli_process,
           
          
            "STATUS": status,
            "uetr": uetr,
            "tran_id":Tran_Id
         

        } */

        this.CallDLL(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallDLL(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_cc_posting/', ClientParams)
        .subscribe((res: any) => {
            if (res.data == "SUCCESS" || res.data.status == "SUCCESS") {
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
            } else {
                this.dialogHelper.ShowInfoDialog(res.data.status);
            }
        });
}
}