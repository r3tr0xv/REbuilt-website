import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  storeProducts: any = [];
  constructor(private productService: ProductService,private router : Router) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((res)=>{   
     this.storeProducts= res.products;
      console.log(res);
      
    })
   }
   passOrder(id:any){
    this.router.navigate([`displayOrder/${id}`]);
   }
   
}
