import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  isAdded=false;
  isFormSubmitted: boolean = false;

  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]
  myForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl('', Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email] )
      }),     
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([ new FormControl('Angular8', Validators.required)])
    })
  }

  OnSubmit() {
    this.isFormSubmitted = true;
    console.log('Submit method called', this.myForm);
    console.log('Forms value',this.myForm.value);
    
  }

  OnAddSkills() {
    (<FormArray>this.myForm.get('skills')).push(new FormControl('', Validators.required))
  }

  OnRemoveSkills(){
    (<FormArray>this.myForm.get('skills')).removeAt((<FormArray>this.myForm.get('skills')).length-1);
    if(this.myForm.value.skills.length==1){
      this.isAdded=false;
    }
  }
}