import { Component, Input, Output, EventEmitter } from '@angular/core';
import { formatAuthor } from 'src/app/shared/utils';

import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  @Input() books: Book[] | [] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  formatAuthorName = formatAuthor;
}
