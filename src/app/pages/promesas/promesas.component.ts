import { Component, OnInit } from '@angular/core';
import { reject } from '../../../../node_modules/@types/q';
import { resolve } from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

    this.ejecutarPromesa().then(
      (msg) => { console.log('Termino', msg); },
    ).catch (
      (error) => { console.error('Error cualquiera', error); },
    );

  }

  ngOnInit() {
  }

  ejecutarPromesa (): Promise<boolean> {
    let contador = 0;
    return new Promise( (res, rej) => {
    let interval = setInterval( ()=> {
        contador += 1;
        console.log(contador);
        if (contador === 4) {
          res(true);
          //reject('Simplemente un error');
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
