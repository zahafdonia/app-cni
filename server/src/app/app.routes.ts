import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './signup/sign-up.component';

export const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent }, // Route pour la page de connexion
  { path: 'signup', component: SignUpComponent }, // Route pour la page d'inscription
];

