
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { LoaderService } from '../../scripts/fx/loader.service'; // Loader box appear for form loader view
import { Subject } from 'rxjs';
import * as moment from 'moment';
                        
@Injectable()
export class npss_cs_posting_processService {
    constructor(private http: Http, private httpHelper: HttphelperService, private coreHelper: CoreService, private appHandler: AppHandlerService, private sessionHelper: SessionService, private dialogHelper: DialogService, private loaderHelper: LoaderService) { }
    //Default calling function
    fn_npss_cs_posting_process(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let User_Id = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        let TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        let App_Id = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        let User_Name = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
        let System_Id = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_ID");
        let SYSTEM_TYPE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ST_CODE");
        let ROUTING_KEY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "Routing_Key");
        let eli_process = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        let status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        let Product_Code;
       let  RULE_CODE;
        if (App_Id == "3") {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "S_CODE");
        } else {
            Product_Code = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "ROOT_SCODE");
        }
        let code;
        if (Product_Code != null || Product_Code != undefined) {
            code = Product_Code.split('_');
        }
        let Country_Code = code[1].slice(0, 2);
        let client_code = code[1];
        let system = code[0];
        let Batch_Id;
        let Tran_Id;

        let btn_name = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "CURRENT_BTN_LABEL").toUpperCase();
        if(btn_name==="CALL ENQUIRY"){
            RULE_CODE="NPSS_CALL_ENQUIRY";
        }else if(btn_name==="CALL T24"){
            RULE_CODE="NPSS_CALL_T24";
        }else if(btn_name==="CALL CC POSTING"){
            RULE_CODE="NPSS_CALL_CC_POSTING";
        }

       let uetr = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_UETR") || '';
        Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID") || '';
       // Batch_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_RRTGSB_ID") || '';
        let ClientParams: any = {
            "USER_ID": User_Id,
            "USER_NAME": User_Name,
            "SYSTEM_ID": System_Id,
            "PROD_CODE": Product_Code,
            "client_code": client_code,
            "country_code": Country_Code,
            "SYSTEM_TYPE": SYSTEM_TYPE,
            "ELIGIBLE_PROCESS_STATUS": eli_process,
            "ROUTING_KEY": ROUTING_KEY,
            "TENANT_ID": TENANT_ID,
            "RULE_CODE": RULE_CODE,
            "APP_ID": App_Id,
            "STATUS": status,
            "uetr": uetr,
            "tran_id":Tran_Id
           
          //  "CREATED_DATE": screenInstance["search"].f_rrtgs_op_repair_srch.model.memory74.value ? screenInstance["search"].f_rrtgs_op_repair_srch.model.memory74.value : "",
            //"CREATED_DATE_OP": screenInstance["search"].f_rrtgs_op_repair_srch.model.memory74.operator ? screenInstance["search"].f_rrtgs_op_repair_srch.model.memory74.operator : ""


        }

        this.CallDLL(ClientParams, screenInstance, internals);
    }
    CallDLL(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_posting_process/', ClientParams)
            .subscribe((res: any) => {
                if (res.data == "SUCCESS") {
                    this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
                } else {
                    this.appHandler.callInternals(internals, screenInstance, "FAILURE");
                }
            });
    }
    
}