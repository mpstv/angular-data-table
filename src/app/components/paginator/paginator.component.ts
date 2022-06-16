import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nullable } from 'src/app/utility/utility-types';

@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input()
  totalCount: Nullable<number>;

  @Input()
  pageSize: Nullable<number>;

  @Input()
  selectedPage: Nullable<number>;

  @Input()
  selectedPageSize: Nullable<number>;

  @Input()
  possibleRecordsOnPage: number[] = [];

  @Output()
  selectPage = new EventEmitter<number>();

  @Output()
  selectPageSize = new EventEmitter<number>();
}
