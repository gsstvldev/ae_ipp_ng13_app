
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_inward_rejected_return_re_submitService } from './npss_cs_inward_rejected_return_re_submit.service';

@Component({
    selector: 'npss_cs_inward_rejected_return_re_submit',
    templateUrl: './npss_cs_inward_rejected_return_re_submit.component.html',
    styleUrls: ['./npss_cs_inward_rejected_return_re_submit.component.css'],
    providers:[npss_cs_inward_rejected_return_re_submitService]
})
export class npss_cs_inward_rejected_return_re_submitComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_inward_rejected_return_re_submitService) { }
    ngOnInit() {
    }
}