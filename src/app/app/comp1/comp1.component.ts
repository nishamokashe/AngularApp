import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})

export class Comp1Component implements OnInit {
  products = {};
  newArray:any =[];
  constructor(private objService :Service1Service, private objUser: UserService) { 
    //const objService = new Service1Service();
    this.products = objService.products;
  }

  ngOnInit() {
    var obj = this.objUser.getUsers();
    obj.subscribe(res=> {
    console.log(res);
    this.newArray=res;
    console.log(this.newArray[0].address.street)
   })
  }
}