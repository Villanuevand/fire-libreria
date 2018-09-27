import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibreriaRoutingModule } from './libreria-routing.module';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  imports: [
    CommonModule,
    LibreriaRoutingModule
  ],
  declarations: [ListadoComponent]
})
export class LibreriaModule { }
