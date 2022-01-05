import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Author } from 'src/app/shared/models/author.model';
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
    private builder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const authorGroups = this.data.book.authors?.map((author) =>
      this.newAuthorGroup(author)
    );
    this.bookForm = this.builder.group({
      id: { value: this.data.book.id, disabled: true },
      title: this.data.book.title,
      yearPublished: this.data.book.yearPublished,
      authors: this.builder.array(authorGroups || []),
    });

    console.log('author groups', authorGroups);
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  newAuthorGroup(author?: Author | undefined): FormGroup {
    return this.builder.group({
      firstNames: author?.firstNames || '',
      lastName: author?.lastName || '',
    });
  }

  onSubmit(book: Book) {
    console.log('trying to submit', book);
  }

  addAuthor() {
    this.authors.push(this.newAuthorGroup());
    /*
    Now this will give an error:
    *Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: 
    Expression has changed after it was checked. 
    Previous value: 'false'. Current value: 'true'

    See
    https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
    Error can be fixed with this:
    */
    this.cdr.detectChanges(); // WTF is this?
  }
}
