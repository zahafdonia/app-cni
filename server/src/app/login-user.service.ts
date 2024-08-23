import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';  // <-- Assurez-vous que c'est importé correctement

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private baseUrl = "http://localhost:8085/api/users/login";  // <-- Définissez correctement l'URL de votre backend

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<any> {
    console.log(user);
    return this.httpClient.post(this.baseUrl, user);
  // <-- Utilisez l'URL correctement
  }
}
