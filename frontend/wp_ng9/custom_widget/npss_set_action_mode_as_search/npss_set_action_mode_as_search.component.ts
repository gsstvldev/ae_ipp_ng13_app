
import { Component, OnInit,Input } from '@angular/core';
import { npss_set_action_mode_as_searchService } from './npss_set_action_mode_as_search.service';

@Component({
    selector: 'npss_set_action_mode_as_search',
    templateUrl: './npss_set_action_mode_as_search.component.html',
    styleUrls: ['./npss_set_action_mode_as_search.component.css'],
    providers:[npss_set_action_mode_as_searchService]
})
export class npss_set_action_mode_as_searchComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_set_action_mode_as_searchService) { }
    ngOnInit() {
    }
}