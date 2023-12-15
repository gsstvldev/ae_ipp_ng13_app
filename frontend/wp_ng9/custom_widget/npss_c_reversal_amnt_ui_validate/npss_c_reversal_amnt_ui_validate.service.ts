
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { CoreService } from '../../scripts/fx/core.service';

@Injectable()
export class npss_c_reversal_amnt_ui_validateService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_c_reversal_amnt_ui_validate(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {

    }
    fn_customValidation(projName, screenInstance, message, callback) {
        let cvResult: any = {};
        let original_amnt = screenInstance["initate_ui"].f_npss_op_reversal_ui.model.INTRBK_STTLM_AMNT;
        console.log(`-----------------------------orig${original_amnt}`)
        let reversal_amnt = screenInstance["initate_ui"].f_npss_op_reversal_ui.model.REVERSAL_AMOUNT;
        console.log(`-----------------------------reversal${reversal_amnt}`)
        let reversal_code = screenInstance["initate_ui"].f_npss_op_reversal_ui.model.memory87;
        if (Number(original_amnt) >= Number(reversal_amnt)) {
            if (reversal_code) {
                cvResult.MESSAGE_KEY = "RA_PS";
                cvResult.STATUS = "SUCCESS"
                return callback(message, cvResult);
            } else {
                cvResult.MESSAGE_KEY = "RFV";
                cvResult.STATUS = "FAILURE";
                return callback(message, cvResult);
            }
        } else {
            cvResult.MESSAGE_KEY = "RA_P";
            cvResult.STATUS = "FAILURE";
            return callback(message, cvResult);
        }
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}