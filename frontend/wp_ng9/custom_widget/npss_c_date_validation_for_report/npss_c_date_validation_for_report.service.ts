
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
                        
@Injectable()
export class npss_c_date_validation_for_reportService {
    constructor() { }
    //Default calling function
    fn_npss_c_date_validation_for_report(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    console.log('linked')
    }
    //Custom validation logics
   // Uncomment below lines when validation is required
    fn_customValidation(projName,screenInstance,message,callback){
        return callback(message,{"MESSAGE_KEY":"SUCCESS","STATUS":"SUCCESS"});
    }
//Service logics
}