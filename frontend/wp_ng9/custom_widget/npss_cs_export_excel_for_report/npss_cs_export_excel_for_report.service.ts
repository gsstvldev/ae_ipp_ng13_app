
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
export class npss_cs_export_excel_for_reportService {
    constructor(private httpHelper: HttphelperService,   private sessionHelper: SessionService, private dialogHelper: DialogService, private apphandler: AppHandlerService) { }
    //Default calling function
    fn_npss_cs_export_excel_for_report(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let roleId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_USER_ROLES");
        let databinding: any = []
        let filter: any = []
        let search: any
        let searchParam: any = []
        let wftrpDesc = screenInstance.wftpa_description
        let eventCode:string;

        databinding = JSON.stringify(screenInstance.list.bind_param.dsInfo.databinding)
        if (roleId!="730" &&(screenInstance.wftpa_description=='s_outward_transactions_details' || screenInstance.wftpa_description=='s_inward_transactions_details' )) {//Manager
            searchParam = JSON.stringify(screenInstance.cc_from_search.search_params)
            eventCode=  Object.keys( screenInstance.list['datasource'])[1].toUpperCase()
          
        }
        else {
            searchParam = JSON.stringify(screenInstance.cc_for_control.search_params)
            eventCode=  Object.keys( screenInstance.list['datasource'])[0].toUpperCase()
        }
        //searchParam =JSON.stringify(screenInstance.cc_for_control.search_params)
        filter = JSON.stringify(screenInstance.list.bind_param.dsInfo.filter)

        let params = {
            "ACTION_DESC": screenInstance.wftpa_description.toUpperCase(),
            "APP_USER_ROLES": screenInstance.handler.sessionService.Session_Values.SESSION_LEVEL.APP_USER_ROLES,
            "DATA_BINDINGS": databinding,
            "DS_CODE": screenInstance.list.bind_param.dsInfo.ds_eligible,
            "DTT_CODE": screenInstance.list.bind_param.dsInfo.dtt_code,
            "DT_CATEGORY": "",
            "DT_CODE": screenInstance.list.bind_param.dsInfo.dt_code,
            "EVENT_CODE": eventCode,
            "FILTERS": filter,
            "HANDLER_CODE": handler_code,
            "IS_TREEVIEW": "",
            "KEY_COLUMN": "",
            "KEY_VALUE": 0,
            "L_CODE": "en",
            "ListingMode": undefined,
            "LockingMode": undefined,
            "LockingParameter": undefined,
            "MENU_ITEM_DESC": screenInstance.wftpa_description.toUpperCase(),
            "PAGENO": 0,
            "RECORDS_PER_PAGE": "",
            "ROUTINGKEYELEMENTID": "transactions_list",
            "SEARCHPARAMS": searchParam,
            "SOLR_SEARCH_NAME": "",
            "UICGC_CODE": undefined,
            "UICG_CODE": screenInstance.cg_code,
            "VWFTPA_ID": screenInstance.wftpa_id,
            "WFTPA_ID": screenInstance.wftpa_id
        }
        this.httpHelper.HttpPost('/Handler/GetWFSelect', params)
            .subscribe((result: any) => {
                var event
                if (Object.keys(result.data).length > 0 && result.data.RowData != '') {

                    let param = {
                        data: JSON.parse(result.data.RowData),
                        header: JSON.parse(params.DATA_BINDINGS),
                        LockingMode: "",
                        PagingData: result.data.PagingData || ""

                    }
                    let dataBind = JSON.parse(params.DATA_BINDINGS)
                    let header = []
                    for (let i = 0; i < dataBind.length; i++) {
                        let headerCol: any = {}
                        headerCol.key = dataBind[i]['target_column'].toLowerCase()
                        headerCol.header = dataBind[i]['header'].toUpperCase()
                        headerCol.width = 30
                        headerCol.style = {
                            alignment: { vertical: 'top', horizontal: dataBind[i]['alignment'].toLowerCase(), wrapText: true }
                        },
                            header.push(headerCol)

                        //  header.push(dataBind[i]['target_column'].toLowerCase())
                    }
                    let rowIp = JSON.parse(result.data.RowData)
                    let RowValues = []
                    for (let i = 0; i < rowIp.length; i++) {
                        let Colobj = {}
                        let colValue = Object.keys(rowIp[0])
                        for (let k = 0; k < colValue.length; k++) {
                            Colobj[colValue[k]] = rowIp[i][colValue[k]]
                        }

                        RowValues.push(Colobj)
                    }

                    let wb = new ExcelJS.Workbook();
                    let workbookName = params.ACTION_DESC.toLowerCase().split('_').slice(1).join('_') + '_' + moment().format('DDMMYYYY') + '_' + moment().format('HHMMSS') + '.xlsx'
                    let worksheetName = params.ACTION_DESC.toLowerCase().split('_').slice(1).join('_');
                    let ws = wb.addWorksheet(worksheetName);

                    const title = 'NPSS Report';
                    let titleRow = ws.addRow([title]);
                    ws.columns = header
                    ws.getRow(2).font = { bold: true };
                    ws.addRows(RowValues);

                    let firstRowData = []; // Array to store data from the first row

                    // Read the contents of the first row
                    ws.eachRow({ includeEmpty: true }, function (row, rowNumber) {
                        if (rowNumber === 1) {
                            // Store data from the first row
                            row.eachCell({ includeEmpty: true }, function (cell, colNumber) {
                                firstRowData.push(cell.value);
                            });
                        } else if (rowNumber === 2) {
                            // Clear the contents of the second row
                            row.eachCell(function (cell) {
                                cell.value = null;
                            });
                        } else if (rowNumber > 2) {
                            // If there are subsequent rows, we can break the loop
                            return false;
                        }
                    });

                    // Write the contents of the first row to the second row
                    ws.getRow(2).values = firstRowData;
                    ws.getRow(1).values = [params.ACTION_DESC.split('_').slice(1).join(' ')]
                    ws.getRow(1).font = { bold: true };
                    ws.mergeCells('A1:E1');



                    // Set the value and styling for the merged cell
                    //ws.getCell('A1').value = 'NPSS Report';
                    ws.getCell('A1').font = { bold: true, size: 16 };
                    ws.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' };

                    wb.xlsx.writeBuffer().then(function (buffer) {
                        saveAs(
                            new Blob([buffer], { type: 'application/octet-stream' }),
                            workbookName
                        );
                    });


                } else {
                    this.dialogHelper.ShowInfoDialog('No Data found to Export');

                }
            });

    }

    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}