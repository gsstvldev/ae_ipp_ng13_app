
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_home_dashboars_tittleService } from './npss_cs_home_dashboars_tittle.service';
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
    selector: 'npss_cs_home_dashboars_tittle',
    templateUrl: './npss_cs_home_dashboars_tittle.component.html',
    styleUrls: ['./npss_cs_home_dashboars_tittle.component.css'],
    providers:[npss_cs_home_dashboars_tittleService]
})
export class npss_cs_home_dashboars_tittleComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    subscription: Subscription;
       cdrDate:any;
    constructor(private _service:npss_cs_home_dashboars_tittleService) { }
    ngOnInit() {
        if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                  this.cdrDate=event.param

                }
            })
        }
    }
  
    
}