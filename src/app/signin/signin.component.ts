import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  enterEmail123:boolean = true;
  loginUser(LoginForm: NgForm)
  {
          alert(LoginForm.value.selectFruite);
          console.log(LoginForm.value.selectFruite);
  }

}
