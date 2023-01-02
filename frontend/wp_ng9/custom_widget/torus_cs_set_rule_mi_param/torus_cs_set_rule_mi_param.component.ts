
import { Component, OnInit,Input } from '@angular/core';
import { torus_cs_set_rule_mi_paramService } from './torus_cs_set_rule_mi_param.service';

@Component({
    selector: 'torus_cs_set_rule_mi_param',
    templateUrl: './torus_cs_set_rule_mi_param.component.html',
    styleUrls: ['./torus_cs_set_rule_mi_param.component.css'],
    providers:[torus_cs_set_rule_mi_paramService]
})
export class torus_cs_set_rule_mi_paramComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:torus_cs_set_rule_mi_paramService) { }
    ngOnInit() {
    }
}