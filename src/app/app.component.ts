import { Component, OnInit, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers/reducers';
import * as fromHeroActions from './actions/heroes';
import * as fromLoaderActions from './actions/loaders';
import { Hero } from './models/hero';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  sideNavOpen = false;

  loader$: Observable<boolean> = Observable.of<boolean>(false);

  constructor(private store: Store<fromRoot.State>) {
    this.loader$ = this.store.select(state => state.loading);
  }

  ngOnInit() {
    this.init();
    this.isLoaded();
  }

  init() {
    this.store.dispatch(new fromHeroActions.HeroesListen());
  }

  hideLoader() {
    this.store.dispatch(new fromLoaderActions.LoadingHide());
  }

  isLoaded() {
    this.store.select(fromRoot.selectHeroCount)
      .filter(count => count > 0)
      .subscribe(() => this.hideLoader())
      .unsubscribe();
  }

  onSideNavToggle() {
    this.sideNavOpen = !this.sideNavOpen;
  }

}
