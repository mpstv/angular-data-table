import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'paginatedProducts',
})
export class PaginatedProductsPipe implements PipeTransform {
  transform(
    products: Product[],
    pageSize: number,
    selectedPage: number
  ): Product[] {
    const skip = pageSize * (selectedPage - 1);
    const take = skip + pageSize;

    return products?.slice(skip, take) ?? [];
  }
}
