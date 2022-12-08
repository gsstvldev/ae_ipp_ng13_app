
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_sim_pack_008Service } from './npss_cs_sim_pack_008.service';

@Component({
    selector: 'npss_cs_sim_pack_008',
    templateUrl: './npss_cs_sim_pack_008.component.html',
    styleUrls: ['./npss_cs_sim_pack_008.component.css'],
    providers:[npss_cs_sim_pack_008Service]
})
export class npss_cs_sim_pack_008Component implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_sim_pack_008Service) { }
    ngOnInit() {
    }
}