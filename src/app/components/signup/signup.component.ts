import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';
import { MustMatch } from './confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  msg: any;
  regions = [
    "Tunis",
    "Ariana",
    "Béja",
    "BenArous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "SidiBouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Zaghouan"
  ]
  constructor(private formBuilder: FormBuilder, private userService: userService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [''],
      tel: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{8}$")]],
      region: ['']
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }
  signUp(user: any) {
    user.role = "client";
    console.log(user);
    
    this.userService.signup(user).subscribe((res) => {
      if (res.message === "email exists") {
        this.msg = "email already exists !"
      } else {
        this.msg = "Welcome back !"
        this.router.navigate(['login'])
      }
    })
  }

}
