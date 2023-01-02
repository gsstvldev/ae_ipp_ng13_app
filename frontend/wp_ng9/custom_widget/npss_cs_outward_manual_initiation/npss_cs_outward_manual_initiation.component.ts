
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_outward_manual_initiationService } from './npss_cs_outward_manual_initiation.service';

@Component({
    selector: 'npss_cs_outward_manual_initiation',
    templateUrl: './npss_cs_outward_manual_initiation.component.html',
    styleUrls: ['./npss_cs_outward_manual_initiation.component.css'],
    providers:[npss_cs_outward_manual_initiationService]
})
export class npss_cs_outward_manual_initiationComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_outward_manual_initiationService) { }
    ngOnInit() {
    }
}