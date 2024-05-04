import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import{ ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
  standalone: true,
  imports: [ IonTitle, CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class LoginscreenPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

}
