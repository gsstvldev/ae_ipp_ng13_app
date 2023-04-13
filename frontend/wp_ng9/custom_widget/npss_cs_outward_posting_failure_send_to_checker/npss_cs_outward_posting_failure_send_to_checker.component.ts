
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_outward_posting_failure_send_to_checkerService } from './npss_cs_outward_posting_failure_send_to_checker.service';

@Component({
    selector: 'npss_cs_outward_posting_failure_send_to_checker',
    templateUrl: './npss_cs_outward_posting_failure_send_to_checker.component.html',
    styleUrls: ['./npss_cs_outward_posting_failure_send_to_checker.component.css'],
    providers:[npss_cs_outward_posting_failure_send_to_checkerService]
})
export class npss_cs_outward_posting_failure_send_to_checkerComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_outward_posting_failure_send_to_checkerService) { }
    ngOnInit() {
    }
}