import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './router.module';

import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {RouterModule} from '@angular/router';


const DECLARATIONS = [
    AppComponent
];

const IMPORTS = [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase, 'fire-libreria'),
    AngularFirestoreModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
