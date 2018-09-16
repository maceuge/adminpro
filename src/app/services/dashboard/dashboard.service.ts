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

  constructor(private _http: HttpClient) {
    this.pusher = new Pusher( environment.pusher.key, {
      cluster: environment.pusher.cluster,
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

