import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private model = 'books';
  private url = `${BASE_URL}/${this.model}`;

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.url);
  }

  private getUrlById(id: string) {
    return `${this.url}/${id}`;
  }
}
