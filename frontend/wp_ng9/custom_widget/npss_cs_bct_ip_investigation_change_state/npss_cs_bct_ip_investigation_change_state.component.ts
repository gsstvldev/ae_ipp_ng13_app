
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_bct_ip_investigation_change_stateService } from './npss_cs_bct_ip_investigation_change_state.service';

@Component({
    selector: 'npss_cs_bct_ip_investigation_change_state',
    templateUrl: './npss_cs_bct_ip_investigation_change_state.component.html',
    styleUrls: ['./npss_cs_bct_ip_investigation_change_state.component.css'],
    providers:[npss_cs_bct_ip_investigation_change_stateService]
})
export class npss_cs_bct_ip_investigation_change_stateComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_bct_ip_investigation_change_stateService) { }
    ngOnInit() {
    }
}