import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

@NgModule({
   declarations: [
       BreadcrumbsComponent,
       NavbarComponent,
       SidebarComponent,
       NopagefoundComponent,
       ModalUploadComponent
   ],
   imports: [
       CommonModule,
       RouterModule,
       PipesModule
   ],
   exports: [
       BreadcrumbsComponent,
       NavbarComponent,
       SidebarComponent,
       NopagefoundComponent,
       ModalUploadComponent
   ]
})

export class SharedModule {}
