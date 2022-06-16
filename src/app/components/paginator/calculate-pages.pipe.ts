import { Pipe, PipeTransform } from '@angular/core';
import { Nullable } from 'src/app/utility/utility-types';

@Pipe({
  name: 'calculatePages',
})
export class CalculatePagesPipe implements PipeTransform {
  transform(
    totalCount: Nullable<number>,
    pageSize: Nullable<number>
  ): number[] {
    if (!totalCount || !pageSize) {
      return [];
    }

    const pageCount = Math.ceil(totalCount / pageSize);
    return this.calculatePages(pageCount);
  }

  private calculatePages(pageCount: number) {
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
      pages.push(i + 1);
    }

    return pages;
  }
}
