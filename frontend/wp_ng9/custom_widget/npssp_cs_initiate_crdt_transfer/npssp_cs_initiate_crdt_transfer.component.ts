
import { Component, OnInit,Input } from '@angular/core';
import { npssp_cs_initiate_crdt_transferService } from './npssp_cs_initiate_crdt_transfer.service';

@Component({
    selector: 'npssp_cs_initiate_crdt_transfer',
    templateUrl: './npssp_cs_initiate_crdt_transfer.component.html',
    styleUrls: ['./npssp_cs_initiate_crdt_transfer.component.css'],
    providers:[npssp_cs_initiate_crdt_transferService]
})
export class npssp_cs_initiate_crdt_transferComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npssp_cs_initiate_crdt_transferService) { }
    ngOnInit() {
    }
}