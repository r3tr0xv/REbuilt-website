import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService {
  userUrl = "http://localhost:3000/user"
  private authStatusListener = new Subject<string>();
  private isUserAuthenticated = "";
  msg:any;

  constructor(private httpClient : HttpClient , private router:Router) { }


  signup(user: any) {
    return this.httpClient.post<{message:any}>(`${this.userUrl}/signup`, user)
  }
  login(user:any){
    return this.httpClient.post<{message:any,user:any}>(`${this.userUrl}/login`, user).subscribe((data)=>{
      if (data.user) {
        localStorage.setItem("connectedUser",JSON.stringify(data.user));
        this.router.navigate(["/"]);
        this.isUserAuthenticated = data.user.role;
        this.authStatusListener.next(data.user.role);
      }else{
        this.msg = "incorrect credentials ! please try again";
      }
    })

  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  isUserAuth() {
    let user = JSON.parse(localStorage.getItem('connectedUser'))    
    if ( user.role !== "" ) {
      this.isUserAuthenticated = user.role;
    }
    return this.isUserAuthenticated;
  }

  logout(){
    localStorage.removeItem('connectedUser');
    this.isUserAuthenticated = "";
    this.authStatusListener.next("");
    this.router.navigate(['/']);

  }
  getAllUsers(){
    return this.httpClient.get<{data:any}>(`${this.userUrl}`)
  }
  deleteAccount(id:any) {
    return this.httpClient.delete<{message:any }>(`${this.userUrl}/${id}`)
  }
  getUserById(id:any){
    return this.httpClient.get<{user:any}>(`${this.userUrl}/${id}`)
  }
  editUserDetails(user:any){
    return this.httpClient.put<{message:any }>(`${this.userUrl}/${user._id}`,user)
  }
}
