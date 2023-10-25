import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent {

  product!:Products
  productId!:number
  constructor(private activatedRoute:ActivatedRoute,public products:ProductsService){
      this.activatedRoute.params.subscribe(params=>{
        this.productId=+(params['id'])-1
        this.product=products.products[this.productId]
      })
  }
}
