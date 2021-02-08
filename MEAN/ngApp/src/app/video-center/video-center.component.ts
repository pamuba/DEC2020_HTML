import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:Video[]=[
    {"_id":"1", "title":"titleeee", "url":"url", "description":"desc"},
    {"_id":"1", "title":"titleeee", "url":"url", "description":"desc"},
    {"_id":"1", "title":"titleeee", "url":"url", "description":"desc"},
    {"_id":"1", "title":"titleeee", "url":"url", "description":"desc"},
    {"_id":"1", "title":"titleeee", "url":"url", "description":"desc"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
