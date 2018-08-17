import { NgModule } from '@angular/core';

//Module
import { SharedModule } from '../shared/shared.module';

// Rutas Hijas
import { PAGES_ROUTE } from './pages.routes';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { ProgresComponent } from './progres/progres.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        DashboardComponent,
        Graphic1Component,
        ProgresComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        Graphic1Component,
        ProgresComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTE
    ]
})

export class PagesModule {}
