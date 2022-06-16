import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from '../paginator/paginator.module';

import { DataTableComponent } from './data-table.component';
import { FilteredProductsPipe } from './pipes/filtered-products.pipe';
import { PaginatedProductsPipe } from './pipes/paginated-products.pipe';

@NgModule({
  imports: [CommonModule, PaginatorModule, ReactiveFormsModule],
  exports: [DataTableComponent],
  declarations: [
    DataTableComponent,
    PaginatedProductsPipe,
    FilteredProductsPipe,
  ],
  providers: [],
})
export class DataTableModule {}
