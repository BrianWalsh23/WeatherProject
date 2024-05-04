import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginscreenPage } from './loginscreen/loginscreen.page';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [ FormsModule, CommonModule,LoginscreenPage, IonicModule, IonIcon, ReactiveFormsModule],
})

export class AppComponent {
  constructor() {}
}
