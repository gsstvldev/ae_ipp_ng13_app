import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from  '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear 
                        
@Injectable()
export class npss_cs_arc_masking_req_resService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_arc_masking_req_res(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
   
    let ClientParams: any = {};
        ClientParams.npsstpl_id =  this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSTPL_ID");
        ClientParams.roleId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_USER_ROLES");
        ClientParams.processName =  this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_NAME");
        ClientParams.npsstrrd_id =  this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSTRRD_ID");
        ClientParams.buttonName = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "CURRENT_BTN_LABEL");
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallUrlWithData(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_arc_masking_req_res/', ClientParams)
        .subscribe((res: any) => {
            if (res.data == "SUCCESS" || res.data.status == "SUCCESS") {
                if(res.data.data.type == 'JSON'){
                let Ctrlscope = screenInstance['request_ui'].f_npss_target_request_ui.model;
                let Ctrlscope1 = screenInstance['response_ui'].f_npss_target_response_ui.model;
               Ctrlscope.REQUEST_DATA_JSON = res.data.data.requestjson || ''
                Ctrlscope1.RESPONSE_DATA_JSON = res.data.data.responsejson || ''    
                }else{
                     let controls = screenInstance['message_detail_ui'].f_npss_message_data_ui.model;
                      controls.MESSAGE_DATA = res.data.data.requestjson || ''
                }
                
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
            } else {
                this.dialogHelper.ShowInfoDialog(res.data.status);

            }
        });
}
}