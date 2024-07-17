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
  book!: Book;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.infoBook = this.formBuilder.group({
      id: [, Validators.required],
      title: ['', Validators.required],
      idAuthor: [null, Validators.required],
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
          id: book.id,
          title: book.title,
          idAuthor: book.idAuthor,
          coverText: book.coverText,
          comment: book.comment,
        });
      });
    }
  }

  updateBook() {
      this.submitted = true;

      const authorId = this.infoBook.controls['idAuthor'].value;
      this.book = this.infoBook.value;

      this.authorService.getAuthor(+authorId).subscribe(data => {
        this.book.idAuthor = data.id
        this.book.author = data


        this.bookService.updateBook(this.book).subscribe(() => {
          this.router.navigate(['/panel']);
        })
      });




    }

  onAuthorAdded(authorId: number) {
    this.infoBook.patchValue({ idAuthor: authorId });
    this.showAuthorAddForm = false;
    this.loadAuthors();
  }
}
