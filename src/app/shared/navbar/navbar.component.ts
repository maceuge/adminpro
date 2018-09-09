import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(private _usrServ: UsuarioService,
              private _router: Router) { 
      this.usuario = this._usrServ.usuario;
  }

  ngOnInit() { }

  buscar (termino: string) {
    this._router.navigate(['/busqueda', termino]);
  }

  logout () {
    this._usrServ.logout();
  }
}
