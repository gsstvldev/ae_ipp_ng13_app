
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_check_hdrService } from './npss_cs_check_hdr.service';

@Component({
    selector: 'npss_cs_check_hdr',
    templateUrl: './npss_cs_check_hdr.component.html',
    styleUrls: ['./npss_cs_check_hdr.component.css'],
    providers:[npss_cs_check_hdrService]
})
export class npss_cs_check_hdrComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_check_hdrService) { }
    ngOnInit() {
    }
}