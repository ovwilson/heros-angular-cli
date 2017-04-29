import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from './../models/hero';
import * as fromRoot from './../reducers/reducers';
import { Observable } from 'rxjs/Observable';
import { ModelChanges } from './../services/model.change.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, DoCheck {

  model: Hero = new Hero('', '', 'Batman', 'Batman is gangsta!!', true);
  modelChanges$: Observable<Hero> = Observable.of<Hero>();
  heroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);
  favHeroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);
  selectedHero: string;
  favoriteHero: string;

  constructor(private service: ModelChanges, private store: Store<fromRoot.State>) {
    this.heroes$ = this.store.select(state => state.heroes.models);
    this.favHeroes$ = this.store.select(fromRoot.topRatedHeros);
  }

  ngOnInit() {
    this.service.setFieldValues(this.model);
    this.modelChanges$ = this.service.getChanges();

  }

  ngDoCheck() {
    this.service.change(this.model);
  }

}
