
import { Component, OnInit,Input } from '@angular/core';
import { torus_cs_show_hideService } from './torus_cs_show_hide.service';

@Component({
    selector: 'torus_cs_show_hide',
    templateUrl: './torus_cs_show_hide.component.html',
    styleUrls: ['./torus_cs_show_hide.component.css'],
    providers:[torus_cs_show_hideService]
})
export class torus_cs_show_hideComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:torus_cs_show_hideService) { }
    ngOnInit() {
    }
}