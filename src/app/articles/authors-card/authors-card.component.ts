import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authors-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './authors-card.component.html',
  styleUrl: './authors-card.component.css'
})
export class AuthorsCardComponent {

  @Input() author!: any

}
