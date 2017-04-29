import { Hero } from './../models/hero';
import * as fromHeroes from './heroes';
import * as fromLoading from './loader';

export interface State {
    heroes: fromHeroes.State;
    loading: boolean;
};

export function reducers() {
    return {
        heroes: fromHeroes.heroes,
        loading: fromLoading.loader,
    };
};

export function selectTopRatedHeros(state: State) {
    return state.heroes.models.filter(hero => hero.topRated);
}

export function selectHeroCount(state: State) {
    return state.heroes.models.length;
}