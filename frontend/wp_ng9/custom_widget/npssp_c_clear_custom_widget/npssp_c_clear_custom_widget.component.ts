
import { Component, OnInit,Input } from '@angular/core';
import { npssp_c_clear_custom_widgetService } from './npssp_c_clear_custom_widget.service';

@Component({
    selector: 'npssp_c_clear_custom_widget',
    templateUrl: './npssp_c_clear_custom_widget.component.html',
    styleUrls: ['./npssp_c_clear_custom_widget.component.css'],
    providers:[npssp_c_clear_custom_widgetService]
})
export class npssp_c_clear_custom_widgetComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npssp_c_clear_custom_widgetService) { }
    ngOnInit() {
    }
}