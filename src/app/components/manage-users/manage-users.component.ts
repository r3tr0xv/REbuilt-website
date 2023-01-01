import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: any = [];
  constructor(private userService: userService) { }

  ngOnInit() {
    this.displayUsers()
  }
  displayUsers(){
    this.userService.getAllUsers().subscribe((res)=>{
      this.users=res.data
    })
  }

  

}
