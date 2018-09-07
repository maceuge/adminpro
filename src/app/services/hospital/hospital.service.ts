import { Injectable } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { URL_SERVICE } from '../../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  token: string;

  constructor(private _http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  obtenerHospitales (page: number) {
    let url = `${URL_SERVICE}/hospital?page=${page}`;
    return this._http.get(url);
  }

  obtenerHospital (id: string) {
    let url = `${URL_SERVICE}/hospital/${id}`;
    return this._http.get(url);
  }

  borrarHospital (id: string) {
    let url = `${URL_SERVICE}/hospital/${id}?token=${this.token}`;
    return this._http.delete(url);
  }

  crearHospital (nombre: string) {
    let url = `${URL_SERVICE}/hospital?token=${this.token}`;    
    return this._http.post(url, { nombre });
  }

  buscarHospital (termino: string) {
    let url = `${URL_SERVICE}/busqueda/coleccion/hospital/${termino}`;
    return this._http.get(url); 
  }

  actualizarHospital (hospital: Hospital) {
    let url = `${URL_SERVICE}/hospital/${hospital._id}?token=${this.token}`;
    return this._http.put(url, hospital);
  }




}
