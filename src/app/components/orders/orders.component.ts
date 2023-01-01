import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  idUser: any;
  mySales: any = [];
  constructor(private orderService : OrderService,private router:Router) { }
  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    let user = JSON.parse(localStorage.getItem('connectedUser'))
    this.idUser = user.id;
    this.orderService.getSellerOrders(this.idUser).subscribe((res) => {
      this.mySales = res.sales;
    })
  }
  controlOrder(id:any){
    this.router.navigate([`checkOrder/${id}`]);
  }
}
