import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
import { URL_SERVICE } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { 
  }

  // getMessageFromServer (): Observable<any> { 
  //   return new Observable( (observer: Subscriber<any>) => {
  //       this.socket.on('messages', (messages) => {
  //           observer.next(messages);
  //           console.log('Msg: ', messages);  
  //       });
  //   });
}

