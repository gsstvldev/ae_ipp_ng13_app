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
        ClientParams.search_params=screenInstance['cc_from_search'].search_params
        let curr_btn:any=this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL,'CURRENT_BTN_LABEL')
        //this.coreHelper.get_value_from_memory('MEMORY_VARIABLES','MI_LVEL_PF_D')||null
       // pdf_data=window.atob(pdf_data)
if(curr_btn.toLowerCase().includes('pdf'))
    {
        let pdf_data=this.coreHelper.get_value_from_memory('MEMORY_VARIABLES','MI_LVEL_PF_D')||null
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

        this.httpHelper.HttpPost('/microsvc/npss_cs_credit_debit_report/', (ClientParams))
            .subscribe((res: any) => {
                //res.data=JSON.parse(atob('eyJvYmpyZXNwb25zZXMiOnsic3RhdHVzIjoiU1VDQ0VTUyIsImRhdGEiOlt7InVldHIiOiJNUzc4OTEiLCJvcmRlcmluZ19jdXN0b21lcl9uYW1lIjoiUmFqIFN1bmRhciIsIm9yZGVyaW5nX2FjY291bnQiOiJBRTM4MDM1MDAwMDAwMTMxMDI2MjAwMSIsIm9yZGVyaW5nX2N1c3RvbWVyX2liYW4iOiJBRTM4MDM1MDAwMDAwMTMxMDI2MjAwMSIsImJlbmVmaWNpYXJ5X2N1c3RvbWVyX25hbWUiOiJYWFhYIiwiYmVuZWZpY2lhcnlfY3VzdG9tZXJfaWJhbiI6IkFFMDYwMzU3NzcxMDAzOTA1NjQ3MDUxIiwiYmVuZWZpY2lhcnlfYmFua19jb2RlIjoiTkJBREFFQTAiLCJ0cmFuc2FjdGlvbl9yZWYiOiIyMDIzMDExMl9OQkFEQUVBMF8xNzM4MjVfMDNfMGQ3ODIiLCJhbW91bnRfYWVkIjoiODA1LjAxIiwidHJhbnNhY3Rpb25fY29kZSI6IjIyIiwicmVjZWl2ZWRfdGltZSI6IjIwMjMtMDctMTVUMTA6MjU6NDEuOTU2WiIsInN0YXR1cyI6IklQX0JDVF9SRVRVUk5fUE9TVElOR19SRUFEWSIsImVuZF90b19lbmRfaWQiOiIyMDIzMDExMl9OQkFEQUVBMF8xNzM4MjVfMDNfMGQ3IiwidHJhbnNhY3Rpb25fcmVmZXJlbmNlIjoiMjAyMzAxMTJfTkJBREFFQTBfMTczODI1XzAzXzBkNzgyIiwib3RoZXJfcmVmZXJlbmNlIjoiVFJJR0dFUi1QQVlNRU5ULUFDQ0VQVCIsInNvdXJjZV9jaGFubmVsIjoiQUFOSSIsImNscnN5c3JlZiI6IlZQSCIsImJlbmVmaWNpYXJ5X2JhbmsiOm51bGwsInQyNF9mdF9yZWZlcmVuY2VfbnVtYmVyIjoiMjAyMzAxMTJfTkJBREFFQTBfMTczODI1XzAzXzBkNzgyIiwicHJvY2Vzc190eXBlIjoiT1AiLCJhcGlfc3VjY2Vzc19mYWlsdXJlIjoiUE9TVElOR0lOUFJPR1JFU1MiLCJwdXJwb3NlX2NvZGVzIjpudWxsLCJjaGFubmVsX3JlZm5vIjpudWxsLCJhY2NvdW50X251bWJlciI6IjEwMDAxMjM0NTY3ODkwMDIiLCJyZXBvcnRfaWNvbl9kYXRhIjoiLC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8yd0JEQUFnR0JnY0dCUWdIQndjSkNRZ0tEQlFOREFzTERCa1NFdzhVSFJvZkhoMGFIQndnSkM0bklDSXNJeHdjS0RjcExEQXhORFEwSHljNVBUZ3lQQzR6TkRMLzJ3QkRBUWtKQ1F3TERCZ05EUmd5SVJ3aE1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakwvd0FBUkNBQnhBTG9EQVNJQUFoRUJBeEVCLzhRQUh3QUFBUVVCQVFFQkFRRUFBQUFBQUFBQUFBRUNBd1FGQmdjSUNRb0wvOFFBdFJBQUFnRURBd0lFQXdVRkJBUUFBQUY5QVFJREFBUVJCUkloTVVFR0UxRmhCeUp4RkRLQmthRUlJMEt4d1JWUzBmQWtNMkp5Z2drS0ZoY1lHUm9sSmljb0tTbzBOVFkzT0RrNlEwUkZSa2RJU1VwVFZGVldWMWhaV21Oa1pXWm5hR2xxYzNSMWRuZDRlWHFEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUhpNCtUbDV1Zm82ZXJ4OHZQMDlmYjMrUG42LzhRQUh3RUFBd0VCQVFFQkFRRUJBUUFBQUFBQUFBRUNBd1FGQmdjSUNRb0wvOFFBdFJFQUFnRUNCQVFEQkFjRkJBUUFBUUozQUFFQ0F4RUVCU0V4QmhKQlVRZGhjUk1pTW9FSUZFS1JvYkhCQ1NNelV2QVZZbkxSQ2hZa05PRWw4UmNZR1JvbUp5Z3BLalUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2Z29PRWhZYUhpSW1La3BPVWxaYVhtSm1hb3FPa3BhYW5xS21xc3JPMHRiYTN1TG02d3NQRXhjYkh5TW5LMHRQVTFkYlgyTm5hNHVQazVlYm42T25xOHZQMDlmYjMrUG42LzlvQURBTUJBQUlSQXhFQVB3RDMraWlpZ0Fvb3JOaDFxM2UvMU8ybHhBdW5tTVNTeU9BcDNydXo3ZGFhaTNzSnRMYzBxS3hmRU9wU1d1aHJlV1Z4R0E4c1NDVU1DQ0hjS01IYXc1SkE2ZENhanNQRThOOXJQOW1yYk9qNzdsTjVZWS9jdWluODkvNlZhcFNjZVpDYzBuWTNxS0tpaHVyZTRhUllKNHBXaWJiSUVjTVVQb2NkRFdaUkxSU013VlN6RUJRTWtudFdSZWVJSWJTL2t0ZktNbXl4YTlEaVJWREFOdDJnc1FNblBVa0NxakZ5MkUybHViRkZWemYyaVdhM2IzVUtXN0FFU3RJb1RuL2F6aXAxWU1vWlNDcEdRUjNwV2FIY1dpc0xXTHhrMXZSTGFLNUsrYmROSElpRTlSR1hHN0REc3A0T1I4d09PSzJMaTRodElHbnVKVWlpVDd6dTJBUHhwdUxTWG1KUzM4aVdpcy9UdFZqMUc2MUNHTkN2MktjUWxzNUQ1Ulh5UGJEL0FLVmRtazhtQ1NYYVcyS1cyZ2dad09uUEg1MG5GcDJZSnBxNCtpb29yaEpJb1diQ05LZ1pVWmhucGtqZzg0OXFscERDaWlpZ0FvclAxYlhOTzBPMjgvVWJwSVZQM1ZKeXpmUWRUWElhWDR1di9HT3ZpeTB1SnJQVElmM2x4T2VaWFhzbzdMbnB4ejFPYXpsVmpGOHZVNnFPRHExWU9vbGFLM2IyL3dDRDhqdjZLS0swT1VLS0tLQU1UeFJmM0dtYVZGZVFTR09PSzdnTnk0WGR0Zzh4UklTTUhqYm5KSFN1UXZGVFdMelZkWnMxdDcvVElOUnRwbVdTVlVpdVZTRW93RE44cHd6S2VUaks5YTlLcU9TM2htZ01Fc01id2tZTWJLQ3AvQ3Q2VlpVMXRyL3czK1JuT201UGM4MjA0WHVwZUViaURUdEduZTNtMWQ1bzBnbGgyd0pITWo3Umx3cEJJWVpVa0RtdGpRZEQxU0R4QmI2bGQybmtKSWI2V1JQTlZqRVpaSTJSVGc4bkNucGtlOWRuSEdrVWF4eElxSW93cXFNQUQyRk9xcFlsdTZTMGQveEpWRkt6Yk9TaThVSnB1cmF0RnJsMU5Bd24yMmtQMlZpZ2lDakRxeXFkeFlrNXllTVl3S3cvQzFucWVqd2FWcU5sb0V0MUhjYVJGSE9JWklvbU1vY3RsZzdLU2NIcjcxMzk1cDhWNjBiU3ZPcGo2ZVZPOGVlUWVkcEdmdWpyNytwcTFSN2VLamFLMzM3YWVsZzltMjd0N0hKNm5xK3VYT2xYa0gvQ0oza2Ztd09tOTd5MkNybFNNbjk1MEZjOUZwbXBYVi9wTjNmZUVKYjYyc3ROUzJSZnRkdXlPNElJY0F2Z2pHY1o5YTlNWlF5bFdBS2tZSUk2MEtxb29WUUZVREFBSEFGRU1SeUswWXI4Zjh4eXBjejFmNWY1SG04dWozT20ydHRxTjlwTnI5aWl2N2liK3k1cmlKVmpXVlFGd1dQbDVCREhHZjR6aXJYZzdXTlloOEsyYVcvaGk4dUxjR1F3eUxkUUtwUXlNVkFET0RnREFIMDQ0cnVyaTJndW92S3VZWTVvODUyU0lHR2ZvYWtBQ3FGVUFLQmdBZHFjc1R6UTVaUnY5L241K1lsU3RLNlp3ZW42ZHFkLzRwVFdYc2hCR2RVTWtrUnVJM2FKVnRERjgyMWlNNytNREpIZXIycDJPb1IrSXIyN2ZSWmRZdGJpS0pZUkhkSW5rQmVTdTEyVWNzQTJSL1N1dFNOSTg3RVZkeExIQXhrbnFhZFV2RU55dmJwYnIvbU5VbGExL000blNwL0VHbTNtcVRud3BkdXQ3Y2laRlc3dDhvQkdpWU9YNi9KbmoxcTNxV3A2L2ZhWGQyaWVFcjFHbmhlSU0xNWI0QlpTTW45NTcxMWRGSjFrM3pjcS9IL01mczNhMTMrSCtSeE9sUmFwUHJXZ1EzbWxteS9zdTBrVnpKY3hPWk1vcVpWVlluR1IxSUZkdFVVcGdoRFhNeGpqQ0w4MHI0RzFmYytsY0Q0aStLVmxaNzdmUm94ZHpqanpueUlsK25kdjBIdWF3eEdJanZMUTY4SGdhMWVYTFNWenU3Mit0ZE90bXVieTRqZ2hYcThqWUgvNi9hdk5QRVh4V0ozMitneFk3ZmFwbC84QVFWL3FmeXJ6N1ZkYTFIVzduN1JxRjFKTy93RENDZmxYMkE2Q3FGZVhWeGtwYVEwUjliZ3NncFV2ZXIrOCszVC9BSVA5YUU5M2VYV29YTFhGM1BKUE0vVjVHeVRYdS9nZnc4UEQvaDZLT1JjWGR4aVdjOXdUMFg4Qit1YTh0K0h1aGYyMTRtaWVWTTJ0bmlhVEk0SkgzUitKL1FHdmQ2MHdWUGVvemo0aHhhWExoWWJMVi9vdjErNEtLS0s5QStYQ2lpaWdEaXZpcmRYRm40RHVwcldlV0NVU3hBUEU1Vmg4dzdpdm4vOEE0U1BYUCtnMXFQOEE0RlAvQUkxNzE4WHYrU2VYZi9YYUwvMElWODVWOUZsVVl1Zzdyci9rZVZqWk5WTk94cC84Skhybi9RYTFIL3dLZi9Hai9oSTljLzZEV28vK0JULzQxOUNXSHc…m16Z2pQOEFkcVQvQUlVcjRvLzU3YWIvQU4vbS93RGlhd2VIeSsrc3Z4TkZWeFhiOEQzVFJ0VmcxelI3WFU3VlpFZ3VVM29zZ0FZRDN3U1AxcjU0K0tPdWYyMzQzdWhHKzYzc3Y5Rmp3ZVBsKzhmKytpZnlGZXhpYWJ3SDhMZ2J0b3pkV05xVVhZY3FaQ2NMalBVWklyNXFabWQyZDJMTXh5U1R5VFJsZENQdEoxRnN0RUdNcVBrakI3N3M5bCtCdWpZVFV0YmtYcVJheEhIMFovOEEyVDlhNGY0bWFOL1kzanEvUlYydzNKRjFIOUg1UC9qMjRmaFh0WGdxYlJ0QThINmJZTnFsZ3NxeEI1aDlwVE85dm1idjJKeCtGY1Y4YUUwM1ViRFR0VHNyNjBubmdjd3lMRk1yTVVZWkJ3RDBCQi83NnBVTVJKNDF0N1BUL0lkV2tsaDB1cTFLL3dBRDljOHEvdjhBUTVXK1daZnRFSVA5NWVHSDFJd2YrQTE3Ylh5WjRiMWg5QThSMkdxSm4vUjVnemdkMFBERDhWSkZmV01jaVN4SkxHd1pIVU1yRG9RZWhybnphanlWdWRmYU5NRlU1cWZMMlBuMzQwZjhqMG4vQUY1eC93QTJyQThDK0pMZndyNGxUVTdxR1dhSlluVFpGak9UOWEzL0FJMGY4ajBuL1huSC9OcTVyd2Y0YVBpelgxMHNYWXRTMGJQNWhqMzlPMk1pdldvOG4xTmUwMnRxY1ZUbStzUGwzdWVxVGZIUFNSRXhoMGk5ZVRIQ3U2S0QrSUovbFhrbmlMWHIzeFo0Z20xRzRqL2V6RUxIREdDUXFqZ0tQWCtwSnIwZVQ0RVhBall4ZUlJbWZIQWExS2cvanVQOHE4MzFyUmRVOEphNDFsZGt3M1VXSFNXRnpobFBSbFBYSFdzOEdzSXBQMkQxK2Y2bDEzWGEvZWJIc1B3bDhEM2VoSlByT3FSR0c3dUkvTGhnWWZNaVpCSmIwSklISGJIdlhxRmVPL0MvNGozMTlxVWVnNjFNMXcwb0l0cmwvdkFnWjJzZStRT0QxejY1NDlpcnhjZXFxcnYydS82SGZobkIwMXlIemJyOHpYSGlMVXBtT1M5MUlmOEF4NDExSHdyMDhYWGlsN3B4bGJTRm1YL2ViNVIraGF1UjFSV1RWNzFHKzhzN2cvWGNhOVIrRU5uczBuVUwwam1XWllnZlpSbi9BTm1yNXZEeDVxeXVmb3VaMVBaWmU3ZFVsOS8vQUFEMGVpaWl2WVBnZ29vb29BS0tLS0FPRStMMy9KUEx2L3J0Ri82RUsrY3EramZpOS95VHk3LzY3UmYraEN2bkt2cE1vL2dQMS95UEp4MzhYNUgxN3BuL0FDQ2JQL3Jnbi9vSXEzVlRUUDhBa0UyZi9YQlAvUVJWb2tLcFppQUFNa250WHpzdmlaNnEyUEhmamhybUYwL1FvbjYvNlZPQitLb1AvUWorVmVOVnQrTDliUGlIeFZxR3BaSmprbElpejJqWGhmMEEvT3ZTL2dib3VFMUxXNUY2a1dzSi9Kbi9BUFpQeU5mVFFhd1dFVGExWDVzOGVTZUlyMlI0MWcraG93ZlExOWowVngvMnovYy9IL2dIUi9aLzk3OFArQ2ZHOWZTUHdwMXorMlBCRnRGSTJaN0UvWm45Y0Q3aC93QytTQitCcnhmNGk2UC9BR0o0NTFHQlYyd3pQOW9pOU5yODhmUTVINFZ2L0JuWFA3UDhWeWFiSTJJZFFqMmdmOU5GeVYvVGNQeEZkV09nc1JoZWVQcVk0YVRwVnVWK2hIOGFQK1I2VC9yemovbTFSZkJ6L2tmNHYrdmVYK1FxWDQwZjhqMG4vWG5IL05xNFhUOVN2ZEt1aGRhZmRTMjA0QlVTUk50T0QxRlhScHVwZzFCZFVUVWx5WWh5ZlJuMTlYZ2Z4c3Y3VzY4VTJsdkE2dk5iVzIyWXFjN1NXSkNuM0E1L0d1Umw4YStLSm8yamZYOVJLc01FQzRZZnlyREplV1FrbG5rYzhrOGtrMWhnOHVsUXFlMGxLNXBpTVdxa09WSTJQQ0N5djR6MFFRNTMvYm9TTWY3NHorbGZWMWVPL0NuNGZYZG5lcDRoMWlCb0dSVDlrZ2tHR3lSZ3V3N2NkQjE1ejZaOWlyZ3pTdEdwVlNqclk2Y0ZUbENGMzFQbmZ4ZmFHeThYNnJDM2U0YVFmUnZtSDZHdldQaGxGNWZnbTNmSCt0bGtmL3g3SDlLNDc0czZXYmZYTGJVbEg3dTZpMk1mOXRmL0FLeEg1R3U4K0grQjRHMHpIOTEvL1EycjV5aERseEVrZmE1blg5cmxkS1M2dGZnbmY4VHBhS0tLOUErV0NpaWlnQW9vb29BcGFwcE5qclZpMWxxTnV0eGJNUVdqWWtBa0hJNlZnLzhBQ3RmQi93RDBBNGYrL2ovL0FCVlhQR0dyWE9qYUd0emFTckZJMXpEQ1pHaU1tMVhjS1R0SEpJQjZWaXkrSjMwenlydTV2cm0vVkxLNnVDc2R0OW1Sd2hqR0NqQXRrWjRPY2NtdXFsR3R5KzVKcS9yL0FNTVl6ZE8vdkk3ZU9OSW9rampHMUVVS285QUtiY1FSM1Z0TGJ6THVpbFFvNjVJeUNNRVpGYzZQRmMvOXIydWx5YVNZYnFlTVRiSnJxTmZrTEZSdDUrWnVNa0RweDYxUDRUMWkvd0JhMHlhNXZyVllHVzVtalFxNElJV1JseCtHQU05K3RaT2xPSzVuK1phbkZ1eUtmL0N0ZkIvL0FFQTRmKy9qL3dEeFZiK2w2Vlk2TFlKWmFkYkxiMnlFbFkxSlBKT1QxNXJudEw4VFhkMzRya3RwbGpHbDNMVFJXRGhmbVo0U29mSjdnbmZqMlNzelIvSFZ6YStHcks0MW15bmVTV3hsdUlyZ09tTGd4S1dZWUgzVGdaR2ZTdHBVNjgxYVR2dDE5Znlzek9NcVVYZEszeVBRS0t6TGZXWTdqV2pwb2hZT0xLTzczazhZZG1YSDErWDlhNVovRWV1V3RocW11UGNXc3RoWWFqTmJ5V2hnS3Y1U1M3TXE0Yjd3SFBJNXJHTkdVbmIrdFRSMUVqb3RZOEo2RjRndVk3alZkT2p1Wm8wMks3TXdJWE9jY0VkeWFxV253LzhBQzFqZHczZHJwRVVVOExpU04xa2ZLc0RrSHJWSFRmRk41RHFGekJmV3NzdHJKckVsakZkQjB4R2MvSXUzcVIyejcxQnJ2ak81ajAvVnJXRzNOcHFOdENrOGJKTkhMbGZOVkNEamhXNTZIMXJlTU1SZmtVdFBVemNxWHhOZmdiMnJlRHZEK3UzdjJ6VTlOanVMZ0lFM3N6QTdSMEhCOTZvZjhLMThILzhBUURoLzcrUC9BUEZWSFA0b2VYVUxmVDdpM3U5UHZJcitDTjRra1JoSWtpdVZ5MkRsVHRPUU1FRWRhVHhYNGd2Tk0xdTFzNGI1TE9CN09XNGFRMmJYQkxLeWdEQ25JSHpIbjJvZ3NRbW9LVFh6ZjZBL1pheWFKZjhBaFd2Zy93RDZBY1AvQUgyLy93QVZXcnB2aGZRdEljU2FmcE5uQklPa2l4RGYvd0I5ZGF4MjhaVFdXaDZWcU9vV01aanVvWW5tZUc1VDVTNUFPeFNjc0JrSGpzZTlUcDR3enFJaGJUSmx0VHFMYWQ5cDgxU1BOR2NmTDF3Y2RhbVN4RWxxMjE2alRwSjZMOERwNks1THdQNGttMTNTN2RIMzNNc1VPYnU3NENpUW5oT09yYmNFNDZaSHJYVzFoVXB1bkp4a2FSa3BLNk9kOGJhRi9iL2hxZTNqWE56RisrZzkyQTZmaU1qOFJVSHc1azMrQnRQSGRESXAvd0MvalYxTlZMRFQ0ZE9XZExjYlk1Wm1tMmRsTFl6ajhjbjhhdzluKzg1MTJzZHF4TGVGZUhsM3V2dWFaYm9vb3JRNUFvb29vQUtLS0tBS0dyYVZIcTl0RERMSTZDSzVpdUFWeHlZM0RBZlE0cWpyM2hpMzE5eTA4OHNXYlNhMCtUSDNaQ3BKNTdqYUszYUt1TlNVYldleExpbnVZZXNlSEJyVXRzTGk5a1cxZ2FOL0lXSk9XUnR3SWNqY3VjRE9EMEZTNlhvamFUYjN0dkJmVE5EUExKTEVyS3Y3Z3V6TTJDQnp5MmVmU3RlaW43U1hMeTlBNUZlNXkxdjRCMFd5VFRXczR2SXU3R1JKQmRxQjVrcFVZWU9lKzdKejlhanR2QVZvbGxIWlhlb1hkM2JRVzB0cmJSc0VYeVZrRzFqbFJ5Mk9NbjhxNjJpcStzVmU1UHNvZGpEMGp3NjJtNmk5OVBxVnhlenRhcGFneW9pZ0loSkgzUVA3eDYxU0hncU5wYmlPZlZMdVhUNTd4N3g3SGFpb3pzKy9ERUx1SzU3WjdWMU5GTDIwNzN1UDJjYldPZms4SjJza0xSRzRtQWJVenFSSXdEdno5MzZmcldTdnc0dGx0dnM0MVM2RWYyWDdJQXNVUzRRT3JyMFhsZ1Y1SjYxMjFGTllpb3RtSjBvUGRITnA0UWlhN1M5dXIrNHViNzdWRmN2T3lxdTd5d3dSQW9BQVg1aWZYSjYxWjFYUUpOUTFXRFViYlU3aXh1SVlIZzNSSWpaVmlwUDNnZWNxSzI2S24yMDczdVBramF4eGN2dzMwLzdOOW10cjY2Z2hOdEhic05xT3gyTVdWZ3pLU3Z6RWtnWUJyVlR3ckFzU28xMU14R3AvMmtXd09aTTUyL1N0K2lxZGVvOTJKVW9MWkhQYUg0U3RmRDgwTWxsY3pydGg4bWREamJjWXp0WmhqN3d6akk3Y0d1aG9vck9jNVRkNWJseGlvcXlDaWlpcEdGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUIvOWs9In1dfX0=…'))

                if (res.data.status == "SUCCESS") {

                    let bodyContent: any = [],result: any = []
                    result = res.data.data
                    //  let keys=(screenInstance.wftpa_description.includes('debit'))?['Ordering','Beneficiary']:['Beneficiary','Ordering']

                    let Report_keys :any=[]
                     Object.keys(result[0]).forEach((val) => {
                        if((val.toLowerCase()!='clrsysref' && val.toLowerCase()!='report_icon_data' && val.toLowerCase()!='t24_ft_reference_number' && val.toLowerCase()!='process_type' && val.toLowerCase()!='api_success_failure' && val.toLowerCase()!='purpose_codes' && val.toLowerCase()!='channel_refno' && val.toLowerCase()!='beneficiary_bank' && val.toLowerCase()!='purpose_codes' && val.toLowerCase()!='source_channel' && val.toLowerCase()!='account_number' && val.toLowerCase()!='account_number'&& !val.toLowerCase().includes('tenant') && val.toLowerCase()!='sender_bank' && !val.toLowerCase().includes('department') && !val.toLowerCase().includes('tran_ref') && !val.toLowerCase().includes('remittance')))
                            {
                                Report_keys.push(val)
                                
                            }
                    })
                    let  column = '',title='',res_index=0,overallbodyContent:any=[]
                   // result = res.data.data[0]
                    //bodyContent.push([])
                    var dd :any= {
                        pageSize: {
                            width: 900,
                            height: 'auto',
                        },
                        content: [
                            
                    {
                                
                                 image:`data:image/jpeg;base64${result[0]['report_icon_data']}`,
                        width:100,
                        height: 100 ,
                        alignment:'right'
                        //margin: [0, 10, 0, 0]
                    },
                    {text:title,style:"head"},
                            
                        ],
                        pageStyle: {
                            width: 1200,
                            height: 1000
                        },
                        
                        styles: {
                            head:{
                                fontSize: 30,
                                color:'#285BB0',
                                margin: [5, 0, 0, 10]
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
result.forEach((res)=>
{


    
        for (let i = 1; i < Report_keys.length; i++) {
            let key:any,val:any
            if(Report_keys[i]!=null || Report_keys[i]!=undefined)
                    key=this.CamelCase(Report_keys[i].split('_'))

            

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
                bodyContent.push([{text:Report_keys[0]?.toUpperCase()?.toString(),style: 'tablcolmn'},{text:result[Report_keys[0]]?.toUpperCase()?.toString(),style: 'tablcolmn'}])
                
                    //bodyContent.push()
                    

            }
            if(Report_keys[i].includes('amount'))
                {
                    key='Amount(AED)'
                    val=(res[Report_keys[i]]?.toString())?res[Report_keys[i]]?.toString():res[Report_keys[i]]
                    bodyContent.push([{text:key,style: 'tablcolmn'},{text:val,style: 'tablcolmn'}])
                }
           else if(Report_keys[i].includes('end_to'))
                {
                    let key:any='End-to-End ID'
                    let val:any=(res[Report_keys[i]]?.toString())?res[Report_keys[i]]?.toString():res[Report_keys[i]]
                    bodyContent.push([{text:key,style: 'tablcolmn'},{text:val,style: 'tablcolmn'}])
                    //bodyContent.push()         
                }
                else{
                    /* let key:any=Report_keys[i]*/
                    let val:any=(res[Report_keys[i]]?.toString())?res[Report_keys[i]]?.toString():res[Report_keys[i]]
                    //bodyContent.push([key,val])
                    
                        
                        bodyContent.push([{text:key,style: 'tablcolmn'},{text:val,style: 'tablcolmn'}])
                        
                    
                    //bodyContent.push()
                }

            
        }
        res_index+=1
        //bodyContent.push({text:"",style:"tablcolmn",pageBreak:"before"})
        dd.content.push({table:{body: bodyContent,
            alignment:'center',
            heights: 50,
            widths: [400, '*'],
        }})
        if(res_index<result.length)
        dd.content.push({text:"",pageBreak:"before"})
        bodyContent=[]
        
        
    })
                    
                    

                    
                    //let dd_copy=dd
                    //dd_copy.pageStyle.width=100
                    //dd_copy.pageStyle.height=200
                    
                    
                    let pdfResult=pdfmake.createPdf(dd)
                    this.coreHelper.set_value_to_memory('MEMORY_VARIABLES',"MI_LVEL_PF_D",window.btoa(JSON.stringify(dd)))
                    
                    
                    
                    pdfResult.getBase64((val:any)=>{
                       // this.appHandler.callInternals(internals,screenInstance,'SUCCESS')
                      // this.coreHelper.set_value_to_memory('MEMORY_VARIABLES','MI_LEVEL_DWNLD_FLG',true)
                        screenInstance['npss_credit_debit_widget'].onChangecomponent.emit({appHandler:this.appHandler,internals:internals,data:`data:application/pdf;base64,${val}`})
                    });
                    
                    
                    //
                }
                else {
                    this.appHandler.callInternals(internals,screenInstance,'FAILURE')

                }
            });
    }
    CamelCase(str:any)
    {
        
        let key_string_concat:any=''
        str.forEach((val)=>
        {
            key_string_concat+=val.charAt(0).toUpperCase()+val.slice(1)+' '
        })
        return key_string_concat
    }
}