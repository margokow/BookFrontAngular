import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import Book from '../../models/book.model';

@Component({
  selector: 'app-panel-card',
  standalone: true,
  templateUrl: './panel-card.component.html',
  styleUrls: ['./panel-card.component.css'],
  imports: [RouterLink]
})
export class PanelCardComponent {
  @Input() book!: Book;

  constructor(private router: Router, private bookService: BookService) {}

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      // Vous pouvez ajouter ici une gestion d'état pour rafraîchir la liste
    });
  }
}
