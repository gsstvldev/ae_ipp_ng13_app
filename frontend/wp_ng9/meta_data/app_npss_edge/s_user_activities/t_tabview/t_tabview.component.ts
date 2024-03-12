/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34725 
Modified By     : Admin 
Modified Date   : 2024-Mar-12 8:37 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_user_activities
--------------------------------------------------------------------------- */

    // Component Definition 
    import { Component, OnInit,Input } from '@angular/core';
    import {ComponenthelperService} from '../../../../scripts/fx/componenthelper.service';
    @Component({
      selector: 't_tabview',
      templateUrl: './t_tabview.component.html',
      styleUrls: ['./t_tabview.component.css'],
      providers:[ComponenthelperService]
    })

    // Start of class 
    export class t_tabviewComponent implements OnInit {
      @Input() screen_instance: any;
      @Input() comp_id: any; 
      // Variables 
      show:boolean
      subscription:any;

      // Constructor 
      constructor(private ComponenthelperService:ComponenthelperService) { 
      }
      // Page Init 
      ngOnInit() {
        try {
          if (this.screen_instance[this.comp_id].onChangecomponent) {
            this.subscription = this.screen_instance[this.comp_id].onChangecomponent.subscribe({
              next: (event: any) => {
                this.handlechangecomponentevent(event)
              }
            })
          }  
        } catch (error) {
          console.log("tab component oninit")
          console.log(error);
        }
        this.ComponenthelperService.showHideTab_userRole(event, this.screen_instance, this.comp_id);
      }
      
      handlechangecomponentevent(event) {
        this.ComponenthelperService.handleComponentEvent(event);
      }

      handleChange(event) {
        this.ComponenthelperService.TabhandleChange(event, this.screen_instance, this.comp_id)
      }

      getClass(profile) {
        if (this.screen_instance[this.comp_id].tab_profiles[profile]['invalid'] === true) {
        return 'panel-validate'
        }
      }

    }
    
    // End of class 
    