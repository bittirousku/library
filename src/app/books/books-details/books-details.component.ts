import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/shared/models/book.model';
import { BooksEditComponent } from '../books-edit/books-edit.component';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss'],
})
export class BooksDetailsComponent {
  currentBook!: Book;

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
