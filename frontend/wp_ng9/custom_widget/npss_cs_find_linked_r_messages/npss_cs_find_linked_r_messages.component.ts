
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_find_linked_r_messagesService } from './npss_cs_find_linked_r_messages.service';

@Component({
    selector: 'npss_cs_find_linked_r_messages',
    templateUrl: './npss_cs_find_linked_r_messages.component.html',
    styleUrls: ['./npss_cs_find_linked_r_messages.component.css'],
    providers:[npss_cs_find_linked_r_messagesService]
})
export class npss_cs_find_linked_r_messagesComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_find_linked_r_messagesService) { }
    ngOnInit() {
    }
}