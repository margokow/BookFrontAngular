import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import Book from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { AuthorAddComponent } from '../author-add/author-add.component';
import Author from '../../models/author.model';

@Component({
  selector: 'app-panel-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AuthorAddComponent],
  templateUrl: './panel-add.component.html',
  styleUrls: ['./panel-add.component.css']
})
export class PanelAddComponent implements OnInit {
  infoBook: FormGroup;

  book!:Book
  showAuthorAddForm = false;
  authors!: Author[] // Pour afficher/masquer le formulaire d'ajout d'auteur
  // authors: { id: number, FirstName: string, LastName: string, }[] = [];  // Liste des auteurs existants
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService  // Injecte le service d'auteur
  ) {
    this.infoBook = this.formBuilder.group({
      title: ['titre', Validators.required],
      idAuthor: [null,  Validators.required],  // Champ pour l'ID de l'auteur
      coverText: ['CT'],
      comment: ['comm'],
    });
  }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }

  addBook() {
    this.submitted = true;
    // if (this.infoBook.invalid) {
    //   return;
    // }

    //     if (!this.infoBook.value.author) {
    //       return;
    //     }

    const authorId = this.infoBook.controls["idAuthor"].value

    this.book = this.infoBook.value
    console.log(this.book);


    this.authorService.getAuthor(+authorId).subscribe((data) =>
    {
      this.book.idAuthor = data.id
      // this.book.author = data
      this.bookService.addBook(this.book).subscribe();
    }
  )




    this.infoBook.reset();
    this.submitted = false;

  }

  onAuthorAdded(author: number) {
    this.infoBook.patchValue({ author });
    this.showAuthorAddForm = false;  // Masquer le formulaire d'ajout d'auteur
    this.loadAuthors();  // Recharger les auteurs pour mettre à jour la liste déroulante
  }

}
