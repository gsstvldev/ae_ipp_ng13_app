
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_home_dashboars_tittleService } from './npss_cs_home_dashboars_tittle.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'npss_cs_home_dashboars_tittle',
    templateUrl: './npss_cs_home_dashboars_tittle.component.html',
    styleUrls: ['./npss_cs_home_dashboars_tittle.component.css'],
    providers:[npss_cs_home_dashboars_tittleService]
})
export class npss_cs_home_dashboars_tittleComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
      cdrDate:any;
      Message:any
       subscription: Subscription;
    constructor(private _service:npss_cs_home_dashboars_tittleService) { }
    ngOnInit() {
          if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                this.cdrDate=event.param;
                if(this.screen_instance[`wftpa_description`].includes("home_dashboard"))
                {
                 this.Message=`SUMMARY OF MESSAGES FOR TODAY (CURRENT BUSINESS DATE in ${this.cdrDate})`
                }
                else if(this.screen_instance[`wftpa_description`].includes("outward_transactions_details"))
                {
                 this.Message=`OUTWARD TRANSACTIONS`
                }

                }
            })
        }
    }
  
    
}