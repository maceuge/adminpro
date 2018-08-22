import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


declare var swal;

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  public valores = 0;

  subscription: Subscription;

  constructor() {
    
    this.subscription = this.regresaObservable().pipe(
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

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
          // if (contador === 5) {
          //   clearInterval(iter);
          //   observer.complete();
          // } 

      }, 1000);
    }).pipe(
      map (data => {
        return this.valores = data.valor;
      }),
      filter ( (valor, index) => {
        
        if ( (valor % 2) === 1 ) {
          return true;
        } else {
          return false;
        }
        
      })
    );
  }

}
