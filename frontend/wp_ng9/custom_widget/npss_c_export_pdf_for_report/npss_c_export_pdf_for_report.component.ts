
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_export_pdf_for_reportService } from './npss_c_export_pdf_for_report.service';

@Component({
    selector: 'npss_c_export_pdf_for_report',
    templateUrl: './npss_c_export_pdf_for_report.component.html',
    styleUrls: ['./npss_c_export_pdf_for_report.component.css'],
    providers:[npss_c_export_pdf_for_reportService]
})
export class npss_c_export_pdf_for_reportComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_export_pdf_for_reportService) { }
    ngOnInit() {
    }
}