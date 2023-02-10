import AppState from "src/app/interfaces/state";



const globalState: AppState = {
    view: {
        header: {
            title: 'Peliculas',
            menu: ["Home", "Movies", "About"]
        }
    },
    movies: [],

    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default globalState;

