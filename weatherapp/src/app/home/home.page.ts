import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  constructor() {}
}
