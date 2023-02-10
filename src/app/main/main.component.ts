import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  header: any
  movies$: Observable<any[]> = this.store.select(state => state.movies);

  constructor(
    private moviesService: MoviesService,
    private store: Store<{ view: any, movies: any[] }>) {
    store.select('view').subscribe((data) => {
      this.header = data.header;
    });


  }
}
