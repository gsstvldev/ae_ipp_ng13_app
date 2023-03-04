
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_maker_initiateService } from './npss_cs_maker_initiate.service';

@Component({
    selector: 'npss_cs_maker_initiate',
    templateUrl: './npss_cs_maker_initiate.component.html',
    styleUrls: ['./npss_cs_maker_initiate.component.css'],
    providers:[npss_cs_maker_initiateService]
})
export class npss_cs_maker_initiateComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_maker_initiateService) { }
    ngOnInit() {
    }
}