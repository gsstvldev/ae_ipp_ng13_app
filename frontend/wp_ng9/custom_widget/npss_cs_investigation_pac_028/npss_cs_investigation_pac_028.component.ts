
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_investigation_pac_028Service } from './npss_cs_investigation_pac_028.service';

@Component({
    selector: 'npss_cs_investigation_pac_028',
    templateUrl: './npss_cs_investigation_pac_028.component.html',
    styleUrls: ['./npss_cs_investigation_pac_028.component.css'],
    providers:[npss_cs_investigation_pac_028Service]
})
export class npss_cs_investigation_pac_028Component implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_investigation_pac_028Service) { }
    ngOnInit() {
    }
}