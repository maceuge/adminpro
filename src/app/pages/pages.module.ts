import { NgModule } from '@angular/core';

//Module
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Rutas Hijas
import { PAGES_ROUTE } from './pages.routes';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { ProgresComponent } from './progres/progres.component';
import { PagesComponent } from './pages.component';
import { IncrementComponent } from '../components/increment/increment.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations: [
        DashboardComponent,
        Graphic1Component,
        ProgresComponent,
        PagesComponent,
        IncrementComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        Graphic1Component,
        ProgresComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTE,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}
