import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService, MedicoService } from '../../services/service.index';
import { Medico } from '../../models/medico.model';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospital: Hospital;
  hospitales: Hospital[] = [];
  medico: Medico = new Medico('', null, '', '', '');
  title: string = 'Registrar Nuevo Medico';
  id: string;
  estadoBoton: string = 'Guardar';

  constructor(private _hospServ: HospitalService,
              private _medicServ: MedicoService,
              private _router: Router,
              private _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activeRoute.params.subscribe( param => {
      this.id = param['id'];
      if (this.id !== 'nuevo') {
        this.title = 'Actualizar Medico';
        this.estadoBoton = 'Actualizar';
        this.cargarMedico(this.id);
      }
    });

    this._hospServ.obtenerHospitalesSinPaginacion().subscribe( (data: any) => {
      this.hospitales = data.hospital;
    });
  }

  cargarMedico(id :string) {
    this._medicServ.obtenerMedico(id).subscribe(
      medico => {
        this.medico = medico;
        this.medico.hospital = medico.hospital._id;
        this.obtenerHospital(this.medico.hospital);
      }
    );
  }

  obtenerHospital (id: string) {
    this._hospServ.obtenerHospital(id).subscribe(
      (data: any) => {
        this.hospital = data.hospital;
      }
    );
  }

  crearMedico(forma: NgForm) {
    if (!forma.valid) {
      return;
    }
    
    if (this.id === 'nuevo') {
      this._medicServ.crearMedico(this.medico).subscribe(
        medico => {
          swal('Medico Creado', `Nuevo Medico ${medico.nombre} ingreso correctamente!`, 'success');
          this.medico._id = medico._id;
          this._router.navigate(['/medico', medico._id]);
        }
      );    
    } else {
      this._medicServ.actualizarMedico(this.id, this.medico.nombre, this.medico.hospital)
                     .subscribe( medico => {
                      swal('Medico Actualizado', `El Medico ${medico.nombre} se actualizo correctamente!`, 'success');
                     });
      
    }

  }

}
