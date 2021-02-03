import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-component-interaction',
  // templateUrl: './component-interaction.component.html',
  template:`
    <h2>{{"Data from Parent:"+name}}</h2>
    <button (click)="fireEvent()">Send Data as EVENT</button>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('parentData') public name ;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("Data from CHILD");
  }

}
