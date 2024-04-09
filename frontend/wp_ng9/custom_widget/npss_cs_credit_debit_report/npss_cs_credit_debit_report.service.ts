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
export class npss_cs_credit_debit_reportService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService) { }
    //Default calling function
    fn_npss_cs_credit_debit_report(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        let ClientParams: any = {};
        ClientParams.screenName = screenInstance.wftpa_description
        let pdf_data:any=this.coreHelper.get_value_from_memory('MEMORY_VARIABLES','MI_LVEL_PF_D')||undefined
       // pdf_data=window.atob(pdf_data)
if(pdf_data)
    {
        
        pdf_data=JSON.parse(window.atob(pdf_data))
        let file_name=screenInstance.wftpa_description.toUpperCase().split('_')
                    file_name.shift()
                    file_name.unshift('NPSS')
                    //pdfmake.createPdf(dd).download(file_name.join('_'))
        pdfmake.createPdf(pdf_data).download(file_name.join('_'))
        this.coreHelper.set_value_to_memory('MEMORY_VARIABLES','MI_LVEL_PF_D',undefined)
    }
    else{
        this.CallUrlforGetparamvalue(ClientParams, screenInstance, internals);
    }
        
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
    CallUrlforGetparamvalue(ClientParams, screenInstance, internals) {
        this.httpHelper.HttpPost('/microsvc/npss_cs_credit_debit_report/', ClientParams)
            .subscribe((res: any) => {
                if (res.data.status == "SUCCESS") {

                    let bodyContent: any = [],result: any = []
                    result = res.data.data[0]
                    //  let keys=(screenInstance.wftpa_description.includes('debit'))?['Ordering','Beneficiary']:['Beneficiary','Ordering']

                    let Report_keys :any=[]
                     Object.keys(result).forEach((val) => {
                        if((val.toLowerCase()!='clrsysref' && val.toLowerCase()!='report_icon_data' && val.toLowerCase()!='t24_ft_reference_number' && val.toLowerCase()!='process_type' && val.toLowerCase()!='api_success_failure' && val.toLowerCase()!='purpose_codes' && val.toLowerCase()!='channel_refno' && val.toLowerCase()!='beneficiary_bank' && val.toLowerCase()!='purpose_codes' && val.toLowerCase()!='source_channel' && val.toLowerCase()!='account_number' && val.toLowerCase()!='account_number'&& !val.toLowerCase().includes('tenant') && val.toLowerCase()!='sender_bank' && !val.toLowerCase().includes('department') && !val.toLowerCase().includes('tran_ref') && !val.toLowerCase().includes('remittance')))
                            {
                                Report_keys.push(val)
                                
                            }
                    })
                    let  column = '',title=''
                   // result = res.data.data[0]
                    //bodyContent.push([])

                    for (let i = 1; i < Report_keys.length; i++) {
                        let key:any,val:any
                        if(Report_keys[i]!=null || Report_keys[i]!=undefined)
                                key=this.CamelCase(Report_keys[i].split('_').join(' '))

                        //key=key.splice(0).toUpperCase()+key.splice(1,key.length)
                                
                        if (i == 1) {
                            //column=''
                            if (screenInstance.wftpa_description.includes('debit')) {
                                column = 'Ordering Customer'
                                title='Customer Debit Advice'
                            }
                            else {column = 'Beneficiary Customer'
                                title='Customer Credit Advice'

                            }
                            bodyContent.push([{ text: column, colSpan: 2,  style: 'tableHeader' }, {}]);

                            //bodyContent.push('Ordering Customer')        
                        }
                        else if (i == 4) {
                            if (screenInstance.wftpa_description.includes('debit')) {
                                column = 'Beneficiary Customer'
                            }
                            else {
                                column = 'Ordering Customer'
                            }
                            bodyContent.push([{ text: column, colSpan: 2, style: 'tableHeader' }, {}]);
                            //bodyContent.push('Beneficiary Customer')        
                        }
                        else if (i == 7) {
                            if (screenInstance.wftpa_description.includes('debit')) {
                                column = 'Transaction'
                            }
                            else {
                                column = 'Transaction'
                            }
                            bodyContent.push([{ text: column, colSpan: 2, style: 'tableHeader' }, {}]);
                            //bodyContent.push('Transaction')        
                        }
                        else if (i == 12) {
                            if (screenInstance.wftpa_description.includes('debit')) {
                                column = 'References'
                            }
                            else {
                                column = 'References'
                            }
                            bodyContent.push([{ text: column, colSpan: 2,  style: 'tableHeader' }, {}]);
                            //bodyContent.push('References')        
                        }
                        else if (i == 13) {
                            bodyContent.push([{text:Report_keys[0]?.toString(),style: 'tablcolmn'},{text:result[Report_keys[0]]?.toString(),style: 'tablcolmn'}])
                            
                                //bodyContent.push()
                                

                        }
                        if(Report_keys[i].includes('amount'))
                            {
                                key='Amount(AED)'
                                val=(result[Report_keys[i]]?.toString())?result[Report_keys[i]]?.toString():result[Report_keys[i]]
                                bodyContent.push([{text:key,style: 'tablcolmn'},{text:val,style: 'tablcolmn'}])
                            }
                       else if(Report_keys[i].includes('end_to'))
                            {
                                let key:any='End-to-End ID'
                                let val:any=(result[Report_keys[i]]?.toString())?result[Report_keys[i]]?.toString():result[Report_keys[i]]
                                bodyContent.push([{text:key,style: 'tablcolmn'},{text:val,style: 'tablcolmn'}])
                                //bodyContent.push()         
                            }
                            else{
                                /* let key:any=Report_keys[i]*/
                                let val:any=(result[Report_keys[i]]?.toString())?result[Report_keys[i]]?.toString():result[Report_keys[i]]
                                //bodyContent.push([key,val])
                                bodyContent.push([{text:key,style: 'tablcolmn'},{text:val,style: 'tablcolmn'}])
                                //bodyContent.push()
                            }
                        
                    }
                    //bodyContent.push(['Customer Debit Service'],['Ordering Customer'],[' Ordering Customer Name',`${result.Debtor_Name}`],['Ordering Account',`${result.Debtor_Account}`],['Ordering Customer IBAN',`${}`],[' Beneficiary Customer'],['Beneficiary Customer Name',`${result.Creditor_Name}`],[' Beneficiary Customer IBAN',`${result.Creditor_Account}`],['Beneficiary Bank Code',`${result.creditor_account}`],['Transaction'],['Transaction Ref',`${result.payment_endtoend_id}`],['Amount (AED)',`${result.transaction_amount_range}`],['Transaction Code',`${result.categorypurpose}`],['Transaction Code',`${result.categorypurpose}`],['Received Time',`${result.created_date}`],['Status',`${result.status}`],['End-to-End ID',`${result.payment_endtoend_id}`],['UETR',`${result.uetr}`],['Transaction Reference',`${result.t24_ft_reference_number}`],['Clearing Reference',''],['Other Reference',`${result.otherreference}`])
                    // let Header =(screenInstance.wftpa_description=='Debit Advice Report')? ['Ordering Customer','','','']:['','','','']//Object.keys(Jsonbody[0])
                    //let Headersvalue:any= []


                    var dd = {
                        pageSize: {
                            width: 900,
                            height: 'auto',
                        },
                        content: [
                            
                    {
                                
                                 image:`data:image/jpeg;base64${result['report_icon_data']}`,
                        width:50,
                        height: 50 ,
                        alignment:'right'
                    },
                    {text:title,style:"head"},
                            {
                                table: {
                                    body: bodyContent,
                                    alignment:'center',
                                    heights: 50,
                                    widths: [400, '*'],
                                }
                            },
                        ],
                        pageStyle: {
                            width: 1200,
                            height: 1000
                        },
                        
                        styles: {
                            head:{
                                fontSize: 30,
                                color:'#285BB0',
                                margin: [10, 0, 0, 10]
                            },
                            tableHeader: {
                                fontSize: 20,
                                align: 'center',
                                bold: false,
                                color:'white',
                                height:40,
                                
                               // margin: [0, 0, 0, 10],
                                fillColor: '#285BB0'
                            }, tablcolmn: {
                                bold: true,
                                fontSize: 15,
                                heights:100,
                                widths:[300,'*']
                            }
                        }

                    }
                    //let dd_copy=dd
                    //dd_copy.pageStyle.width=100
                    //dd_copy.pageStyle.height=200
                    
                    let pdfResult=pdfmake.createPdf(dd)
                    this.coreHelper.set_value_to_memory('MEMORY_VARIABLES',"MI_LVEL_PF_D",window.btoa(JSON.stringify(dd)))
                    
                    
                    pdfResult.getBase64((val:any)=>{
                        screenInstance['npss_credit_debit_widget'].onChangecomponent.emit({data:`data:application/pdf;base64,${val}`})
                    });
                    
                    
                    //
                }
                else {
                    this.dialogHelper.ShowInfoDialog(res.data.status);

                }
            });
    }
    CamelCase(str:any)
    {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
}