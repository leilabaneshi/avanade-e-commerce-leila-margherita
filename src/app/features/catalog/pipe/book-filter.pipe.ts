import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product';


@Pipe({
  name: 'bookFilter'
})

export class BookFilterPipe implements PipeTransform {

  transform(products: Product[], inputFilter: string): Product[] {
    console.log("bookpipe =", inputFilter);

    if (!inputFilter||inputFilter.length <= 3) //true: se null, stringa vuota o 0, o undefined
    {
      return products;
    }

    const inputFilteredLowerCase = inputFilter.toLocaleLowerCase();
    return products.filter((product: Product, index: number, array: Product[]) => {
      return product.title.toLocaleLowerCase().includes(inputFilteredLowerCase);
    });
  }
}
