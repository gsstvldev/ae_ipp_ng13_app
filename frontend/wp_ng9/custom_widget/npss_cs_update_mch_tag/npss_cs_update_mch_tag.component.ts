
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_update_mch_tagService } from './npss_cs_update_mch_tag.service';

@Component({
    selector: 'npss_cs_update_mch_tag',
    templateUrl: './npss_cs_update_mch_tag.component.html',
    styleUrls: ['./npss_cs_update_mch_tag.component.css'],
    providers:[npss_cs_update_mch_tagService]
})
export class npss_cs_update_mch_tagComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_update_mch_tagService) { }
    ngOnInit() {
    }
}