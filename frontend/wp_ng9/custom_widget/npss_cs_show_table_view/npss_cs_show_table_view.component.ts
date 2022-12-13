
import { Component, OnInit, Input } from '@angular/core';
import { npss_cs_show_table_viewService } from './npss_cs_show_table_view.service';
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
    selector: 'npss_cs_show_table_view',
    templateUrl: './npss_cs_show_table_view.component.html',
    styleUrls: ['./npss_cs_show_table_view.component.css'],
    providers: [npss_cs_show_table_viewService]
})
export class npss_cs_show_table_viewComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    showtable:boolean
    subscription: Subscription;
    tableheader = []
    tablerows = []
    constructor(private _service: npss_cs_show_table_viewService) { }
    ngOnInit() {
        if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                    this.Createtable(event)

                }
            })
        }
    }

    Createtable(event) {
        this.tablerows = []
        this.tableheader = []
        if(event.param.length > 0){
            this.tablerows = event.param
            var headers =  Object.keys(event.param[0])
    
            for (let i = 0; i < headers.length; i++) {
                var obj = {}
                obj['headers'] = headers[i]
                this.tableheader.push(obj)
            }
            this.showtable = true
        }else{
            this.showtable = false
            this.tablerows = []
            this.tableheader = []
            this._service.showerrormsg()
        }
        
       


    }
}