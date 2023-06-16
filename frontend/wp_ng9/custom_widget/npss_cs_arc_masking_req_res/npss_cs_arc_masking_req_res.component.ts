
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_arc_masking_req_resService } from './npss_cs_arc_masking_req_res.service';

@Component({
    selector: 'npss_cs_arc_masking_req_res',
    templateUrl: './npss_cs_arc_masking_req_res.component.html',
    styleUrls: ['./npss_cs_arc_masking_req_res.component.css'],
    providers:[npss_cs_arc_masking_req_resService]
})
export class npss_cs_arc_masking_req_resComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_arc_masking_req_resService) { }
    ngOnInit() {
    }
}