
import { Component, OnInit,Input } from '@angular/core';
import { npss_csget_deal_btn_show_hideService } from './npss_csget_deal_btn_show_hide.service';

@Component({
    selector: 'npss_csget_deal_btn_show_hide',
    templateUrl: './npss_csget_deal_btn_show_hide.component.html',
    styleUrls: ['./npss_csget_deal_btn_show_hide.component.css'],
    providers:[npss_csget_deal_btn_show_hideService]
})
export class npss_csget_deal_btn_show_hideComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_csget_deal_btn_show_hideService) { }
    ngOnInit() {
    }
}