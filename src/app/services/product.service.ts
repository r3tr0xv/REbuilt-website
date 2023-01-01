import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = "http://localhost:3000/product"
  constructor(private httpclient: HttpClient) { }
  postProduct(product:any,image:File) {
    const formData = new FormData();
    formData.append("name",product.name)
    formData.append("price",product.price)
    formData.append("description",product.description)
    formData.append("category",product.category)
    formData.append("region",product.region)
    formData.append("image", image)
    formData.append("idOwner", product.idOwner)
    return this.httpclient.post<{remessage : any}>(`${this.productUrl}/addProduct`, formData)
  }
  getProductsById(id:any){
    return this.httpclient.get<{ products: any }>(`${this.productUrl}/${id}`)
  }
  getProductById(id:any){
    return this.httpclient.get<{ product: any }>(`${this.productUrl}/updateProduct/${id}`)
  }
  getOrderById(id:any){
    return this.httpclient.get<{ order: any }>(`${this.productUrl}/order/${id}`)
  }
  getAllProducts() {
    return this.httpclient.get<{ products: any }>(this.productUrl)
  }
  updateProduct(product:any,image:File){
    const formData = new FormData();
    formData.append("name",product.name)
    formData.append("price",product.price)
    formData.append("description",product.description)
    formData.append("category",product.category)
    formData.append("region",product.region)
    formData.append("image", image)
    formData.append("idOwner", product.idOwner)
    return this.httpclient.put<{ message: any }>(`${this.productUrl}/updateProduct/${product._id}`, formData)
  }
  deleteProduct(id:any) {
    return this.httpclient.delete<{ message: any }>(`${this.productUrl}/${id}`)
  }

}
