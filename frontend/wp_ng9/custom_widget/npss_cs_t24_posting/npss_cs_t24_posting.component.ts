
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_t24_postingService } from './npss_cs_t24_posting.service';

@Component({
    selector: 'npss_cs_t24_posting',
    templateUrl: './npss_cs_t24_posting.component.html',
    styleUrls: ['./npss_cs_t24_posting.component.css'],
    providers:[npss_cs_t24_postingService]
})
export class npss_cs_t24_postingComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_t24_postingService) { }
    ngOnInit() {
    }
}