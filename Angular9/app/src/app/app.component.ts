import { Component } from '@angular/core';
import { getMaxListeners } from 'process';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name = "Angular 9";
  public message = "";
  topics = ['Angular', 'React', 'Vue']

  userModel = new User("John","joh@getMaxListeners.com", 
  12345678, '', 'morning', true);
}
