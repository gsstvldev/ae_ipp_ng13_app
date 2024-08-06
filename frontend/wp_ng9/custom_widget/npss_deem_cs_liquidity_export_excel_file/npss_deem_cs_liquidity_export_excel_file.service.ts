import { Injectable } from '@angular/core';
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
import { saveAs } from 'file-saver';
import * as moment from 'moment-timezone';
import * as ExcelJS from 'exceljs/dist/exceljs.min.js';

@Injectable()
export class npss_deem_cs_liquidity_export_excel_fileService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_deem_cs_liquidity_export_excel_file(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        // let selectdate = screenInstance["search"].f_npss_view_camt053_srch.model.memory78.value;
        // let date = new Date(selectdate);
        // const padZero = (num) => num.toString().padStart(2, '0');
        // const formatDate = (date) => {
        //     const year = date.getUTCFullYear();
        //     const month = padZero(date.getUTCMonth() + 1);
        //     const day = padZero(date.getUTCDate());
        //     const hours = padZero(date.getUTCHours());
        //     const minutes = padZero(date.getUTCMinutes());
        //     const seconds = padZero(date.getUTCSeconds());
        //     const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
        //     return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
        // };
        // let S_date = formatDate(date);
        // console.log(S_date);
        let ClientParams: any = {};
        let S_date = screenInstance["search"].f_npss_view_camt053_srch.model.memory78.value;
        let S_date_operator = screenInstance["search"].f_npss_view_camt053_srch.model.memory78.operator
        let S_date_to_value = screenInstance["search"].f_npss_view_camt053_srch.model.memory78.tovalue
        ClientParams.screenName = screenInstance.wftpa_description
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NCS_ID");
        ClientParams.S_DATE = S_date
        ClientParams.S_DATE_OP = S_date_operator
        ClientParams.S_DATE_TO_VALUE = S_date_to_value
        this.CallUrlforGetparamvalue(ClientParams, screenInstance, internals);
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_deem_cs_liquidity_export_excel_file/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS") {
                    let wb = new ExcelJS.Workbook();
                    let workbookName = screenInstance.wftpa_description + '_' + moment().format('DDMMYYYY') + '_' + moment().format('HHMMSS') + '.xlsx'
                    let worksheetName = screenInstance.wftpa_description;
                    let ws = wb.addWorksheet(worksheetName);
                    ws.columns = res.data.header
                    ws.getRow(1).font = { bold: true };
                    ws.addRows(res.data.col);
                    wb.xlsx.writeBuffer().then(function (buffer) {
                        saveAs(
                            new Blob([buffer], { type: 'application/octet-stream' }),
                            workbookName
                        );
                    });
                }
                else {
                    this.dialogHelper.ShowInfoDialog(res.data.status);

                }
            });
    }
}