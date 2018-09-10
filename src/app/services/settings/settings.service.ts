import { Injectable, Inject } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  theme: string;

  constructor(@Inject(DOCUMENT) private _doc,
              private _userService: UsuarioService) {
    this.setTheme(localStorage.getItem('theme'));   
  }

  saveThemeSettings () {
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    usuario.theme = this.theme;
    this._userService.updateUser(usuario).subscribe( data => {
      console.log(data); 
    });
  }

  getThemeSelected () {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
    }
    return this.theme;
  }

  getTheme () {
    let url = `assets/css/colors/${this.theme}.css`;
    return url;
  }

  setTheme (theme: string) {
    this.theme = theme;
    let url = `assets/css/colors/${theme}.css`;
    this._doc.getElementById('theme').setAttribute('href', url);
    localStorage.setItem('theme', theme);
    this.saveThemeSettings();
  }

}

