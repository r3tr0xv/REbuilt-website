import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-decline-order',
  templateUrl: './decline-order.component.html',
  styleUrls: ['./decline-order.component.css']
})
export class DeclineOrderComponent implements OnInit {
  myOrder: any = [];
  id : any;
  constructor(private activateRoute: ActivatedRoute, private router: Router , private orderService : OrderService) { }

  ngOnInit() {
    this.getOrder()
  }
  getOrder() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.orderService.declinedOrder(this.id).subscribe((res) => {
      this.myOrder = res.order;
    })
  }
  cancel(id:any){
    let user = JSON.parse( localStorage.getItem('connectedUser'))
    let idUser = user.id;
    this.orderService.deleteOrder(id).subscribe((res)=>{
      this.router.navigate([`myOrders/${idUser}`])
    })
  }
}
