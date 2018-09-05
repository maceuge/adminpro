import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  
  constructor (private _userServ: UsuarioService,
               private _route: Router) {}
  
  canActivate( ): boolean {

    if (this._userServ.isLogin()) {
        return true;
      } else {
        this._route.navigate(['/login']);
        return false;
      }
  }
}
