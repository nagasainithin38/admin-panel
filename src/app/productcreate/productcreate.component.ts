import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent {



productcreate!:FormGroup
constructor(private toastr: ToastrService,private productService:ProductsService){
  this.productcreate=new FormGroup({
    title: new FormControl('',Validators.required),
    rating: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required)
  })
}





create(){


  if (this.productcreate.get('title')?.errors != null) {
    this.toastr.error('', 'Title is a required Fiels', {
      timeOut: 2000,
      closeButton: true,

    });
    return
  }
  if (this.productcreate.get('rating')?.errors != null) {
    this.toastr.error('', 'Rating is a required Fiels', {
      timeOut: 2000,
      closeButton: true,

    });
    return
  }
  if (this.productcreate.get('price')?.errors != null) {
    this.toastr.error('', 'Price is a required Fiels', {
      timeOut: 2000,
      closeButton: true,

    });
    return
  }
  if (this.productcreate.get('image')?.errors != null) {
    this.toastr.error('', 'Image is a required Fiels', {
      timeOut: 2000,
      closeButton: true,

    });
    return
  }
  if (this.productcreate.get('description')?.errors != null) {
    this.toastr.error('', 'Description is a required Fiels', {
      timeOut: 2000,
      closeButton: true,

    });
    return
  }
  if (this.productcreate.get('category')?.errors != null) {
    this.toastr.error('', 'Category is a required Fiels', {
      timeOut: 2000,
      closeButton: true,

    });
    return
  }

  this.productService.addProduct(
    this.productcreate.get('title')?.value,
    this.productcreate.get('rating')?.value,
    this.productcreate.get('price')?.value,
    this.productcreate.get('category')?.value,
    this.productcreate.get('description')?.value,
    this.productcreate.get('image')?.value

  )
  this.toastr.success('',"Product created ",{
    timeOut: 2000,
    closeButton: true,
  })

}


}
