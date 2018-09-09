import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private _userServ: UsuarioService) { }

  canActivate(): boolean {
    
    let role = this._userServ.usuario.role;

    if (role === 'ADMIN_ROLE') {
      return true;
    } else {
      this._userServ.logout();
      console.log('Bloqueado por el Admin Guard!');
      return false;
    }
  }
}
