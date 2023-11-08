
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_reversal_cancelService } from './npss_cs_reversal_cancel.service';

@Component({
    selector: 'npss_cs_reversal_cancel',
    templateUrl: './npss_cs_reversal_cancel.component.html',
    styleUrls: ['./npss_cs_reversal_cancel.component.css'],
    providers:[npss_cs_reversal_cancelService]
})
export class npss_cs_reversal_cancelComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_reversal_cancelService) { }
    ngOnInit() {
    }
}