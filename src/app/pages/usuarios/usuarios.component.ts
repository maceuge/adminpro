import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import swal from 'sweetalert';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  pages: number = 0;
  totalReg: number = 0;
  userId: string;
  loading: boolean;
  terminoBuscado: string = '';

  constructor(private _userServ: UsuarioService,
              public _mdUpSrv: ModalUploadService) {
      this.userId = localStorage.getItem('id');
  }

  ngOnInit() {
    this.loadUsers();
    this._mdUpSrv.notificacion.subscribe( resp => {
      this.loadUsers();
    });
  }

  openModal(id: string ) {
    this._mdUpSrv.showModal(id, 'usuario');
  }

  loadUsers () {
    this.loading = true;
    this._userServ.getUsers(this.pages).subscribe( (data: any) => {
      this.usuarios = data.usuarios;
      this.totalReg = data.total;
      this.loading = false;
    });
  }


  nextPage (page: number) {
    let pagin = this.pages + page;
    if (pagin >= this.totalReg) {
      return;
    }
    if (pagin < 0) {
      return;
    }
    this.pages += page;
    this.loadUsers();
  }

  searchUser( word: string) {
    this.terminoBuscado = word;
 
    if (word.length <= 0) {
      this.loadUsers();
      return;
    }
    this.loading = true;
    this._userServ.searchUser(word).subscribe( (users: any) => { 
        this.usuarios = users.usuario;
        this.loading = false;
    });
  }

  deleteUserRegister (usuario: Usuario) {
    swal({
      title: "Estas Seguro?",
      text: `Estas a punto de BORRAR a ${usuario.nombre}! No podras recuperarlo despues!`,
      icon: "warning",
      buttons: ["Cancelar", "Borrar"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._userServ.deleteUser(usuario._id).subscribe( (user: Usuario) => {  
          this.loadUsers();
          swal("Perfecto!", `El Usuario: ${user.nombre} fue eliminado con exito.`, "success");
        });
      } else {
        swal("Cancelado", "La operacion fue cancelada, nungun registro fue borrado!", "error");
      }
    }); 
  }

  saveRole (usuario: Usuario) {
    //console.log(usuario);
    this._userServ.updateUser(usuario).subscribe( data => {
      this.loadUsers();
      swal('Cambio de ROL', `El Usuario ${usuario.nombre} ahora es ${usuario.role}!`, 'success');
    });
    
  }

}
