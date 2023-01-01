import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderUrl = "http://localhost:3000/order"
  constructor(private httpclient: HttpClient) { }
  
  addOrder(order: any) {
    return this.httpclient.post<{remessage:any}>(`${this.orderUrl}/displayOrder`, order)
  }
  getUserOrders(id:any){
    return this.httpclient.get<{orders: any }>(`${this.orderUrl}/myOrders/${id}`)
  }
  getSellerOrders(id:any){
    return this.httpclient.get<{sales: any }>(`${this.orderUrl}/mySales/${id}`)
  }
  getSingleOrder(id:any){
    return this.httpclient.get<{order: any }>(`${this.orderUrl}/checkOrder/${id}`)
  }
  declinedOrder(id:any){
    return this.httpclient.get<{order: any }>(`${this.orderUrl}/decline/${id}`)
  }
  updateOrder(order:any){
    return this.httpclient.put<{message:any }>(`${this.orderUrl}/checkOrder/${order._id}`,order);
  }
  deleteOrder(id:any) {
    return this.httpclient.delete<{ message: any }>(`${this.orderUrl}/decline/${id}`)
  }



}
