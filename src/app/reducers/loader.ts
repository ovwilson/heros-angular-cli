import { ActionReducer, Action } from '@ngrx/store';
import * as fromLoadingActions from './../actions/loaders';

const initialState = false;

export function loader(state = initialState, action: fromLoadingActions.All) {
    switch (action.type) {
        case fromLoadingActions.LOADING_SHOW:
            return true;
        case fromLoadingActions.LOADING_HIDE:
            return false;
        default:
            return state;
    }
}

