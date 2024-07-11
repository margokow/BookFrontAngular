import { AuthorService } from './../../services/author.service';
import { Component, OnInit } from '@angular/core';
import Book from '../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BooksListComponent } from '../books-list/books-list.component';
import Author from '../../models/author.model';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BooksListComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  authors: Author[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

  // booksWithAuthors: any[] = [];

ngOnInit(): void {
  this.bookService.getBooks().subscribe((booksResponse) => {
    this.books = booksResponse;
    console.log(booksResponse);

    // this.associateBooksWithAuthors();
  });

  this.authorService.getAuthors().subscribe((authorsResponse) => {
    this.authors = authorsResponse;
    // this.associateBooksWithAuthors();
  });
}

// private associateBooksWithAuthors(): void {
//   if (this.books.length && this.authors.length) {
//     this.booksWithAuthors = this.books.map(book => {
//     //   const author = this.authors.find(a => a.id === book.authorId);
//     //   return { ...book, author };
//     // });
//     console.log('Books with Authors:', this.booksWithAuthors); // Debug: Affiche les livres avec auteurs
//   }
// }
//
}
