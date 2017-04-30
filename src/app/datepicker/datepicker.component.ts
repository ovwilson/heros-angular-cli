import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngOnInit() {

  }

  ngAfterViewInit() {
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  }

  change() {

  }

}
