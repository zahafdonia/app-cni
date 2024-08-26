import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs'; // Assurez-vous d'importer Observable et of
import { AuthService } from '../auth.service';
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
    password: '',
    nom: '',       
    prenom: '',    
    email: ''   
  };

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.signUp(this.user).subscribe(response => {
      console.log('Compte créé avec succès!', response);
    }, error => {
      console.error('Erreur lors de la création du compte!', error);
    });
  }
  
}