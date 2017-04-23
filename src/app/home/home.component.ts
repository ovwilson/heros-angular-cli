import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: Hero = new Hero('', '', '', '', true);

  constructor() { }

  ngOnInit() {
  }

}
