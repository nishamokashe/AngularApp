import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AssigmentComponent } from './assigment/assigment.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgCheckboxComponent } from './ng-checkbox/ng-checkbox.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { SimpleformoneComponent } from './simpleformone/simpleformone.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TasktempletFromComponent } from './tasktemplet-from/tasktemplet-from.component';
// import { Comp1Component } from './comp1/comp1.component';
// import { Comp2Component } from './comp2/comp2.component';
import {HttpClientModule} from '@angular/common/http';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ProductsModule } from './products/products.module';
import { UtilityModule } from './utility/utility.module';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DatabindingComponent,
    ChildComponent,
    AssigmentComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgCheckboxComponent,
    AttributeDirectiveComponent,
    SimpleformComponent,
    FormAssignmentComponent,
    SimpleformoneComponent,
    ReactiveformComponent,
    TasktempletFromComponent,
    // Comp1Component,
    // Comp2Component,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
    FilterpipeComponent,
    AboutusComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    PagenotfoundComponent,
    ProductComponent,
    PostComponent,
    PostdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
