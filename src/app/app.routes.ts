import { Routes } from '@angular/router';
import { Characterlist } from './pages/characterlist/characterlist';
import { Characterdetails } from './pages/characterdetails/characterdetails';

export const routes: Routes = [
  { path: '', component: Characterlist },
  { path: 'character/:id', component: Characterdetails },
  { path: '**', redirectTo: '' }
];
