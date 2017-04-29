import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as fromRoot from './../reducers/reducers';
import * as fromHeroesAction from './../actions/heroes';
import * as fromLoadersAction from './../actions/loaders';
import * as config from './../../environments/environment';

declare var firebase: any;

@Injectable()

export class FirebaseEffects {

    @Effect({ dispatch: false }) listen$ = this.actions$.ofType(fromHeroesAction.HEROES_LISTEN)
        .do(() => {
            
            // Show Loading Progress bar
            this.store.dispatch(new fromLoadersAction.LoadingShow());

            firebase.initializeApp(config.environment.firebaseConfig);

            // Listen for added values
            firebase.database().ref('/').on('child_added', (snapshot) => {
                console.info('child_added:', snapshot.val());
                this.store.dispatch(new fromHeroesAction.HeroReceiveAdd({ key: snapshot.key, data: snapshot.val() })
                );
            });

            // Listen for changed values
            firebase.database().ref('/').on('child_changed', (snapshot) => {
                console.info('child_changed:', snapshot.val());
                this.store.dispatch(new fromHeroesAction.HeroReceiveUpdate({ key: snapshot.key, data: snapshot.val() }));
                this.store.dispatch(new fromHeroesAction.HeroReceiveUpdateToList({ key: snapshot.key, data: snapshot.val() }));
            });

            // Listen for Removed values
            firebase.database().ref('/').on('child_removed', (snapshot) => {
                console.info('child_removed:', snapshot.val());
                this.store.dispatch(new fromHeroesAction.HeroReceiveRemove({ key: snapshot.key, data: snapshot.val() }));
            });
        });

    @Effect({ dispatch: false }) addHero$ = this.actions$.ofType(fromHeroesAction.HERO_ADD)
        .do((action: Action) => {
            firebase.database().ref('/').push(action.payload);
        });

    @Effect({ dispatch: false }) getHero$ = this.actions$.ofType(fromHeroesAction.HERO_RECEIVE_GET)
        .do((action: Action) => {
            firebase.database().ref('/' + action.payload.id).once('value').then((snapshot) => {
                this.store.dispatch(new fromHeroesAction.HeroReceiveGet({ key: snapshot.key, data: snapshot.val() }));
            });
        });

    @Effect({ dispatch: false }) updateHero$ = this.actions$.ofType(fromHeroesAction.HERO_UPDATE)
        .do((action: Action) => {
            firebase.database().ref('/' + action.payload.id).set({
                name: action.payload.name,
                description: action.payload.description,
                topRated: action.payload.topRated
            });
        });

    @Effect({ dispatch: false }) removeHero$ = this.actions$.ofType(fromHeroesAction.HERO_REMOVE)
        .do((action: Action) => {
            firebase.database().ref('/').child(action.payload.id).remove();
        });

    constructor(private actions$: Actions, private store: Store<fromRoot.State>) { }

}