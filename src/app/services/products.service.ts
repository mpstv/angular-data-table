import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import products from '../../../data.json';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor() {}

  public getProducts(): Observable<Product[]> {
    return of(products as Product[]);
  }
}
