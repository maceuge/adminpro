import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard'},
        { title: 'Progreso', url: '/progress'},
        { title: 'Graficos', url: '/graphic1'},
        { title: 'Promesas', url: '/promesas'},
        { title: 'Observables', url: '/rxjs'},
      ]
    },
    {
      title: 'Administracion',
      icon: 'mdi mdi-account-card-details',
      submenu: [
        { title: 'Usuarios', url: '/usuarios'},
        { title: 'Hospitales', url: '/hospitales'},
        { title: 'Medicos', url: '/medicos'}
      ]
    }
  ];

  constructor() { }
}
