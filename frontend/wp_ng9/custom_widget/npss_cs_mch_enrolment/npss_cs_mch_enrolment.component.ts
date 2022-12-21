
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_mch_enrolmentService } from './npss_cs_mch_enrolment.service';

@Component({
    selector: 'npss_cs_mch_enrolment',
    templateUrl: './npss_cs_mch_enrolment.component.html',
    styleUrls: ['./npss_cs_mch_enrolment.component.css'],
    providers:[npss_cs_mch_enrolmentService]
})
export class npss_cs_mch_enrolmentComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_mch_enrolmentService) { }
    ngOnInit() {
    }
}