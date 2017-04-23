import { ActionReducer, Action } from '@ngrx/store';
import { Hero } from './../models/hero';
import * as fromHeroActions from './../actions/heroes';

export interface State {
    heroes: Hero[];
    hero: Hero;
}

const initialState: State = {
    heroes: [],
    hero: Object.create({})
};

export function heroes(state = initialState, action: fromHeroActions.All): State {
    switch (action.type) {
        case fromHeroActions.HERO_ADD:
            const addedHero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.name,
                description: action.payload.description,
                topRated: action.payload.topRated
            });
            return {
                heroes: [...state.heroes, addedHero],
                hero: state.hero
            };
        case fromHeroActions.HERO_RECEIVE_UPDATE_TO_LIST:
            const updatedHeroList = state.heroes.map(hero => {
                return hero.id !== action.payload.key ? hero : Object.assign({}, hero, {
                    id: action.payload.key,
                    name: action.payload.data.name,
                    description: action.payload.data.description,
                    topRated: action.payload.data.topRated
                });
            });
            return {
                hero: state.hero,
                heroes: updatedHeroList
            };
        case fromHeroActions.HERO_RECEIVE_REMOVE:
            return {
                heroes: state.heroes.filter((hero: Hero) => hero.id !== action.payload.key),
                hero: state.hero
            };
        case fromHeroActions.HEROES_TOP_RATED:
            return {
                hero: state.hero,
                heroes: action.payload.filter(hero => hero.topRated)
            };
        case fromHeroActions.HERO_RECEIVE_GET:
            const getHero: Hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return { heroes: state.heroes, hero: getHero };
        case fromHeroActions.HERO_RECEIVE_UPDATE:
            const updatedHero: Hero = Object.assign({}, {
                id: action.payload.key,
                name: action.payload.data.name,
                description: action.payload.data.description,
                topRated: action.payload.data.topRated
            });
            return { heroes: state.heroes, hero: updatedHero };
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
