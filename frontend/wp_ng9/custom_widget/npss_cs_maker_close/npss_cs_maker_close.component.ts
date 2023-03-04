
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_maker_closeService } from './npss_cs_maker_close.service';

@Component({
    selector: 'npss_cs_maker_close',
    templateUrl: './npss_cs_maker_close.component.html',
    styleUrls: ['./npss_cs_maker_close.component.css'],
    providers:[npss_cs_maker_closeService]
})
export class npss_cs_maker_closeComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_maker_closeService) { }
    ngOnInit() {
    }
}