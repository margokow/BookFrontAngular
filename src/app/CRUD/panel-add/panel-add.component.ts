import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import Book from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { AuthorAddComponent } from '../author-add/author-add.component';

@Component({
  selector: 'app-panel-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AuthorAddComponent],
  templateUrl: './panel-add.component.html',
  styleUrls: ['./panel-add.component.css']
})
export class PanelAddComponent {
  infoBook: FormGroup;
  showAuthorAddForm = false;  // Pour afficher/masquer le formulaire d'ajout d'auteur
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService
  ) {
    this.infoBook = this.formBuilder.group({
      title: ['titre', Validators.required],
      authorId: [null, Validators.required],
      coverText: ['CT'],
      comment: ['comm'],
    });
  }

  addBook() {
    this.submitted = true;
    if (this.infoBook.invalid) {
      return;
    }
    console.log(this.infoBook.value);

    this.bookService.addBook(this.infoBook.value).subscribe();
    this.infoBook.reset();
    this.submitted = false;
  }

  // Méthode pour recevoir l'ID de l'auteur créé
  onAuthorAdded(authorId: number) {
    this.infoBook.patchValue({ authorId });
    this.showAuthorAddForm = false;  // Masquer le formulaire d'ajout d'auteur
  }
}
