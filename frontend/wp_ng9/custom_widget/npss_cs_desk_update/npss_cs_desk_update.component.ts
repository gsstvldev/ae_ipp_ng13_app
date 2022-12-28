
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_desk_updateService } from './npss_cs_desk_update.service';

@Component({
    selector: 'npss_cs_desk_update',
    templateUrl: './npss_cs_desk_update.component.html',
    styleUrls: ['./npss_cs_desk_update.component.css'],
    providers:[npss_cs_desk_updateService]
})
export class npss_cs_desk_updateComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_desk_updateService) { }
    ngOnInit() {
    }
}