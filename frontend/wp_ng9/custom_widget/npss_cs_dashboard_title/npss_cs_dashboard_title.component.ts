
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_dashboard_titleService } from './npss_cs_dashboard_title.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'npss_cs_dashboard_title',
    templateUrl: './npss_cs_dashboard_title.component.html',
    styleUrls: ['./npss_cs_dashboard_title.component.css'],
    providers:[npss_cs_dashboard_titleService]
})
export class npss_cs_dashboard_titleComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
  cdrDate:any;
  Message:any
       subscription: Subscription;
    constructor(private _service:npss_cs_dashboard_titleService) { }
    ngOnInit() {
    if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                this.cdrDate=event.param;
                if(this.screen_instance[`wftpa_description`].includes("home_dashboard"))
                {
                 this.Message=`SUMMARY OF MESSAGES FOR TODAY (${this.cdrDate})`
                }
                else if(this.screen_instance[`wftpa_description`].includes("outward_transactions_details"))
                {
                 this.Message=`OUTWARD TRANSACTIONS DETAILS`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("reversal_request_details"))
                {
                 this.Message=`REVERSAL REQUEST DETAILS`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("outward_reversal_success"))
                {
                 this.Message=`OUTWARD REVERSAL SUCCESS`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("outward_general_enquiry_report"))
                {
                 this.Message=`OUTWARD GENERAL ENQUIRY REPORT`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("inward_general_enquiry_report"))
                {
                 this.Message=`INWARD GENERAL ENQUIRY REPORT`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("outward_cb_nak_enquiry_report"))
                {
                 this.Message=`OUTWARD CB NAK ENQUIRY REPORT`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("inward_cb_nak_enquiry_report"))
                {
                 this.Message=`INWARD CB NAK ENQUIRY REPORT`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("inward_transactions_details"))
                {
                 this.Message=`INWARD TRANSACTIONS DETAILS`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("payment_status_report"))
                {
                 this.Message=`PAYMENT STATUS REPORT`
                }
                 else if(this.screen_instance[`wftpa_description`].includes("outward_manually_closed_transactions"))
                {
                 this.Message=`OUTWARD MANUALLY CLOSED TRANSACTIONS`
                }

                }
            })
            
        }
    }
}