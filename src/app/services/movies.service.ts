import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }


  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=3302b424abac510a99ecb3c6db9d3a0b');
  }
}
