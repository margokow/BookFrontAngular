import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import Book from '../../models/book.model';
import Author from '../../models/author.model';

@Component({
  selector: 'app-detail-book',
  standalone: true,
  imports: [],
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.css'
})
export class DetailBookComponent {

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
}
