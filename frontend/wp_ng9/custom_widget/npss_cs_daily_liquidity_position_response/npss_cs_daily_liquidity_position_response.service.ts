import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
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

@Injectable()
export class npss_cs_daily_liquidity_position_responseService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_daily_liquidity_position_response(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        let ClientParams: any = {};

        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSCAPL_ID");
        ClientParams.eligible_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
        ClientParams.eligible_process_status = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
        this.CallUrlWithData(ClientParams, screenInstance, internals, status)

    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlWithData(ClientParams, screenInstance, internals, status) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_daily_liquidity_position_response/', ClientParams)
            .subscribe((res: any) => {
                if (res.data == "SUCCESS" || res.data.status == 'SUCCESS') {
                    var event: any
                    if (status == "API_SUCCESS") {
                        if (res.data.status == "SUCCESS") {
                          var responsearray = res.data.data
                            try{
                               
                               var formatarray = []
                                var data = JSON.parse(responsearray)
                                if(Array.isArray(data)){
                                    formatarray = data
                                }else{
                                    formatarray.push(data)
                                }
                            }catch(error){
                                this.dialogHelper.ShowInfoDialog('Invalid Json Format')
                            }
                           

                            event = { eventId: "custom-connector", param: formatarray, case: 'success', internals: internals }
                            screenInstance["response"].onChangecomponent.emit(event)
                           
                        }
                    }
                    else if (status == "API_FAILURE") {
                        event = { eventId: "custom-connector", param: res.data.data, case: 'failure', internals: internals }
                        screenInstance["response"].onChangecomponent.emit(event)

                    } else {

                        event = { eventId: "custom-connector", param: '', case: 'nothing', internals: internals }
                        screenInstance["response"].onChangecomponent.emit(event)

                    }
                } else {
                    this.dialogHelper.ShowInfoDialog(res.data.status)
                }
            });

    }
    showerrormsg() {
        this.dialogHelper.ShowErrorDialog('No Data in Table');
    }
}