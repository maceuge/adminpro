import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  socket;

  constructor() { 
    this.socket = io.connect('http://localhost:3000');
  }


  getMessageFromServer (): Observable<any> { 
    return new Observable( (observer: Subscriber<any>) => {
        console.log('estoy dentro del servicio, dentro del returnn');
        this.socket.on('messages', (messages) => {
            observer.next(messages);
        });
    });
}

}
