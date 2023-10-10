import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from '../product/laptop/laptop.component';
import { TabletComponent } from '../product/tablet/tablet.component';
import { TvComponent } from '../product/tv/tv.component';
import { WashingmachineComponent } from '../product/washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../utility/utility.module';
import { ProductComponent } from '../product/product.component';

const pathrodcustsRotes : Routes = [
  {path: 'product',component: ProductComponent, children: [
    { path: '', component: ProductComponent}, // localhost:4200/product/laptop
    {path: 'laptop', component: LaptopComponent},
    { path: 'tv', component: TvComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ] },
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingmachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pathrodcustsRotes),
    UtilityModule
  ]
})
export class ProductsModule { 
  
  constructor(){
    console.log('ProductsModule Called');
    
  }
}
