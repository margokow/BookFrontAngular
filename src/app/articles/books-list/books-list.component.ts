import { Component, Input} from '@angular/core';
import { BooksCardComponent } from '../books-card/books-card.component';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BooksCardComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {

  @Input() books: any[] = []

  @Input() authors: any[] = []

  @Input() booksWithAuthors: any[] = [];

  getAuthor(book: any) {
    return this.authors.find(author => author.id === book.authorId);
  }
}

