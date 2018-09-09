import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];

  constructor(private _userServ: UsuarioService) {}
  
  cargarMenu () {
    this.menu = this._userServ.menu;
  }

}
