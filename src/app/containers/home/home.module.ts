import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';
import { MdInputModule, MdCheckboxModule, MdSelectModule, 
  MdRadioModule, MdCardModule, MdButtonModule, MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModelChanges } from './../../services/model.change.service';
import { DatePickerComponent } from './../../datepicker/datepicker.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeFormComponent } from './../../components/home-form/home-form.component';
import { HomeNavlistComponent } from './../../components/home-navlist/home-navlist.component';


import { SortDirective } from './../../directives/sort.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES),
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule,
    MdRadioModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent,
    HomeFormComponent,
    DatePickerComponent,
    HomeNavlistComponent,
    SortDirective
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ModelChanges
  ]
})
export class HomeModule { }
