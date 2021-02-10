import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  constructor(private http:HttpClient){

  }
  ngOnInit():void{
    this.http.get('https://jsonplaceholder.typicode.com/user')
    .subscribe(data=>{

    });
    this.http.get('https://jsonplaceholder.typicode.com/posts/2')
    .subscribe(data=>{

    });
    this.http.get('https://jsonplaceholder.typicode.com/posts/2/comments')
    .subscribe(data=>{

    });
  }
}
