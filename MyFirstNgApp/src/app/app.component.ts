import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MyFirstNgApp';
  num:any= 10;
  obj={
    "name" : "sonu"
  }

  arr=[1,5,9]

  isValid=false

  //property binding

  val1=20;
  wantToDisable=false;

  //event binding 

  m1(){
    const a = 10;
    const b = 20;

    console.log(a+b);
    
  }
  mouseOver() {
    alert("mouse Over")
  }
 
  //two way data binding

  myVal = 10;
}
