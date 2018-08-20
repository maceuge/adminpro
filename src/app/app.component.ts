import { SettingsService } from './services/service.index';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  theme: any = {};

  constructor (private themeSetting: SettingsService) {
    
    let link = document.getElementById('theme');
    this.theme = themeSetting.getThemeSetting();
    link.setAttribute('href', this.theme.themeUrl);

  }
}
