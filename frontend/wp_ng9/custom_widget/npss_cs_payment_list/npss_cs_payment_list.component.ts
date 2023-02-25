
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_payment_listService } from './npss_cs_payment_list.service';

@Component({
    selector: 'npss_cs_payment_list',
    templateUrl: './npss_cs_payment_list.component.html',
    styleUrls: ['./npss_cs_payment_list.component.css'],
    providers:[npss_cs_payment_listService]
})
export class npss_cs_payment_listComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_payment_listService) { }
    ngOnInit() {
    }
}