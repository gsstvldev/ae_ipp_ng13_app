
import { Injectable } from '@angular/core';
import { CoreService } from '../../scripts/fx/core.service';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
                        
@Injectable()
export class torus_cs_power_bi_reportsService {
    constructor(private coreService: CoreService) { }
    //Default calling function
    fn_torus_cs_power_bi_reports(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source){
    let selectedRow = this.coreService.get_selected_item(parent_source_id, event_params, source_id, screenInstance);
        let currentReportUrl = selectedRow.reports_url;
        screenInstance['power_reports_dashboard'].onChangecomponent.emit(currentReportUrl)
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
}