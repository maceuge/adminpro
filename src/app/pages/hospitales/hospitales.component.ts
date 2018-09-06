import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  loading: boolean;
  hospitales: Hospital[] = [];

  constructor(private _hospServ: HospitalService) { }

  ngOnInit() {
    this.cargarHospitales();
  }

  cargarHospitales () {
    this.loading = true;
    this._hospServ.obtenerHospitales().subscribe( (data: any) => {
      console.log(data);
      this.hospitales = data.hospital;
      this.loading = false;
    });
  }

  buscarHospital(termino: string) {
    console.log(termino);
  }

  eliminarHospital (id: string) {
    this._hospServ.borrarHospital(id).subscribe( data => {
      console.log(data);
      this.cargarHospitales();
    });
  }

}
