import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public _http: HttpClient) { 
    console.log('Soy el servicio del USUARIO');



  }
}
