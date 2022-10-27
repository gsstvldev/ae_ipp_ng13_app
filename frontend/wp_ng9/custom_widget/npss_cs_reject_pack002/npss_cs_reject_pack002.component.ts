
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_reject_pack002Service } from './npss_cs_reject_pack002.service';

@Component({
    selector: 'npss_cs_reject_pack002',
    templateUrl: './npss_cs_reject_pack002.component.html',
    styleUrls: ['./npss_cs_reject_pack002.component.css'],
    providers:[npss_cs_reject_pack002Service]
})
export class npss_cs_reject_pack002Component implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_reject_pack002Service) { }
    ngOnInit() {
    }
}