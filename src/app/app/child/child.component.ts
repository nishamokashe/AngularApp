import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { log } from 'console';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('msg') dataInput: string;
  data;

  @Output() foodEvent: EventEmitter<String> = new EventEmitter<string>();
    constructor() { 
    }

  ngOnInit() {
    console.log('Input data from parent',this.dataInput); 
  }

  addToFood(){
     this.foodEvent.emit('Banana');
  }

}
