import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IonicModule } from '@ionic/angular';
import{ RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports:[IonicModule, RouterOutlet, CommonModule,],
})
export class AppComponent {
  constructor(private afAuth: AngularFireAuth) {

  }
}