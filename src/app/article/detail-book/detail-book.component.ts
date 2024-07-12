import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import Book from '../../models/book.model';
import Author from '../../models/author.model';
import { DetailAuthorComponent } from '../detail-author/detail-author.component';

@Component({
  selector: 'app-detail-book',
  standalone: true,
  imports: [DetailAuthorComponent],
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.css'
})
export class DetailBookComponent {

  @Input() author!: any

  detail!: Book

  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private bookService: BookService,
    private authorService: AuthorService,
  ){}

  private subscribeBook(id: number) : void{
    this.bookService.getBook(id).subscribe((response) => {
      this.detail = response
    })
  }

  // private subscribeAuthor(id: number) : void{
  //   this.authorService.getAuthor(id).subscribe((response) => {
  //     this.detail = response
  //   })
  // }

  private setSubscribe( id: string | null) {
    if (id) {
      this.subscribeBook(+id)
    }
    //  else if (id) {
    //   this.subscribeAuthor(+id)
    // }

    else if (!id) {
      this.router.navigate(['/not-found'])
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.setSubscribe(id)
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.router.navigate(['/books']); // Rediriger vers la liste des livres ou une autre page après la suppression
    });
}
}
