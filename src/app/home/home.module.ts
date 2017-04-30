import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';
import { MdInputModule, MdCheckboxModule, MdSelectModule, MdRadioModule, MdCardModule } from '@angular/material';

import { ModelChanges } from './../services/model.change.service';

import { DatePickerComponent } from './../datepicker/datepicker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES),
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule,
    MdRadioModule,
    MdCardModule
  ],
  declarations: [
    HomeComponent,
    DatePickerComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ModelChanges
  ]
})
export class HomeModule { }
