import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from '../product/laptop/laptop.component';
import { TabletComponent } from '../product/tablet/tablet.component';
import { TvComponent } from '../product/tv/tv.component';
import { WashingmachineComponent } from '../product/washingmachine/washingmachine.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingmachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule
  ]
})
export class ProductsModule { }
