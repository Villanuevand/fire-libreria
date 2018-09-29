import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// fireImports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AbmComponent } from './abm/abm.component';
import {FormsModule} from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';

const FIREBASE_IMPORTS = [
  AngularFireModule.initializeApp(environment.firebase, 'fire-libreria'),
  AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
];

@NgModule({
  declarations: [
    AppComponent,
    AbmComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    AppRoutingModule,
    ...FIREBASE_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
