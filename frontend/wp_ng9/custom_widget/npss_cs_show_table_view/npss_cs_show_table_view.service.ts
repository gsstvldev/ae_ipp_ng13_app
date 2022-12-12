
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
    fn_npss_cs_show_table_view(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let ClientParams: any = {};
        ClientParams.Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSSCAPL_ID") || '';
        this.CallUrlforGetparamvalue(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_cs_show_table_view/', ClientParams)
        .subscribe((res: any) => {
            if (res.data.status == "SUCCESS") {           
            //     var removern = res.data.data.replace(/(\\r\\n|\n|\r)/g,"");
            //     var removeline = removern.replace(/(\\)/g,"")
            //    removeline = Object.keys(removeline)  
          
            var removeline =   JSON.parse(res.data.data)
            removeline = removeline['result']
                 var event = { eventId: "custom-connector", param: removeline , internals: internals }
              screenInstance["npss_show_table_view_cw"].onChangecomponent.emit(event)
            } else {
                this.dialogHelper.ShowErrorDialog('Failure');
                this.appHandler.callInternals(internals, screenInstance, "FAILURE");
            }
        });
}
}