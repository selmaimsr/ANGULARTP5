import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { About } from './about/about';
import { ConsultAct } from './consult-act/consult-act';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: About },
  { path: 'consultAct/:id', component: ConsultAct }
];