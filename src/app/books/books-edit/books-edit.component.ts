import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/shared/models/book.model';

export type DialogData = { book: Partial<Book>; saved: EventEmitter<any> };

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss'],
})
export class BooksEditComponent {
  book!: Partial<Book>;
  @Output() saved = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
