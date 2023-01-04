
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_retrieve_contactService } from './npss_cs_retrieve_contact.service';

@Component({
    selector: 'npss_cs_retrieve_contact',
    templateUrl: './npss_cs_retrieve_contact.component.html',
    styleUrls: ['./npss_cs_retrieve_contact.component.css'],
    providers:[npss_cs_retrieve_contactService]
})
export class npss_cs_retrieve_contactComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_retrieve_contactService) { }
    ngOnInit() {
    }
}