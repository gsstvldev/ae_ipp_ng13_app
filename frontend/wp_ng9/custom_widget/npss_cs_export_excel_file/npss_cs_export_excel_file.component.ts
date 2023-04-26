
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_export_excel_fileService } from './npss_cs_export_excel_file.service';

@Component({
    selector: 'npss_cs_export_excel_file',
    templateUrl: './npss_cs_export_excel_file.component.html',
    styleUrls: ['./npss_cs_export_excel_file.component.css'],
    providers:[npss_cs_export_excel_fileService]
})
export class npss_cs_export_excel_fileComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_export_excel_fileService) { }
    ngOnInit() {
    }
}