import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/reducers';
import { ROOT_EFFECTS } from './state/effects';
import { MainModule } from './pages/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    EffectsModule.forRoot(ROOT_EFFECTS),
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
