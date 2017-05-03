import { Component, Input, OnInit, DoCheck, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from './../../models/hero';
import * as fromRoot from './../../reducers/reducers';
import { Observable } from 'rxjs/Observable';
import { ModelChanges } from './../../services/model.change.service';

@Component({
  selector: 'home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFormComponent implements OnInit {

  @Input() model: Hero;
  modelChanges$: Observable<Hero> = Observable.of<Hero>();
  heroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);
  favHeroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);
  selectedHero: string;
  favoriteHero: string;

  constructor(private service: ModelChanges, private store: Store<fromRoot.State>) {
    this.heroes$ = this.store.select(state => state.heroes.models);
    this.favHeroes$ = this.store.select(fromRoot.selectTopRatedHeros);
  }

  ngOnInit() {
    this.service.setFieldValues(this.model);
    this.modelChanges$ = this.service.getChanges();

  }

  ngDoCheck() {
    this.service.change(this.model);
  }


}