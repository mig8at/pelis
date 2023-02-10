import { favoritesReducer, moviesReducer } from "./movie";
import { viewReducer } from "./view";

export const ROOT_REDUCERS = {
    view: viewReducer,
    movies: moviesReducer,
    favorites: favoritesReducer
}