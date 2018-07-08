import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isOnline = true;

  constructor(public title: Title) {
    this.isOnline = navigator.onLine;
    this.title.setTitle('Gazelle');
  }

}
