import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { GuessComponent } from './pages/guess/guess.component';

export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'guess/:evidence', component: GuessComponent },
];
