import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  buscarTodos (termino: string) {
    let url = `${URL_SERVICE}/busqueda/todo/${termino}`;
    return this._http.get(url);
  }
}
