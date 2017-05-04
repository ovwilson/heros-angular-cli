import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from './../../models/hero';
import * as fromRoot from './../../reducers/reducers';
import { Observable } from 'rxjs/Observable';
import { ModelChanges } from './../../services/model.change.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {

  model$: Observable<Hero> = Observable.of<Hero>(new Hero('', '', '', ''));
  modelChanges$: Observable<Hero> = Observable.of<Hero>();

  constructor(private service: ModelChanges, private store: Store<fromRoot.State>) {
    this.modelChanges$ = this.store.select(state => state.heroes.modelChanges);

    // this.heroes$ = this.store.select(state => state.heroes.models);
    // this.favHeroes$ = this.store.select(fromRoot.selectTopRatedHeros);
  }

  ngOnInit() {
    //  this.service.setFieldValues(this.model);
    // this.modelChanges$ = this.service.getChanges();

  }

  ngDoCheck() {
    //this.service.change(this.model);
  }

  onSideNavToggle() {

  }

}
