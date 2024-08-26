import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8085/api'; // Remplacez par votre URL du backend

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createAccount`, user);
  }
}
