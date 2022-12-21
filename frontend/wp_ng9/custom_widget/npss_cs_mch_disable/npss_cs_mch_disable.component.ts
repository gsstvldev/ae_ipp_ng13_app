
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_mch_disableService } from './npss_cs_mch_disable.service';

@Component({
    selector: 'npss_cs_mch_disable',
    templateUrl: './npss_cs_mch_disable.component.html',
    styleUrls: ['./npss_cs_mch_disable.component.css'],
    providers:[npss_cs_mch_disableService]
})
export class npss_cs_mch_disableComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_mch_disableService) { }
    ngOnInit() {
    }
}