import { Movie } from "./movie";
import { View } from "./view";

export default interface AppState {
    view: View,
    movies: Movie[];
    favorites: number[]
}