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
import { LoaderService } from '../../scripts/fx/loader.service'; // Loader box appear for form loader  view

@Injectable()
export class npss_c_btn_enb_disbService {
    constructor(private http: Http,
        private httpHelper: HttphelperService,
        private coreHelper: CoreService,
        private appHandler: AppHandlerService,
        private sessionHelper: SessionService,
        private dialogHelper: DialogService,
        private loaderHelper: LoaderService) { }
    //Default calling function
    fn_npss_c_btn_enb_disb(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
        var btnName = this.sessionHelper.GetVariable(SCOPE.SESSION_LEVEL, "CURRENT_BTN_LABEL").toUpperCase();
        if(screenInstance.wftpa_description == 's_customer_setup'){
                    var CtrlScope = screenInstance['customer_detail'].f_npss_customer_proxy_ui.controls; // for customer details
                    var CtrlScope1 = screenInstance['account__detail'].f_npss_customer_account_ui.controls; // for Account details
        if (btnName == 'ENROLMENT') {
            CtrlScope1.memory9.show = false //hide block/unblock dorpdown
            CtrlScope1.memory10.show = false //hide block/unblock dorpdown
        }else if(btnName == 'BLOCK UNBLOCK ACCOUNT'){
            CtrlScope1.memory9.show = true //show block/unblock dorpdown
            CtrlScope1.memory10.show = true //show block/unblock dorpdown
            CtrlScope1.iban.show = false
            CtrlScope1.currency.show = false
            CtrlScope1.instant_payment.show = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }else if(btnName == 'CHANGE MOBILE NO'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope1.instant_payment.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = false
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }else if(btnName == 'UPDATE PERSONAL'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope1.instant_payment.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = false
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = false
        }
        else if(btnName == 'UNENROLMENT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope1.instant_payment.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }else if(btnName == 'ADD ACCOUNT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = false
            CtrlScope1.currency.disabled = false
            CtrlScope1.instant_payment.disabled = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }else if(btnName == 'REMOVE ACCOUNT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.iban.show = false
            CtrlScope1.currency.show = false
            CtrlScope1.instant_payment.show = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.customer_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
        }
        }else if(screenInstance.wftpa_description == 's_merchant_setup'){
                    var CtrlScope = screenInstance['merchant_detail'].f_npss_merchant_ui.controls; // for customer details
                    var CtrlScope1 = screenInstance['account_detail'].f_npss_mer_account_ui.controls; // for Account details
                    var CtrlScope2 = screenInstance['shop_detail'].f_npss_shop_ui.controls; // for Account details
                    var CtrlScope3 = screenInstance['cash_desk_detail'].f_npss_cash_desk_ui.controls; // for Account details
        if (btnName == 'ENROLMENT') {
            CtrlScope1.memory9.show = false //hide block/unblock dorpdown
            CtrlScope1.memory10.show = false //hide block/unblock dorpdown
            CtrlScope1.memory11.show = false //hide block/unblock dorpdown
            CtrlScope3.cashdesk_overlay_id.show = false
        }else if(btnName == 'BLOCK ACCOUNT'){
            CtrlScope1.memory9.show = true //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.show = false
            CtrlScope1.currency.show = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.disabled = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'UNBLOCK ACCOUNT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = true //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.show = false
            CtrlScope1.currency.show = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.disabled = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'CHANGE MOBILE NO'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = false
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.disabled = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'UPDATE PERSONAL'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = false
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = false
            CtrlScope.denomination.disabled = false
            CtrlScope.vat_number.disabled = false
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = false
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.disabled = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }
        else if(btnName == 'DISABLE'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.disabled = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'ADD ACCOUNT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = false
            CtrlScope1.currency.disabled = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.disabled = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'REMOVE ACCOUNT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = true
            CtrlScope1.iban.show = false
            CtrlScope1.currency.show = false
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.disabled = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'ENROLMENT SHOP'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = false
            CtrlScope2.shop_mid.disabled = false
            CtrlScope2.shop_type.disabled = false
            CtrlScope2.shop_mcc.disabled = false
            CtrlScope2.shop_iban.disabled = false
            CtrlScope2.building.disabled = false
            CtrlScope2.street.disabled = false
            CtrlScope2.city.disabled = false
            CtrlScope2.postal_code.disabled = false
            CtrlScope2.county.disabled = false
            CtrlScope2.country.disabled = false
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'UPDATE SHOP'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = false
            CtrlScope2.shop_mid.disabled = false
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = false
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = false
            CtrlScope2.street.disabled = false
            CtrlScope2.city.disabled = false
            CtrlScope2.postal_code.disabled = false
            CtrlScope2.county.disabled = false
            CtrlScope2.country.disabled = false
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'DISABLE SHOP'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'REMOVE SHOP ACCOUNT'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'ENROLMENT DESK'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = false
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'UPDATE DESK'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = false
            CtrlScope3.cashdesk_overlay_id.disabled = false
        }else if(btnName == 'DISABLE DESK'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = true
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }else if(btnName == 'UPDATE MCC'){
            CtrlScope1.memory9.show = false //show block/unblock dorpdown
            CtrlScope1.memory10.show = false //show block/unblock dorpdown
            CtrlScope1.memory11.show = false
            CtrlScope1.iban.disabled = true
            CtrlScope1.currency.disabled = true
            CtrlScope.bankuserid.disabled = true
            CtrlScope.channel_id.disabled = true
            CtrlScope.merchant_name.disabled = true
            CtrlScope.mobile.disabled = true
            CtrlScope.proxy_type.disabled = true
            CtrlScope.proxy_value.disabled = true
            CtrlScope.surname.disabled = true
            CtrlScope.denomination.disabled = true
            CtrlScope.vat_number.disabled = true
            CtrlScope.mcc.disabled = false
            CtrlScope.channel_name.disabled = true
            CtrlScope.merchant_tag.disabled = true
            CtrlScope.logo.disabled = true
            CtrlScope2.shop_name.disabled = true
            CtrlScope2.shop_mid.disabled = true
            CtrlScope2.shop_type.disabled = true
            CtrlScope2.shop_mcc.disabled = true
            CtrlScope2.shop_iban.disabled = true
            CtrlScope2.building.disabled = true
            CtrlScope2.street.disabled = true
            CtrlScope2.city.disabled = true
            CtrlScope2.postal_code.disabled = true
            CtrlScope2.county.disabled = true
            CtrlScope2.country.disabled = true
            CtrlScope2.shop_id.show = true
            CtrlScope3.cashdesk_id.disabled = true
            CtrlScope3.cashdesk_overlay_id.disabled = true
        }
        }
    }
    //Custom validation logics
    //Uncomment below lines when validation is required
    //fn_customValidation(projName,screenInstance,message,callback){
    // return callback();
    //}
    //Service logics
}