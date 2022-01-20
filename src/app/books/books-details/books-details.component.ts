import * as _ from 'lodash';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/shared/models/book.model';
import { BooksEditComponent } from '../books-edit/books-edit.component';
import { formatAuthors } from 'src/app/shared/utils';

interface BookField {
  title: string;
  key: string;
  renderer?: (d: any) => {};
}
@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss'],
})
export class BooksDetailsComponent {
  currentBook!: Book;
  get = _.get;

  // helper for rendering the desired fields from the data
  fields: BookField[] = [
    {
      title: 'Title',
      key: 'title',
    },
    {
      title: 'Year Published',
      key: 'yearPublished',
    },
    {
      title: 'Authors',
      key: 'authors',
      renderer: (d) => formatAuthors(d),
    },
  ];

  // TODO: clear selection
  @Output() cancelled = new EventEmitter();
  @Output() saved: EventEmitter<any> = new EventEmitter();

  @Input() set book(value: Book | undefined) {
    if (value) {
      this.currentBook = { ...value };
    }
  }

  constructor(public dialog: MatDialog) {}

  editBook(book: Book) {
    this.dialog.open(BooksEditComponent, {
      data: { book: book, saved: this.saved },
    });
  }
}
