
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
import { CoreService } from '../../scripts/fx/core.service'; 
@Injectable()
export class npss_cs_rev_get_usable_balanceService {
    constructor( private httpHelper: HttphelperService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private coreHelper: CoreService,
        public dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_rev_get_usable_balance(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
   var ClientParams: any = {}
        ClientParams.CREATED_BY = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "U_ID");
        ClientParams.CREATED_BY_NAME = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "LOGIN_NAME");
      
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID");
        ClientParams.NPSSTPL_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSTPL_ID");
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
          ClientParams.PROD_CODE = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "PRODUCT_CODE");
        ClientParams.AppId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_ID");
        ClientParams.TENANT_ID = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID");
        ClientParams.RULE_CODE = 'NPSS_REVERSE_USABLE_BALANCE'
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
    CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_rev_get_usable_balance/', ClientParams)
            .subscribe((res: any) => {
                var event:any
                if (res.data.status=="SUCCESS") {
                    //var dat="{  \"status\": \"SUCCESS\",  \"response\": {    \"applicationArea\": {      \"correlationId\": \"string\",      \"countryOfOrigin\": \"AE\",      \"transactionDateTime\": \"25-Jun-2019T12:30:45AM\",      \"transactionId\": \"A91225DDFGH\",      \"senderId\": \"FABMW\",      \"transactionTimeZone\": \"\"    },    \"responseStatus\": {      \"status\": \"SUCCESS\",      \"statusMessage\": \"SUCCESS\",      \"errorDetails\": [        {          \"errorCode\": \"SYS001\",          \"errorDesc\": \"Errormessage\"        }      ],      \"metaData\": {        \"dateFormat\": \"string\"      }    },    \"dataArea\": {      \"customerNumber\": \"\",      \"customerName\": \"ImranMalik\",      \"postingRestrictCode\": \"91\",      \"accountBlockCode\": \"\",      \"isInactive\": \"N\",      \"signature\": \"string\",      \"mandate\": \"string\",      \"signeeName\": \"ImranMalik\",      \"signeeType\": \"string\",      \"description\": \"string\",      \"signExpiryDate\": \"2022-12-16\",      \"usableBalance\": 8500,      \"workingBalance\": 8000,      \"raAccountBalance\": \"8000\"    }  }}";
                   //var dat ="{\n  \"status\": \"SUCCESS\",\n  \"response\": {\n    \"applicationArea\": {\n      \"correlationId\": \"string\",\n      \"countryOfOrigin\": \"AE\",\n      \"transactionDateTime\": \"25-Jun-2019T12:30:45AM\",\n      \"transactionId\": \"A91225DDFGH\",\n      \"senderId\": \"FABMW\",\n      \"transactionTimeZone\": \"\"\n    },\n    \"responseStatus\": {\n      \"status\": \"SUCCESS\",\n      \"statusMessage\": \"SUCCESS\",\n      \"errorDetails\": [\n        {\n          \"errorCode\": \"SYS001\",\n          \"errorDesc\": \"Errormessage\"\n        }\n      ],\n      \"metaData\": {\n        \"dateFormat\": \"string\"\n      }\n    },\n    \"dataArea\": {\n      \"customerNumber\": \"\",\n      \"customerName\": \"ImranMalik\",\n      \"postingRestrictCode\": \"91\",\n      \"accountBlockCode\": \"\",\n      \"isInactive\": \"N\",\n      \"signature\": \"string\",\n      \"mandate\": \"string\",\n      \"signeeName\": \"ImranMalik\",\n      \"signeeType\": \"string\",\n      \"description\": \"string\",\n      \"signExpiryDate\": \"2022-12-16\",\n      \"usableBalance\": 8500,\n      \"workingBalance\": 8000,\n      \"raAccountBalance\": \"8000\"\n    }\n  }\n}";
                   // var dat1=JSON.stringify(dat);
                   var dat =res.data.data;
                   var dat1 =dat.replace(/(\n)/g,"")
                  // var t=s.replace(/(\n)/g,"")
                var e=JSON.parse(dat1)
                  //event = { eventId: "custom-connector", param: res.data.data, internals: internals }
                  event = { eventId: "custom-connector", param: e, internals: internals }
                    screenInstance["get_usable_balance_widget"].onChangecomponent.emit(event);
                  
                }  else if (res.data.status == 'No Rule Code Found' || res.data == 'No Rule Code Found') {
                    this.dialogHelper.ShowErrorDialog('No Rule Code Found')

                } else if (res.data.status == 'No Data found in System Setup table' || res.data == 'No Data found in System Setup table') {
                    this.dialogHelper.ShowErrorDialog('"No Data found in System Setup table')

                }
                else if (res.data.status == 'No Data found in Transaction table' || res.data == 'No Data found in Transaction table') {
                    this.dialogHelper.ShowErrorDialog('No Data found in Transaction table')

                }
                else if (res.data.status == 'No Data found in accounts table' || res.data == 'No Data found in accounts table') {
                    this.dialogHelper.ShowErrorDialog('No Data found in accounts table')

                }
                else if (res.data.status == 'No Data found in workflow table' || res.data == 'No Data found in workflow table') {
                    this.dialogHelper.ShowErrorDialog('No Data found in workflow table')

                }
                else {
                     event = { eventId: "custom-connector", param: "", internals: internals }
                    screenInstance["get_usable_balance_widget"].onChangecomponent.emit(event);
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