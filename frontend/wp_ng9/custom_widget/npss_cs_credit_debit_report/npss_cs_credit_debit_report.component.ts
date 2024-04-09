
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_credit_debit_reportService } from './npss_cs_credit_debit_report.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';
//import * as pdfviewer from 'ng2-pdf-viewer'
@Component({
    selector: 'npss_cs_credit_debit_report',
    templateUrl: './npss_cs_credit_debit_report.component.html',
    styleUrls: ['./npss_cs_credit_debit_report.component.css'],
    providers:[npss_cs_credit_debit_reportService]
})
export class npss_cs_credit_debit_reportComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    pdfSrc:any
    subscription: Subscription;
    img_src:any
    constructor(private _service:npss_cs_credit_debit_reportService) { }
    ngOnInit() {
        try {
            if (this.screen_instance[this.comp_id].onChangecomponent) {
              this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                  this.handlechangecomponentevent(event)
                }
              })
            }
          } catch (error) {
            console.log("error------------>" + error)
            console.log(this.screen_instance)
            console.log("comp_id ---->" + this.comp_id)
          }
        }
        handlechangecomponentevent(event) {
          this.pdfSrc=event.data


        }
    }