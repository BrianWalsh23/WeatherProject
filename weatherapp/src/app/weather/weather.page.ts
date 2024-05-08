import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import{ CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class WeatherPage {
  searchForm!: FormGroup;
  public weather: any;

  constructor(
    private fb: FormBuilder,
    private service: WeatherService
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [null, Validators.required]
    });
  }

  searchWeather() {
    console.log(this.searchForm.value);
    this.service.searchWeather(this.searchForm.get(['city'])!.value).subscribe((resp) => {
      console.log(resp);
      this.weather = resp.data;
    });
  }

  async openBrowser() {
    await Browser.open({ url: 'https://www.met.ie/'
    });
    };
}