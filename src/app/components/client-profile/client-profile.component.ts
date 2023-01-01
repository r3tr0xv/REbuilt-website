import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  id: any
  updateUserForm : FormGroup;
  user: any = {};
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
  constructor(private formBuilder: FormBuilder,private activateRoute: ActivatedRoute, private userService: userService, private router: Router) { }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getUserById()
    }
    this.updateUserForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        tel: [''],
        region: ['']
      })
  }
  updateUser(){
    this.userService.editUserDetails(this.user).subscribe((res) => {
      this.router.navigate([''])
    })
  }
  getUserById(){
    this.userService.getUserById(this.id).subscribe((res) => {
      this.user = res.user;
    })
  }
  deleteUser(){
    this.userService.deleteAccount(this.id).subscribe((res)=>{
      this.userService.logout();
      this.router.navigate(['']);
    })
  }
}
