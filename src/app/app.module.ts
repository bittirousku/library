import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BooksComponent, BooksListComponent, BooksDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
