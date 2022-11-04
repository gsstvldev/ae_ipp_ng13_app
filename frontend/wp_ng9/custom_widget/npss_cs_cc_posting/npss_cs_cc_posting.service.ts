
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
    //Default calling function
    fn_npss_cs_cc_posting(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    
        let eli_process = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        let status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        let Product_Code;
      
       let App_Id
        if (App_Id == "3") {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_CODE");
        } else {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");
        }
        let code;
        if (Product_Code != null || Product_Code != undefined) {
            code = Product_Code.split('_');
        }
        let Country_Code = code[1].slice(0, 2);
        let client_code = code[1];
        let system = code[0];
       
        let Tran_Id;
       

       let uetr = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_UETR") || '';
        Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID") || '';
       // Batch_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_RRTGSB_ID") || '';
        let ClientParams: any = {
            
            "ELIGIBLE_PROCESS_STATUS": eli_process,
           
          
            "STATUS": status,
            "uetr": uetr,
            "tran_id":Tran_Id
         

        }

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
                this.appHandler.callInternals(internals, screenInstance, "FAILURE");
            }
        });
}
}