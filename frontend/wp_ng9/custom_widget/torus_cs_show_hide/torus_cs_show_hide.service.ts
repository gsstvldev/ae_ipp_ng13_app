// Handling SINGLE action Mode if selected  item length is 1 // Enable component while enable btn com name special char handling
import { Injectable } from '@angular/core';
//Uncomment below lines when it is required
//import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http' ;
//import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttphelperService } from '../../scripts/fx/httphelper.service';
import { CoreService } from '../../scripts/fx/core.service';
import { SessionService } from '../../scripts/fx/session.service';
import { AppHandlerService } from '../../scripts/fx/app.handler.service';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
                        
@Injectable()
export class torus_cs_show_hideService {
  
  MiLevelStatus: string
  MiLevelProcessStatus: string
  MiLevelActionMode: string
  Internals: string
  selectedItems: []
  CurRoleId:string
  CurModuleId:string
  CurMenuGroupId:string
  CurMenuItemId:string
  
    constructor(    
    private httpHelper: HttphelperService,
    private CoreSvc: CoreService,
    private SessionSvc: SessionService,
    private AppHandler: AppHandlerService
    ) { }
    //Default calling function
    fn_torus_cs_show_hide(source_id, destn_id, parent_source_id, event_code, event_params, screenInstance, internals, handler_code, event_data, data_source) {

    setTimeout(() => {
      this.selectedItems = this.CoreSvc.get_selected_items(parent_source_id, event_params, source_id, screenInstance)
      this.MiLevelStatus = this.CoreSvc.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_STATUS");
      this.MiLevelProcessStatus = this.CoreSvc.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_PROCESS_STATUS");
      this.MiLevelActionMode = this.CoreSvc.get_value_from_memory("MEMORY_VARIABLES", "MI_LEVEL_ACTION_MODE");
      this.CurRoleId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'APP_USER_ROLES')
      this.CurModuleId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'CURRENT_MODULE_NAME')      
      this.CurMenuGroupId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'MENU_GROUP')      
      this.CurMenuItemId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'MENU_ITEM')      
      this.Internals = internals
      if (screenInstance[screenInstance.wftpa_description] && screenInstance[screenInstance.wftpa_description].show_hide_btns) {
        let Rows = screenInstance[screenInstance.wftpa_description].show_hide_btns
        this.showhidectrls(Rows, screenInstance)
        let LockingModeRows = screenInstance[screenInstance.wftpa_description].locking_mode;
        this.setLockingMode(LockingModeRows, screenInstance)
        let ListingModeRows = screenInstance[screenInstance.wftpa_description].listing_mode;
        this.setListingMode(ListingModeRows, screenInstance)
        this.AppHandler.callInternals(this.Internals, screenInstance, "SUCCESS");
      } else {
        let appLists = JSON.parse(this.SessionSvc.GetVariable('SESSION_LEVEL', 'APPSYS')).Applications
        let CurrentAppId = this.SessionSvc.GetVariable('SESSION_LEVEL', 'APP_ID')
        var curapp = appLists.filter(value => {
          return value.app_id == CurrentAppId
        })
        let curAppCode = curapp[0].app_code
        let ClientParams: any = {
          "AppCode": curAppCode
        }
        this.GetDataFromDb(ClientParams, screenInstance)
      }
    })
  }


  GetDataFromDb(ClientParams, screenInstance) {
    try {
      this.httpHelper.HttpPost('/microsvc/torus_cs_show_hide/', ClientParams)
        .subscribe((res: any) => {
          if (res.process_status == 'SUCCESS') {
            if (res.data) {
              let Rows = res.data;
              if (!screenInstance[screenInstance.wftpa_description]) {
                screenInstance[screenInstance.wftpa_description] = {}
              }
              screenInstance[screenInstance.wftpa_description]['show_hide_btns'] = Rows.actionBtn;
              screenInstance[screenInstance.wftpa_description]['locking_mode'] = Rows.lockingMode;
              screenInstance[screenInstance.wftpa_description]['listing_mode'] = Rows.listingMode;
              this.showhidectrls(Rows.actionBtn, screenInstance);
              this.setLockingMode(Rows.lockingMode, screenInstance);
              this.setListingMode(Rows.listingMode, screenInstance);
              this.AppHandler.callInternals(this.Internals, screenInstance, "SUCCESS");
            }
          }
        })
    } catch (error) {

    }
  }

  showhidectrls(data, screenInstance) {

    let forms = screenInstance.forms;
    for (var i = 0; i < forms.length; i++) {
      if (!Object.keys(screenInstance[screenInstance[screenInstance.forms[i]]].views).length) {
        let curLoopForm = screenInstance[screenInstance.forms[i]]
        if (document.getElementsByClassName(curLoopForm).length && document.getElementsByClassName(curLoopForm)[0].getElementsByClassName('dynamic_action_btn').length) {
          let curElement = document.getElementsByClassName(curLoopForm)[0].getElementsByClassName('dynamic_action_btn')[0].getElementsByTagName('button')
          this.hideAllBtn(curElement, screenInstance);
          let showBothModeCtrl = []
          if (this.MiLevelStatus) {
            showBothModeCtrl = data.filter((value) => {
              return (value.process_queue_status == this.MiLevelStatus && value.action_mode == this.MiLevelActionMode) || (value.process_queue_status == this.MiLevelStatus && value.action_mode == 'BOTH')
            })
          }

          if (showBothModeCtrl.length) {
            this.showBtn(curElement, showBothModeCtrl, screenInstance)
          }

          let showAlwaysModewithoutRole = data.filter((value) => {
            return value.action_mode == 'SHOW_ALWAYS' && (value.role_id =='' || value.role_id == null)
          })
          
          let showalwayswithRole=data.filter((value) => {
            return value.action_mode == 'SHOW_ALWAYS' && value.role_id == this.CurRoleId
          })
          
          let showAlwaysModeCtrls = showAlwaysModewithoutRole.concat(showalwayswithRole)
          
          if (showAlwaysModeCtrls.length) {
            this.showBtn(curElement, showAlwaysModeCtrls, screenInstance)
          }
          if (this.selectedItems.length && this.selectedItems.length == 1) {
            let showSingleBtn = data.filter((value) => {
              return value.action_mode == 'SINGLE' || value.action_mode == 'SELECT'
            })
            this.showBtn(curElement, showSingleBtn, screenInstance)
          }
        }

      }
    }
  }


  hideAllBtn(hideCtrls, screenInstance) {
    for (var disCltr = 0; disCltr < hideCtrls.length; disCltr++) {
      if (hideCtrls[disCltr] && hideCtrls[disCltr].id) {
        screenInstance[hideCtrls[disCltr].id].show = false
      }
    }
  }

  showBtn(elements, showBtnCtrl, screenInstance) {

    for (var showCtrl = 0; showCtrl < showBtnCtrl.length; showCtrl++) {

      if (!showBtnCtrl[showCtrl].ui_component_name) {
        for (var elm = 0; elm < elements.length; elm++) {
          if (elements[elm].children && elements[elm].children[0].innerText && elements[elm].children[0].innerText == showBtnCtrl[showCtrl].action || (elements[elm].children[1] && elements[elm].children[1].innerText == showBtnCtrl[showCtrl].action)) {
            let comp = elements[elm].id.split('_' + showBtnCtrl[showCtrl].action.toLowerCase().split(' ').join('_').replace(/-/g, ""))
            if (comp.length) {
              if (screenInstance[comp[0]] && !screenInstance[comp[0]].show) {
                screenInstance[comp[0]].show = true

                if (screenInstance[comp[0]] && screenInstance[comp[0]][screenInstance[comp[0]].current_view]) {
                  screenInstance[comp[0]][screenInstance[comp[0]].current_view].show = true
                }
              }
            }
            let curBtnElm = elements[elm].id
            screenInstance[curBtnElm].show = true
          }
        }
      } else {
        if (showBtnCtrl[showCtrl].ui_component_name) {
          let comp = showBtnCtrl[showCtrl].ui_component_name.toLowerCase().split(' ').join('_')
          if (comp) {
            if (screenInstance[comp] && !screenInstance[comp].show) {
              screenInstance[comp].show = true

              if (screenInstance[comp] && screenInstance[comp][screenInstance[comp].current_view]) {
                screenInstance[comp][screenInstance[comp].current_view].show = true
              }
            }
          }
          let ShowbtnElm = showBtnCtrl[showCtrl].ui_component_name.toLowerCase().split(' ').join('_') + '_' + showBtnCtrl[showCtrl].action.toLowerCase()
          if (screenInstance[ShowbtnElm]) {
            screenInstance[ShowbtnElm].show = true
          }
        }
      }
    }
  }


  setLockingMode(Rows, screenInstance) {
    if (this.MiLevelStatus) {
      let filterLockRow = Rows.filter((value) => {
        if(value.process_queue_status && value.screen_module && value.screen_menu_group && value.screen_name){
            return value.process_queue_status == this.MiLevelStatus && value.screen_module == this.CurModuleId && value.screen_menu_group == this.CurMenuGroupId && value.screen_name == this.CurMenuItemId  
          }
          else if((value.process_queue_status == null || value.process_queue_status == '') && value.screen_module && value.screen_menu_group && value.screen_name){
            return value.screen_module == this.CurModuleId && value.screen_menu_group == this.CurMenuGroupId && value.screen_name == this.CurMenuItemId  
          }
          else{
        return value.process_queue_status == this.MiLevelStatus
          }  
      })

      if (filterLockRow.length) {

        for (var i = 0; i < filterLockRow.length; i++) {
          if (!screenInstance[filterLockRow[i].ui_component_name.toLowerCase().split(' ').join('_')]) {
            screenInstance[filterLockRow[i].ui_component_name.toLowerCase().split(' ').join('_')] = {}
          }
          screenInstance[filterLockRow[i].ui_component_name.toLowerCase().split(' ').join('_')]['locking_mode'] = filterLockRow[i].locking_mode;
          if (filterLockRow[i].locking_count) {
            screenInstance[filterLockRow[i].ui_component_name.toLowerCase().split(' ').join('_')]['locking_parameter'] = filterLockRow[i].locking_count
          }
        }

      }
    }

  }

  setListingMode(Rows, screenInstance) {

    if (this.CurRoleId) {
      let filterListingModeRow = Rows.filter((value) => {
          if(value.role_id && value.screen_module && value.screen_menu_group && value.screen_name){
            return value.role_id == this.CurRoleId && value.screen_module == this.CurModuleId && value.screen_menu_group == this.CurMenuGroupId && value.screen_name == this.CurMenuItemId  
          }
          else if((value.role_id == null || value.role_id == '') && value.screen_module && value.screen_menu_group && value.screen_name){
            return value.screen_module == this.CurModuleId && value.screen_menu_group == this.CurMenuGroupId && value.screen_name == this.CurMenuItemId  
          }
          else{
        return value.role_id == this.CurRoleId
          }
      })

      if (filterListingModeRow.length) {
        for (var i = 0; i < filterListingModeRow.length; i++) {
          if (!screenInstance[filterListingModeRow[i].ui_component_name.toLowerCase().split(' ').join('_')]) {
            screenInstance[filterListingModeRow[i].ui_component_name.toLowerCase().split(' ').join('_')] = {}
          }
          screenInstance[filterListingModeRow[i].ui_component_name.toLowerCase().split(' ').join('_')]['listing_mode'] = filterListingModeRow[i].listing_mode
        }
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
