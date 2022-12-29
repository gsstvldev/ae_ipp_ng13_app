
import { Injectable } from '@angular/core';
//Uncomment below lines when it is    required
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
export class npss_cs_shop_updateService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_shop_update(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
  var ClientParams: any = {}
        var CtrlScope = screenInstance["merchant_detail"].f_npss_merchant_ui.model
        var CtrlScope1 = screenInstance["shop_detail"].f_npss_shop_ui.model 
        ClientParams={
                  'channelId':CtrlScope.CHANNEL_ID,
                   'bankUserId':CtrlScope.BANKUSERID,
                   'merchant_tag':CtrlScope.MERCHANT_TAG,
                   'shopId':CtrlScope1.SHOP_ID,
                   'label':CtrlScope1.SHOP_NAME,
                   'shopMId':CtrlScope1.SHOP_MID,
                   'shopMcc':CtrlScope1.SHOP_MCC,
                   'building':CtrlScope1.BUILDING,
                   "postalCode":CtrlScope1.POSTAL_CODE,
                   'street':CtrlScope1.STREET,
                   'city':CtrlScope1.CITY,
                   'County':CtrlScope1.COUNTY,
                   'Country':CtrlScope1.COUNTRY

        }
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParam, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_shop_update/', ClientParam)
        .subscribe((res: any) => {
            var event;
            if (res.data.status == 'SUCCESS') {

                event = { eventId: "custom-connector", param: res.data.data, idename: "Updateshop", internals: internals }

                screenInstance["merchant_setup_widget"].onChangecomponent.emit(event);
            }
            else {
                this.dialogHelper.ShowInfoDialog(res.data.status)
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