
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_set_reversal_prd_system_setup_dateService } from './npss_cs_set_reversal_prd_system_setup_date.service';

@Component({
    selector: 'npss_cs_set_reversal_prd_system_setup_date',
    templateUrl: './npss_cs_set_reversal_prd_system_setup_date.component.html',
    styleUrls: ['./npss_cs_set_reversal_prd_system_setup_date.component.css'],
    providers:[npss_cs_set_reversal_prd_system_setup_dateService]
})
export class npss_cs_set_reversal_prd_system_setup_dateComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_set_reversal_prd_system_setup_dateService) { }
    ngOnInit() {
    }
}