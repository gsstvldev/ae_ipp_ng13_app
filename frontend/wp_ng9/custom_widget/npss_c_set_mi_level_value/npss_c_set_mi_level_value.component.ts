
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_set_mi_level_valueService } from './npss_c_set_mi_level_value.service';

@Component({
    selector: 'npss_c_set_mi_level_value',
    templateUrl: './npss_c_set_mi_level_value.component.html',
    styleUrls: ['./npss_c_set_mi_level_value.component.css'],
    providers:[npss_c_set_mi_level_valueService]
})
export class npss_c_set_mi_level_valueComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_set_mi_level_valueService) { }
    ngOnInit() {
    }
}