
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { BooksComponent } from './articles/books/books.component';
import { DetailBookComponent } from './article/detail-book/detail-book.component';
import { DetailAuthorComponent } from './article/detail-author/detail-author.component';
import { PanelComponent } from './CRUD/panel/panel.component';
import { PanelAddComponent } from './CRUD/panel-add/panel-add.component';
import { AuthorsComponent } from './articles/authors/authors.component';
import { PanelUpdateComponent } from './CRUD/panel-update/panel-update.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'home', component: HomeComponent},

  {path: 'books', component: BooksComponent},

  {path: 'books/:id', component: DetailBookComponent},

  {path: 'authors/:id', component: DetailAuthorComponent},

  {path: 'authors', component: AuthorsComponent},

  {path: 'panel', component: PanelComponent, canActivate:[authGuard]},

  {path: 'paneladd', component: PanelAddComponent, canActivate:[authGuard]},

  {path: 'panelupdate/:id', component: PanelUpdateComponent, canActivate:[authGuard]},

  {path: 'login', component: LoginFormComponent},




  {path:"**", component: NotFoundComponent}
];
