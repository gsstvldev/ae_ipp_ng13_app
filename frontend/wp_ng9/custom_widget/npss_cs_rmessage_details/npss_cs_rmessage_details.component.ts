
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rmessage_detailsService } from './npss_cs_rmessage_details.service';

@Component({
    selector: 'npss_cs_rmessage_details',
    templateUrl: './npss_cs_rmessage_details.component.html',
    styleUrls: ['./npss_cs_rmessage_details.component.css'],
    providers:[npss_cs_rmessage_detailsService]
})
export class npss_cs_rmessage_detailsComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rmessage_detailsService) { }
    ngOnInit() {
    }
}