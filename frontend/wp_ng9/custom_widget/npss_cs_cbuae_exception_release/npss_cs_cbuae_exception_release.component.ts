
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_cbuae_exception_releaseService } from './npss_cs_cbuae_exception_release.service';

@Component({
    selector: 'npss_cs_cbuae_exception_release',
    templateUrl: './npss_cs_cbuae_exception_release.component.html',
    styleUrls: ['./npss_cs_cbuae_exception_release.component.css'],
    providers:[npss_cs_cbuae_exception_releaseService]
})
export class npss_cs_cbuae_exception_releaseComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_cbuae_exception_releaseService) { }
    ngOnInit() {
    }
}