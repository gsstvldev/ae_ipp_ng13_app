
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_home_dashboars_tittleService } from './npss_cs_home_dashboars_tittle.service';


@Component({
    selector: 'npss_cs_home_dashboars_tittle',
    templateUrl: './npss_cs_home_dashboars_tittle.component.html',
    styleUrls: ['./npss_cs_home_dashboars_tittle.component.css'],
    providers:[npss_cs_home_dashboars_tittleService]
})
export class npss_cs_home_dashboars_tittleComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    
    constructor(private _service:npss_cs_home_dashboars_tittleService) { }
    ngOnInit() {
        
    }
  
    
}