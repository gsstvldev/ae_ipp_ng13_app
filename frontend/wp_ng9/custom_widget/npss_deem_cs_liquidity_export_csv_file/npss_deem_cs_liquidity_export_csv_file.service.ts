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
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { SCOPE } from '../../scripts/fx/session.enum'; // get Scope for Session level
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as moment from 'moment-timezone';

@Injectable()
export class npss_deem_cs_liquidity_export_csv_fileService {
    constructor(private httpHelper: HttphelperService, private dialogHelper: DialogService, private coreHelper: CoreService,) { }
    //Default calling function
    fn_npss_deem_cs_liquidity_export_csv_file(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let clientObj = this.findMysearchContn(screenInstance)

        this.httpHelper.HttpPost('/microsvc/npss_deem_cs_liquidity_export_csv_file/', clientObj)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS") {
                    if (res.data.data.length > 0) {
                        let arr = res.data.data
                        let filename = screenInstance.wftpa_description + '_' + moment().format('DDMMYYYY') + '_' + moment().format('HHMMSS') 
                        //let filename = screenInstance.wftpa_description
                        this.exportToCsv(arr, filename)
                    } else {
                        this.dialogHelper.ShowErrorDialog('No Date Found');
                    }

                } else {
                    this.dialogHelper.ShowErrorDialog('No Date Found');
                }
            })
    }
    findMysearchContn(screenInstance) {
        let S_date = screenInstance["search"].f_npss_view_camt053_srch.model.memory78.value
        let S_date_operator = screenInstance["search"].f_npss_view_camt053_srch.model.memory78.operator
        let S_date_to_value = screenInstance["search"].f_npss_view_camt053_srch.model.memory78.tovalue
        let Msg_id = screenInstance["search"].f_npss_view_camt053_srch.model.HDR_MSG_ID.value
        let Msg_id_opt = screenInstance["search"].f_npss_view_camt053_srch.model.HDR_MSG_ID.operator
        let std_id = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_ID.value
        let std_id_opr = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_ID.operator
        let std_from_opr = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_FROM_TO_DATE_TIME.operator
        let std_from_val = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_FROM_TO_DATE_TIME.value
        let std_from_toval = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_FROM_TO_DATE_TIME.tovalue
        let std_to_opr = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_TO_DATE_TIME.operator
        let std_to_val = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_TO_DATE_TIME.value
        let std_to_toval = screenInstance["search"].f_npss_view_camt053_srch.model.STMT_TO_DATE_TIME.tovalue
        let uetr_opr = screenInstance["search"].f_npss_view_camt053_srch.model.UETR.operator
        let uetr_val = screenInstance["search"].f_npss_view_camt053_srch.model.UETR.value
        let transac_id_opr = screenInstance["search"].f_npss_view_camt053_srch.model.TXN_ID.operator
        let transac_id_val = screenInstance["search"].f_npss_view_camt053_srch.model.TXN_ID.value
        let acc_id_opr = screenInstance["search"].f_npss_view_camt053_srch.model.ACCT_ID.operator
        let acc_id_val = screenInstance["search"].f_npss_view_camt053_srch.model.ACCT_ID.value
        let ClientParams: any = {};
        ClientParams.Tran_Id = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NCS_ID");
        ClientParams.S_DATE = this.convertdate(S_date)
        ClientParams.S_DATE_OP = S_date_operator
        ClientParams.S_DATE_TO_VALUE = this.convertdate(S_date_to_value)
        ClientParams.S_MSG_ID = Msg_id
        ClientParams.S_MSG_ID_OPT = Msg_id_opt
        ClientParams.S_STD_ID = std_id
        ClientParams.S_STD_ID_OPR = std_id_opr
        ClientParams.S_STD_FROM_OPR = std_from_opr
        ClientParams.S_STD_FROM_VAL = this.convertdate(std_from_val)
        ClientParams.S_STD_FROM_TOVAL = this.convertdate(std_from_toval)
        ClientParams.S_STD_TO_OPR = std_to_opr
        ClientParams.S_STD_TO_VAL = this.convertdate(std_to_val)
        ClientParams.S_STD_TO_TOVAL = this.convertdate(std_to_toval)
        ClientParams.S_UETR_OPR = uetr_opr
        ClientParams.S_UETR_VAL = uetr_val
        ClientParams.S_TRANSAC_ID_OPR = transac_id_opr
        ClientParams.S_TRANSAC_ID_VAL = transac_id_val
        ClientParams.S_ACC_ID_OPR = acc_id_opr
        ClientParams.S_ACC_ID_VAL = acc_id_val
        // let ctrlscope = screenInstance["search"].f_npss_view_camt053_srch.model;
        // let ctrlkeys = Object.keys(ctrlscope)
        // for (let key of ctrlkeys) {
        //     if (ctrlscope[key].value) {
        //         ClientParams[`s_${key}`] = key
        //         ClientParams[`s_${key}_operator`] = ctrlscope[key].operator
        //         ClientParams[`s_${key}_value`] = ctrlscope[key].value
        //     }

        // }
        ClientParams.screenName = screenInstance.wftpa_description
        return ClientParams;
    }
    private saveAsFile(buffer: any, fileName: string, fileType: string): void {
        const data: Blob = new Blob([buffer], { type: fileType });
        FileSaver.saveAs(data, fileName);
    }
    public exportToCsv(rows: object[], fileName: string, columns?: string[]) {
        let CSV_EXTENSION = '.csv'
        let CSV_TYPE = 'hi'
        if (!rows || !rows.length) {
            return;
        }
        const separator = ',';
        const keys = Object.keys(rows[0]).filter(k => {
            if (columns?.length) {
                return columns.includes(k);
            } else {
                return true;
            }
        });
        const csvContent =
            keys.join(separator).toUpperCase() +
            '\n' +
            rows.map(row => {
                return keys.map(k => {
                    let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                    cell = cell instanceof Date
                        ? cell.toLocaleString()
                        : cell.toString().replace(/"/g, '""');
                    if (cell.search(/("|,|\n)/g) >= 0) {
                        cell = `"${cell}"`;
                    }
                    return cell;
                }).join(separator);
            }).join('\n');
        this.saveAsFile(csvContent, `${fileName}${CSV_EXTENSION}`, CSV_TYPE);
    }

    convertdate(mydate) {
        if (mydate != '') {
            return moment(mydate).format('YYYY-MM-DD')
        } else {
            return ''
        }
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}