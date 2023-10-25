import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-market-product',
  templateUrl: './market-product.component.html',
  styleUrls: ['./market-product.component.css']
})
export class MarketProductComponent {

  @Input()
  index!:number

  @Input()
  product!:Products


  constructor(private cart:CartService,private toastr: ToastrService){

  }

  addToCart(){
    let cart=JSON.parse(this.cart.cart)
    let isFound=false
    if(cart[this.index]==undefined)
    cart[this.index]=1
  else{
    cart[this.index]+=1
  }
    this.cart.cart=JSON.stringify(cart)
    this.toastr.success(this.product.title.slice(0,30),'Added to cart',  {
      timeOut: 2000,
      closeButton: true,
    })

  }

}
