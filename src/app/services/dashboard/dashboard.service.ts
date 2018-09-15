import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
import { URL_SERVICE } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  socket;

  constructor() { 
    this.socket = io.connect(URL_SERVICE);
  }


  getMessageFromServer (): Observable<any> { 
    return new Observable( (observer: Subscriber<any>) => {
        this.socket.on('messages', (messages) => {
            observer.next(messages);
            console.log('Msg: ', messages);  
        });
    });
}

}
