
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
    constructor(private httpHelper: HttphelperService,private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_export_excel_for_report(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let databinding: any = []
        let filter: any = []
        let search: any
        let searchParam: any = []
        let wftrpDesc = screenInstance.wftpa_description
        switch (wftrpDesc) {
            case 's_outward_transactions_details':

                databinding = [
                    {
                        "header": "Department Name",
                        "target_column": "DEPARTMENT_NAME",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Transaction Amount Range",
                        "target_column": "INTRBK_STTLM_AMNT",
                        "alias_name": "",
                        "alignment": "Right",
                        "width": "",
                        "format": "CURRENCY:د.إ",
                        "date_format": false,
                        "currency_format": true
                    },
                    {
                        "header": "Transaction Date Range",
                        "target_column": "CREATED_DATE",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "date:\"dd-MM-yyyy HH:mm:ss\"",
                        "date_format": true
                    },
                    {
                        "header": "Purpose Code",
                        "target_column": "PURPOSE_CODES",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Sender Reference Number",
                        "target_column": "CHANNEL_REFNO",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Debtor Name",
                        "target_column": "DBTR_ACCT_NAME",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Debtor Card Number",
                        "target_column": "DBTR_IBAN",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Creditor Account",
                        "target_column": "CDTR_IBAN",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Creditor Card Number",
                        "target_column": "CR_ACCT_IDENTIFICATION",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Creditor Name",
                        "target_column": "CDTR_ACCT_NAME",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Beneficiary Bank",
                        "target_column": "BENEFICIARY_BANK",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Transaction Status",
                        "target_column": "STATUS",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Source Channel",
                        "target_column": "CHANNEL_ID",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Transaction Date",
                        "target_column": "VALUE_DATE",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "date:\"dd-MM-yyyy HH:mm:ss\"",
                        "date_format": true
                    },
                    {
                        "header": "UETR",
                        "target_column": "UETR",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Core bank Error",
                        "target_column": "CORE_BANK_ERRORS",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "CB Error",
                        "target_column": "CB_ERRORS",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "End to End ID",
                        "target_column": "END_TO_END_ID",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Transaction ID",
                        "target_column": "TRANSACTION_ID",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "FT/CI Reference Number",
                        "target_column": "FT_CI_REFERENCE_NUMBER",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Clrsysrefno",
                        "target_column": "CLRSYSREF",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Category Purpose Code",
                        "target_column": "CATEGORY_PURPOSE",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Maker",
                        "target_column": "MAKER",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    },
                    {
                        "header": "Checker",
                        "target_column": "CHECKER",
                        "alias_name": "",
                        "alignment": "Left",
                        "width": "",
                        "format": "",
                        "date_format": false
                    }
                ]
                filter = [
                    {
                        "filter_name": "TENANT_ID",
                        "binding_name": "TENANT_ID",
                        "binding_value": "",
                        "source_name": "TENANT_ID",
                        "source_value": "",
                        "source_type": "SESSION_LEVEL",
                        "oprtr": "=",
                        "data_type": "TEXT",
                        "conj_operator": "",
                        "group_no": ""
                    }
                ]
                search = screenInstance["search"].f_npss_outward_transaction_details_report_srch.model;
                searchParam = [{
                    "BINDING_NAME": "PROCESS_NAME",
                    "VALUE": search.memory119 || '',
                    //"VALUE":'',
                    "TOVALUE": "",
                    "OPERATOR": "=",
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CBO"

                }, {
                    "BINDING_NAME": "STATUS",
                    "VALUE": search.memory75 || '',
                    "TOVALUE": "",
                    "OPERATOR": "=",
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CBO"
                }, {
                    "BINDING_NAME": "DEPARTMENT_CODE",
                    "VALUE": search.DEPARTMENT_CODE || '',
                    //"VALUE":'',
                    "TOVALUE": "",
                    "OPERATOR": "=",
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CBO"

                }, {
                    "BINDING_NAME": "CREATED_DATE",
                    "VALUE": search.memory63.value || '',
                    "TOVALUE": "",
                    "OPERATOR":search.memory63 .operator||'=',
                    "DATA_TYPE": "DATETIME",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_DATE"

                }, {
                    "BINDING_NAME": "VALUE_DATE",
                    "VALUE": search.VALUE_DATE .value|| '',
                    "TOVALUE": "",
                    "OPERATOR":search.VALUE_DATE .operator||'=',
                    "DATA_TYPE": "DATETIME",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_DATE"

                }, {
                    "BINDING_NAME": "API_SUCCESS_FAILURE",
                    "VALUE": search.memory141 || '',
                    "TOVALUE": "",
                    "OPERATOR": "=",
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CBO"

                }, {
                    "BINDING_NAME": "DBTR_IBAN",
                    "VALUE": search.DBTR_IBAN.value || '',
                    // "VALUE":'',
                    "TOVALUE": "",
                    "OPERATOR": search.DBTR_IBAN .operator||'=',
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }, {
                    "BINDING_NAME": "DBTR_ACCT_NAME",
                    "VALUE": search.DBTR_ACCT_NAME.value || '',
                    //"VALUE":'',
                    "TOVALUE": "",
                    "OPERATOR": search.DBTR_ACCT_NAME .operator||'=',
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }, {
                    "BINDING_NAME": "PROCESS_GROUP",
                    "VALUE": search.PROCESS_GROUP || '',
                    "TOVALUE": "",
                    "OPERATOR": "=",
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CBO"

                }, {
                    "BINDING_NAME": "CDTR_IBAN",
                    "VALUE": search.CDTR_IBAN.value || '',
                    //"VALUE":'',
                    "TOVALUE": "",
                    "OPERATOR": search.CDTR_IBAN .operator||'=',
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }, {
                    "BINDING_NAME": "CDTR_ACCT_NAME",
                    "VALUE": search.CDTR_ACCT_NAME .value|| '',
                    //"VALUE":'',
                    "TOVALUE": "",
                    "OPERATOR": search.CDTR_ACCT_NAME .operator||'=',
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }, {
                    "BINDING_NAME": "BENEFICIARY_BANK",
                    "VALUE": search.memory142 || '',
                    "TOVALUE": "",
                    "OPERATOR": "=",
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CBO"

                }, {
                    "BINDING_NAME": "CHANNEL_ID",
                    //"VALUE":'',
                    "VALUE": search.CHANNEL_ID || '',
                    "TOVALUE": "",
                    "OPERATOR": "=",
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CBO"

                }, {
                    "BINDING_NAME": "UETR",
                    //"VALUE":'',
                    "VALUE": search.UETR.value || '',
                    "TOVALUE": "",
                    "OPERATOR": search.UETR.operator||'=' ,
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }, {
                    "BINDING_NAME": "PAYMENT_ENDTOEND_ID",
                    "VALUE": search.PAYMENT_ENDTOEND_ID.value || '',
                    "TOVALUE": "",
                    "OPERATOR": search.PAYMENT_ENDTOEND_ID.operator||'=' ,
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }, {
                    "BINDING_NAME": "INTRBK_STTLM_AMNT",
                    "VALUE": search.INTRBK_STTLM_AMNT .value|| '',
                    "TOVALUE": "",
                    "OPERATOR": search.INTRBK_STTLM_AMNT.operator||'=' ,
                    "DATA_TYPE": "NUMBER",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }, {
                    "BINDING_NAME": "CHANNEL_REFNO",
                    "VALUE": search.CHANNEL_REFNO.value || '',
                    "TOVALUE": "",
                    "OPERATOR": search.CHANNEL_REFNO.operator||'=' ,
                    "DATA_TYPE": "TEXT",
                    "ASSIGN_TOVALUE": "",
                    "ASSIGN_OPERATOR": "",
                    "ASSIGN_VALUE": "",
                    "CONTROL_TYPE": "CDN_CTRL"

                }
                ]
                break;
        }


        let params = {
            "ACTION_DESC": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "S_REVERSAL_TRAN_DASHBOARD" : "S_OUTWARD_TRANSACTIONS_DETAILS",
            "APP_USER_ROLES": "705",
            // "DATA_BINDINGS": "[{\"header\":\"Status\",\"target_column\":\"STATUS\",\"alias_name\":\"\",\"alignment\":\"Left\",\"width\":\"\",\"format\":\"\",\"date_format\":false},{\"header\":\"Amount\",\"target_column\":\"PAYMENT_AMOUNT\",\"alias_name\":\"\",\"alignment\":\"Right\",\"width\":\"\",\"format\":\"CURRENCY:د.إ\",\"date_format\":false,\"currency_format\":true},{\"header\":\"Method\",\"target_column\":\"PAYMENT_METHOD\",\"alias_name\":\"\",\"alignment\":\"Left\",\"width\":\"\",\"format\":\"\",\"date_format\":false},{\"header\":\"Transaction ID\",\"target_column\":\"MMAT_ID\",\"alias_name\":\"\",\"alignment\":\"Left\",\"width\":\"\",\"format\":\"\",\"date_format\":false},{\"header\":\"Date\",\"target_column\":\"CREATED_DATE\",\"alias_name\":\"\",\"alignment\":\"Left\",\"width\":\"\",\"format\":\"date:\\\"dd/MM/yyyy\\\"\",\"date_format\":true}]",
            "DATA_BINDINGS": JSON.stringify(databinding),
            "DS_CODE": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "DS_1701085076842" : "DS_1708336721553",
            "DTT_CODE": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "DTT_1304_1700660784202" : "DTT_1304_1665901217208",
            "DT_CATEGORY": "",
            "DT_CODE": "DT_1304_1665901130705",
            "EVENT_CODE": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "E_1701080711723" : "E_1708327569159",
            "FILTERS": JSON.stringify(filter),

            "HANDLER_CODE": "BIND_RECORD_FROM_QUERY",
            "IS_TREEVIEW": "",
            "KEY_COLUMN": "",
            "KEY_VALUE": 0,
            "L_CODE": "en",
            "ListingMode": undefined,
            "LockingMode": undefined,
            "LockingParameter": undefined,
            "MENU_ITEM_DESC": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "S_REVERSAL_TRAN_DASHBOARD" : "S_OUTWARD_TRANSACTIONS_DETAILS",
            "PAGENO": 0,
            "RECORDS_PER_PAGE": "",
            "ROUTINGKEYELEMENTID": "transactions_list",
            // "SEARCHPARAMS": "[{\"BINDING_NAME\":\"STATUS\",\"VALUE\":\"Initiated\",\"TOVALUE\":\"\",\"OPERATOR\":\"=\",\"DATA_TYPE\":\"TEXT\",\"ASSIGN_TOVALUE\":\"\",\"ASSIGN_OPERATOR\":\"\",\"ASSIGN_VALUE\":\"\",\"CONTROL_TYPE\":\"TXT\"}]",
            "SEARCHPARAMS": JSON.stringify(searchParam),
            "SOLR_SEARCH_NAME": "",
            "UICGC_CODE": undefined,
            "UICG_CODE": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "CG_1304_1701079865352" : "CG_1304_1708326278471",
            "VWFTPA_ID": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "WFT_MMA_P_1304_1701084928980_0" : "WFT_NPSS_P_1304_1708336628425_0",
            "WFTPA_ID": (screenInstance.wftpa_description == 's_reversal_tran_dashboard') ? "WFT_MMA_P_1304_1701084928980_0" : "WFT_NPSS_P_1304_1708336628425_0"
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
                            alignment: { vertical: 'top', horizontal: 'top', wrapText: true }
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
                    let workbookName = screenInstance.wftpa_description + '_' + moment().format('DDMMYYYY') + '_' + moment().format('HHMMSS') + '.xlsx'
                    let worksheetName = screenInstance.wftpa_description;
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
                    ws.getRow(1).values = ['OUTWARD TRANSACTION DETAILS ']
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