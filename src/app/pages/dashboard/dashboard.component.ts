import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
// import * as io from 'socket.io-client';
// import { URL_SERVICE } from '../../config/config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  message: any;
  usuarios: Usuario[] = [];
  socket;

  constructor(private _dashServ: DashboardService) { 
    // this.socket = io.connect(URL_SERVICE);
    this._dashServ.getServiceStatus().subscribe();
    // this._dashServ.getUsers().subscribe(); 
  }

  ngOnInit() {
    // this.socket.on('messages', (messages) => {
    //   this.message = messages;
    // });
    
    this.getPusherMsg();
    // this.getUserOverPusher();
  }

  getPusherMsg () { 
    return this._dashServ.statusChannel.bind('ok-status', data => {
      this.message = data;
    });
  }
  
  getUserOverPusher () { 
    return this._dashServ.userChannel.bind('users', user => {
      console.log(user);
      this.usuarios = user;
    });
  }

}
