
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_mch_update_mccService } from './npss_cs_mch_update_mcc.service';

@Component({
    selector: 'npss_cs_mch_update_mcc',
    templateUrl: './npss_cs_mch_update_mcc.component.html',
    styleUrls: ['./npss_cs_mch_update_mcc.component.css'],
    providers:[npss_cs_mch_update_mccService]
})
export class npss_cs_mch_update_mccComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_mch_update_mccService) { }
    ngOnInit() {
    }
}