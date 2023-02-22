
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_reversal_initiateService } from './npss_cs_reversal_initiate.service';
import { Subscription } from 'rxjs';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level



@Component({
    selector: 'npss_cs_reversal_initiate',
    templateUrl: './npss_cs_reversal_initiate.component.html',
    styleUrls: ['./npss_cs_reversal_initiate.component.css'],
    providers:[npss_cs_reversal_initiateService]
})
export class npss_cs_reversal_initiateComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    subscription: Subscription;
    ShowPopup: boolean = false;
    ClientParams: any = {};
    internals: any;
    constructor(private _service:npss_cs_reversal_initiateService,private httpHelper: HttphelperService,
        private sessionHelper: SessionService) { }
    ngOnInit() {
      try{
        if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                    this.handlechangecomponentevent(event);
                 
                }
            })
        }
    } catch (error) {
        console.log("error------------>" + error)
    }
    }
    handlechangecomponentevent(event) {
        if (event.eventId === 'custom-connector') {
            this.ClientParams = event.param
            this.internals = event.internals
         
            if(event.case=='needConfirmation') {
                this.ShowPopup = true;
            }
            else  {
                this.cancel();
            }
        }
    }
    cancel(){
        this.ShowPopup = false;
    }
    yes(){
        this.ClientParams.confirmationflag = 'YES';
        this._service.CallUrlWithData(this.ClientParams, this.screen_instance, this.internals);
    }
}