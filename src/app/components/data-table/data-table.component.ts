import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-data-table',
  templateUrl: 'data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  possibleRecordsOnPage = [5, 10, 15];

  pageSize = this.possibleRecordsOnPage[0];

  selectedPage = 1;

  products$ = this.productsService.getProducts();

  totalCount$ = this.products$.pipe(map((products) => products.length));

  filterFormControl = new FormControl<string>('');

  constructor(private productsService: ProductsService) {}
}
