
import { Component, OnInit,Input } from '@angular/core';
import { npssp_cs_acceptService } from './npssp_cs_accept.service';

@Component({
    selector: 'npssp_cs_accept',
    templateUrl: './npssp_cs_accept.component.html',
    styleUrls: ['./npssp_cs_accept.component.css'],
    providers:[npssp_cs_acceptService]
})
export class npssp_cs_acceptComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npssp_cs_acceptService) { }
    ngOnInit() {
    }
}