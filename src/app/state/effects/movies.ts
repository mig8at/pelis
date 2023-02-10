import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { getPopularMovies, setPopularMovies } from '../actions/movie';

@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPopularMovies),
            mergeMap(() => this.moviesService.getPopular()
                .pipe(
                    map(movies => {
                        console.log(movies)
                        return setPopularMovies({ movies })
                    }),
                    catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ) { }
}