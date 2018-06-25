import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  tipoUsuario: string;
  signupForm: FormGroup;
  yaRegistrado: boolean;
  codigoIncorrecto: boolean;

  constructor(private localStorageService: LocalStorageService, private router: Router, private usersService: UsersService) { 
    this.signupForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/)]),
      passwordRepeat: new FormControl('', Validators.required)
    })

    this.yaRegistrado = false;
    this.codigoIncorrecto = false;
  }

  ngOnInit() {
    this.tipoUsuario = this.localStorageService.get('tipoUsuario')
  }

  handleSignup(psignupData) {
    let subruta = this.tipoUsuario;
    this.usersService.nuevoUsuario(psignupData, subruta).then(res => {
      let status = res.json();
      if (status.err) {
        if (status.err === 'Código incorrecto') {
          this.codigoIncorrecto = true;
        } else if (status.err === 'Usuario ya registrado') {
          this.yaRegistrado = true;
        }
      } else {
        console.log(status)
        this.router.navigate(['login']);
      }
    })
  }
}
