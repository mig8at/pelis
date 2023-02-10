import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';

import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/reducers';
import { ROOT_EFFECTS } from './state/effects';
import { MainModule } from './pages/main/main.module';

import { localStorageSync } from 'ngrx-store-localstorage';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['favorites'] })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    EffectsModule.forRoot(ROOT_EFFECTS),
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
