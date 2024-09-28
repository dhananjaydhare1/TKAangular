import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'LDirectives';

  color = 'white';

  data : any = {
    "Username": "Ram",
    "Password" : "123"
  }
//1
  numbers:any=[1,2,3,5]

  students : any=[
    {
      id : 1,
      name : 'ram',
      age : 25
    },
    {
      id : 2,
      name : 'sham',
      age : 27
    }
  ];

// directives 
    isHighlight=false;
    highlightOnOff() {
    
      this.isHighlight = !this. isHighlight;
    }

    fontsize = '30px';
    decrease() {
      this.fontsize=(parseInt(this.fontsize) + 2) + 'px';
    }
      increase() {
        this.fontsize=(parseInt(this.fontsize) - 2) + 'px';
      }

}
