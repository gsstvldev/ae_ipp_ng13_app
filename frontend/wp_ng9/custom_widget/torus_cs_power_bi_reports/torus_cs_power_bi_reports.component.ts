
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { torus_cs_power_bi_reportsService } from './torus_cs_power_bi_reports.service';

@Component({
    selector: 'torus_cs_power_bi_reports',
    templateUrl: './torus_cs_power_bi_reports.component.html',
    styleUrls: ['./torus_cs_power_bi_reports.component.css'],
    providers:[torus_cs_power_bi_reportsService]
})
export class torus_cs_power_bi_reportsComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    rpturl: string
    @ViewChild('powerbi') powerbi: ElementRef;
    subscription
    nativelemnt
    constructor(private _service:torus_cs_power_bi_reportsService) { }
    ngOnInit() {
      this.screen_instance[this.comp_id].onChangecomponent.subscribe({
            next: (event: any) => {
                this.handlechangecomponentevent(event)
            }
        })
    }
     ngAfterViewInit() {
        this.nativelemnt = this.powerbi.nativeElement
    }

    handlechangecomponentevent(url) {
        this.rpturl = url;
        this.nativelemnt.src = url
    }
}