import { Injectable } from '@angular/core';
//Uncomment below lines when it is   required
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
export class npss_cs_manual_verification_bind_dataService {
    constructor(private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_manual_verification_bind_data(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        var ClientParams: any = {}
        ClientParams.uetr =  this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_UETR");     
         ClientParams.TranId =  this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID");
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallUrlWithData(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_manual_verification_bind_data/', ClientParams)
        .subscribe((res: any) => {
            if (res.data.status == "SUCCESS" || res.data == "SUCCESS") {
                var CtrlScope1 = screenInstance['get_deal_ui'].f_npss_mi_get_deal_ui.model
                if(res.data.data.length > 0){
                    if(res.data.errocode == 'spl'){
                    CtrlScope1.memory58 = res.data.data[0].buy_margin || ''
                    CtrlScope1.memory59 = res.data.data[0].buy_rate || ''
                    }else{
                    CtrlScope1.BUY_CURRENCY = res.data.data[0].buy_currency || ''
                    CtrlScope1.SELL_CURRENCY = res.data.data[0].sell_currency || ''
                    CtrlScope1.CONTRA_AMOUNT = res.data.data[0].contra_amount || ''
                    CtrlScope1.DEALT_AMOUNT = res.data.data[0].dealt_amount || ''   
                    CtrlScope1.memory58 = res.data.data[0].gm_margin || ''
                    CtrlScope1.memory59 = res.data.data[0].exchange_rate || ''
                    }
                   
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }else{
                    CtrlScope1.memory58 = ''
                    CtrlScope1.memory59 =  ''
                    CtrlScope1.BUY_CURRENCY = ''
                    CtrlScope1.SELL_CURRENCY = ''
                    CtrlScope1.CONTRA_AMOUNT = ''
                    CtrlScope1.DEALT_AMOUNT = ''
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                }
               
            } else {                 
                   this.dialogHelper.ShowErrorDialog(res.data.status)                               
            }
        });
}
}