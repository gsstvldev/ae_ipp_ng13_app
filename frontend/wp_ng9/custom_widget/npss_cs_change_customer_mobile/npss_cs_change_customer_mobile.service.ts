
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
export class npss_cs_change_customer_mobileService {
    constructor(private httpHelper: HttphelperService,
    private appHandler: AppHandlerService,
   private sessionHelper: SessionService,
   private coreHelper: CoreService,
   public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_change_customer_mobile(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let ClientParams: any = {};
        
        let mobile=screenInstance["customer_detail"].f_npss_customer_proxy_ui.model.MOBILE; 
        let channel_id=screenInstance["customer_detail"].f_npss_customer_proxy_ui.model.CHANNEL_ID; 
        let bankUserId=screenInstance["customer_detail"].f_npss_customer_proxy_ui.model.BANKUSERID; 
        ClientParams.mobile=mobile;
        ClientParams.channel_id=channel_id;
        ClientParams.bankUserId=bankUserId;
        ClientParams.TenantId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID")
        
        

        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }

    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_change_customer_mobile/', ClientParams)
            .subscribe((res: any) => {
                console.log("Change Mobile Number Server Response", res);
                var event
                if(res.data.status == 'SUCCESS'){ 
                            
                    event = { eventId: "custom-connector", param:res.data.data , idename:"Changemobile", internals: internals }
                screenInstance["customer_setup_widget"].onChangecomponent.emit(event);
            } else {
                this.dialogHelper.ShowInfoDialog(res.data.status)
               
            }
            });
    }
    }

    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
