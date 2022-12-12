
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
@Injectable()
export class npss_cs_show_table_viewService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_show_table_view(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let ClientParams: any = {};
        var Ctrlscope = screenInstance['payment_search'].f_created_date_srch.model
        //ClientParams.Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSCAPL_ID") || '';
        ClientParams.datefromValue = this.convertDate(Ctrlscope.memory7.value)
        ClientParams.datetoValue = this.convertDate(Ctrlscope.memory7.tovalue)
        ClientParams.dateop = Ctrlscope.memory7.operator
        this.CallUrlforGetparamvalue(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    convertDate(datec) {
        if (datec) {
            var date = new Date(datec);
            // Get year, month, and day part from the date
            var year = date.toLocaleString("default", { year: "numeric" });
            var month = date.toLocaleString("default", { month: "2-digit" });
            var day = date.toLocaleString("default", { day: "2-digit" });
            var tz = "T00:00:00.000Z"
            var formattedDate = year + "-" + month + "-" + day + tz;
            return formattedDate;
        }
        else {
            return '';
        }
    }




    CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_show_table_view/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS") {                   
                    var responsearray = res.data.data
                    var formatarray = []
                    for (let i = 0; i < responsearray.length; i++) {
                        var data = JSON.parse(responsearray[i])
                        var overall = {}
                        for (let j in data) {
                            
                           
                            if (typeof data[j] == 'object') {
                                for (let k in data[j]) {
                                    overall[k] = data[j][k]
                                }
                            } else {
                                overall[j] =data[j]
                            }
                           
                        }
                        formatarray.push(overall)
                    }

                    var event = { eventId: "custom-connector", param: formatarray, internals: internals }
                    screenInstance["npss_show_table_view_cw"].onChangecomponent.emit(event)
                } else {
                    this.dialogHelper.ShowErrorDialog('No Data in Table');
                    this.appHandler.callInternals(internals, screenInstance, "FAILURE");
                }
            });
    }
}