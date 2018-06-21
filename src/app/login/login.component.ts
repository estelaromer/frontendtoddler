import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  noRegistrado: boolean;
  contrasenaIncorrecta: boolean;
  loginForm: FormGroup;

  constructor(private router: Router, private usersService: UsersService, private localStorageService: LocalStorageService) { 
    this.loginForm = new FormGroup({
      tipoUsuario: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('', Validators.required)
    })
    this.noRegistrado = false;
    this.contrasenaIncorrecta = false;
  }

  ngOnInit() {
  }

  handleLogin(ploginData) {
    this.usersService.validateLogin(ploginData).then(res => {
      let status = res.json();
      if (status.err && status.err === 'Usuario no registrado') {
        this.noRegistrado = true;
        console.log(this.noRegistrado);
      } else if (status.err && status.err === 'Contraseña incorrecta') {
        this.noRegistrado = false;
        this.contrasenaIncorrecta = true;
        console.log(this.contrasenaIncorrecta);
      } else {
        console.log(status);
        this.noRegistrado = false;
        this.contrasenaIncorrecta = false;
        this.localStorageService.set('datosLogin', JSON.stringify({idUsuario: status.id, usuario: ploginData.tipoUsuario, fecha: new Date()}));
        this.router.navigate(['app']);
      }
    })
  }
}
