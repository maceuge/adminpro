import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators';


declare var swal;

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    

    this.regresaObservable().pipe(
       retry(2)
    ).subscribe( 
      data => console.log(data),
      error => {
        console.error('Hay noo! Esto fallo! :P', error);
        swal({   
          title: "Ohh Noo!",   
          text: error,   
          type: "danger",   
          showCancelButton: true
        });
      },
      () => {
        console.log('El observador termino');
        swal("Buen Trabajo!", "El observador termino de observar!", "success");

      }
    );

  }

  ngOnInit() {}

  regresaObservable (): Observable<any> {
    let contador = 0;
    
    return new Observable( (observer: Subscriber<any>) => {
      let iter = setInterval( () => {
          contador ++;

          const salida = {
            valor: contador
          };

          observer.next(salida);
          // if (contador === 3) {
          //   observer.error('El contador no puede contar hasta 3!');
          //   clearInterval(iter);
          // }
          if (contador === 5) {
            clearInterval(iter);
            observer.complete();
          }          
      }, 1000);
    }).pipe(
      map (data => {
        return data.valor;
      })
    );
  }

}
