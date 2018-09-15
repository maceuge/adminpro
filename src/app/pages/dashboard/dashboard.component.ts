import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/service.index';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  message: string;

  constructor(private _dashServ: DashboardService) { 
    
  }

  ngOnInit() {
    this.getSoketData(); 
  }

  getSoketData () {
    this._dashServ.getMessageFromServer().subscribe( data => {
      this.message = data;
    });
    console.log('Estoy dentro del componente dashboard');  
  }

}
