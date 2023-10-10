import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  birthYear : number;
  getDob: number
  constructor() { }
  
  products = [
    { name: 'laptop', id: '101'},
    { name: 'Mobile', id: '102'},
    { name: 'TV', id: '103'},
    { name: 'TAB', id: '104'}
  ]
  
  caluclateAge(DOB){
    this.getDob=DOB;
    const birthdate=new Date(this.getDob)
    this.birthYear= birthdate.getFullYear()
    console.log('form submitted',this.birthYear);

    this.birthYear=2023-this.birthYear;
    return this.birthYear;
  }
}