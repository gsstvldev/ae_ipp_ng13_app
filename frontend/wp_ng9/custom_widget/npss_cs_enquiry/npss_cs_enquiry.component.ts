
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_enquiryService } from './npss_cs_enquiry.service';

@Component({
    selector: 'npss_cs_enquiry',
    templateUrl: './npss_cs_enquiry.component.html',
    styleUrls: ['./npss_cs_enquiry.component.css'],
    providers:[npss_cs_enquiryService]
})
export class npss_cs_enquiryComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_enquiryService) { }
    ngOnInit() {
    }
}