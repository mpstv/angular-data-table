import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculatePagesPipe } from './calculate-pages.pipe';

import { PaginatorComponent } from './paginator.component';

@NgModule({
  imports: [CommonModule],
  exports: [PaginatorComponent],
  declarations: [PaginatorComponent, CalculatePagesPipe],
  providers: [],
})
export class PaginatorModule {}
