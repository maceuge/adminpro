import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/service.index';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  hiddenModal: string = '';

  imgToUpload: File;
  tempImage: string | ArrayBuffer;

  constructor(private _uploadService: UploadService) { 
    console.log('Modal de IMG corriendo!');
  }

  ngOnInit() {}

  uploadImage () {
    this.hiddenModal = 'hide-modal';
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
