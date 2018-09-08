import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from '../../models/medico.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  token: string;

  constructor(private _http: HttpClient,
              private _userServ: UsuarioService) {
    this.token = this._userServ.token;
  }
  
  crearMedico (medico: Medico) {
      let url = `${URL_SERVICE}/medico?token=${this.token}`;
      return this._http.post(url, medico).pipe(
        map ( (data: any) => {
          return data.medico;
        })
      );
  }

  obtenerMedico (id: string) {
    let url = `${URL_SERVICE}/medico/${id}`;
    return this._http.get(url).pipe(
      map ( (data: any) => { 
        return data.medico;
      })
    );
  }

  obtenerMedicos () {
    let url = `${URL_SERVICE}/medico`;
    return this._http.get(url);
  }

  actualizarMedico (id: string, nombre: string, hospital: string) {
    let url = `${URL_SERVICE}/medico/${id}?token=${this.token}`;
    return this._http.put(url, { nombre, hospital }).pipe(
      map ( (data: any) => {
        return data.medico;
      }) 
    );
  }

  buscarMedicos (termino: string) {
    let url = `${URL_SERVICE}/busqueda/coleccion/medico/${termino}`;
    return this._http.get(url);
  }

  eliminarMedico (id: string) {
    let url = `${URL_SERVICE}/medico/${id}?token=${this.token}`;
    return this._http.delete(url);
  }

}
