// Handling SINGLE action Mode if selected  item length is 1 // Enable component while enable btn com name special char handling
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http' ;
//import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttphelperService } from '../../scripts/fx/httphelper.service';
import { CoreService } from '../../scripts/fx/core.service';
import { SessionService } from '../../scripts/fx/session.service';
import { AppHandlerService } from '../../scripts/fx/app.handler.service';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
                        
@Injectable()
export class torus_cs_change_routingkeyService {
    MiLevelStatus: string
    MiLevelProcessStatus: string
    MiLevelActionMode: string
    Internals: string
    selectedItems: []
    CurRoleId:string
    CurModuleId:string
    CurMenuGroupId:string
    CurMenuItemId:string
    screenName:string
    constructor( private httpHelper: HttphelperService,
        private CoreSvc: CoreService,
        private SessionSvc: SessionService,
        private AppHandler: AppHandlerService) { }
    //Default calling function
    fn_torus_cs_change_routingkey(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
    
        setTimeout(() => {
            this.selectedItems = this.CoreSvc.get_selected_items(parent_source_id, event_params, source_id, screenInstance)
            this.MiLevelStatus = this.CoreSvc.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
            this.MiLevelProcessStatus = this.CoreSvc.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
            this.MiLevelActionMode = this.CoreSvc.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_ACTION_MODE");
            this.CurRoleId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'APP_USER_ROLES')
            this.CurModuleId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'CURRENT_MODULE_NAME')      
            this.CurMenuGroupId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'MENU_GROUP')      
            this.CurMenuItemId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'MENU_ITEM')  
            this.screenName = this.SessionSvc.GetVariable('SESSION_LEVEL', 'MENU_ITEM_CODE')    
            this.Internals = internals
              let appLists = JSON.parse(this.SessionSvc.GetVariable('SESSION_LEVEL', 'APPSYS')).Applications
              let CurrentAppId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'APP_ID')
              var curapp = appLists.filter(value => {
                return value.app_id == CurrentAppId
              })
              let curAppCode = curapp[0].app_code
              let ClientParams: any = {
                "AppCode": curAppCode,
                "roleid":this.CurRoleId,
                "screenname": this.screenName
              }
              this.GetDataFromDb(ClientParams, screenInstance)
            
          })
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
GetDataFromDb(ClientParams, screenInstance) {
    try {
      this.httpHelper.HttpPost('/microsvc/torus_cs_show_hide/', ClientParams)
        .subscribe((res: any) => {
         
            if (res.data.datafile) {
              let Rows = res.data.datafile;            
              this.setRoutingKey(Rows, screenInstance);
              this.AppHandler.callInternals(this.Internals, screenInstance, "SUCCESS");
            }
          
        })
    } catch (error) {

    }
  }

  setRoutingKey(Rows, screenInstance) {
 
    var Jsonobj = {}
    for (let i = 0; i < Rows.length; i++) {
      if(Rows[i]['routing_key_name'] == null || Rows[i]['routing_key_name'] == ''){
        continue;
      }else{
        Jsonobj[Rows[i]['ui_component_name']] = Rows[i]['routing_key_name']
      }
     
    }
   
    this.SessionSvc.SetVariable('MI_LEVEL', 'CONTROLID', Jsonobj);
  }



}