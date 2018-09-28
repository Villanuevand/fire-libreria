import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbmComponent} from './abm/abm.component';

const routes: Routes = [
  { path: '', redirectTo: '/abm', pathMatch: 'full' },
  { path: 'abm', component: AbmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
