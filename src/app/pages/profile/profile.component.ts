import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imgToUpload: File;
  tempImage: string | ArrayBuffer;

  constructor(private _userServ: UsuarioService) {
    this.usuario = this._userServ.usuario;
  }

  ngOnInit() {}

  update (usuario: Usuario) {
    console.log(usuario);
    if (this.usuario.google) {
      this.usuario.nombre = usuario.nombre;
    } else {
      this.usuario.email = usuario.email;
      this.usuario.nombre = usuario.nombre;
    }
    this._userServ.updateUser(this.usuario).subscribe(
      data => { 
        swal('Perfil Actualizado', 'Buen Trabajo, su perfil se actualizo con exito', 'success');
      }
    );
  }

  selectImage(file: File) {
    if (!file) {
      this.imgToUpload = null;
      return;
    }
    if (file.type.indexOf('image') < 0) {
      swal('Imagen no Valida', 'Hey! Solo se permiten cargar imagenes!', 'error');
      this.imgToUpload = null;
      return;
    }
    let reader = new FileReader();
    let urlTempImage = reader.readAsDataURL(file);
        reader.onloadend = () => this.tempImage = reader.result;

    this.imgToUpload = file;
  }

  updateImage () {
    this._userServ.uploadImage(this.imgToUpload, this.usuario._id);
  }

}
