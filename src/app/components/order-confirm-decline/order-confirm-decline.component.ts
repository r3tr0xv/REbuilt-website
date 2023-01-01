import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-confirm-decline',
  templateUrl: './order-confirm-decline.component.html',
  styleUrls: ['./order-confirm-decline.component.css']
})
export class OrderConfirmDeclineComponent implements OnInit {
  myOrder: any = [];
  id : any;
  constructor(private activateRoute: ActivatedRoute, private router: Router , private orderService : OrderService) { }

  ngOnInit() {
      this.getOrder()
  }
  getOrder() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.orderService.getSingleOrder(this.id).subscribe((res) => {
      this.myOrder = res.order;
      console.log(this.myOrder);     
    })
  }
  confirm(){
    let user = JSON.parse(localStorage.getItem("connectedUser"));
    let idUser = user.id;
    this.myOrder.status = "confirmed" ;
    this.orderService.updateOrder(this.myOrder).subscribe((res) => {
      this.router.navigate([`mySales/${idUser}`]);
    })    
  }
  decline(){
    let user = JSON.parse(localStorage.getItem("connectedUser"));
    let idUser = user.id;
    this.myOrder.status = "declined" ;
    this.orderService.updateOrder(this.myOrder).subscribe((res) => {
      this.router.navigate([`mySales/${idUser}`]);
    }) 
  }

}
