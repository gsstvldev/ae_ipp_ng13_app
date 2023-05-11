
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_call_p2b_unfreeze_apiService } from './npss_cs_call_p2b_unfreeze_api.service';

@Component({
    selector: 'npss_cs_call_p2b_unfreeze_api',
    templateUrl: './npss_cs_call_p2b_unfreeze_api.component.html',
    styleUrls: ['./npss_cs_call_p2b_unfreeze_api.component.css'],
    providers:[npss_cs_call_p2b_unfreeze_apiService]
})
export class npss_cs_call_p2b_unfreeze_apiComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_call_p2b_unfreeze_apiService) { }
    ngOnInit() {
    }
}