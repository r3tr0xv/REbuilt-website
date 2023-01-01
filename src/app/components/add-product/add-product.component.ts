import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  product: any = {};
  msg: any;
  idUser:any;
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
    this.addProductForm = this.formBuilder.group({
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
  this.addProductForm.patchValue({ image: file });
  this.addProductForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
  this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
}
addProduct(){
  let user = JSON.parse(localStorage.getItem('connectedUser'));
  this.product.idOwner = user.id;
  this.idUser = user.id;
  this.productService.postProduct(this.product,this.addProductForm.value.image).subscribe((res)=>{
      this.router.navigate([`productsDashboard/${this.idUser}`])
    })
  }


}
