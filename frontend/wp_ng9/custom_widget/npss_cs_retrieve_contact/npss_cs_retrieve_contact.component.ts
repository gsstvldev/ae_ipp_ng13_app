
import { Component, OnInit, Input } from '@angular/core';
import { npss_cs_retrieve_contactService } from './npss_cs_retrieve_contact.service';
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
    selector: 'npss_cs_retrieve_contact',
    templateUrl: './npss_cs_retrieve_contact.component.html',
    styleUrls: ['./npss_cs_retrieve_contact.component.css'],
    providers: [npss_cs_retrieve_contactService]
})
export class npss_cs_retrieve_contactComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    showPopup: boolean = false;
    popuparray = []
    messagearray = []
    subscription: Subscription;
    constructor(private _service: npss_cs_retrieve_contactService) { }
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
        if (event.type == 'Array') {
            for (let i = 0; i < data.length; i++) {
                messgaeobj = {}
                messgaeobj['msg'] = data[i]
                this.messagearray.push(messgaeobj)
            }
            this.showPopup = true
        } else {
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
                            messgaeobj = {}
                            if (typeof data[i][keyvalue[j]] == 'object') {
                                if (data[i][keyvalue[j]].length > 0) {
                                    for (let l = 0; l < data[i][keyvalue[j]].length; l++) {
                                        var msgkey = Object.keys(data[i][keyvalue[j]])
                                        for (let u = 0; u < msgkey.length; u++) {
                                            messgaeobj = {}
                                            messgaeobj['msg'] = msgkey[u] + ' : ' + data[i][keyvalue[j]][msgkey[u]]
                                            this.messagearray.push(messgaeobj)
                                        }

                                    }
                                } else {
                                    let keyparam = Object.keys(data[i][keyvalue[j]])
                                    for (let ds = 0; ds < keyparam.length; ds++) {
                                        messgaeobj = {}
                                        messgaeobj['msg'] = keyparam[ds] + ' : ' + data[i][keyvalue[j]][keyparam[ds]]
                                        this.messagearray.push(messgaeobj)
                                    }
                                }

                            } else {
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
            this.showPopup = true
        }



    }
    cancel() {
        this.showPopup = false
        this.popuparray = []
        this.messagearray = []
    }
}