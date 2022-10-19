
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_trigger_exchange_componentService } from './npss_c_trigger_exchange_component.service';

@Component({
    selector: 'npss_c_trigger_exchange_component',
    templateUrl: './npss_c_trigger_exchange_component.component.html',
    styleUrls: ['./npss_c_trigger_exchange_component.component.css'],
    providers:[npss_c_trigger_exchange_componentService]
})
export class npss_c_trigger_exchange_componentComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_trigger_exchange_componentService) { }
    ngOnInit() {
    }
}