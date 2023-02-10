import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import AppState from '../../interfaces/state';
import { addFavorite, getPopularMovies, getPopularTV, searchMovies } from '../../state/actions/movie';
import { MovieDialog } from './review/review.dialog';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  bannerChange: any
  banner: string = ""
  movies$: Observable<any[]> = this.store.select(state => state.movies);
  favorites$: Observable<number[]> = this.store.select(state => state.favorites);


  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>) {

  }

  isFavorite(id: number) {
    return this.favorites$.pipe(
      map(favorites => favorites.some(fId => fId === id))
    )
  }

  openMovie(movie: Movie) {

    const dialogRef = this.dialog.open(MovieDialog, {
      data: movie,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  addFavorite(id: number) {
    this.store.dispatch(addFavorite({ id }))
  }

  getPopularMovies() {
    this.store.dispatch(getPopularMovies())
  }

  getPopularTV() {
    this.store.dispatch(getPopularTV())
  }


  inputSearchMovies({ value }: any) {
    this.store.dispatch(searchMovies({ search: value }))
  }

  ngOnInit() {
    this.getPopularMovies();

    this.movies$.subscribe((movies) => {
      if (movies.length > 0) {
        this.banner = movies[Math.floor(Math.random() * movies.length)].backdrop_path

        clearInterval(this.bannerChange)

        this.bannerChange = setInterval(() => {
          this.banner = movies[Math.floor(Math.random() * movies.length)].backdrop_path
        }, 4000)
      }
    })

  }
}
