import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products:Array<Products>
  cartlist:object
  constructor(public cart:CartService,public product:ProductsService){
this.cartlist=JSON.parse( cart.cart)
console.log(this.cartlist)
this.products=this.product.products
// console.log(typeof this.cartlist)
  }


  convertToInt(i:string):number{
    return parseInt(i)
  }

  decrease(idx:number){
    let cartTemp=JSON.parse(this.cart.cart)
    cartTemp[idx]-=1
    // console.log(cartTemp)
    if (cartTemp[idx]==0){
      delete cartTemp[idx]
    }
    this.cartlist=cartTemp
    this.cart.cart=JSON.stringify(cartTemp)
   

  }
  getPrice(idx:number):number{
    let cartTemp=JSON.parse(this.cart.cart)
   return  cartTemp[idx]*this.products[idx].price
  }
  increase(idx:number){
    let cartTemp=JSON.parse(this.cart.cart)
    cartTemp[idx]+=1
    // console.log(cartTemp)
    this.cartlist=cartTemp
    this.cart.cart=JSON.stringify(cartTemp)
  }

  buy(){
    this.cart.cart="{}"
    this.cartlist=JSON.parse( this.cart.cart)
  }

  getTotalPrice(){
    let cartTemp=JSON.parse(this.cart.cart)
    let price=0
for(let i in cartTemp){
  price+=cartTemp[i]*this.products[parseInt(i)].price
}
    return price

  }
}
