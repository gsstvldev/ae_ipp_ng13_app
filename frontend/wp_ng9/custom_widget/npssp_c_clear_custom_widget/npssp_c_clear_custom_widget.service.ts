
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
                        
@Injectable()
export class npssp_c_clear_custom_widgetService {
    constructor() { }
    //Default calling  function
    fn_npssp_c_clear_custom_widget(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    var event = { eventId: "custom-connector", internals: internals,eventCode:"clear",screenInstance:screenInstance }
    if(screenInstance.wftpa_description == 's_credit_transfer_inward'){
         screenInstance["npss_ip_error_widget"].onChangecomponent.emit(event);
    }else{
         screenInstance["npss_op_error_widget"].onChangecomponent.emit(event);
    }
                 
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
}