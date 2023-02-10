import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from '../../interfaces/state';
import { getPopularMovies } from '../../state/actions/movie';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  header: any
  banner: string = ""
  movies$: Observable<any[]> = this.store.select(state => state.movies);

  constructor(
    private store: Store<AppState>) {
    store.select('view')



  }

  ngOnInit() {
    this.store.dispatch(getPopularMovies());

    this.movies$.subscribe((movies) => {
      if (movies.length > 0) {
        this.banner = movies[Math.floor(Math.random() * movies.length)].backdrop_path
        setInterval(() => {
          this.banner = movies[Math.floor(Math.random() * movies.length)].backdrop_path
        }, 4000)
      }
    })

  }
}
