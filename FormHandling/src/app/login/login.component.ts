import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any='';
  password:any='';

onSubmit(myForm:any) {
  this.username=myForm.value.username;
  this.password=myForm.value.password;
  alert(this.username + " "+ this.password)
  console.log(this.username);


}
abc(){
  alert(this.username + " "+ this.password)

  console.log(this.username);

  console.log(this.password);


}

}
