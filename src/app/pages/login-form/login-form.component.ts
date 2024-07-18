import { TokenService } from './../../services/token.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IAuth } from '../../interfaces/auth';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  fb = inject(FormBuilder)
  authService = inject(AuthService)
  TokenService = inject(TokenService)
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  getUser () {
    this.loginUser()
  }

  private loginUser() {
    this.authService.login(this.loginForm.value as IAuth).subscribe((response) =>
      {this.TokenService.saveToken(response.token)})
  }

}
