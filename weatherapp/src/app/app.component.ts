import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginscreenPage } from './loginscreen/loginscreen.page';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [ FormsModule, CommonModule,LoginscreenPage, IonicModule],
})

export class AppComponent {
  constructor() {}
}
