
import { Component, OnInit,Input } from '@angular/core';
import { npss_cs_lca_acc_entries_exceptionService } from './npss_cs_lca_acc_entries_exception.service';

@Component({
    selector: 'npss_cs_lca_acc_entries_exception',
    templateUrl: './npss_cs_lca_acc_entries_exception.component.html',
    styleUrls: ['./npss_cs_lca_acc_entries_exception.component.css'],
    providers:[npss_cs_lca_acc_entries_exceptionService]
})
export class npss_cs_lca_acc_entries_exceptionComponent implements OnInit {
    @Input() screen_instance: any = {};
    @Input() comp_id: string;
    constructor(private _service:npss_cs_lca_acc_entries_exceptionService) { }
    ngOnInit() {
    }
}