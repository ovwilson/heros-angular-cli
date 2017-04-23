import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';
import { MdInputModule, MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(APPRROUTES),
    MdInputModule,
    MdCheckboxModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
