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



const pagesRoutes: Routes = [
    { path: '', component: PagesComponent, canActivate: [LoginGuardGuard] , children: [
        { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
        { path: 'graphic1', component: Graphic1Component, data: {titulo: 'Graficos'} },
        { path: 'progress', component: ProgresComponent, data: {titulo: 'Barra de Progreso'} },
        { path: 'configuracion', component: AccountSettingsComponent, data: {titulo: 'Configuracion'} },
        { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
        { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Observables'} },
        { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil'} },
        { path: '', pathMatch: 'full',  redirectTo: '/dashboard' }
    ]},

];

export const PAGES_ROUTE = RouterModule.forChild(pagesRoutes);
