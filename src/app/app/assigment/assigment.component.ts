import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',
  styleUrls: ['./assigment.component.css']
})
export class AssigmentComponent implements OnInit {

  @Input() dataInput: string;
  @Output('output') dataOutput:string;
  constructor() { }

  ngOnInit() {
    console.log('Input data from parent',this.dataInput , this.dataOutput); 
  }
  
  SaveData(){
  }

}
