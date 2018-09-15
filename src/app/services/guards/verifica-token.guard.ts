import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {
  
  constructor (private _userServ: UsuarioService,
               private _router: Router) {}
  
  canActivate( ): Promise<boolean> | boolean {
    let token = this._userServ.token;
    let payload = JSON.parse(atob(token.split('.')[1]));
    let expirado: boolean = this.verSiExpiroToken(payload.exp);
    
      if (expirado) {
        this._router.navigate(['/login']);
        return false;
      }
    return this.verificarSiRenovarToken(payload.exp);
  }

  verificarSiRenovarToken ( fechaExp: number): Promise<boolean> {
    return new Promise ( (resolve, reject) => {
      let tokenExp = new Date(fechaExp * 1000);
      let ahora = new Date();
      ahora.setTime(ahora.getTime() + (4*60*60*1000));
      // console.log(tokenExp);
      // console.log(ahora);
        if (tokenExp.getTime() > ahora.getTime()) {
          resolve(true);
        } else {
          this._userServ.renovarToken().subscribe( () => {
            resolve(true);
          }, (err) => {
            this._router.navigate(['/login']);
            swal('Error Token', 'No se pudo renovar el Token', 'error');
            reject(false);
          });
        }
    });

  }

  verSiExpiroToken ( fechaExp: number) {
    let tiempoAhora = new Date().getTime() / 1000;
    if (fechaExp < tiempoAhora) {
      return true;
    } else {
      return false;
    }
  }


}
