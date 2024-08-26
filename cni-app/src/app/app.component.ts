import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './signup/sign-up.component';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    UserLoginComponent,
    SignUpComponent,  // Correction du nom ici
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cni-app';
  user: User = new User();

  userLogin() {
    console.log('User CIN:', this.user.cin);
    console.log('User Password:', this.user.password);
    // Ajouter ici la logique pour le login
  }
}
