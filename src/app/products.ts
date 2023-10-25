export class Products{
    title:string
    rating:number
    price:number
    category:string
    description:string
    image:string
    constructor(title:string,rating:number,price:number,category:string,description:string,image:string ){
        this.title=title
        this.price=price
        this.rating=rating
        this.category=category
        this.description=description
        this.image=image
    }
}