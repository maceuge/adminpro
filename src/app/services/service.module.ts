import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import { 
  SettingsService, 
  SharedService, 
  SidebarService, 
  UsuarioService, 
  UploadService, 
  HospitalService,
  MedicoService 
} from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    UploadService,
    ModalUploadService,
    HospitalService,
    MedicoService
  ]
})

export class ServiceModule { }
