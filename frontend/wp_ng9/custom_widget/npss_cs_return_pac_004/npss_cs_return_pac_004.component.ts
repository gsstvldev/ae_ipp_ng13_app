
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_return_pac_004Service } from './npss_cs_return_pac_004.service';

@Component({
    selector: 'npss_cs_return_pac_004',
    templateUrl: './npss_cs_return_pac_004.component.html',
    styleUrls: ['./npss_cs_return_pac_004.component.css'],
    providers:[npss_cs_return_pac_004Service]
})
export class npss_cs_return_pac_004Component implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_return_pac_004Service) { }
    ngOnInit() {
    }
}