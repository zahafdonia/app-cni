import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs'; // Assurez-vous d'importer Observable et of

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    cin: '',
    nom: '',
    prenom: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  signUp() {
    console.log('User Sign-Up Data:', this.user);

    // URL de votre API backend
    const apiUrl = 'http://localhost:8085/comptes';

    this.http.post(apiUrl, this.user)
      .pipe(
        tap(response => {
          // Logique à exécuter lorsque la demande est réussie
          console.log('Inscription réussie:', response);
          this.router.navigate(['/']); // Redirige vers la page de connexion ou une autre page après inscription
        }),
        catchError(error => {
          // Logique pour gérer les erreurs
          console.error('Erreur lors de l\'inscription:', error);
          return of([]); // Retourne un Observable vide en cas d'erreur
        })
      )
      .subscribe();
  }
}
