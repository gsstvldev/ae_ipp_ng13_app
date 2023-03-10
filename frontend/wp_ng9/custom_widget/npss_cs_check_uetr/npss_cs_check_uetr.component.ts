
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_check_uetrService } from './npss_cs_check_uetr.service';

@Component({
    selector: 'npss_cs_check_uetr',
    templateUrl: './npss_cs_check_uetr.component.html',
    styleUrls: ['./npss_cs_check_uetr.component.css'],
    providers:[npss_cs_check_uetrService]
})
export class npss_cs_check_uetrComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_check_uetrService) { }
    ngOnInit() {
    }
}