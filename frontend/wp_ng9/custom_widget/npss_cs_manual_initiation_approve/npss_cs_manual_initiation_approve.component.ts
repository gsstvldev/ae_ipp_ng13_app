
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_manual_initiation_approveService } from './npss_cs_manual_initiation_approve.service';

@Component({
    selector: 'npss_cs_manual_initiation_approve',
    templateUrl: './npss_cs_manual_initiation_approve.component.html',
    styleUrls: ['./npss_cs_manual_initiation_approve.component.css'],
    providers:[npss_cs_manual_initiation_approveService]
})
export class npss_cs_manual_initiation_approveComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_manual_initiation_approveService) { }
    ngOnInit() {
    }
}