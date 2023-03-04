
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_rev_rejectService } from './npss_cs_rev_reject.service';

@Component({
    selector: 'npss_cs_rev_reject',
    templateUrl: './npss_cs_rev_reject.component.html',
    styleUrls: ['./npss_cs_rev_reject.component.css'],
    providers:[npss_cs_rev_rejectService]
})
export class npss_cs_rev_rejectComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_rev_rejectService) { }
    ngOnInit() {
    }
}