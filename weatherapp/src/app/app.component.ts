import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports:[IonicModule],
})
export class AppComponent {
  constructor(private afAuth: AngularFireAuth) {

  }
}