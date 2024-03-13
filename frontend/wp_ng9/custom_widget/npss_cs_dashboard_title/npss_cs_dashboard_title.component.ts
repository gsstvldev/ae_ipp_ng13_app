
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
                 else
                {
                 this.Message=this.screen_instance[`wftpa_description`].toString().split('_').join(' ').toUpperCase()
                }               }
            })
            
        }
    }
}