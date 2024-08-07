
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;
import * as moment from 'moment-timezone';                  
@Injectable()
export class npss_deem_cs_liquidity_export_pdfService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_deem_cs_liquidity_export_pdf(source_id,destn_id,parent_source_id,event_code,event_params,screenInstance,internals,handler_code,event_data,data_source){
        let ClientParams: any = {}; let SearchParams: any={}; let Search:any = screenInstance['search'].f_npss_view_camt053_srch.model
        SearchParams.dateoperator = Search.memory78.operator
        SearchParams.dateoperatorvalue = Search.memory78.value
        SearchParams.dateoperatorTovalue = Search.memory78.tovalue
        
        SearchParams.acctoperator = Search.ACCT_ID.operator
        SearchParams.acctoperatorvalue = Search.ACCT_ID.value

        SearchParams.hdrmsdoperator = Search.HDR_MSG_ID.operator
        SearchParams.hdrmsdoperatorvalue = Search.HDR_MSG_ID.value

        SearchParams.stmtfromoperator = Search.STMT_FROM_TO_DATE_TIME.operator
        SearchParams.stmtfromoperatorvalue = Search.STMT_FROM_TO_DATE_TIME.value
        SearchParams.stmtfromoperatorTovalue = Search.STMT_FROM_TO_DATE_TIME.tovalue

        SearchParams.stmttooperator = Search.STMT_TO_DATE_TIME.operator
        SearchParams.stmttooperatorvalue = Search.STMT_TO_DATE_TIME.value
        SearchParams.stmttooperatorTovalue = Search.STMT_TO_DATE_TIME.tovalue

        SearchParams.stmtidoperator = Search.STMT_ID.operator
        SearchParams.stmtidoperatorvalue = Search.STMT_ID.value

        SearchParams.uetroperator = Search.UETR.operator
        SearchParams.uetroperatorvalue = Search.UETR.value

        SearchParams.txnidoperator = Search.TXN_ID.operator
        SearchParams.txnidoperatorvalue = Search.TXN_ID.value
        
        ClientParams.screenName = screenInstance.wftpa_description
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NCS_ID");
        ClientParams.searchparams = SearchParams
        this.CallUrlforGetparamvalue(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
       // return callback();
    //}
//Service logics
CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_deem_cs_liquidity_export_pdf/', ClientParams)
        .subscribe((res: any) => {
            if (res.data.status == "SUCCESS") {  
                pdfmake.createPdf(res.data.data).download(res.data.screenName);
            }  
            else {
                this.dialogHelper.ShowInfoDialog(res.data.status);

            }
        });
}
}