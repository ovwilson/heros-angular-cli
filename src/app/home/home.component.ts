import { Component, OnInit, DoCheck } from '@angular/core';
import { Hero } from './../models/hero';
import { Observable } from 'rxjs/Observable';


import { ModelChanges } from './../services/model.change.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  model: Hero = new Hero('', '', '', '', true);
  modelChanges$: Observable<Hero> = Observable.of<Hero>();

  constructor(private service: ModelChanges) { }

  ngOnInit() {
    this.service.setFieldValues(this.model);
    this.modelChanges$ = this.service.getChanges();
  }

  ngDoCheck() {
    this.service.change(this.model);
  }

}
