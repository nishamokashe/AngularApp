import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'angularApp7';
  
    data: string = 'Angular Batch 7';

   getDataFromChild(value){
   console.log(value);
   
   }
}
