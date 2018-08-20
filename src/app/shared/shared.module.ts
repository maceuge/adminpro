import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
   declarations: [
       BreadcrumbsComponent,
       NavbarComponent,
       SidebarComponent,
       NopagefoundComponent
   ],
   imports: [
       CommonModule,
       RouterModule
   ],
   exports: [
       BreadcrumbsComponent,
       NavbarComponent,
       SidebarComponent,
       NopagefoundComponent
   ]
})

export class SharedModule {}
