import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';
import { MustMatch } from './confirmPwd';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  addAdminForm : FormGroup;
  msg : any;
  constructor(private formBuilder: FormBuilder , private userService : userService , private router : Router) { }

  ngOnInit() {
    this.addAdminForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [''],
      tel: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{8}$")]]
    },{
      validator : MustMatch('password','confirmPassword')
    })
  }
  addAdmin(user:any) {
    user.role = "admin";
    this.userService.signup(user).subscribe((res)=>{
      if (res.message==="email exists") {
        this.msg="email already exists !";
      } else {
        this.msg="Welcome back !";
        this.router.navigate(['login'])
      }
    })
  }
}
