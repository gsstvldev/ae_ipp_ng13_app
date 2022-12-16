
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_ip_rev_get_dealService } from './npss_cs_ip_rev_get_deal.service';

@Component({
    selector: 'npss_cs_ip_rev_get_deal',
    templateUrl: './npss_cs_ip_rev_get_deal.component.html',
    styleUrls: ['./npss_cs_ip_rev_get_deal.component.css'],
    providers:[npss_cs_ip_rev_get_dealService]
})
export class npss_cs_ip_rev_get_dealComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_ip_rev_get_dealService) { }
    ngOnInit() {
    }
}