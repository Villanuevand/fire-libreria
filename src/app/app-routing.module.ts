import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbmComponent} from './abm/abm.component';
import {ListadoComponent} from './listado/listado.component';

const routes: Routes = [
  { path: '', redirectTo: '/abm', pathMatch: 'full' },
  { path: 'abm', component: AbmComponent },
    { path: 'listado', component: ListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
