import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  termino: string;

  usuarios: Usuario[] = [];
  medicos: Medico[] = [];
  hospitales: Hospital[] = [];

  total_usuarios: number = 0;
  total_medicos: number = 0;
  total_hospitales: number = 0;

  constructor(private _activRoute: ActivatedRoute,
              private _searchServ: SearchService) { 
    this._activRoute.params.subscribe( param => {
      this.termino = param['termino'];
      this.obtenerTodos(this.termino);
    });
  }

  ngOnInit() {}

  obtenerTodos (termino: string) {
    this._searchServ.buscarTodos(termino).subscribe( (data: any) => {
      this.total_usuarios = data.total_usuarios;
      this.total_medicos = data.total_medicos;
      this.total_hospitales = data.total_hospitales;
      
      this.usuarios = data.usuario;
      this.medicos = data.medico;
      this.hospitales = data.hospital;     
    });
  }

}
