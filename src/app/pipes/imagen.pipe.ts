import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, type: string = 'usuario'): any {

    let url = URL_SERVICE + '/img';

    if (!img) {
      return url + '/usuarios/xxx';
    }
    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (type) {
        case 'usuario':
          url += '/usuario/' + img;  
        break;
        case 'hospital':
          url += '/hospital/' + img;  
        break;
        case 'medico':
          url += '/medico/' + img;  
        break;
      default: url += '/usuarios/xxx';
        break;
    }

    return url;
  }

}
