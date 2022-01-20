import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { formatAuthor } from 'src/app/shared/utils';
import { Book } from '../../shared/models/book.model';
import { BooksEditComponent } from '../books-edit/books-edit.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  @Input() books: Book[] | [] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() created: EventEmitter<any> = new EventEmitter();

  formatAuthorName = formatAuthor;

  constructor(public dialog: MatDialog) {}

  addBook() {
    const book = {
      id: '',
      title: '',
      yearPublished: 2022,
      authors: [
        {
          firstNames: '',
          lastName: '',
        },
      ],
    };
    this.dialog.open(BooksEditComponent, {
      data: { book: book, saved: this.created },
    });
  }
}
