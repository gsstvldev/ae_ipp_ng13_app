
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_manual_unfreeze_send_to_makerService } from './npss_cs_manual_unfreeze_send_to_maker.service';

@Component({
    selector: 'npss_cs_manual_unfreeze_send_to_maker',
    templateUrl: './npss_cs_manual_unfreeze_send_to_maker.component.html',
    styleUrls: ['./npss_cs_manual_unfreeze_send_to_maker.component.css'],
    providers:[npss_cs_manual_unfreeze_send_to_makerService]
})
export class npss_cs_manual_unfreeze_send_to_makerComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_manual_unfreeze_send_to_makerService) { }
    ngOnInit() {
    }
}