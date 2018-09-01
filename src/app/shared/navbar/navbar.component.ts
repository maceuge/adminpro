import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _usrServ: UsuarioService) { }

  ngOnInit() { }

  logout () {
    this._usrServ.logout();
  }
}
