import { Injectable, Inject } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { DOCUMENT } from '@angular/common';
import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(@Inject(DOCUMENT) private _doc,
              private _userService: UsuarioService) {
  }

  saveThemeSettings (theme: string) {
    let usuario = JSON.parse(localStorage.getItem('usuario'));
        usuario.theme = theme;
    this._userService.updateUser(usuario).subscribe( data => {
      if (data) {
        localStorage.setItem('theme', theme);
      }
    });
  }
  
  setTheme (theme: string) {
    let url = `assets/css/colors/${theme}.css`;
    this._doc.getElementById('theme').setAttribute('href', url);
    this.saveThemeSettings(theme);
  }

}

