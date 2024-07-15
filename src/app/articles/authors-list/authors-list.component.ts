import { Component, Input } from '@angular/core';
import { AuthorsCardComponent } from '../authors-card/authors-card.component';

@Component({
  selector: 'app-authors-list',
  standalone: true,
  imports: [AuthorsCardComponent],
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.css'
})
export class AuthorsListComponent {

  @Input() books: any[] = []

  @Input() authors: any[] = []

  @Input() booksWithAuthors: any[] = [];

  getAuthor(book: any) {
    return this.authors.find(author => author.id === book.authorId);
  }
}

