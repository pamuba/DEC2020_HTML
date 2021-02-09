import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  public editTitle:boolean = false;

  @Input() video:Video;
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.editTitle = false;    
  }

  onTitleClick(){
    this.editTitle = true;
  }
  updateVideo(){
    this.updateVideoEvent.emit(this.video)
  }
  deleteVideo(){
    this.deleteVideoEvent.emit(this.video)
  }

}
