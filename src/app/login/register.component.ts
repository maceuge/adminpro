import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugin();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  constructor(private userService: UsuarioService,
              private _router: Router) { }
  
  ngOnInit() {
    init_plugin();
    
    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required),
      correo: new FormControl( null, [Validators.required, Validators.pattern(this.pattern)]),
      pass: new FormControl( null, Validators.required),
      pass2: new FormControl( null, Validators.required),
      termino: new FormControl( false )
    }, {
      validators: this.validarPassIguales('pass', 'pass2')
    });

    // Injectar data para pruebas
    // this.forma.setValue({
    //   nombre: 'User',
    //   correo: 'user@gmail.com',
    //   pass: '123456',
    //   pass2: '123456',
    //   termino: false
    // });

  }

  validarPassIguales (campo1: string, campo2: string) {
     return (group: FormGroup) => {
        let pass1 = group.controls[campo1].value;
        let pass2 = group.controls[campo2].value;
        
        if (pass1 === pass2) {
          return null;
        }
        return {
          pass_no_iguales: true
        };
     };
  }

  guardarUsuario () {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.termino) {
      swal('No Aceptaste los Terminos', 'Tenes que aceptar los terminos para porder registrarte.', 'warning');
      return;
    }
    
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.pass
    );

    this.userService.crearUsuario(usuario).subscribe( 
      data => { this._router.navigate(['/login']); },
      (err: any) => {
        swal(err.error.message, err.error.errors.errors.email.message, 'error');
      }
    );

  }

  resetForm () {
    this.forma.reset();
  }

}
