
 
 
import { Injectable } from '@angular/core';
import { CoreService } from '../../scripts/fx/core.service';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { npss_c_cond_ctrl_ui_validationComponent } from './npss_c_cond_ctrl_ui_validation.component';
                       
@Injectable()
export class npss_c_cond_ctrl_ui_validationService {
    constructor(private coreHelper: CoreService) { }
    //Default calling function
    fn_npss_c_cond_ctrl_ui_validation(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    console.log('linked')
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    fn_customValidation(projName,screenInstance,message,callback){
        
        let comp_id:any='search'
        let form_name=screenInstance[comp_id].form_name
        let cltr_scope=screenInstance[comp_id][form_name].model,cvResult:any={}
        
     let cond_op:any
     cond_op =Object.keys(cltr_scope).filter((val)=>
        {
            return !(val.toLowerCase().includes('date') || val.toLowerCase().includes('memory63'))
        })
        for(let i=0;i<cond_op.length;i++)
        {
    
        
            if(cltr_scope[cond_op[i]]?.operator?.toLowerCase().includes('contains') || cltr_scope[cond_op[i]]?.operator?.toLowerCase().includes('notequals'))
            {
                cvResult={status:"FAILURE",MESSAGE_KEY:"NT_EQLS"}
               break
               // return callback(message,{status:"FAILURE",MESSAGE_KEY:"NT_EQLS"});
   
            }
            else{
                cvResult={status:"SUCCESS",MESSAGE_KEY:"SUCCESS"}
   
            }
           
        }
        //if(cvResult.status=="SUCCESS")
        console.log(cvResult)
        return callback(message,cvResult);
       
       
    }
//Service logics
}