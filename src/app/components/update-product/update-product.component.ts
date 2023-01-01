import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updateProductForm: FormGroup;
  id:any;
  idUser:any;
  product: any = {};
  msg: any;
  imagePreview:any;
  categories = [
    "Pc parts",
    "Laptop",
    "Full PC Setup",
    "Accessories",
  ]
  regions = [
    "Tunis",
    "Ariana",
    "Béja",
    "BenArous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Kef",
    "Mahdia",
    "Manouba",
    "Medenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "SidiBouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Zaghouan"
  ]
  constructor(private formBuilder: FormBuilder, private activateRoute: ActivatedRoute, private router: Router , private productService:ProductService ) { }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getProduct()
    }
    this.updateProductForm = this.formBuilder.group({
      name : [''],
      price : [''],
      desciption : [''],
      category : [''],
      region : [''],
      image : [''],
  })
}
onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.updateProductForm.patchValue({ image: file });
  this.updateProductForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
  this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
}
getProduct() {
  this.productService.getProductById(this.id).subscribe((res) => {
    this.product = res.product;
  })
}
updateProd(){
  let user = JSON.parse(localStorage.getItem('connectedUser'));
  let idUser = user.id;
  this.productService.updateProduct(this.product,this.updateProductForm.value.image).subscribe((res) => {
    this.router.navigate([`productsDashboard/${idUser}`])
  })
}
}