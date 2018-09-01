import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  sidebarMenu: any[] = [];

  constructor(public sideBar: SidebarService,
              private userServ: UsuarioService) {
     this.sidebarMenu = this.sideBar.menu;
  }

  ngOnInit() {}

  logout () {
    this.userServ.logout();
  }

}
