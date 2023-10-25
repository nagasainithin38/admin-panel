import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {

  

  constructor(public products:ProductsService){

  }

}
