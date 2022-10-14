
import { Component, OnInit,Input } from '@angular/core';
import { npssp_cs_tran_insertService } from './npssp_cs_tran_insert.service';

@Component({
    selector: 'npssp_cs_tran_insert',
    templateUrl: './npssp_cs_tran_insert.component.html',
    styleUrls: ['./npssp_cs_tran_insert.component.css'],
    providers:[npssp_cs_tran_insertService]
})
export class npssp_cs_tran_insertComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npssp_cs_tran_insertService) { }
    ngOnInit() {
    }
}