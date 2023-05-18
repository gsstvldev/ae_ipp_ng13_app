
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_cbuae_exception_holdService } from './npss_cs_cbuae_exception_hold.service';

@Component({
    selector: 'npss_cs_cbuae_exception_hold',
    templateUrl: './npss_cs_cbuae_exception_hold.component.html',
    styleUrls: ['./npss_cs_cbuae_exception_hold.component.css'],
    providers:[npss_cs_cbuae_exception_holdService]
})
export class npss_cs_cbuae_exception_holdComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_cbuae_exception_holdService) { }
    ngOnInit() {
    }
}