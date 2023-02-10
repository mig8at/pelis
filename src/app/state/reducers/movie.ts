import { createReducer, on } from '@ngrx/store';
import { addFavorite, getPopularMovies, setPopularMovies } from '../actions/movie';
import globalState from '../store';


export const moviesReducer = createReducer(
    globalState.movies,
    on(getPopularMovies, (state) => state),
    on(setPopularMovies, (state, { movies }) => movies)
);


export const favoritesReducer = createReducer(
    globalState.favorites,
    on(addFavorite, (state, { id }) => {
        if (state.includes(id)) {
            return state.filter((movieId) => movieId !== id)
        } else {
            return [...state, id]
        }
    }),

);