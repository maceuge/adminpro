import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  sidebarMenu: any[] = [];
  usuario: Usuario;

  constructor(public _sideBar: SidebarService,
              private _userServ: UsuarioService) {
     this.sidebarMenu = this._sideBar.menu;
     this.usuario = this._userServ.usuario;
  }

  ngOnInit() {}

  logout () {
    this._userServ.logout();
  }

}
