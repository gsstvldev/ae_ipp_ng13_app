
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_reversal_set_status_and_bind_valueService } from './npss_cs_reversal_set_status_and_bind_value.service';

@Component({
    selector: 'npss_cs_reversal_set_status_and_bind_value',
    templateUrl: './npss_cs_reversal_set_status_and_bind_value.component.html',
    styleUrls: ['./npss_cs_reversal_set_status_and_bind_value.component.css'],
    providers:[npss_cs_reversal_set_status_and_bind_valueService]
})
export class npss_cs_reversal_set_status_and_bind_valueComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_reversal_set_status_and_bind_valueService) { }
    ngOnInit() {
    }
}