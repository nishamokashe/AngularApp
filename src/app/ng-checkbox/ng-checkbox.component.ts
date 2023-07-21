import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-checkbox',
  templateUrl: './ng-checkbox.component.html',
  styleUrls: ['./ng-checkbox.component.css']
})
export class NgCheckboxComponent implements OnInit {

  superhero:string;

  title : string = 'Web Development Courses and Fees';
  courses: webCours []=[
    {courseName:'Certificate Courses in Web Development',CourseFees:'INR 10,000 to INR 40,000' },
    {courseName:'Diploma Courses in Web Development',CourseFees:'INR 50,000 to INR 80,000 ' },
    {courseName:'UG Courses in Web Development',CourseFees:'INR 20,000 to INR 10,00,000' }

  ]
  IsCheckd:boolean;
  constructor() { }

  ngOnInit() {
  }

  onChange(value){
    console.log(value.target.checked);   
    this.IsCheckd=value.target.checked;
  
    // OR
    // console.log(value);   
    // this.IsCheckd=value;
  }
  getProductValue(product){
    this. superhero= product.target.value;
    console.log('ngswitch', product.target.value)
  }
}
