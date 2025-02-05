import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  tokenService = inject(TokenService)
  logout(){
    // sessionStorage.clear() ---> vide la session
    this.tokenService.clearToken() // va supprimer uniquement le token
  }
}
