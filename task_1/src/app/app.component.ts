import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task_1';

  selectedNumber : number=1;

  multiplicationTable : number[] = [] ;
  printTable(): void{
    this.multiplicationTable=[];
    for(let i =1;i<=10;i++){
      this.multiplicationTable.push(this.selectedNumber*i);
    } //if i select 3 thhen 1,2,3 tables should print
    for(let j =1;j<=this.selectedNumber;j++){
      for(let k=1;k<=10;k++){

        console.log(j*k);
        "<br>"

      }
    }
  }

}


