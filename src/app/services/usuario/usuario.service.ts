import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { UploadService } from '../upload/upload.service';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  menu: any[] = [];

  constructor(public _http: HttpClient,
              private _router: Router,
              private _uploadServ: UploadService) { 

    this.storeDataFromLocalStorage();
  }
  
  storeDataFromLocalStorage () {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  isLogin () {
    return (this.token.length > 5) ? true : false;
  }

  crearUsuario ( usuario: Usuario ) {
    let url = URL_SERVICE + '/usuario';
    return this._http.post( url, usuario).pipe(
        map ( (data: any) => {
          swal(`Bienvenid@ ${usuario.nombre}`, `Ahora podes ingresar al sistema con tu correo ${usuario.email}`, 'success');
          return data.usuario;
        })
    );
  }

  loginGoogle ( token: string ) {
    let url = URL_SERVICE + '/login/google';
    return this._http.post(url, {token}).pipe(
      map( (data: any) => {   
        this.saveToLocalStorage(data.id, data.token, data.usuario, data.menu);
        return true;
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
        this.saveToLocalStorage(data.id, data.token, data.usuario, data.menu);    
        return true;
      })
    );
  }

  logout() {
    this.usuario = null;
    this.token = '';
    this.menu = [];

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('menu');

    this._router.navigate(['/login']);
  }

  saveToLocalStorage(id: string, token: string, usuario: Usuario, menu: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('menu', JSON.stringify(menu));
    this.usuario = usuario;
    this.token = token;
    this.menu = menu;
  }

  updateUser( usuario: Usuario ) {
    let url = URL_SERVICE + '/usuario/' + usuario._id;
        url += '?token=' + this.token;
    return this._http.put(url, usuario).pipe(
      map ((user: any) => {
        if (usuario._id === this.usuario._id) {
          this.saveToLocalStorage(user.usuario._id, this.token, user.usuario, this.menu);
        }
        return true;
      })
    );
  }

  uploadImage (file: File, id: string) {
    this._uploadServ.uploadFile(file, 'usuario', id)
        .then( (data: any) => {
          this.usuario.img = data.usuario.img;
          this.saveToLocalStorage(id, this.token, this.usuario, this.menu);
          swal('Foto de Perfil Actualizado', 'La nueva foto de perfil fue actualizada con exito!', 'success');
        })
        .catch( err => {
          console.log('Fallo al subir el archivo', err);
        });
  }

  getUsers (pages: number = 0) {
    let url = URL_SERVICE + '/usuario?page=' + pages;
    return this._http.get(url);
  }

  searchUser ( word: string ) {
     let url = `${ URL_SERVICE }/busqueda/coleccion/usuario/${ word }`;
     return this._http.get(url);
  }

  deleteUser (id: string ) {
    let url = `${URL_SERVICE}/usuario/${ id }?token=${ this.token }`;
    return this._http.delete(url).pipe(
      map( (data: any) => {
        return data.usuario;
      })
    );
  }

}
