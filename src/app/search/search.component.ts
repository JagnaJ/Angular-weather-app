import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const savedCity = localStorage.getItem('lastCity');
    if (savedCity) {
      this.city = savedCity;
      this.searchWeather();
    }
  }

  searchWeather() {
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      this.addCityToHistory(this.city);
    });
  }

  addCityToHistory(city: string) {
    if (!this.cityHistory.includes(city)) {
      this.cityHistory.push(city);
    }
  }

  clearWeather() {
    this.weatherData = null;
  }

  clearInput() {
    this.city = '';
  }

  clearHistory() {
    this.cityHistory = [];
  }

  searchWeatherFromHistory(city: string) {
    this.city = city;
    this.searchWeather();
  }

  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    document.body.className = this.theme;
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