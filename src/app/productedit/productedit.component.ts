import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent {

  productForm: FormGroup
productId!:number
  constructor(private toastr: ToastrService,private productService:ProductsService,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(params=>{
      this.productId=+(params['id'])-1
    })
    this.productForm = new FormGroup({
      title: new FormControl(productService.products[this.productId].title, Validators.required),
      rating: new FormControl(productService.products[this.productId].rating,  Validators.required),
      price: new FormControl(productService.products[this.productId].price,  Validators.required),
      image: new FormControl(productService.products[this.productId].image,  Validators.required),
      description: new FormControl(productService.products[this.productId].description,  Validators.required),
      category:new FormControl(productService.products[this.productId].category,Validators.required)
    })
  }

  update() {


    if (this.productForm.get('title')?.errors != null) {
      this.toastr.error('', 'Title is a required Fiels', {
        timeOut: 2000,
        closeButton: true,
  
      });
      return
    }
    if (this.productForm.get('rating')?.errors != null) {
      this.toastr.error('', 'Rating is a required Fiels', {
        timeOut: 2000,
        closeButton: true,
  
      });
      return
    }
    if (this.productForm.get('price')?.errors != null) {
      this.toastr.error('', 'Price is a required Fiels', {
        timeOut: 2000,
        closeButton: true,
  
      });
      return
    }
    if (this.productForm.get('image')?.errors != null) {
      this.toastr.error('', 'Image is a required Fiels', {
        timeOut: 2000,
        closeButton: true,
  
      });
      return
    }
    if (this.productForm.get('description')?.errors != null) {
      this.toastr.error('', 'Description is a required Fiels', {
        timeOut: 2000,
        closeButton: true,
  
      });
      return
    }
    if (this.productForm.get('category')?.errors != null) {
      this.toastr.error('', 'Category is a required Fiels', {
        timeOut: 2000,
        closeButton: true,
  
      });
      return
    }
    this.productService.products[this.productId]=new Products(
      this.productForm.get('title')?.value,
      this.productForm.get('rating')?.value,
      this.productForm.get('price')?.value,
      this.productForm.get('category')?.value,
      this.productForm.get('description')?.value,
      this.productForm.get('image')?.value)
    this.toastr.success('',"Product updated ",{
      timeOut: 2000,
      closeButton: true,
    })
  }

}
