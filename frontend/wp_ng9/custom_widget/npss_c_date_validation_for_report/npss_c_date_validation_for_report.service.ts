import { Injectable } from '@angular/core';
import { CoreService } from '../../scripts/fx/core.service';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
                       
@Injectable()
export class npss_c_date_validation_for_reportService {
    constructor(private coreHelper: CoreService) { }
    //Default calling function
    fn_npss_c_date_validation_for_report(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    console.log('linked')
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    fn_customValidation(projName,screenInstance,message,callback){
        let comp_id:any='search'
        
        let form_name=screenInstance[comp_id].form_name
        let cltr_scope=screenInstance[comp_id.toString()][form_name].model,cvResult:any={}
        
     let date:any
     date  =Object.keys(cltr_scope).filter((val)=>
        {
            return val.toLowerCase().includes('date')
        })
        date.push('memory63')
        for(let i=0;i<date.length;i++)
        
        {
            if((cltr_scope[date[i]].value==null || cltr_scope[date[i]].tovalue==null)&& cltr_scope[date[i]].operator.toLowerCase()!="between")
            {
                cvResult.STATUS="FAILURE"
                cvResult.MESSAGE_KEY="DT_NULL"
                return callback(message,cvResult)
            }
            else{
                let start_Date:any,end_Date:any,time_Difference,Difference_In_Days:any
                //date=date_Val.split('-')
                start_Date=cltr_scope[date[i]].value
                end_Date=cltr_scope[date[i]].tovalue
                time_Difference=(start_Date.getTime()>end_Date.getTime())?start_Date.getTime()-end_Date.getTime(): end_Date.getTime()-start_Date.getTime()
                 Difference_In_Days =
            Math.round
                (time_Difference / (1000 * 3600 * 24));
                if(Difference_In_Days<=7)
                {cvResult.STATUS="SUCCESS"
                cvResult.MESSAGE_KEY="SUCCESS"
                   
                }
                else{
                    cvResult.STATUS="FAILURE"
                cvResult.MESSAGE_KEY="GT_10_D"
            //    break
            return callback(message,cvResult)
                }
               
       
            }
        }
        console.log(cvResult)
        return callback(message,cvResult);
        //return callback(message,cvResult)
       
       
    }
//Service logics
}