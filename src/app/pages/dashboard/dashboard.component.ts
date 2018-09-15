import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../../services/service.index';
import * as io from 'socket.io-client';
import { URL_SERVICE } from '../../config/config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  message: string;
  socket;

  constructor(private _dashServ: DashboardService) { 
    this.socket = io.connect(URL_SERVICE);
  }

  ngOnInit() {
    this.socket.on('messages', (messages) => {
      this.message = messages;
    });
  }

  ngOnDestroy () {
  }

}
