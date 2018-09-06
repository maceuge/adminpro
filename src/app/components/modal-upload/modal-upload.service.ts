import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  tipo: string;
  id: string;
  hidenModal: string = 'hide-modal';

  notificacion = new EventEmitter<any>();

  constructor() {}

  showModal (id: string, tipo: string) {
    this.hidenModal = 'show show-modal';
    this.id = id;
    this.tipo = tipo;
  }

  hideModal () {
    this.hidenModal = 'hide-modal';
    this.id = null;
    this.tipo = null;
  }
}
