
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_qr_code_generatorService } from './npss_c_qr_code_generator.service';

@Component({
    selector: 'npss_c_qr_code_generator',
    templateUrl: './npss_c_qr_code_generator.component.html',
    styleUrls: ['./npss_c_qr_code_generator.component.css'],
    providers:[npss_c_qr_code_generatorService]
})
export class npss_c_qr_code_generatorComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_c_qr_code_generatorService) { }
    ngOnInit() {
    }
}