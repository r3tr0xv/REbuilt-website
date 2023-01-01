import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {
  myOrder: any = [];
  id : any;
  constructor(private activateRoute: ActivatedRoute, private router: Router , private productService:ProductService, private orderService : OrderService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getProduct()
    }
  }
  getProduct() {
    this.productService.getOrderById(this.id).subscribe((res) => {
      this.myOrder = res.order;      
    })
  }
  addOrder(){
    let user = JSON.parse(localStorage.getItem("connectedUser"));
    let idUser = user.id;
    this.myOrder.status = "unconfirmed" ;
    this.myOrder.idBuyer = idUser;
    this.myOrder.idOwner = this.myOrder.idOwner._id;
    this.myOrder.idProduct = this.myOrder._id;
    this.orderService.addOrder(this.myOrder).subscribe((res) => {
      this.router.navigate([`myOrders/${idUser}`]);
    })    
  }

}
