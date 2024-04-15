
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_ip_rev_ret_auth_pacs004Service } from './npss_cs_ip_rev_ret_auth_pacs004.service';

@Component({
    selector: 'npss_cs_ip_rev_ret_auth_pacs004',
    templateUrl: './npss_cs_ip_rev_ret_auth_pacs004.component.html',
    styleUrls: ['./npss_cs_ip_rev_ret_auth_pacs004.component.css'],
    providers:[npss_cs_ip_rev_ret_auth_pacs004Service]
})
export class npss_cs_ip_rev_ret_auth_pacs004Component implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_ip_rev_ret_auth_pacs004Service) { }
    ngOnInit() {
    }
}