
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_cbuae_exception_call_reversal_orrService } from './npss_cs_cbuae_exception_call_reversal_orr.service';

@Component({
    selector: 'npss_cs_cbuae_exception_call_reversal_orr',
    templateUrl: './npss_cs_cbuae_exception_call_reversal_orr.component.html',
    styleUrls: ['./npss_cs_cbuae_exception_call_reversal_orr.component.css'],
    providers:[npss_cs_cbuae_exception_call_reversal_orrService]
})
export class npss_cs_cbuae_exception_call_reversal_orrComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_cbuae_exception_call_reversal_orrService) { }
    ngOnInit() {
    }
}