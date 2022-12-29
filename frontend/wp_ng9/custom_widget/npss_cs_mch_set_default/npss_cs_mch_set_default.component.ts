
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_mch_set_defaultService } from './npss_cs_mch_set_default.service';

@Component({
    selector: 'npss_cs_mch_set_default',
    templateUrl: './npss_cs_mch_set_default.component.html',
    styleUrls: ['./npss_cs_mch_set_default.component.css'],
    providers:[npss_cs_mch_set_defaultService]
})
export class npss_cs_mch_set_defaultComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_mch_set_defaultService) { }
    ngOnInit() {
    }
}