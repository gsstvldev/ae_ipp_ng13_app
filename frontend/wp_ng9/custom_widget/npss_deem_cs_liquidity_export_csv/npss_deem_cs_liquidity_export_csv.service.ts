
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
                        
@Injectable()
export class npss_deem_cs_liquidity_export_csvService {
    constructor() { }
    //Default calling function
    fn_npss_deem_cs_liquidity_export_csv(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    console.log('csv linked')
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
}