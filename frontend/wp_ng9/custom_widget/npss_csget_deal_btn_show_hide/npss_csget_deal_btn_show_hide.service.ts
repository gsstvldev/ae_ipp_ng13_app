
import { Injectable } from '@angular/core';
import { HttphelperService } from '../../scripts/fx/httphelper.service'; // for server call only use http services
import { AppHandlerService } from '../../scripts/fx/app.handler.service'; //Show for Dialog for Screen
import { SCOPE, SESSION } from '../../scripts/fx/session.enum';
import { SessionService } from '../../scripts/fx/session.service'; // get Session information
import { DialogService } from '../../scripts/fx/dialog.service'; // Dialog box appear
import { CoreService } from '../../scripts/fx/core.service'; //core services used for get screen values from memory variables

@Injectable()
export class npss_csget_deal_btn_show_hideService {
  constructor(private httpHelper: HttphelperService,
    private appHandler: AppHandlerService,
    private sessionHelper: SessionService,
    private coreHelper: CoreService,
    public dialogHelper: DialogService) { }
  //Default calling function
  fn_npss_csget_deal_btn_show_hide(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {
    var ClientParams: any = {}

    ClientParams.TranId = this.coreHelper.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_NPSST_ID");
    this.CallUrlWithData(ClientParams, screenInstance, internals);
  }
  CallUrlWithData(ClientParams, screenInstance, internals) {
    this.httpHelper.HttpPost('/microsvc/npss_csget_deal_btn_show_hide/', ClientParams)
      .subscribe((res: any) => {
        if (res.data.status == "SUCCESS" || res.data == "SUCCESS") {
          screenInstance.payment_processing_details_ui_get_deal.show = true
          screenInstance.payment_processing_details_ui_send_to_checker.show = false

          this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
        }

        else {
          screenInstance.payment_processing_details_ui_get_deal.show = false
          screenInstance.payment_processing_details_ui_send_to_checker.show = true
          //this.dialogHelper.ShowErrorDialog(res.data.data)
          this.appHandler.callInternals(internals, screenInstance, "SUCCESS");
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