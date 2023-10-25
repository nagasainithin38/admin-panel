import { Injectable } from '@angular/core';
import { Products } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  products:Array<Products>=[]


  constructor() {


    this.products.push(new Products(
      "Samsung Galaxy M14 5G",
      4.0,
      11900,
      'mobile',
      "(Berry Blue,4GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
      "https://m.media-amazon.com/images/I/81pmO0iVNhL._SX679_.jpg"
      ))
    this.products.push(new Products(
      "Apple iPhone 13 (128GB) - Pink",
      4.6,
      50999,
      'mobile',
      `15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance`,
      'https://m.media-amazon.com/images/I/61l9ppRIiqL._SX679_.jpg'
    ))

    this.products.push(new Products(
      "Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)",
      4.3,
      28940,
      'television',
      'Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc. |Screen mirroring |Universal Guide |Media Home | Tap View | Mobile Camera Support | AI Speaker |Easy Setup | App Casting | Wireless DeX | SmartThings | Smart Hub | IoT Sensor |Web Browser',
      'https://m.media-amazon.com/images/I/71S8qt+K8hL._SX679_.jpg'
    ))

    this.products.push(new Products(
      'MI 138 cm (55 inches) X 4K Dolby Vision Series Smart Google TV L55M8-A2IN (Black)',
      4.2,
      35999,
      'television',
      'Smart TV Features: Google TV, Built-In WiFi, Chromecast built-in, 2GB RAM, 8GB ROM, Supported Apps: Netflix, Prime Video, YouTube, Zee5, etc., MEMC Engine , eARC (Dolby Atmos Pass-through), ALLM (Auto Low Latency Mode), and Google Assistant Operation',
      'https://m.media-amazon.com/images/I/710a8lTyPnL._SX679_.jpg'
    ))



   }

   addProduct(title:string,rating:number,price:number,category:string,description:string,image:string){
      this.products.push(new Products(
        title,rating,price,category,description,image
      ))
   }

}
