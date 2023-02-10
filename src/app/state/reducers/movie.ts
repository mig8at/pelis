import { createReducer, on } from '@ngrx/store';
import { getPopularMovies, setPopularMovies } from '../actions/movie';
import globalState from '../store';


export const moviesReducer = createReducer(
    globalState.movies,
    on(getPopularMovies, (state) => state),
    on(setPopularMovies, (state, { movies }) => movies)
);