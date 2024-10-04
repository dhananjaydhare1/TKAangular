import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : any ='';
  password : any ='';

// href nahi use karu shakat so, Router cha object create kela constructor cha use karun
  constructor(private r:Router){

  }

  login(){
    if(this.username === "ram" && this.password==='123'){
      //navigate to home

      this.r.navigate(['/home'])
    }else{
      //navigate to login
      alert("Invalid Details")
      this.r.navigate(['/login'])
      this.username='';
      this.password='';
    }
  }
}
