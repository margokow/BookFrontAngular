import { Component } from '@angular/core';
import { BooksComponent } from "../../articles/books/books.component";
import Book from '../../models/book.model';
import Author from '../../models/author.model';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { PanelListComponent } from '../panel-list/panel-list.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [PanelListComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

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
