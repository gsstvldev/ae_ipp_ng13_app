
import { Component, OnInit,Input } from '@angular/core';
import { npss_amb_cs_manual_status_update_initiate_btnService } from './npss_amb_cs_manual_status_update_initiate_btn.service';

@Component({
    selector: 'npss_amb_cs_manual_status_update_initiate_btn',
    templateUrl: './npss_amb_cs_manual_status_update_initiate_btn.component.html',
    styleUrls: ['./npss_amb_cs_manual_status_update_initiate_btn.component.css'],
    providers:[npss_amb_cs_manual_status_update_initiate_btnService]
})
export class npss_amb_cs_manual_status_update_initiate_btnComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_amb_cs_manual_status_update_initiate_btnService) { }
    ngOnInit() {
    }
}