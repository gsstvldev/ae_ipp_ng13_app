
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_find_messageService } from './npss_cs_find_message.service';

@Component({
    selector: 'npss_cs_find_message',
    templateUrl: './npss_cs_find_message.component.html',
    styleUrls: ['./npss_cs_find_message.component.css'],
    providers:[npss_cs_find_messageService]
})
export class npss_cs_find_messageComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_find_messageService) { }
    ngOnInit() {
    }
}