import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchPassword } from './match-passwords';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)])
  });

  registerForm = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]),
    rePassword: new FormControl("",[Validators.required,Validators.minLength(8)])
  },{
    validators:matchPassword('password','rePassword')
  });
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.registerForm.validator(this.registerForm));
  }

  loginBtnClickEventHandler(){
    this.router.navigateByUrl("/start");
  }

  registerBtnClickEventHandler(){
    console.log(this.registerForm)
  }
}
