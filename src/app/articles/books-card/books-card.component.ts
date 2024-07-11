import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './books-card.component.html',
  styleUrl: './books-card.component.css'
})
export class BooksCardComponent {

  @Input() book!: any

  @Input() author!: any

}
