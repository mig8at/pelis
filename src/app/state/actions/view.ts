import { createAction, props } from '@ngrx/store';

export const updateHeaderTitle = createAction('[Header Component] update header title', props<{ title: string; }>());

