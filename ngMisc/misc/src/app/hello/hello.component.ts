import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }

}
