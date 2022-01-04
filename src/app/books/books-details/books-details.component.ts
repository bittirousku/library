import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss'],
})
export class BooksDetailsComponent {
  currentBook!: Book;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set book(value: Book) {
    if (value) {
      this.currentBook = { ...value };
    }
  }
}
