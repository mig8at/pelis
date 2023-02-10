import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/movie';

export const getPopularMovies = createAction('[Main Page] get popular movies');
export const setPopularMovies = createAction('[Main Page] set popular movies', props<{ movies: Movie[] }>());