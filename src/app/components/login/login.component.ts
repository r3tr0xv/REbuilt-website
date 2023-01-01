import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm: FormGroup;
  nonExistant : any; 
  boolean = false;
  visible:boolean = true;
  changetype:boolean =true;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: userService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }
  login(){ 
    this.userService.login(this.user);
  }
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

}
