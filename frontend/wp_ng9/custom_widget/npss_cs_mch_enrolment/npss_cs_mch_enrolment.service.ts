
import { Injectable } from '@angular/core';
//Uncomment below lines when it is     required
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
export class npss_cs_mch_enrolmentService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_mch_enrolment(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let ClientParams: any = {};
        var CtrlScope = screenInstance['merchant_detail'].f_npss_merchant_ui.model;
        var CtrlScope_acc = screenInstance['account__detail'].f_npss_mer_account_ui.model;
        var CtrlScope_shop = screenInstance['shop_detail'].f_npss_shop_ui.model;
        ClientParams = {
            "channelId": CtrlScope.CHANNEL_ID,
            "bankUserId": CtrlScope.BANKUSERID,
            "merchant_name": CtrlScope.MERCHANT_NAME,
            "surname": CtrlScope.SURNAME,
            "denomination": CtrlScope.DENOMINATION,
            "vat_number": CtrlScope.VAT_NUMBER,
            "mcc": CtrlScope.MCC,
            "mobile": CtrlScope.MOBILE,
            "proxy_type": CtrlScope.PROXY_TYPE,
            "proxy_value": CtrlScope.PROXY_VALUE,
            "channel_name": CtrlScope.CHANNEL_NAME,
            "merchant_tag": CtrlScope.MERCHANT_TAG,
            "logo": CtrlScope.LOGO,
            "IBAN": CtrlScope_acc.IBAN,
            "currency": CtrlScope_acc.CURRENCY,
            "shop_name": CtrlScope_shop.SHOP_NAME,
            "shop_mid": CtrlScope_shop.SHOP_MID,
            "shop_type": CtrlScope_shop.SHOP_TYPE,
            "shop_mcc": CtrlScope_shop.SHOP_MCC,
            "shop_IBAN": CtrlScope_shop.SHOP_IBAN,
            "building": CtrlScope_shop.BUILDING,
            "street": CtrlScope_shop.STREET,
            "city": CtrlScope_shop.CITY,
            "postal_code": CtrlScope_shop.POSTAL_CODE,
            "county": CtrlScope_shop.COUNTY,
            "country": CtrlScope_shop.COUNTRY,
            "shop_id": CtrlScope_shop.SHOP_ID


        }
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_mch_enrolment/', ClientParams)
            .subscribe((res: any) => {
                var event

                if (res.data.status == 'SUCCESS') {

                    event = { eventId: "custom-connector", param: res.data.data, idename: "Merchantenrolment", internals: internals }

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