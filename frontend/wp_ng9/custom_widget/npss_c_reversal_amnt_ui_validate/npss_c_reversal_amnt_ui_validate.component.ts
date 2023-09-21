
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_reversal_amnt_ui_validateService } from './npss_c_reversal_amnt_ui_validate.service';

@Component({
    selector: 'npss_c_reversal_amnt_ui_validate',
    templateUrl: './npss_c_reversal_amnt_ui_validate.component.html',
    styleUrls: ['./npss_c_reversal_amnt_ui_validate.component.css'],
    providers:[npss_c_reversal_amnt_ui_validateService]
})
export class npss_c_reversal_amnt_ui_validateComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_reversal_amnt_ui_validateService) { }
    ngOnInit() {
    }
}