import { ActionReducer, Action } from '@ngrx/store';
import * as fromLoadingActions from './../actions/loading';

const initialState: boolean = false;

export function loader(state = initialState, action: fromLoadingActions.All) {
    switch (action.type) {
        case fromLoadingActions.LOADING_SHOW:
            return false;
        case fromLoadingActions.LOADING_HIDE:
            return true;
        default:
            return state;
    }
}

