
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_change_customer_mobileService } from './npss_cs_change_customer_mobile.service';

@Component({
    selector: 'npss_cs_change_customer_mobile',
    templateUrl: './npss_cs_change_customer_mobile.component.html',
    styleUrls: ['./npss_cs_change_customer_mobile.component.css'],
    providers:[npss_cs_change_customer_mobileService]
})
export class npss_cs_change_customer_mobileComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_change_customer_mobileService) { }
    ngOnInit() {
    }
}