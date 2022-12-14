
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_btn_enb_disbService } from './npss_c_btn_enb_disb.service';

@Component({
    selector: 'npss_c_btn_enb_disb',
    templateUrl: './npss_c_btn_enb_disb.component.html',
    styleUrls: ['./npss_c_btn_enb_disb.component.css'],
    providers:[npss_c_btn_enb_disbService]
})
export class npss_c_btn_enb_disbComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_btn_enb_disbService) { }
    ngOnInit() {
    }
}