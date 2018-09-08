import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graphic1Component } from "./graphic1/graphic1.component";
import { ProgresComponent } from "./progres/progres.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { HospitalesComponent } from "./hospitales/hospitales.component";
import { MedicosComponent } from "./medicos/medicos.component";
import { MedicoComponent } from "./medicos/medico.component";



const pagesRoutes: Routes = [
    { path: '', component: PagesComponent, canActivate: [LoginGuardGuard] , children: [
        { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
        { path: 'graphic1', component: Graphic1Component, data: {titulo: 'Graficos'} },
        { path: 'progress', component: ProgresComponent, data: {titulo: 'Barra de Progreso'} },
        { path: 'configuracion', component: AccountSettingsComponent, data: {titulo: 'Configuracion'} },
        { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
        { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Observables'} },
        { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil'} },
        { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Administracion de Usuarios'} },
        { path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Administracion de Hospitales'} },
        { path: 'medicos', component: MedicosComponent, data: {titulo: 'Administracion de Medicos'} },
        { path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Perfil Medico'} },
        { path: '', pathMatch: 'full',  redirectTo: '/dashboard' }
    ]},

];

export const PAGES_ROUTE = RouterModule.forChild(pagesRoutes);
