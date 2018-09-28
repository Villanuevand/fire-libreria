import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material';
import { LibreriaRoutingModule } from './libreria-routing.module';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  imports: [
    CommonModule,
    LibreriaRoutingModule,
      MatTableModule
  ],
  declarations: [ListadoComponent]
})
export class LibreriaModule { }
