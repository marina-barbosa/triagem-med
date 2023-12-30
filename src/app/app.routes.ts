import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { Pg404Component } from './pages/pg404/pg404.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Pg404Component }
];
