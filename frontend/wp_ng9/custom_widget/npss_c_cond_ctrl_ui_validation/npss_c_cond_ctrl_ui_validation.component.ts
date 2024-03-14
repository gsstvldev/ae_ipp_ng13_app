
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_cond_ctrl_ui_validationService } from './npss_c_cond_ctrl_ui_validation.service';

@Component({
    selector: 'npss_c_cond_ctrl_ui_validation',
    templateUrl: './npss_c_cond_ctrl_ui_validation.component.html',
    styleUrls: ['./npss_c_cond_ctrl_ui_validation.component.css'],
    providers:[npss_c_cond_ctrl_ui_validationService]
})
export class npss_c_cond_ctrl_ui_validationComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_cond_ctrl_ui_validationService) { }
    ngOnInit() {
    }
}