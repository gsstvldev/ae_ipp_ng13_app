
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_change_customer_mobileService } from './npss_cs_change_customer_mobile.service';
import { DialogService } from "../../scripts/fx/dialog.service"; // Dialog box appear
import { LoaderService } from "../../scripts/fx/loader.service";
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';

import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level

@Component({
    selector: 'npss_cs_change_customer_mobile',
    templateUrl: './npss_cs_change_customer_mobile.component.html',
    styleUrls: ['./npss_cs_change_customer_mobile.component.css'],
    providers:[npss_cs_change_customer_mobileService]
})
export class npss_cs_change_customer_mobileComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_change_customer_mobileService) { }
     showPopup: boolean = false;
      popuparray = []
     messagearray = []
    subscription: Subscription;
    ngOnInit() {
        if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                    this.loadpopup(event)
                    
                }
            })
        }
    }

    loadpopup(event){
        if(event.param.message){
         var messageobj = {}
            for(let k =0; k < event.param.message.length;k++){
                messageobj = {}
                messageobj['case'] = event.param.message[k]
                this.popuparray.push(messageobj)
            }
            this.showPopup = true
            
        }else{
            var getkeyName = Object.keys(event.param)
           
            this.messagearray.push(event.param)
            var popobj = {}
            for(let i =0; i < this.messagearray.length; i++){
                for(let j=0; j < getkeyName.length; j++){
                    popobj = {}
                    popobj['case'] = `${getkeyName[j]}: ${this.messagearray[i][getkeyName[j]]}`
                    this.popuparray.push(popobj)
                }
            }
            this.showPopup = true
        }
    }
    cancel(){
        this.showPopup = false
      this.popuparray = []
        this.messagearray = []
    }
}