import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/movie';

export const getPopularMovies = createAction('[Main Page] get popular movies');
export const getPopularTV = createAction('[Main Page] get popular tv');
export const searchMovies = createAction('[Main Page] searc movies', props<{ search: string }>());
export const setPopularMovies = createAction('[Main Page] set popular movies', props<{ movies: Movie[] }>());