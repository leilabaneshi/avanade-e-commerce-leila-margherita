import { Injectable } from "@angular/core";
import { Product } from "../models/products";
@Injectable({

  providedIn: 'root'

})

export class ProductService {
  //products : Product | null = null
  constructor(){}

    products :Product [] | null = [
      {
        id: 1,
        title: 'book1',
        price: 20,
        image : 'https://cms.qz.com/wp-content/uploads/2018/02/statisticallearning.jpg?quality=80&strip=all&w=4000',
        review :'Reading gives us someplace to go when we have to stay where we are.Mason Cooley'

      },
      {
        id: 2,
        title: 'book2',
        price: 10,
        image : 'https://i.fbcd.co/products/resized/resized-750-500/ddd7d0d7abad56a961acef93b000af680b2e21139266dc075d651ab3ac83582b.jpg',
        review :'Books are the plane,and the train, and the road.They are the destination,and the journey.They are home.Anna Quindlen'
      },
      {id: 3,
        title: 'book3',
        price: 40,
        image : 'https://i.ebayimg.com/images/g/j~8AAOSw31Jf0oHI/s-l300.jpg',
        review :'Reading gives us someplace to go when we have to stay where we are.Mason Cooley'


      },
      {
        id: 4,
        title: 'book1',
        price: 20,
        image : 'https://cms.qz.com/wp-content/uploads/2018/02/statisticallearning.jpg?quality=80&strip=all&w=4000',
        review :'Reading gives us someplace to go when we have to stay where we are.Mason Cooley'

      },
      {
        id: 5,
        title: 'book2',
        price: 10,
        image : 'https://i.fbcd.co/products/resized/resized-750-500/ddd7d0d7abad56a961acef93b000af680b2e21139266dc075d651ab3ac83582b.jpg',
        review :'Books are the plane,and the train, and the road.They are the destination,and the journey.They are home.Anna Quindlen'
      },
      {id: 6,
        title: 'book3',
        price: 40,
        image : 'https://i.ebayimg.com/images/g/j~8AAOSw31Jf0oHI/s-l300.jpg',
        review :'Reading gives us someplace to go when we have to stay where we are.Mason Cooley'


      }
    ]

 }
