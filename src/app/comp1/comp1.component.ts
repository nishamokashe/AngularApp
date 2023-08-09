import { Component, OnInit } from '@angular/core';
import { ServicelService } from '../Services/servicel.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  products = {};
  // I have injected my serevice into constructor
  constructor(private objService:ServicelService) { 
  }

 ngOnInit() {
  // const objService = new ServicelService();
   this.products = this.objService.products;
 }
}
