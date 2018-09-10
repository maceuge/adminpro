import { SettingsService, UsuarioService } from './services/service.index';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  theme: string;

  constructor (private userService: UsuarioService,
                @Inject(DOCUMENT) private _doc) {
    this.setThemeOnLogin();              
  }

  setThemeOnLogin () {
    if (this.userService.isLogin()) {
      this.userService.setTheme();
    } else {
      let url = `assets/css/colors/default.css`;
      this._doc.getElementById('theme').setAttribute('href', url);
    }
  }

}
