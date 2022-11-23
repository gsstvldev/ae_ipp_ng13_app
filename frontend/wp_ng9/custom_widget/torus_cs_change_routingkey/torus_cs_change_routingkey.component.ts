
import { Component, OnInit,Input } from '@angular/core';
import { torus_cs_change_routingkeyService } from './torus_cs_change_routingkey.service';

@Component({
    selector: 'torus_cs_change_routingkey',
    templateUrl: './torus_cs_change_routingkey.component.html',
    styleUrls: ['./torus_cs_change_routingkey.component.css'],
    providers:[torus_cs_change_routingkeyService]
})
export class torus_cs_change_routingkeyComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:torus_cs_change_routingkeyService) { }
    ngOnInit() {
    }
}