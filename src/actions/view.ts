import { createAction, props } from '@ngrx/store';

export const updateHeader = createAction(
    '[Header Component] Header',
    props<{ title: string; menu: string[] }>()
);

export const movies = createAction('[Movies Component] Movies');

export const footer = createAction('[Footer Component] Footer');

