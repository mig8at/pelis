import { createReducer, on } from '@ngrx/store';
import { updateHeader } from '../actions/view';
import { viewState } from '../store/view';

import { increment, decrement, reset } from '../actions/user';



export const viewReducer = createReducer(
    viewState,
    on(updateHeader, (state, header) => ({ ...state, header }))
);

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0)
);