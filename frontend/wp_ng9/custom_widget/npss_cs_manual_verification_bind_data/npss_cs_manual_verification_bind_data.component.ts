
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_manual_verification_bind_dataService } from './npss_cs_manual_verification_bind_data.service';

@Component({
    selector: 'npss_cs_manual_verification_bind_data',
    templateUrl: './npss_cs_manual_verification_bind_data.component.html',
    styleUrls: ['./npss_cs_manual_verification_bind_data.component.css'],
    providers:[npss_cs_manual_verification_bind_dataService]
})
export class npss_cs_manual_verification_bind_dataComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_manual_verification_bind_dataService) { }
    ngOnInit() {
    }
}