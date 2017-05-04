import { Component, Input, OnInit, DoCheck, ChangeDetectionStrategy, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from './../../models/hero';
import * as fromRoot from './../../reducers/reducers';
import * as fromHeroActions from './../../actions/heroes';

import { Observable } from 'rxjs/Observable';
import { ModelChanges } from './../../services/model.change.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeFormComponent implements OnInit {

  heroForm: FormGroup;

  model: Hero = new Hero();
  modelChanges$: Observable<Hero> = Observable.of<Hero>();
  heroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);
  favHeroes$: Observable<Hero[]> = Observable.of<Hero[]>([]);
  selectedHero: string;
  favoriteHero: string;

  constructor(private service: ModelChanges, private store: Store<fromRoot.State>, private fb: FormBuilder) {
    this.modelChanges$ = this.store.select(state => state.heroes.modelChanges);

    this.heroes$ = this.store.select(state => state.heroes.models);
    this.favHeroes$ = this.store.select(fromRoot.selectTopRatedHeros);
  }

  ngOnInit() {
    // this.service.setFieldValues(this.model);
    this.buildForm();
  }

  buildForm(): void {
    this.heroForm = this.fb.group({
      'name': [this.model.name, [Validators.required]],
      'description': [this.model.description]
    });

    this.heroForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    // this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data: any) {
    console.log('Change', data);
    this.store.dispatch(new fromHeroActions.HeroModelChange(data))

  }
  create() {
    this.model = this.heroForm.value;
  }

  ngDoCheck() {
    //this.service.change(this.model);
  }


}
