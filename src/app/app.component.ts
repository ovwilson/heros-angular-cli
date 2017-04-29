import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers/reducers';
import * as fromHeroActions from './actions/heroes';
import { Hero } from './models/hero';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showBuffer = true;

  title = 'app works!';

  models$: Observable<Hero[]> = Observable.of<Hero[]>([]);
  trModels$: Observable<Hero[]> = Observable.of<Hero[]>([]);

  constructor(private store: Store<fromRoot.State>) {
    this.models$ = this.store.select(state => state.heroes.models);
    this.trModels$ = this.store.select(fromRoot.topRatedHeros);
  }

  ngOnInit() {
    this.store.dispatch(new fromHeroActions.HeroesListen());
  }

}
