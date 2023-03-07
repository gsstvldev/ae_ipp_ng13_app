
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_r_message_detail_responseService } from './npss_cs_r_message_detail_response.service';

@Component({
    selector: 'npss_cs_r_message_detail_response',
    templateUrl: './npss_cs_r_message_detail_response.component.html',
    styleUrls: ['./npss_cs_r_message_detail_response.component.css'],
    providers:[npss_cs_r_message_detail_responseService]
})
export class npss_cs_r_message_detail_responseComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_r_message_detail_responseService) { }
    ngOnInit() {
    }
}