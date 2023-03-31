
import { Component, OnInit,Input } from '@angular/core';
import { npss_c_qr_code_generatorService } from './npss_c_qr_code_generator.service';
import { Options } from 'ngx-qrcode-styling';
import {
    NgxQrcodeStylingComponent,
    NgxQrcodeStylingService,
} from 'ngx-qrcode-styling';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';

import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'npss_c_qr_code_generator',
    templateUrl: './npss_c_qr_code_generator.component.html',
    styleUrls: ['./npss_c_qr_code_generator.component.css'],
    providers:[npss_c_qr_code_generatorService]
})
export class npss_c_qr_code_generatorComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    modelview: any
    qrvalue: any
    enable:boolean=false
    ShowPopup: boolean = false;
    subscription: Subscription;
    constructor(private _service:npss_c_qr_code_generatorService, private httpHelper: HttphelperService,
        private sessionHelper: SessionService) { }
        ngOnInit() {     
            this.enable=false;  
          if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
                next: (event: any) => {
                    this.handlechangecomponentevent(event)
                }
            }) 
        }
    
        }
        handlechangecomponentevent(event) {
            this.ShowPopup = true;
            if (event.eventId === 'custom-connector') {
                this.enable=true
                this.qrvalue = event.param
                 
            }
        }
    
        
    
        cancel(){
            this.ShowPopup = false;
            this.enable=false 
            this.qrvalue = ""
        }
}