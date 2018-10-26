import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { URL_SERVICE } from '../../config/config';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  pusher: any;
  statusChannel: any;
  userChannel: any;

  pusherData: {
    key: '0b51b592195d4a29c792',
    cluster: 'us2',
  };

  constructor(private _http: HttpClient) {
    this.pusher = new Pusher( this.pusherData.key, {
      cluster: this.pusherData.cluster,
      encrypted: true
    });
    this.statusChannel = this.pusher.subscribe('server-status');
    this.userChannel = this.pusher.subscribe('user-list');
  }

  getServiceStatus () {
    let url = `${URL_SERVICE}/`;
    return this._http.get(url);
  }

  getUsers () {
    let url = URL_SERVICE + '/usuario';
    return this._http.get(url);
  }


}

