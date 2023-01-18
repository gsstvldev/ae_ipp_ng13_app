
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_mch_enrolmentService } from './npss_cs_mch_enrolment.service';
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
    selector: 'npss_cs_mch_enrolment',
    templateUrl: './npss_cs_mch_enrolment.component.html',
    styleUrls: ['./npss_cs_mch_enrolment.component.css'],
    providers:[npss_cs_mch_enrolmentService]
})
export class npss_cs_mch_enrolmentComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    showPopup: boolean = false;
    popuparray = []
   messagearray = []
  subscription: Subscription;
    constructor(private _service:npss_cs_mch_enrolmentService) { }
    ngOnInit() {
        if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                    this.loadpopup(event)
                    
                }
            })
        }
    }

    loadpopup(event) {
        var data = event.param;
        var messgaeobj = {}

        if (data.message) {
            for (let i in data) {
                if (Array.isArray(data[i])) {
                    messgaeobj = {}
                    messgaeobj['msg'] = i + ':' + data[i]
                    this.messagearray.push(messgaeobj)
                } else {
                    {
                        messgaeobj = {}
                        messgaeobj['msg'] = i + ' : ' + data[i]
                        this.messagearray.push(messgaeobj)
                    }
                }
            }



        }
        else {
            for (let i in data) {
                if (typeof data[i] == 'object') {
                    if (data[i].length > 0) {
                        for (let k = 0; k < data[i].length; k++) {
                            var keys = Object.keys(data[i][k])
                            for (let h = 0; h < keys.length; h++) {
                                if (typeof data[i][k][keys[h]] == 'object') {
                                    if (data[i][k][keys[h]].length > 0) {
                                        for (let g = 0; g < data[i][k][keys[h]].length; g++) {
                                            var msgkey = Object.keys(data[i][k][keys[h]][g])
                                            for (let u = 0; u < msgkey.length; u++) {
                                                messgaeobj = {}
                                                messgaeobj['msg'] = msgkey[u] + ' : ' + data[i][k][keys[h]][g][msgkey[u]]
                                                this.messagearray.push(messgaeobj)
                                            }
                                        }

                                    } else {
                                        var keyvalue = Object.keys(data[i][k][keys[h]])
                                        for (let j = 0; j < keyvalue.length; j++) {
                                            messgaeobj = {}
                                            messgaeobj['msg'] = keyvalue[j] + ' : ' + data[i][k][keys[h]][keyvalue[j]]
                                            this.messagearray.push(messgaeobj)
                                        }
                                    }
                                }
                                else {
                                    messgaeobj = {}
                                    messgaeobj['msg'] = keys[h] + ' : ' + data[i][k][keys[h]]
                                    this.messagearray.push(messgaeobj)
                                }

                            }
                        }

                    } else {
                        var keyvalue = Object.keys(data[i])
                        for (let j = 0; j < keyvalue.length; j++) {
                            if (Array.isArray(data[i][keyvalue[j]])) {
                                for (let l in data[i][keyvalue[j]]) {
                                    if (typeof data[i][keyvalue[j]][l] == 'object') {
                                        var keys = Object.keys(data[i][keyvalue[j]][l])
                                        // if (data[i][keyvalue[j]][l].length > 0) {
                                        for (let k = 0; k < keys.length; k++) {
                                            if (typeof data[i][keyvalue[j]][l][keys[k]] == 'object') {
                                                var keyss = Object.keys(data[i][keyvalue[j]][l][keys[k]])
                                                for (let q = 0; q < keyss.length; q++) {
                                                    if (typeof data[i][keyvalue[j]][l][keys[k]][keyss[q]] == 'object') {
                                                        var keysobj = Object.keys(data[i][keyvalue[j]][l][keys[k]][keyss[q]])
                                                        for (let w = 0; w < keysobj.length; w++) {
                                                            messgaeobj = {}
                                                            messgaeobj['msg'] = keysobj[w] + ' : ' + data[i][keyvalue[j]][l][keys[k]][keyss[q]][keysobj[w]]
                                                            this.messagearray.push(messgaeobj)
                                                        }
                                                    }
                                                    else {
                                                        messgaeobj = {}
                                                        messgaeobj['msg'] = keyss[q] + ' : ' + data[i][keyvalue[j]][l][keys[k]][keyss[q]]
                                                        this.messagearray.push(messgaeobj)
                                                    }
                                                }
                                            }
                                            else {
                                                messgaeobj = {}
                                                messgaeobj['msg'] = keys[k] + ' : ' + data[i][keyvalue[j]][l][keys[k]]
                                                this.messagearray.push(messgaeobj)
                                            }
                                        }
                                        //}
                                    }
                                }
                            }


                            else {
                                messgaeobj = {}
                                messgaeobj['msg'] = keyvalue[j] + ' : ' + data[i][keyvalue[j]]
                                this.messagearray.push(messgaeobj)
                            }
                        }
                    }

                } else {
                    messgaeobj = {}

                    messgaeobj['msg'] = i + ' : ' + data[i]
                    this.messagearray.push(messgaeobj)
                }
            }
        }
        this.showPopup = true

    }
    cancel(){
        this.showPopup = false
      this.popuparray = []
        this.messagearray = []
    }
}