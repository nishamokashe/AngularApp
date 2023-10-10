import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasktemplet-from',
  templateUrl: './tasktemplet-from.component.html',
  styleUrls: ['./tasktemplet-from.component.css']
})
export class TasktempletFromComponent implements OnInit {

  isCorrect=false;
  defaultValue='male';

  checkDomain(inputValue) {
    console.log(inputValue);

    const domain = inputValue.substring(inputValue.lastIndexOf('@') + 1);
    console.log('domain ',domain);

    if(domain == 'codemind.com') 
    {
      // false
      this.isCorrect = false;
    }
    else {
      // true
      this.isCorrect = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
      console.log('form submitted', form);
      
  }
  
}
