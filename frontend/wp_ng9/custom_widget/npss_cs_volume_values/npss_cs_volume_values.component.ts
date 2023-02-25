
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_volume_valuesService } from './npss_cs_volume_values.service';

@Component({
    selector: 'npss_cs_volume_values',
    templateUrl: './npss_cs_volume_values.component.html',
    styleUrls: ['./npss_cs_volume_values.component.css'],
    providers:[npss_cs_volume_valuesService]
})
export class npss_cs_volume_valuesComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_volume_valuesService) { }
    ngOnInit() {
    }
}