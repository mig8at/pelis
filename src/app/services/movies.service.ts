import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { Paginate } from '../interfaces/shared';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'https://api.themoviedb.org/3';
  private key = '3302b424abac510a99ecb3c6db9d3a0b'

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Paginate<Movie>>(`${this.url}/movie/popular?api_key=${this.key}`)
      .pipe(
        map((data) => data.results)
      );
  }

  getPopularTV(): Observable<Movie[]> {
    return this.http.get<Paginate<Movie>>(`${this.url}/tv/popular?api_key=${this.key}`)
      .pipe(
        map((data) => data.results)
      );
  }

  searchPopular(search: string): Observable<Movie[]> {

    if (search.length === 0) {
      return this.getPopular();
    }

    return this.http.get<Paginate<Movie>>(`${this.url}/search/movie?api_key=${this.key}&query=${search}`)
      .pipe(
        map((data) => data.results.filter(
          (movie) => movie.poster_path
        ))
      );
  }
}
