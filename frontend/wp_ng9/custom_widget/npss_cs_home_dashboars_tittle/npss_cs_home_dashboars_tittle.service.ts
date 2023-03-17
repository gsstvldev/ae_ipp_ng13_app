import { Injectable } from '@angular/core';



@Injectable()
export class npss_cs_home_dashboars_tittleService {
    constructor() { }
    //Default calling function
    fn_npss_cs_home_dashboars_tittle(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
      console.log(screenInstance);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}