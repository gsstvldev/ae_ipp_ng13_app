import { Injectable } from '@angular/core';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
                        
@Injectable()
export class npssp_cs_acceptService {
    constructor(private httpHelper: HttphelperService,
         private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npssp_cs_accept(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
     var MsgId = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_MSG_ID') || ''
        var uniqueId = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", 'MI_LEVEL_UNIQUE_ID') || ''
        var ClientParams = {
            'Id' : MsgId,
            'unique_Id':uniqueId
        }
        this.CallApiManagerTbl(ClientParams, internals, screenInstance)
    }
    CallApiManagerTbl(ClientParams, internals, screenInstance) {
    this.httpHelper.HttpPost('/microsvc/npssp_cs_accept/', ClientParams)
        .subscribe((res: any) => {
            var event
            if (res.data.status == "SUCCESS") {
                //screenInstance.payment_form_action_verify_recipient_iban.show =  false
                //screenInstance.payment_form_action_accept.show = true
                 this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
              }else if(res.data.status == "FAILURE") {
                 event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg: 'No Data Found',case:'failure' }
                  screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            } else {
                 event = { eventId: "custom-connector", param: ClientParams, internals: internals,errormsg:res.data.status.statuscode +'-'+res.data.status.outcome + '- '+res.data.status.errorMsg,case:'failure' }
                  screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
            }
        })
}
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
}