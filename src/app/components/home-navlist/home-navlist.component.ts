import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home-navlist',
  templateUrl: './home-navlist.component.html',
  styleUrls: ['./home-navlist.component.css']
})
export class HomeNavlistComponent implements OnInit {

  models$: Observable<any> = Observable.of<any>();
  trModels$: Observable<any> = Observable.of<any>();

  constructor() { }

  ngOnInit() {
  }

}
