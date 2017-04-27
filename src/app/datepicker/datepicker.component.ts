import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatePickerComponent implements OnInit, AfterViewInit {

  datetime : string ="";

  constructor() { }


  ngOnInit() {

  }

  ngAfterViewInit() {
  //  setTimeout(() => {
   //   $('.picker').pickadate({
   //     selectMonths: true, // Creates a dropdown to control month
   //     selectYears: 15 // Creates a dropdown of 15 years to control year
   //   });
   // }, 9000);

  }

  change(){
    
  }

}
