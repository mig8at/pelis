import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies';

  header: any

  constructor(private store: Store<{ view: any, count: number }>) {
    store.select('view').subscribe((data) => {
      this.header = data.header;
    });


  }



}
