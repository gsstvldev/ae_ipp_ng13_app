
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_customer_enrolmentService } from './npss_cs_customer_enrolment.service';

@Component({
    selector: 'npss_cs_customer_enrolment',
    templateUrl: './npss_cs_customer_enrolment.component.html',
    styleUrls: ['./npss_cs_customer_enrolment.component.css'],
    providers:[npss_cs_customer_enrolmentService]
})
export class npss_cs_customer_enrolmentComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
   
    constructor(private _service:npss_cs_customer_enrolmentService) { }
    ngOnInit() {
        
    }

    
}