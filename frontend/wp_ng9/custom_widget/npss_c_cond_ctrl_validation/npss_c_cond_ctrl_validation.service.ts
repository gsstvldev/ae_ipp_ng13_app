import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
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
import { DialogService } from '../../scripts/fx/dialog.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router'; // Refresh the screen
@Injectable()
export class npss_c_cond_ctrl_validationService {
    handleFailure = new Subject<any>()
    constructor(
        private handler:AppHandlerService,private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { 
            this.handleFailure.subscribe((data) => {
               // this.refreshMenuItem();
            });
        }
    //Default calling function
    fn_npss_c_cond_ctrl_validation(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
       // if (screenInstance.wftpa_description.includes('outward_transactions_details')) {
           // console.log(parent_source_id)
            let comp_id = this.getCompId(screenInstance) || screenInstance[`comp_id`]|| 'search' 
            let form_name: any = screenInstance[comp_id].form_name
            let ctrl_Scope = screenInstance[comp_id][form_name].model, contains: any = [], empty:any=[],not_eqls: any = [], between: any = [], bt_flag: any = false, ct_flag: any = false, eq_flag: any = false,empty_flag:any=false
            let cltr_Scope_obj = Object.keys(ctrl_Scope)
            let ctrls_name: any = Object.keys(screenInstance[comp_id][form_name].controls)
            
            for (let i = 0; i < cltr_Scope_obj.length; i++) {
                let ctrl_name = ctrls_name.filter((val) => {
                    return val.toLowerCase() == cltr_Scope_obj[i] || val.toUpperCase() == cltr_Scope_obj[i]
                })
                if ((screenInstance[comp_id][form_name].controls[ctrl_name.toString()].data_type=='DATETIME')) {
                    if (ctrl_Scope[cltr_Scope_obj[i]]?.operator?.toLowerCase() == 'between') {
                        if (this.getDays(ctrl_Scope[cltr_Scope_obj[i]]) > 7) {
                            
                          //  console.log()
                            
                            if (ctrl_name!=undefined) {
                                between.push(screenInstance[comp_id][form_name].controls[ctrl_name.toString()].label_name)
                                bt_flag = true
                            }

                        }
                    }
                     if(ctrl_Scope[cltr_Scope_obj[i]]?.value==null && !ctrl_Scope[cltr_Scope_obj[i]]?.toString()?.includes('set'))  //&& ctrl_Scope[cltr_Scope_obj[i]]?.operator==""
                    {
                        empty.push(screenInstance[comp_id][form_name].controls[ctrl_name.toString()].label_name)
                        
                        empty_flag = true
                    }
                    empty=[...new Set(empty)]


                }
                else {
                    if (ctrl_Scope[cltr_Scope_obj[i]]?.operator?.toLowerCase() == 'contains') {
                        
                      //  console.log(screenInstance[comp_id][form_name].controls[ctrl_name.toString()])
                        //console.log(ctrl_name)
                        if (ctrl_name!=undefined) {
                            contains.push(screenInstance[comp_id][form_name].controls[ctrl_name.toString()].label_name)
                            ct_flag = true
                        }
                    }
                    else if (ctrl_Scope[cltr_Scope_obj[i]]?.operator?.toLowerCase() == 'notequal') {
                        
                       // console.log(screenInstance[comp_id][form_name].controls[ctrl_name.toString()])
                        //console.log(ctrl_name)
                        if (ctrl_name!=undefined) {
                            not_eqls.push(screenInstance[comp_id][form_name].controls[ctrl_name.toString()].label_name)
                            eq_flag = true
                        }

                    }

                }
            }
          //  let source_id=parent_source_id
            let info_msg: any = ''
            if (bt_flag) {
                info_msg = 'The following Date selection exceeded <b> more than 7 Days</b><br><ol>'
                for (let i = 0; i < between.length; i++) {
                    info_msg += `&nbsp&nbsp &nbsp<li>${ between[i].split('_').join(' ').toString()}</li>` //i + 1 + '. ' +
                }
            }
            if (ct_flag) {
                //console.log(`entered ct flag`)
                info_msg += '</ol>The following controls selected as <b>Contains option</b> is restricted by bank <ol>'
                for (let i = 0; i < contains.length; i++) {
                    info_msg += `&nbsp&nbsp &nbsp<li>${ contains[i].split('_').join(' ').toString()}</li>` //i + 1 + '. ' +
                }
                info_msg+=` </ol> Please select other option.`
            }
            if (eq_flag) {
                //console.log(`entered eq flag`)
                info_msg += `<br>The following controls selected as <b> Not Equal </b> to option is restricted by bank<ol>`
                for (let i = 0; i < not_eqls.length; i++) {
                    info_msg += `&nbsp&nbsp &nbsp<li>${not_eqls[i].split('_').join(' ').toString()}</li>` //i + 1 + '. ' +

                }
                info_msg+=`</ol>Please select other option`
            }
            if(empty_flag)
            {
                info_msg += `<br> Date should not be Empty in following Controls<ol>` 
                for (let i = 0; i < empty.length; i++) {
                    info_msg += `&nbsp&nbsp &nbsp<li>${ empty[i].split('_').join(' ').toString()}` //i + 1 + '. ' +
                }
                info_msg+=`</ol`
            }
            if (info_msg == '') {
                

        /* let destn_id=""
        let parent_source_id="" 
        let event_code="e_1708327611591"
        let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_from_search_btn","event_desc":"CP From Search Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
        let handler_code="close_popup"
        let internals=""
        let event_data={}
        let data_source={}
  this.handler.close_popup(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source) */
                this.appHandler.callInternals(internals, screenInstance, "SUCCESS")
            }
            else {
                console.log(info_msg)
                let params:any={
                    content: `${info_msg}`,
                            title: 'Error',
                            handleclick: this.handleFailure
                }
                
                this.dialogHelper.ShowErrorDialog(params)
                this.appHandler.callInternals(internals, screenInstance, "FAILURE")
            }

        //}
        /* else {
            this.appHandler.callInternals(internals, screenInstance, "SUCCESS")
        } */
    }
    getDays(ctrl_Scope: any) {

        let start_Date, end_Date, time_Difference, Difference_In_Days
        start_Date = ctrl_Scope.value
        end_Date = ctrl_Scope.tovalue
        time_Difference = (start_Date.getTime() > end_Date.getTime()) ? start_Date.getTime() - end_Date.getTime() : end_Date.getTime() - start_Date.getTime()
        Difference_In_Days =
            Math.round
                (time_Difference / (1000 * 3600 * 24));
        return Difference_In_Days
    }
    getCompId(screenInstance)
    {
        let search_keys:any=[]
        search_keys= Object.keys(screenInstance).filter((val)=>
        {
            return val.toLowerCase().includes('search')
        })
        let index:any=search_keys.findIndex((val)=>
        {
            return screenInstance[val]?.current_view!=undefined || screenInstance[val]?.current_view!=null
        })
        
        return search_keys[index].toString()
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}