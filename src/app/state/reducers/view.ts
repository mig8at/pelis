import { createReducer, on } from '@ngrx/store';
import { updateHeaderTitle } from '../actions/view';
import globalState from '../store';


export const viewReducer = createReducer(
    globalState.view.header.title,
    on(updateHeaderTitle, (state, { title }) => title)
);

