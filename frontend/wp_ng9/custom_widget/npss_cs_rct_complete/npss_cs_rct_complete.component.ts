
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rct_completeService } from './npss_cs_rct_complete.service';

@Component({
    selector: 'npss_cs_rct_complete',
    templateUrl: './npss_cs_rct_complete.component.html',
    styleUrls: ['./npss_cs_rct_complete.component.css'],
    providers:[npss_cs_rct_completeService]
})
export class npss_cs_rct_completeComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rct_completeService) { }
    ngOnInit() {
    }
}