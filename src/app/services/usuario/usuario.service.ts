import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public _http: HttpClient) { }

  crearUsuario ( usuario: Usuario ) {
    let url = URL_SERVICE + '/usuario';
    return this._http.post( url, usuario).pipe(
        map ( (data: any) => {
          swal(`Bienvenid@ ${usuario.nombre}`, `Ahora podes ingresar al sistema con tu correo ${usuario.email}`, 'success');
          return data.usuario;
        })
    );
  }

  login ( usuario: Usuario, recordame: boolean) {
    if (recordame) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICE + '/login';
    return this._http.post( url, usuario).pipe(
      map ( (data: any) => {
        localStorage.setItem('id', data.id);
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));

        return true;
      })
  );
}

}
