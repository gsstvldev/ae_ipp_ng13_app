
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_unenrolment_customerService } from './npss_cs_unenrolment_customer.service';

@Component({
    selector: 'npss_cs_unenrolment_customer',
    templateUrl: './npss_cs_unenrolment_customer.component.html',
    styleUrls: ['./npss_cs_unenrolment_customer.component.css'],
    providers:[npss_cs_unenrolment_customerService]
})
export class npss_cs_unenrolment_customerComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_unenrolment_customerService) { }
    ngOnInit() {
    }
}