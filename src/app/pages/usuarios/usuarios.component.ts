import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  pages: number = 0;
  totalReg: number = 0;

  constructor(private _userServ: UsuarioService) {
      this._userServ.getUsers(this.pages).subscribe( (data: any) => {
        console.log(data);
        this.usuarios = data.usuarios;
      });
  }

  ngOnInit() {}


  nextPage (page: number) {
    console.log(page);
    
  }

}
