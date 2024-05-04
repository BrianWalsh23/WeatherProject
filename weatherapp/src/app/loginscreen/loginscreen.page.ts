import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class LoginscreenPage implements OnInit {

  email: string = '';
  password: string = '';

  validationUserMessage = {
    email: [
      { type: "required", message: "Please enter your Email" },
      { type: "pattern", message: "The Email entered is incorrect. Try again" }
    ],
    password: [
      { type: "required", message: "Please enter your Password" },
      { type: "minlength", message: "The Password must be at least 5 characters" }
    ]
  };

  validationFormUser!: FormGroup;

  constructor(public formbuilder: FormBuilder, public authservice: AuthService ) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  LoginUser(value: any) {
    console.log("Logged in");
    try{
      this.authservice.loginFireauth(value).then(resp => {
        console.log(resp);
      });
    }catch(err){
      console.log(err);
    }
  }
}