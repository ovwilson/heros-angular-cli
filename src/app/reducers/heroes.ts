import { ActionReducer, Action } from '@ngrx/store';
import { Hero } from './../models/hero';
import * as fromHeroActions from './../actions/heroes';

export interface State {
    models: Hero[];
    model: Hero;
    modelChanges: Hero;
}

const initialState: State = {
    models: [],
    model: Object.create({}),
    modelChanges: {}
};

export function heroes(state = initialState, action: fromHeroActions.All): State {
    switch (action.type) {
        case fromHeroActions.HERO_RECEIVE_ADD:
            const addedHero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return {
                models: [...state.models, addedHero],
                model: state.model,
                modelChanges: state.modelChanges
            };
        case fromHeroActions.HERO_RECEIVE_UPDATE_TO_LIST:
            const updatedHeroList = state.models.map(hero => {
                return hero.id !== action.payload.key ? hero : Object.assign({}, hero, {
                    id: action.payload.key,
                    name: action.payload.data.name,
                    description: action.payload.data.description,
                    topRated: action.payload.data.topRated
                });
            });
            return {
                model: state.model,
                models: updatedHeroList,
                modelChanges: state.modelChanges
            };
        case fromHeroActions.HERO_RECEIVE_REMOVE:
            return {
                models: state.models.filter((hero: Hero) => hero.id !== action.payload.key),
                model: state.model,
                modelChanges: state.modelChanges
            };
        case fromHeroActions.HEROES_TOP_RATED:
            return {
                model: state.model,
                models: action.payload.filter(hero => hero.topRated),
                modelChanges: state.modelChanges
            };
        case fromHeroActions.HERO_RECEIVE_GET:
            const getHero: Hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return {
                models: state.models,
                model: getHero,
                modelChanges: state.modelChanges
            };
        case fromHeroActions.HERO_RECEIVE_UPDATE:
            const updatedHero: Hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return {
                models: state.models,
                model: updatedHero,
                modelChanges: state.modelChanges
            };
        case fromHeroActions.HERO_MODEL_CHANGE:
            return {
                models: state.models,
                model: updatedHero,
                modelChanges: Object.assign({}, state.modelChanges, action.payload)
            };
        //case HEROES_FILTER_FRIENDS:
        //const friendsList = action.payload.list.sort();
        //const userList = action.payload.userList.sort();

        //const friendsList$ = Observable.from(friendsList).distinct();//.subscribe(vals => console.log(vals));
        //const userList$ = Observable.from(userList).distinct();

        //friendsList$.sequenceEqual(userList$).subscribe(equals => console.warn(equals));

        //  return state;
        //case SEARCH_HERO_FRIENDS:
        //    return {
        //       heroes: action.payload.filter(hero => hero.id !== action.payload.term, 
        //       hero: state.hero
        //   };
        default:
            return state;
    }
}
