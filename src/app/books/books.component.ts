import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] | [] = [];
  currentBook!: Book;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.all().subscribe((books) => {
      if (Array.isArray(books)) this.books = books;
    });
  }

  selectBook(book: Book): void {
    console.log('Selected ', book.title);
    this.currentBook = book;
  }

  deleteBook(bookId: string): void {}
}
