import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';
import { RouterModule, Router } from '@angular/router'; // Assurez-vous que Router est importé correctement
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // Assurez-vous que FormsModule est importé ici
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User = new User();

  constructor(private loginUserService: LoginUserService, private router: Router) { }

  userLogin() {
    console.log("Attempting to login with user:", this.user);
    this.loginUserService.loginUser(this.user).subscribe(
      (data: any) => {
        alert("Login successful");
      },
      (error: any) => {
        alert("Login error, please enter correct CIN or password");
      }
    );
  }

  goToSignUp() {
    this.router.navigate(['/signup']); // Redirige vers la page d'inscription
  }
}
