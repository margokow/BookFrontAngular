import { Component } from '@angular/core';
import { AuthorsListComponent } from '../authors-list/authors-list.component';
import Author from '../../models/author.model';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import Book from '../../models/book.model';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [AuthorsListComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {

  authors: Author[] = [];
  books: Book[] = [];

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
}
