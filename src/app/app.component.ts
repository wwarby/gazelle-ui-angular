import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isOnline = true;

  constructor(public title: Title, http: HttpClient) {
    this.isOnline = navigator.onLine;
    this.title.setTitle('Gazelle');
  }

}
