import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from '../../state/effects/movies';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MainComponent,


  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,

    HttpClientModule,
    BrowserAnimationsModule,

    EffectsModule.forRoot([MovieEffects])
  ]
})
export class MainModule { }
