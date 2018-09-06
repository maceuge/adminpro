import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  //modalState: string = 'show show-modal';

  imgToUpload: File;
  tempImage: string | ArrayBuffer;

  constructor(private _uploadService: UploadService,
              public _mdUpSev: ModalUploadService) { 
  }

  ngOnInit() {}

  closeModal () {
    this._mdUpSev.hideModal();
    this.imgToUpload = null;
    this.tempImage = null;
  }

  uploadImage () {
    this._uploadService.uploadFile(this.imgToUpload, this._mdUpSev.tipo, this._mdUpSev.id)
        .then( (resp: any) => {
            //console.log(resp);
            this._mdUpSev.notificacion.emit( resp );
            this._mdUpSev.hideModal();
            swal('Imagen Actualizada', `La nueva imagen de ${resp.usuario.nombre} se actualizo correctamente! Se ve muy bien!`, 'success');
        })
        .catch( err => {
            //console.log('No se pudo cargar imagen', err);
            swal('Error', 'No se pudo cargar la imagen', 'error');
        });
    
  }

  selectImage(file: File) {
    if (!file) {
      this.imgToUpload = null;
      return;
    }
    if (file.type.indexOf('image') < 0) {
      swal('Imagen no Valida', 'Hey! Solo se permiten cargar imagenes!', 'error');
      this.imgToUpload = null;
      return;
    }
    let reader = new FileReader();
    let urlTempImage = reader.readAsDataURL(file);
        reader.onloadend = () => this.tempImage = reader.result;

    this.imgToUpload = file;
  }

}
