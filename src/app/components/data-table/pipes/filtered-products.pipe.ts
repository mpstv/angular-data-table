import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Nullable } from 'src/app/utility/utility-types';

@Pipe({
  name: 'filteredProducts',
})
export class FilteredProductsPipe implements PipeTransform {
  transform(
    products: Nullable<Product[]>,
    filterString: Nullable<string>
  ): Product[] {
    return (
      products?.filter((product) =>
        this.someFieldContainFilterString(product, filterString)
      ) ?? []
    );
  }

  private someFieldContainFilterString(
    product: Product,
    filterString: Nullable<string>
  ): boolean {
    return Object.values(product).some((value) =>
      value.toString().toLowerCase().includes(filterString?.toLowerCase())
    );
  }

  private method(): void {
    throw new Error('throw new Error from test method');
  }
}
