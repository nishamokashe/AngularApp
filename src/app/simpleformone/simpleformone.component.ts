import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-simpleformone',
  templateUrl: './simpleformone.component.html',
  styleUrls: ['./simpleformone.component.css']
})
export class SimpleformoneComponent implements OnInit {

  isCorrect=true;
  isFormSubmitted=false;
  username = '';
  defaultCourseValue ='JavaScript';
  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'},
  ]

  formData = {
    username: '',
    email: '',
    course: '',
    country: '',
    state: '',
    gender:''
   }

  constructor() { }

  ngOnInit() {  
  }
  
  // checkDomain(inputValue){
  //   console.log('inputvalue',inputValue)
  //   this.isCorrect=inputValue.includes('codemindtechnology.com');
  //   console.log(this.isCorrect)
  // }
  checkDomain(inputValue) {
    console.log(inputValue);

    const domain = inputValue.substring(inputValue.lastIndexOf('@') + 1);
    console.log('domain ',domain);

    if(domain == 'codemindtechnology.com') 
    {
      // false
      this.isCorrect = false;
    }
    else {
      // true
      this.isCorrect = true;
    }
  }
OnSubmit(form:NgForm) {
  this.isFormSubmitted=true;
    console.log('form submitted', form);
    let email = form.value.email;
    console.log('Email is', email);

    let country = form.value.address.country;
    console.log('user input country name is', country);

    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;
    
    // reser the form controls
    form.reset();
    form.controls['course'].setValue('javaScript')
  // objaddress.controls['country'].patchValue('India');
  }

}
function checkDomain(event: Event) {
  throw new Error('Function not implemented.');
}