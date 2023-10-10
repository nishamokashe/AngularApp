import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  isAdded=false;
  str :string= 'abhijit gode';
  isFormSubmitted: boolean = false;
  myForm: FormGroup;
  notAllowedNames = ['Codemind', 'Technology'];
  
  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]

  //
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  resetForm() {
    this.myForm.reset({
      'userDetails' : {
        'username': '',
        'email': ''
      },
      'course': 'Angular',
      'gender': 'Male',
      'skills': ['']
    });
  }

ngOnInit() {
//     setTimeout(() => {
//       this.myForm.setValue({
//         'userDetails' : {
//           'username': 'Codemind1122',
//           'email': 'codemind@outlook.com'
//         },
//         'course' : 'JavaScript',
//         'gender': 'Female',
//         'skills': ['Azure']
//       })
//   }, 5000
// );

  setTimeout(() => {
    this.myForm.patchValue({
      'userDetails' : {
        'email': 'jack@gmail.com'
      }
    })
  }, 5000)

  }

  createForm() {
    // this.myForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NameNotAllowed.bind(this)]),
    //     'email': new FormControl(null,[Validators.required, Validators.email], this.EmailNotAllowed )
    //   }),     
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray([ new FormControl('Angular8', Validators.required)])
    // })

    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        username : ['', [Validators.required, this.NameNotAllowed.bind(this)]],
        email: ['', [Validators.required, Validators.email], this.EmailNotAllowed ]  
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
    })
  }

  OnSubmit() { 
    if(this.myForm.valid){
    this.isFormSubmitted=true;
    console.log('Submit method called', this.myForm);
    console.log('form value', this.myForm.value);
    console.log();
    }
    this.resetForm()
  }

  OnAddSkills() {
    (<FormArray>this.myForm.get('skills')).push(new FormControl('', Validators.required))
    if(this.myForm.value.skills.length==2){
      this.isAdded=true;
    }
  }
  
  OnRemoveSkills(){
    (<FormArray>this.myForm.get('skills')).removeAt((<FormArray>this.myForm.get('skills')).length-1);
    if(this.myForm.value.skills.length==1){
      this.isAdded=false;
    }

  }

  NameNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}
    }
    return null;
  }

  EmailNotAllowed(control: FormControl) : Promise<any>  {
    // | Observable<any>  --------------error
    const myPromise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'nishamokase@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myPromise;
  }
}                            