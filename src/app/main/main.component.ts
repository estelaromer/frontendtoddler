import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  infoProfile: any;
  datos: any;
  tipoUsuario: string;

  constructor(private localstorageService: LocalStorageService, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.datos = JSON.parse(this.localstorageService.get('datosLogin'));
    this.tipoUsuario = this.datos.usuario;
    this.usersService.getUserProfile(this.datos.idUsuario, this.datos.usuario).then(res => {
      this.infoProfile = res.json();
      this.localstorageService.set('infoProfile', JSON.stringify(this.infoProfile))
    });
  }

  handleLogout() {
    this.localstorageService.clearAll();
    this.router.navigate(['']);
  }

  obtener(ptiposeguimiento){
    this.localstorageService.set('tipoSeguimiento', ptiposeguimiento);
    this.router.navigate(['app', 'seguimientos', ptiposeguimiento]);
  }

}
