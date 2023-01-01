import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  userIsAuthenticated = "";
  private authListenerSubs : Subscription;
  constructor(private userService: userService, private router : Router) { }
  ngOnInit() {
    this.userIsAuthenticated = this.userService.isUserAuth();
    this.authListenerSubs = this.userService.getAuthStatusListener().subscribe((isAuthenticated) => {
    this.userIsAuthenticated = isAuthenticated;
    });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  logout(){
    this.userService.logout()
  }
  displayProduct(){
    let user = JSON.parse(localStorage.getItem('connectedUser'));
    let id = user.id;
    this.router.navigate([`productsDashboard/${id}`])
  }
  editUser() {
    let user = JSON.parse(localStorage.getItem('connectedUser'));
    let id = user.id;
    this.router.navigate([`clientProfile/${id}`])
  }
  displaySales(){
    let user = JSON.parse(localStorage.getItem('connectedUser'));
    let id = user.id;
    this.router.navigate([`mySales/${id}`])
  }
}
