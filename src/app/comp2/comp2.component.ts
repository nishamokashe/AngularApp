import { Component, OnInit } from '@angular/core';
import { ServicelService } from '../Services/servicel.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  products = {};
  // I have injected my serevice into constructor
  constructor(private objService:ServicelService) { 
   }

  ngOnInit() {
   // const objService = new ServicelService();
    this.products = this.objService.products;
  }
}
