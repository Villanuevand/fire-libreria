import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbmComponent} from './abm/abm.component';
import {ListadoComponent} from './listado/listado.component';
import {MostwantedComponent} from './mostwanted/mostwanted.component';

const routes: Routes = [
    { path: '', redirectTo: '/mostWanted', pathMatch: 'full' },
    {path: 'mostWanted', component: MostwantedComponent},
    { path: 'abm', component: AbmComponent },
    { path: 'listado', component: ListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
