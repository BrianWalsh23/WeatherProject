import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { firebaseConfig } from 'src/environments/environment.prod';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import{AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'



@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
  ],

    providers: [],
  bootstrap: [],
})
export class AppModule {
    ngDoBootstrap() {}
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));