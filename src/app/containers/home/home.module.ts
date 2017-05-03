import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';
import { MdInputModule, MdCheckboxModule, MdSelectModule, MdRadioModule, MdCardModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModelChanges } from './../../services/model.change.service';
import { DatePickerComponent } from './../../datepicker/datepicker.component';


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
    FlexLayoutModule
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