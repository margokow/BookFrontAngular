
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { BooksComponent } from './articles/books/books.component';
import { DetailBookComponent } from './article/detail-book/detail-book.component';

export const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'home', component: HomeComponent},

  {path: 'books', component: BooksComponent},

  {path: 'books/:id', component: DetailBookComponent},

  // {path: 'authors/:id', component: DetailBookComponent},

  // {path: 'authors', component: BooksComponent},




  {path:"**", component: NotFoundComponent}
];
