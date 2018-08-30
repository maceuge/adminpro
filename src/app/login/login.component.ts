import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugin();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor (private router: Router,
               private _userServ: UsuarioService) { }

  ngOnInit() {
    init_plugin();

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
                  .subscribe( login => this.router.navigate(['/dashboard']));
  }

}
