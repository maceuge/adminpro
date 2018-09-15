import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  loading: boolean;
  hospitales: Hospital[] = [];
  terminoBuscado: string = '';
  totalHosp: number;
  pages: number = 0;

  constructor(private _hospServ: HospitalService,
              private _modUpServ: ModalUploadService) { 
  }

  ngOnInit() {
    this.cargarHospitales();
    this._modUpServ.notificacion.subscribe( data => {
      this.cargarHospitales();
    });
  }

  openModal (id: string) {
    this._modUpServ.showModal(id, 'hospital');
  }

  cargarHospitales () {
    this.loading = true;
    this._hospServ.obtenerHospitales(this.pages).subscribe( (data: any) => {     
      this.hospitales = data.hospital;
      this.totalHosp = data.total;
      this.loading = false;
    });
  }

  crearHospital () { 
    swal('Crear Hospital', 'Escriba el nombre del Hospital:', {
      icon: 'success',
      content: {
        element: "input",
        attributes: {
          placeholder: "Nombre del Hospital",
          type: "text",
        },
      },
    })
    .then((nombre: string) => {
      this._hospServ.crearHospital(nombre).subscribe( (data: any) => {
        this.cargarHospitales();
        swal('Buen Trabajo!', `El nuevo Hospital: ${data.hospital.nombre} fue creado con exito!`, 'success');
      });   
    });  
  }

  buscarHospital(termino: string) {
    this.terminoBuscado = termino;
    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }
    this.loading = true;
    this._hospServ.buscarHospital(termino).subscribe( (data: any) => {
      this.hospitales = data.hospital;
      this.loading = false;
    });
  }

  eliminarHospital (id: string, nombre: string) {
    swal({
      title: "Estas Seguro?",
      text: `Estas a punto de BORRAR a ${nombre}! No podras recuperarlo despues!`,
      icon: "warning",
      buttons: ["Cancelar", "Borrar"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._hospServ.borrarHospital(id).subscribe( (data: any) => {
          this.pages = 0;
          this.cargarHospitales();
          swal('Hospital Eliminado', `El hospital ${data.hospital.nombre} fue eliminado con exito!`, 'success');
        });
      } else {
        swal("Cancelado", "La operacion fue cancelada, nungun registro fue borrado!", "error");
      }
    });    
  }

  actualizarHospital (hospital: Hospital) { 
    this._hospServ.actualizarHospital(hospital).subscribe( (data:any) => {
      this.cargarHospitales();
      swal('Hospital Actualizado', `El nuevo nombre ${data.hospital.nombre} se actualizo con exito!`, 'success');
    });
  }

  nextPage (page: number) {
    let pagin = this.pages + page;
    if (pagin >= this.totalHosp) {
      return;
    }
    if (pagin < 0) {
      return;
    }
    this.pages += page;
    this.cargarHospitales();
  }
}
