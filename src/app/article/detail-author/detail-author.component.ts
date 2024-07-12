import { Component } from '@angular/core';
import Author from '../../models/author.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-detail-author',
  standalone: true,
  imports: [],
  templateUrl: './detail-author.component.html',
  styleUrl: './detail-author.component.css'
})
export class DetailAuthorComponent {
  detail!: Author

  constructor(
    private router: Router,
    private route: ActivatedRoute,

    private authorService: AuthorService,
  ){}

  private subscribeAuthor(id: number) : void{
    this.authorService.getAuthor(id).subscribe((response) => {
      this.detail = response
    })
  }


  private setSubscribe( id: string | null) {
    if (id) {
    this.subscribeAuthor(+id)
    } else if (!id) {
      this.router.navigate(['/not-found'])
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.setSubscribe(id)
  }
}

