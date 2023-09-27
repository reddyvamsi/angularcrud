import { Component } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(formval:FormBuilder){}
  public userProfileForm = new FormGroup({
    Email:new FormControl(''),
    password:new FormControl('')
  })

  public updateUserProfile(): void{
    
    console.log(this.userProfileForm.controls.Email.value)
    console.log(this.userProfileForm.controls.password.value)
    this.userProfileForm.reset();
  }
 

}
