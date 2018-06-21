import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  infoProfile: any;
  datos: any

  constructor(private localstorageService: LocalStorageService, private usersService: UsersService) { 

  }

  ngOnInit() {
    this.datos = JSON.parse(this.localstorageService.get('datosLogin'));
    console.log(this.datos.idUsuario);
    console.log(this.datos.usuario);
    this.usersService.getUserProfile(this.datos.idUsuario, this.datos.usuario).then(res => {
      this.infoProfile = res.json();
      console.log(this.infoProfile)
    });
  }

}
