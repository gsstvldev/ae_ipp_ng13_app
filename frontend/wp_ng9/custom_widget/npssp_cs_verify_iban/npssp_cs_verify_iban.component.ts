
import { Component, OnInit,Input } from '@angular/core';
import { npssp_cs_verify_ibanService } from './npssp_cs_verify_iban.service';
import { DialogService } from "../../scripts/fx/dialog.service"; // Dialog box appear
import { LoaderService } from "../../scripts/fx/loader.service";
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level


@Component({
    selector: 'npssp_cs_verify_iban',
    templateUrl: './npssp_cs_verify_iban.component.html',
    styleUrls: ['./npssp_cs_verify_iban.component.css'],
    providers:[npssp_cs_verify_ibanService]
})
export class npssp_cs_verify_ibanComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    internals: any;
    subscription: Subscription;
    showerrormsg: any
    case: any
    constructor(private _service: npssp_cs_verify_ibanService, private appHandler: AppHandlerService) { }
    ngOnInit() {
        if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                    this.handlechangecomponentevent(event)

                }
            })
        }
    }
    handlechangecomponentevent(event) {
        if (event.eventCode == "clear") {
            if (event.eventId === 'custom-connector') {
                this.case = event.case
                this.showerrormsg = "";
                this.appHandler.callInternals(event.internals, event.screenInstance, "SUCCESS");
            }
        }else{
            if (event.eventId === 'custom-connector') {
                this.case = event.case
                this.showerrormsg = event.errormsg
    
            }
        }
        
    }
}