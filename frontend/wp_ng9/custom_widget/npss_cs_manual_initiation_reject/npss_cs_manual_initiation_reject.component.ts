
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_manual_initiation_rejectService } from './npss_cs_manual_initiation_reject.service';

@Component({
    selector: 'npss_cs_manual_initiation_reject',
    templateUrl: './npss_cs_manual_initiation_reject.component.html',
    styleUrls: ['./npss_cs_manual_initiation_reject.component.css'],
    providers:[npss_cs_manual_initiation_rejectService]
})
export class npss_cs_manual_initiation_rejectComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_manual_initiation_rejectService) { }
    ngOnInit() {
    }
}