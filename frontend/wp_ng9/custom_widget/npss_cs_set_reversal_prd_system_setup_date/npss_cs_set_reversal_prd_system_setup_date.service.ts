
import { Injectable } from '@angular/core';
//Uncomment below lines when it is    required
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
export class npss_cs_set_reversal_prd_system_setup_dateService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_set_reversal_prd_system_setup_date(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let Clientparam: any = {}  
      Clientparam.screenName = screenInstance.wftpa_description
      Clientparam.TenantId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
      this.CallUrlWithData(Clientparam, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallUrlWithData(ClientParam, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_set_reversal_prd_system_setup_date/', ClientParam)
        .subscribe((res: any) => {
            if (res.data.status == "SUCCESS") {
                this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_CD", res.data.data);
                  this.appHandler.callInternals(internals, screenInstance, "SUCCESS");

            }else{
                this.dialogHelper.ShowInfoDialog(res.data.data);  
            }
        });
}
}