import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-dashboard',
  templateUrl: './orders-dashboard.component.html',
  styleUrls: ['./orders-dashboard.component.css']
})
export class OrdersDashboardComponent implements OnInit {
  idUser: any;
  myOrders: any = [];
  constructor(private orderService : OrderService,private router: Router) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    let user = JSON.parse(localStorage.getItem('connectedUser'))
    this.idUser = user.id;
    this.orderService.getUserOrders(this.idUser).subscribe((res) => {
      this.myOrders = res.orders;
    })
  }
  cancelOrder(id:any){
    this.router.navigate([`decline/${id}`]);
  }
}
