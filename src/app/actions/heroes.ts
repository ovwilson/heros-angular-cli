import { Action } from '@ngrx/store';
import { Hero } from './../models/hero';

// Hero
export const HERO_MODEL_CHANGE = '[Hero] Model Change';
export const HERO_ADD = '[Hero] Add';
export const HERO_UPDATE = '[Hero] Update';
export const HERO_GET = '[Hero] Get';
export const HERO_REMOVE = '[Hero] Remove';
export const HERO_RECEIVE_GET = '[Hero] Receive Get';
export const HERO_RECEIVE_ADD = '[Hero] Receive Add';
export const HERO_RECEIVE_UPDATE = '[Hero] Receive Update';
export const HERO_RECEIVE_UPDATE_TO_LIST = '[Hero] Receive Update to List';
export const HERO_RECEIVE_REMOVE = '[Hero] Receive Remove';

// Heroes
export const HEROES_LISTEN = '[Heroes] Listen';
export const HEROES_FILTER_FRIENDS = '[Heroes] Filter Friends';
export const HEROES_FILTER_ENEMIES = '[Heroes] Filter Enemies';
export const HEROES_TOP_RATED = '[Heroes] Top Rated';
export const HEROES_RESET = '[Heroes] Reset';
export const HEROES_SEARCH_FRIENDS = '[Heroes] Search Friends';

export class HeroesListen implements Action {
    readonly type = HEROES_LISTEN;
}

export class HeroAdd implements Action {
    readonly type = HERO_ADD;
    constructor(public payload: Hero) { }
}

export class HeroModelChange implements Action {
    readonly type = HERO_MODEL_CHANGE;
    constructor(public payload: Hero) { }
}


export class HeroUpdate implements Action {
    readonly type = HERO_UPDATE;
    constructor(public payload: Hero) { }
}

export class HeroRemove implements Action {
    readonly type = HERO_REMOVE;
    constructor(public payload: Hero) { }
}

export class HeroReceiveUpdateToList implements Action {
    readonly type = HERO_RECEIVE_UPDATE_TO_LIST;
    constructor(public payload: { key: string, data: Hero }) { }
}

export class HeroReceiveAdd implements Action {
    readonly type = HERO_RECEIVE_ADD;
    constructor(public payload: { key: string, data: Hero }) { }
}

export class HeroReceiveGet implements Action {
    readonly type = HERO_RECEIVE_GET;
    constructor(public payload: { key: string, data: Hero }) { }
}

export class HeroReceiveUpdate implements Action {
    readonly type = HERO_RECEIVE_UPDATE;
    constructor(public payload: { key: string, data: Hero }) { }
}

export class HeroReceiveRemove implements Action {
    readonly type = HERO_RECEIVE_REMOVE;
    constructor(public payload: { key: string, data: Hero }) { }
}

export class HeroesTopRated implements Action {
    readonly type = HEROES_TOP_RATED;
    constructor(public payload: Hero[]) { }
}

export type All
    = HeroesListen
    | HeroAdd
    | HeroModelChange
    | HeroUpdate
    | HeroRemove
    | HeroReceiveUpdateToList
    | HeroReceiveRemove
    | HeroReceiveAdd
    | HeroReceiveGet
    | HeroReceiveUpdate
    | HeroesTopRated;
