
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_credit_debit_reportService } from './npss_cs_credit_debit_report.service';

@Component({
    selector: 'npss_cs_credit_debit_report',
    templateUrl: './npss_cs_credit_debit_report.component.html',
    styleUrls: ['./npss_cs_credit_debit_report.component.css'],
    providers:[npss_cs_credit_debit_reportService]
})
export class npss_cs_credit_debit_reportComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_credit_debit_reportService) { }
    ngOnInit() {
    }
}