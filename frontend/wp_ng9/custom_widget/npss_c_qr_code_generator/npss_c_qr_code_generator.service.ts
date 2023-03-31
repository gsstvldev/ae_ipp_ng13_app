
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { LoaderService } from '../../scripts/fx/loader.service'; // Loader box appear for form loader  view
import * as moment from 'moment-timezone';
                        
@Injectable()
export class npss_c_qr_code_generatorService {
    modelview:any
  qrvalue:any
  payorview:any
    constructor() { }
    //Default calling function
    fn_npss_c_qr_code_generator(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        this.modelview =screenInstance["payee_information"].f_npss_merchant_payment_type_qr_ui.model
        this.payorview =screenInstance["payor_information"].f_npss_merchant_qr_ui.model
        let invoicedate =  this.modelview.VALUE_DATE
        let refno = this.modelview.REMARKS
        let Amount = this.modelview.INTRBK_STTLM_AMNT
        let mercname = this.payorview.MERCHANT_NAME
        let merctag = this.payorview.MERCHANT_TAG
        let json='{';
      let pipe=''
      let pipewotag=''
      if(invoicedate){
        let data = moment(invoicedate).format('YYYY-MM-DD')
        json+=` "invoicedate":${data},`  //for json format
        pipe+=` "invoicedate":${data}|` //for pipe without tag
        pipewotag+=`${data}|`
 
       }
       if(refno){
        json+=` "refno":${refno},`
        pipe+=` "refno":${refno}|`
        pipewotag+=`${refno}|`
       }
       if(Amount){
        json+=` "amount":${Amount},`
        pipe+=` "amount":${Amount}|`
        pipewotag+=`${Amount}|`
       }
    
      if(mercname){
        json+=` "mercname":${mercname}`
        pipe+=` "mercname":${mercname}`
        pipewotag+=`${mercname}`
       }
       if(merctag){
        json+=` "merctag":${merctag}`
        pipe+=` "merctag":${merctag}`
        pipewotag+=`${merctag}`
       }
     
     
       
       this.qrvalue= pipewotag;
      //this.qrvalue= json+'}';
        
        //invoicedate.concat( |",refno,"|",Amount,"|",mercname)
        var event = {eventId: "custom-connector", param:this.qrvalue}
        screenInstance["npss_qr_widget"].onChangecomponent.emit(event)
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
}