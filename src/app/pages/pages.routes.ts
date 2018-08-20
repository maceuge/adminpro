import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graphic1Component } from "./graphic1/graphic1.component";
import { ProgresComponent } from "./progres/progres.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";



const pagesRoutes: Routes = [
    { path: '', component: PagesComponent, children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'graphic1', component: Graphic1Component},
        { path: 'progress', component: ProgresComponent},
        { path: 'accountset', component: AccountSettingsComponent},
        { path: '', pathMatch: 'full',  redirectTo: '/dashboard' }
    ]},

];

export const PAGES_ROUTE = RouterModule.forChild(pagesRoutes);
