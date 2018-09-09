import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import swal from 'sweetalert';


declare function init_plugin();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  auth2: any;

  constructor (private router: Router,
               private _userServ: UsuarioService) { }

  ngOnInit() {
    init_plugin();
    this.googleInit();

    this.loginForm = new FormGroup({
      correo: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl( null, Validators.required),
      recordarme: new FormControl( false )
    });

    this.loginForm.setValue({
      correo: localStorage.getItem('email') || '',
      password: '',
      recordarme: this.setRememberMe()
    }); 
  }

  // Inicio de Session con GOOGLE
  googleInit () {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '984943350378-c73fqfdugtvc8g73lirqnruf9h9o0b4t.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  attachSignin (element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      //let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      this._userServ.loginGoogle(token).subscribe( () => window.location.href="#/dashboard");
    });
  }
  // Fin de Inicio de Seccion con GOOGLE


  setRememberMe () {
    if (localStorage.getItem('email')) {
      return true;
    } else {
      return false;
    }
  }

  login () {
    if (this.loginForm.invalid) {
      return;
    }
    let usuario = new Usuario(null, this.loginForm.value.correo, this.loginForm.value.password);
    this._userServ.login(usuario, this.loginForm.value.recordarme)
                  .subscribe( 
                    login => this.router.navigate(['/dashboard']),
                    (err: any) => {
                      console.log('Status Server: ' + err.status);
                      swal('Credenciales Incorrectas', `${err.error.message}`, 'error');
                    }
    );
  }

}
