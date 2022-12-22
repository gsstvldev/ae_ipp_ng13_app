
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_shop_enrolmentService } from './npss_cs_shop_enrolment.service';

@Component({
    selector: 'npss_cs_shop_enrolment',
    templateUrl: './npss_cs_shop_enrolment.component.html',
    styleUrls: ['./npss_cs_shop_enrolment.component.css'],
    providers:[npss_cs_shop_enrolmentService]
})
export class npss_cs_shop_enrolmentComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_shop_enrolmentService) { }
    ngOnInit() {
    }
}