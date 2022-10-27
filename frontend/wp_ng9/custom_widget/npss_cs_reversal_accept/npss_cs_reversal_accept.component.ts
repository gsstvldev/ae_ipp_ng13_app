
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_reversal_acceptService } from './npss_cs_reversal_accept.service';

@Component({
    selector: 'npss_cs_reversal_accept',
    templateUrl: './npss_cs_reversal_accept.component.html',
    styleUrls: ['./npss_cs_reversal_accept.component.css'],
    providers:[npss_cs_reversal_acceptService]
})
export class npss_cs_reversal_acceptComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_reversal_acceptService) { }
    ngOnInit() {
    }
}