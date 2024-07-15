import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import Book from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panel-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './panel-add.component.html',
  styleUrls: ['./panel-add.component.css']
})
export class PanelAddComponent {
  infoBook: FormGroup = this.formBuilder.group({
    title: ['titre', Validators.required],
    // nom_auteur: ['nomA', Validators.required],
    // prenom_auteur: ['nomP', Validators.required],
    coverText: ['CT'],
    comment: ['comm'],
  });
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private bookService: BookService) {
  }

  addBook() {
    this.submitted = true;
    if (this.infoBook.invalid) {
      return;
    }
    // const newBook: Book = {
    //   title: this.infoBook.value.titre,
    //   author: {
    //     id: 0,
    //     firstName: this.infoBook.value.prenom_auteur,
    //     lastName: this.infoBook.value.nom_auteur,
    //   },
    //   coverText: this.infoBook.value.coverText,
    //   comment: this.infoBook.value.comment,
    // };
    console.log(this.infoBook.value);

    this.bookService.addBook(this.infoBook.value).subscribe();
    this.infoBook.reset();
    this.submitted = false;
  }
}
