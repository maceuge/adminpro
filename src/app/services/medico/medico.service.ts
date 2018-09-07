import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  token: string;

  constructor(private _http: HttpClient,
              private _userServ: UsuarioService) {
    this.token = this._userServ.token;
  }
  
  obtenerMedicos () {
    let url = `${URL_SERVICE}/medico`;
    return this._http.get(url);
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
