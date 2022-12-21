
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_mch_change_mobileService } from './npss_cs_mch_change_mobile.service';

@Component({
    selector: 'npss_cs_mch_change_mobile',
    templateUrl: './npss_cs_mch_change_mobile.component.html',
    styleUrls: ['./npss_cs_mch_change_mobile.component.css'],
    providers:[npss_cs_mch_change_mobileService]
})
export class npss_cs_mch_change_mobileComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_mch_change_mobileService) { }
    ngOnInit() {
    }
}