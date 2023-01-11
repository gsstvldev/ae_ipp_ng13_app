
import { Injectable } from '@angular/core';
//Uncomment below lines when it is       required
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
   import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
                        
@Injectable()
export class npss_cs_mch_update_personal_dataService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
       private sessionHelper: SessionService,
       private coreHelper: CoreService,
       public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_mch_update_personal_data(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let ClientParams: any = {};
        var CtrlScope = screenInstance['merchant_detail'].f_npss_merchant_ui.model;
           ClientParams={
            "channelId":CtrlScope.CHANNEL_ID,
            "bankUserId":CtrlScope.BANKUSERID,
            "merchant_name":CtrlScope.MERCHANT_NAME,
            "surname":CtrlScope.SURNAME,
            "denomination":CtrlScope.DENOMINATION,
            "vat_number":CtrlScope.VAT_NUMBER,
            "logo":CtrlScope.LOGO,
            "merchant_tag":CtrlScope.MERCHANT_TAG,
            "TenantId" : this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID")
    }
    this.CallUrlWithData(ClientParams, screenInstance, internals);
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
}
CallUrlWithData(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_mch_update_personal_data/', ClientParams)
        .subscribe((res: any) => {
          var event
          if(res.data.status == 'SUCCESS'){ 
                      
              event = { eventId: "custom-connector", param:res.data.data , idename:"Merchantupdatepersonaldata", internals: internals }
          screenInstance["merchant_setup_widget"].onChangecomponent.emit(event);
      } else {
          this.dialogHelper.ShowInfoDialog(res.data.status)
         
      }
        });
}
}