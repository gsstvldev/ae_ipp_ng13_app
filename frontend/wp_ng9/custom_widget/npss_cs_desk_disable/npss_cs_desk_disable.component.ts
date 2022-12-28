
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_desk_disableService } from './npss_cs_desk_disable.service';

@Component({
    selector: 'npss_cs_desk_disable',
    templateUrl: './npss_cs_desk_disable.component.html',
    styleUrls: ['./npss_cs_desk_disable.component.css'],
    providers:[npss_cs_desk_disableService]
})
export class npss_cs_desk_disableComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_desk_disableService) { }
    ngOnInit() {
    }
}