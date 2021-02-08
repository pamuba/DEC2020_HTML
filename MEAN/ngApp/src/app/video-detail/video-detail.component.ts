import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  public editTitle:boolean = false;
  @Input() video:Video;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.editTitle = false;    
  }

  onTitleClick(){
    this.editTitle = true;
  }

}
