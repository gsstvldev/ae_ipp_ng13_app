
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_update_customer_personal_dataService } from './npss_cs_update_customer_personal_data.service';

@Component({
    selector: 'npss_cs_update_customer_personal_data',
    templateUrl: './npss_cs_update_customer_personal_data.component.html',
    styleUrls: ['./npss_cs_update_customer_personal_data.component.css'],
    providers:[npss_cs_update_customer_personal_dataService]
})
export class npss_cs_update_customer_personal_dataComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_update_customer_personal_dataService) { }
    ngOnInit() {
    }
}