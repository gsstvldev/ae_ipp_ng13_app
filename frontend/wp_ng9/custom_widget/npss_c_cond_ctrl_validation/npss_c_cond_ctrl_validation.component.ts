
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_cond_ctrl_validationService } from './npss_c_cond_ctrl_validation.service';

@Component({
    selector: 'npss_c_cond_ctrl_validation',
    templateUrl: './npss_c_cond_ctrl_validation.component.html',
    styleUrls: ['./npss_c_cond_ctrl_validation.component.css'],
    providers:[npss_c_cond_ctrl_validationService]
})
export class npss_c_cond_ctrl_validationComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_cond_ctrl_validationService) { }
    ngOnInit() {
    }
}