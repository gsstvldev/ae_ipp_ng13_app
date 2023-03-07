
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_r_message_detailService } from './npss_cs_r_message_detail.service';

@Component({
    selector: 'npss_cs_r_message_detail',
    templateUrl: './npss_cs_r_message_detail.component.html',
    styleUrls: ['./npss_cs_r_message_detail.component.css'],
    providers:[npss_cs_r_message_detailService]
})
export class npss_cs_r_message_detailComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_r_message_detailService) { }
    ngOnInit() {
    }
}