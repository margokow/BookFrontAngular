import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Author from '../../models/author.model';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Book from '../../models/book.model';
import { AuthorAddComponent } from '../author-add/author-add.component';

@Component({
  selector: 'app-panel-update',
  standalone: true,
  imports: [ReactiveFormsModule, AuthorAddComponent, RouterLink],
  templateUrl: './panel-update.component.html',
  styleUrl: './panel-update.component.css'
})
export class PanelUpdateComponent implements OnInit {
    infoBook: FormGroup;
    authors: Author[] = [];
    showAuthorAddForm = false;
    submitted = false;
    bookId?: number;

    constructor(
      private formBuilder: FormBuilder,
      private bookService: BookService,
      private authorService: AuthorService,
      private route: ActivatedRoute,
      private router: Router
    ) {
      this.infoBook = this.formBuilder.group({
        title: ['', Validators.required],
        author: [null, Validators.required],
        coverText: [''],
        comment: [''],
      });
    }

    ngOnInit() {
      this.bookId = +this.route.snapshot.paramMap.get('id')!;
      this.loadAuthors();
      this.loadBook();
    }

    loadAuthors() {
      this.authorService.getAuthors().subscribe(authors => {
        this.authors = authors;
      });
    }

    loadBook() {
      if (this.bookId) {
        this.bookService.getBook(this.bookId).subscribe(book => {
          this.infoBook.patchValue({
            title: book.title,
            author: book.author,
            coverText: book.coverText,
            comment: book.comment
          });
        });
      }
    }

    updateBook() {
      this.submitted = true;
      if (this.infoBook.invalid) {
        return;
      }

      const book: Book = {
        id: this.bookId!,
        ...this.infoBook.value,
        author: {
          id: this.infoBook.value.author.id,
          firstName: this.infoBook.value.author.firstName,
          lastName: this.infoBook.value.author.lastName
        }
      };

      this.bookService.updateBook(book).subscribe();
    }

    onAuthorAdded(authorId: number) {
      this.authorService.getAuthor(authorId).subscribe(author => {
        this.infoBook.patchValue({ author });
        this.showAuthorAddForm = false;
        this.loadAuthors();
      });
    }
  }
