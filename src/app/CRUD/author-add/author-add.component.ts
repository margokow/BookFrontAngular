import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css'
})
export class AuthorAddComponent {
  authorForm: FormGroup;

  @Output() authorAdded = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService
  ) {
    this.authorForm = this.fb.group({
      lastName: [''],
      firstName: [''],
    });
  }

  addAuthor() {
    if (this.authorForm.valid) {
      this.authorService.addAuthor(this.authorForm.value).subscribe(author => {
        this.authorAdded.emit(author.id);
      });
    }
  }
}
