import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/service.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  message: string ='';

  constructor(private _dashServ: DashboardService) { 
    this._dashServ.getMessageFromServer().subscribe( data => {
      console.log(data);
      this.message = data;
    });
  }

  ngOnInit() {
    
  }

}
