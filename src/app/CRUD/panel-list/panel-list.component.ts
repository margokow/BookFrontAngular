import { Component, Input } from '@angular/core';
import { PanelCardComponent } from '../panel-card/panel-card.component';
import Book from '../../models/book.model';

@Component({
  selector: 'app-panel-list',
  standalone: true,
  imports: [PanelCardComponent],
  templateUrl: './panel-list.component.html',
  styleUrl: './panel-list.component.css'
})
export class PanelListComponent {

  @Input() books: Book[] = [];


  getAuthor(book: Book) {
    return book.author;
  }
}
