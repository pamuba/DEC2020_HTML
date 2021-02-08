import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos:Video[];
  constructor() { }

  ngOnInit(): void {
  }

}
