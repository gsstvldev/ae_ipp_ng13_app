
import { Component, OnInit, Input } from '@angular/core';
import { npss_cs_rev_get_usable_balanceService } from './npss_cs_rev_get_usable_balance.service';
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
    selector: 'npss_cs_rev_get_usable_balance',
    templateUrl: './npss_cs_rev_get_usable_balance.component.html',
    styleUrls: ['./npss_cs_rev_get_usable_balance.component.css'],
    providers: [npss_cs_rev_get_usable_balanceService]
})
export class npss_cs_rev_get_usable_balanceComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    subscription: Subscription;
    postingRestrictCode: any
    isinactive: any
    signname: any
    usablebalance: any
    workingbalance: any
    raccountbalance: any
    vaAccountType: any
    //   pracctbalance:boolean = true
      pworkbalance:boolean = true
    pusbalance: boolean = true
    //   psignname:boolean = true
    //   pactive:boolean = true
    //   pcode:boolean = true
    showVaccounType: boolean = false
    constructor(private _service: npss_cs_rev_get_usable_balanceService) { }
    ngOnInit() {
        if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                    if (event.param == "") {
                        this.clearwidget()
                    } else {
                        this.loadwidget(event)
                    }


                }
            })
        }
    }

    loadwidget(event) {
        var data = event.param
        if (data.status == 'SUCCESS') {
            this.usablebalance = data.response.dataArea.usableBalance
            try {
                if (data.response.dataArea.vaAccountType) {
                    this.vaAccountType = data.response.dataArea.vaAccountType
                    this.showVaccounType = true
                } else {
                    this.vaAccountType = ''
                    this.showVaccounType = false
                }
            } catch (error) {
                this.vaAccountType = ''
                this.showVaccounType = false
            }



        } else {
            // this.postingRestrictCode = ''
            // this.isinactive = ''
            // this.signname = ''
            this.usablebalance = ''
            this.vaAccountType = ''
            // this.workingbalance = ''
            // this.raccountbalance = ''
            this.showVaccounType = false
        }
    }

    clearwidget() {
        //  this.postingRestrictCode = ''
        //     this.isinactive = ''
        //     this.signname = ''
        this.usablebalance = ''
        // this.workingbalance = ''
        // this.raccountbalance = ''
        this.vaAccountType = ''
        this.showVaccounType = false
    }
}