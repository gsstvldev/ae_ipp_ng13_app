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
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;
import * as moment from 'moment-timezone';

@Injectable()
export class npss_c_export_pdf_for_reportService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_c_export_pdf_for_report(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let roleId = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "APP_USER_ROLES");

        let databinding: any = []
        let filter: any = []
        let search: any
        let searchParam: any = []
        let wftrpDesc = screenInstance.wftpa_description
        let Databinding: any = []
        let Searchparam: any = []
        let Filter: any = []
        let eventCode:string;
        Databinding = JSON.stringify(screenInstance.list.bind_param.dsInfo.databinding)
        if (roleId!="730" &&(screenInstance.wftpa_description=='s_outward_transactions_details' || screenInstance.wftpa_description=='s_inward_transactions_details' )) {//Manager
            Searchparam = JSON.stringify(screenInstance.cc_from_search.search_params)
            eventCode=  Object.keys( screenInstance.list['datasource'])[1].toUpperCase()
          
        }
        else {
            Searchparam = JSON.stringify(screenInstance.cc_for_control.search_params)
            eventCode=  Object.keys( screenInstance.list['datasource'])[0].toUpperCase()
        }

        Filter = JSON.stringify(screenInstance.list.bind_param.dsInfo.filter)


        let params = {
            "ACTION_DESC": screenInstance.wftpa_description.toUpperCase(),
            "APP_USER_ROLES": screenInstance.handler.sessionService.Session_Values.SESSION_LEVEL.APP_USER_ROLES,
            "DATA_BINDINGS": Databinding,
            "DS_CODE": screenInstance.list.bind_param.dsInfo.ds_eligible,
            "DTT_CODE": screenInstance.list.bind_param.dsInfo.dtt_code,
            "DT_CATEGORY": "",
            "DT_CODE": screenInstance.list.bind_param.dsInfo.dt_code,
            "EVENT_CODE": eventCode,
            "FILTERS": Filter,
            "HANDLER_CODE": handler_code,//"BIND_RECORD_FROM_QUERY",
            "IS_TREEVIEW": "",
            "KEY_COLUMN": "",
            "KEY_VALUE": 0,
            "L_CODE": "en",
            "ListingMode": undefined,
            "LockingMode": undefined,
            "LockingParameter": undefined,
            "MENU_ITEM_DESC": screenInstance.wftpa_description.toUpperCase(),
            "PAGENO": 0,
            "RECORDS_PER_PAGE": "10",
            "ROUTINGKEYELEMENTID": "transactions_list",
            "SEARCHPARAMS": Searchparam,
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
                    let header: any = [{ col: 'NO', alignment: 'right' }]
                    let bodyContent: any = []
                    let Header = JSON.parse(result.data.RowData)
                    let k = 1;
                    Header.forEach((c) => {
                        c.NO = k;
                        k++;
                    })
                    let Headersvalue: any = [{ text: 'NO', style: 'tableheader' }]
                    for (let k = 0; k < dataBind.length; k++) {
                        let headerCol: any = {}
                        headerCol.text = dataBind[k]['header'].toUpperCase()
                        headerCol.style = 'tableheader'
                        Headersvalue.push(headerCol)
                        header.push({ col: dataBind[k]['target_column'].toLowerCase(), alignment: dataBind[k]['alignment'].toLowerCase() })
                    }
                    bodyContent.push(Headersvalue)
                    //console.log(Headersvalue.length)

                    for (let i = 0; i < Header.length; i++) {
                        let ColValue: any = []

                        for (let j = 0; j < header.length; j++) {
                            let Colobj: any = {}
                            Colobj.text = Header[i][header[j]['col']]
                            Colobj.style = header[j]['alignment']
                            ColValue.push(Colobj)
                        }
                        bodyContent.push(ColValue)
                    }

                    var dd = {
                        pageSize: {
                            width: Headersvalue.length * 170,
                            height: 'auto'
                        },
                        content: [
                            {
                                text: params.ACTION_DESC.split('_').slice(1).join(' '),
                                style: 'header'
                            },
                            {
                                table: {
                                    body: bodyContent
                                }
                            },
                        ],
                        pageStyle: {
                            width: 1200,
                            height: 1000
                        },
                        styles: {
                            header: {
                                fontSize: 18,
                                bold: true,
                                alignment: 'center'
                            },
                            tableheader: {
                                fontSize: 15,
                                align: 'center',
                                bold: true,
                                margin: [0, 0, 0, 10],
                                fillColor: 'lightgray'
                            }, left: {
                                bold: true,
                                fontSize: 15,
                            }, right: {
                                bold: true,
                                fontSize: 15,
                                alignment: 'right'
                            }
                        }

                    }
                    let screenName = params.ACTION_DESC.toLowerCase().split('_').slice(1).join('_') + '_' + moment().format('DDMMYYYY') + '_' + moment().format('HHMMSS')
                    pdfmake.createPdf(dd).download(screenName);
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