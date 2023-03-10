import { Injectable } from '@angular/core';
//Uncomment below lines when it is  required
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
export class npss_cs_check_uetrService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_check_uetr(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var UETR = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_LOCAL_UETR");
        if (Array.isArray(UETR)) {
            if (UETR.length > 0) {
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
            }else{
                this.appHandler.callInternals(internals, screenInstance, "FAILURE");  
            }
        } else {
            if (UETR == '') {
                this.appHandler.callInternals(internals, screenInstance, "FAILURE");
            } else {
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
            }
        }
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}