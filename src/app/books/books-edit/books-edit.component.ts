import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/shared/models/book.model';

export type DialogData = { book: Partial<Book>; saved: EventEmitter<any> };

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss'],
})
export class BooksEditComponent implements OnInit {
  @Output() saved = new EventEmitter();

  bookForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    const authorControls = this.data.book.authors?.map((author) =>
      this.builder.group({
        firstNames: author.firstNames,
        lastName: author.lastName,
      })
    );
    this.bookForm = this.builder.group({
      id: { value: this.data.book.id, disabled: true },
      title: this.data.book.title,
      yearPublished: this.data.book.yearPublished,
      authors: this.builder.array(authorControls || []),
    });

    console.log('author groups', authorControls);
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  // newAuthor(): FormGroup {
  //   return this.fb.group({
  //     firstNames: '',
  //     lastName: '',
  //   });
  // }

  // addAuthor() {
  //   this.authors().push(this.newAuthor());
  // }
}
