// Handling SINGLE action Mode if selected  item length is 1 // Enable component while enable btn com name special char handling
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http' ;
//import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttphelperService } from '../../scripts/fx/httphelper.service';
import { CoreService } from '../../scripts/fx/core.service';
import { SessionService } from '../../scripts/fx/session.service';
import { AppHandlerService } from '../../scripts/fx/app.handler.service';
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
@Injectable()
export class npss_cs_communication_send_outward_ipp_payment_ntfService {
    constructor(private httpHelper: HttphelperService, private CoreSvc: CoreService, private appHandler: AppHandlerService,
        private SessionSvc: SessionService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_communication_send_outward_ipp_payment_ntf(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let ClientParams: any = {
            "roleId": this.SessionSvc.GetVariable('SESSION_LEVEL', 'APP_USER_ROLES'),
            "screenName": this.SessionSvc.GetVariable('SESSION_LEVEL', 'MENU_ITEM_CODE'),
            "TrnId": this.CoreSvc.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSNL_ID")||''

        }
        this.GetDataFromDb(ClientParams, screenInstance,internals)

    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    GetDataFromDb(ClientParams, screenInstance,internals) {
      
            this.httpHelper.HttpPost('/microsvc/npss_cs_communication_send_outward_ipp_payment_ntf/', ClientParams)
                .subscribe((res: any) => {
                    if (res.data.status == 'SUCCESS') {
                        this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                    }else{
                        this.dialogHelper.ShowInfoDialog(res.data.msg);
                    }

                })
        
    }
}