import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';
import { MdInputModule, MdCheckboxModule, MdSelectModule, MdRadioModule } from '@angular/material';

import { ModelChanges } from './../services/model.change.service';
import { HomeDatepickerComponent } from './home-datepicker/home-datepicker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES),
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule,
    MdRadioModule
  ],
  declarations: [
    HomeComponent,
    HomeDatepickerComponent
  ],
  exports: [
    RouterModule
  ],
  providers:[
    ModelChanges
  ]
})
export class HomeModule { }
