import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Module
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Rutas Hijas
import { PAGES_ROUTE } from './pages.routes';

// Modulos
import { PipesModule } from '../pipes/pipes.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { ProgresComponent } from './progres/progres.component';
import { PagesComponent } from './pages.component';
import { IncrementComponent } from '../components/increment/increment.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        DashboardComponent,
        Graphic1Component,
        ProgresComponent,
        PagesComponent,
        IncrementComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent
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
        ChartsModule,
        PipesModule,
        CommonModule
    ]
})

export class PagesModule {}
