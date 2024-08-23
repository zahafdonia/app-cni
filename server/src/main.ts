import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule ici
import { AppComponent } from './app/app.component';
import { UserLoginComponent } from './app/user-login/user-login.component';
import { SignUpComponent } from './app/signup/sign-up.component';

const routes: Routes = [
  { path: 'user-login', component: UserLoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', redirectTo: 'user-login', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule), // Ajouter HttpClientModule ici
  ],
}).catch(err => console.error(err));



