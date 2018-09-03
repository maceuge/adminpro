import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  uploadFile (file: File, type: string, id: string) {
    let formData = new FormData();
    let ajax = new XMLHttpRequest();

    return new Promise( (resolve, reject) => {
      formData.append('imagen', file, file.name);
      ajax.onreadystatechange = function () {
        // se puede jugar con la variable ajax para hacer la barra del progreso
        if (ajax.readyState === 4) {
          if (ajax.status === 200) {
            //console.log('Imagen Subida');
            resolve( JSON.parse(ajax.response) );  
          } else {
            console.log('Fallo en subir imagen');
            reject(ajax.response);
          }
        }
      };

      let url = URL_SERVICE + `/upload/${type}/${id}`;
      ajax.open('PUT', url, true);
      ajax.send(formData);

    });
  }


}
