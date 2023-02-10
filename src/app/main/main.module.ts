import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { StoreModule } from '@ngrx/store';
import { viewReducer, moviesReducer } from '../state/reducers/view';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from '../state/effects/movies';


@NgModule({
  declarations: [
    MainComponent,


  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      view: viewReducer,
      movies: moviesReducer
    }),

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,


    HttpClientModule,
    BrowserAnimationsModule,

    EffectsModule.forRoot([MovieEffects])
  ]
})
export class MainModule { }
