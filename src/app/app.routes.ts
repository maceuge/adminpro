import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { ProgresComponent } from './pages/progres/progres.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: LoginComponent},
    { path: 'graphic1', component: Graphic1Component},
    { path: 'progres', component: ProgresComponent},
    { path: '', pathMatch: 'full',  redirectTo: '/dashboard' },
    { path: '**', component: NopagefoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
