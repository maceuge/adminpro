import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../service.index';

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
