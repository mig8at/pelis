import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { Paginate } from '../interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Paginate<Movie>>('https://api.themoviedb.org/3/movie/popular?api_key=3302b424abac510a99ecb3c6db9d3a0b')
      .pipe(
        map((data) => data.results)
      );
  }
}
