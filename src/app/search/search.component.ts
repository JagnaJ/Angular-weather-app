import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SearchComponent {
  city: string = '';
  weatherData: any = null;
  cityHistory: string[] = [];
  theme: string = 'light-theme';

  constructor(private weatherService: WeatherService, @Inject(PLATFORM_ID) private platformId: Object
) {}

ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    const savedHistory = localStorage.getItem('cityHistory');
    if (savedHistory) {
      this.cityHistory = JSON.parse(savedHistory);
    }

    const savedTheme = localStorage.getItem('theme');
    this.theme = savedTheme ? savedTheme : 'light-theme';
    document.body.className = this.theme;
    const savedCity = localStorage.getItem('selectedCity');
      if (savedCity) {
        this.city = savedCity;  
        this.searchWeather(); 
    }
  }
}

  searchWeather() {
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      this.addCityToHistory(this.city);
      localStorage.setItem('selectedCity', this.city);
    });
  }

  addCityToHistory(city: string) {
    if (!this.cityHistory.includes(city)) {
      this.cityHistory.push(city);
      localStorage.setItem('cityHistory', JSON.stringify(this.cityHistory));
    }
  }

  clearWeather() {
    this.weatherData = null;
    this.city = '';
    localStorage.removeItem('selectedCity'); 
  }

  clearInput() {
    this.city = '';
  }

  clearHistory() {
    this.cityHistory = [];
    localStorage.removeItem('cityHistory');
    this.weatherData = null;
    this.city = '';
    localStorage.removeItem('selectedCity');  
  }

  searchWeatherFromHistory(city: string) {
    this.city = city;
    this.searchWeather();
  }

  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    document.body.className = this.theme;
    localStorage.setItem('theme', this.theme);
  }

  getWeatherIcon(weatherId: number): string {
    if (weatherId === 800) {
      return 'wi-day-sunny wi-animated';
    } else if (weatherId >= 500 && weatherId < 600) {
      return 'wi-rain wi-animated';
    } else {
      return 'wi-cloudy wi-animated';
    }
  }
}