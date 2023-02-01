import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear

                        
@Injectable()
export class torus_cs_set_rule_mi_paramService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_torus_cs_set_rule_mi_param(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let ClientParams = {}

      
        ClientParams = {
          
            "rule_code":  this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_RULE"),
            "TenantId":  this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "TENANT_ID")
        }
        this.CallUrlWithData(ClientParams, screenInstance, internals);
    }
  CallUrlWithData(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/torus_cs_set_rule_mi_param/', ClientParams)
            .subscribe((res: any) => {
              
                 if(res.data.status == 'SUCCESS'){ 
                
                            var val=res.data.data;
                var k=Object.keys(res.data.data)
                for(let i in k){
                   
                    if(val[k[i]]){
                       
                        this.coreHelper.set_value_to_memory("MEMORY_VARIABLES", "MI_LEVEL_RULE_"+k[i].toUpperCase(),val[k[i]].toUpperCase());
                    } 
                }
                 this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
              }

                
                
         // } 
          else {
              this.dialogHelper.ShowInfoDialog(res.data.data)
             
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