import { createSelector } from '@ngrx/store';


export interface View {
    header: any;
}

export interface AppState {
    view: View;
}

export const selectFeature = (state: AppState) => state.view;

export const selectViewHeader = createSelector(
    selectFeature,
    (state: View) => state.header
);