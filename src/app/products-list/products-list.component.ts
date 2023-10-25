import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

products:Array<Products>=[]
  constructor(private productService:ProductsService,private router:Router){
    this.products=productService.products
  }

  viewMore(index:number){

    this.router.navigateByUrl(`home/product/${index+1}`)


  }
  edit(index:number){
    this.router.navigateByUrl(`home/product/edit/${index+1}`)
  }

}
