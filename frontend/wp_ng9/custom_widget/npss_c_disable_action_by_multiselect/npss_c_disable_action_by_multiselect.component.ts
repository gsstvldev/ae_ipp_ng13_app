
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_disable_action_by_multiselectService } from './npss_c_disable_action_by_multiselect.service';

@Component({
    selector: 'npss_c_disable_action_by_multiselect',
    templateUrl: './npss_c_disable_action_by_multiselect.component.html',
    styleUrls: ['./npss_c_disable_action_by_multiselect.component.css'],
    providers:[npss_c_disable_action_by_multiselectService]
})
export class npss_c_disable_action_by_multiselectComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_disable_action_by_multiselectService) { }
    ngOnInit() {
    }
}