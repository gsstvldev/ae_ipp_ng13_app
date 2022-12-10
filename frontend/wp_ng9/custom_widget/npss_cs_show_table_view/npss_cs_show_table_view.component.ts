
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_show_table_viewService } from './npss_cs_show_table_view.service';

@Component({
    selector: 'npss_cs_show_table_view',
    templateUrl: './npss_cs_show_table_view.component.html',
    styleUrls: ['./npss_cs_show_table_view.component.css'],
    providers:[npss_cs_show_table_viewService]
})
export class npss_cs_show_table_viewComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_show_table_viewService) { }
    ngOnInit() {
    }
}