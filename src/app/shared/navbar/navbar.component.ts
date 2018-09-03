import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(private _usrServ: UsuarioService) { 
      this.usuario = this._usrServ.usuario;
      
  }

  ngOnInit() { }

  logout () {
    this._usrServ.logout();
  }
}
