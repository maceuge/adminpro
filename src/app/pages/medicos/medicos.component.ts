import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  loading: boolean;
  terminoBuscado: string;
  medicos: Medico[] = [];
  totalMedicos: number = 0;

  constructor(private _medServ: MedicoService,
              private _modUpSer: ModalUploadService) { }

  ngOnInit() {
    this.cargarMedicos();
    this._modUpSer.notificacion.subscribe( data => {
      this.cargarMedicos();
    });
  }

  cargarMedicos () {
    this.loading = true;
    this._medServ.obtenerMedicos().subscribe( (data: any) => {
      this.medicos = data.medicos;
      this.totalMedicos = data.total;
      this.loading = false;
    });
  }

  buscarMedico(termino: string) {
    this.loading = true;
    this.terminoBuscado = termino;
    if (termino.length <= 0) {
      this.cargarMedicos();
      this.loading = false;
      return;
    }
    this._medServ.buscarMedicos(termino).subscribe( (data:any) => {
      this.medicos = data.medico;
      this.loading = false;
    });
  }


  borrarMedico (id: string, nombre: string) {
    swal({
      title: "Estas Seguro?",
      text: `Estas a punto de BORRAR a ${nombre}! No podras recuperarlo despues!`,
      icon: "warning",
      buttons: ["Cancelar", "Borrar"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._medServ.eliminarMedico(id).subscribe( (data: any) => {
          this.cargarMedicos();
          swal('Medico Eliminado', `El hospital ${data.medico.nombre} fue eliminado con exito!`, 'success');
        });
      } else {
        swal("Cancelado", "La operacion fue cancelada, nungun registro fue borrado!", "error");
      }
    });   
  }

  openModal(id: string) {
    this._modUpSer.showModal(id, 'medico');
  }

}
