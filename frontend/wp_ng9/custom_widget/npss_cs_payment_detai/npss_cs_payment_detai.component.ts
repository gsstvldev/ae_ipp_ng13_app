
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_payment_detaiService } from './npss_cs_payment_detai.service';

@Component({
    selector: 'npss_cs_payment_detai',
    templateUrl: './npss_cs_payment_detai.component.html',
    styleUrls: ['./npss_cs_payment_detai.component.css'],
    providers:[npss_cs_payment_detaiService]
})
export class npss_cs_payment_detaiComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_payment_detaiService) { }
    ngOnInit() {
    }
}