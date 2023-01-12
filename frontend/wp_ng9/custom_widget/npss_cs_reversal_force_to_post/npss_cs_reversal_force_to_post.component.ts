
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_reversal_force_to_postService } from './npss_cs_reversal_force_to_post.service';

@Component({
    selector: 'npss_cs_reversal_force_to_post',
    templateUrl: './npss_cs_reversal_force_to_post.component.html',
    styleUrls: ['./npss_cs_reversal_force_to_post.component.css'],
    providers:[npss_cs_reversal_force_to_postService]
})
export class npss_cs_reversal_force_to_postComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_reversal_force_to_postService) { }
    ngOnInit() {
    }
}