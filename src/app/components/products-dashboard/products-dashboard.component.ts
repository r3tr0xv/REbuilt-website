import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {
  idUser: any;
  myproduct: any = [];
  constructor(private productService: ProductService,private router : Router) { }

  ngOnInit() {
      this.getProduct();
  }
  getProduct() {
    let user = JSON.parse( localStorage.getItem('connectedUser'))
    this.idUser = user.id;
    this.productService.getProductsById(this.idUser).subscribe((res) => {
      this.myproduct = res.products;
    })
  }
  editProductNav(id:any) {
    this.router.navigate([`updateProduct/${id}`])
  }
  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe((res)=>{
      this.getProduct();
    })
  }
  
}
