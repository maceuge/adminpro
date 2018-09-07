import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  themeSet: ThemeSettings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  }

  constructor() {}

  saveThemeSettings () {
    localStorage.setItem('theme', JSON.stringify(this.themeSet));
  }

  getThemeSetting () {
    if (localStorage.getItem('theme')) {
      this.themeSet = JSON.parse(localStorage.getItem('theme'));
    }
    return this.themeSet;
  }

  setTheme (theme: string) {
    this.themeSet.themeUrl = `assets/css/colors/${theme}.css`;
    this.themeSet.theme = theme;
    this.saveThemeSettings();
  }

}

interface ThemeSettings {
  themeUrl: string;
  theme: string;
}
