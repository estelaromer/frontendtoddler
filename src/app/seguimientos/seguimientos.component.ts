import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { SeguimientosService } from '../seguimientos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {

  tipoSeguimiento: string;
  tipoUsuario: string;
  idUsuario: number;
  seguimientos: any[];
  constructor(private activateRoute: ActivatedRoute, private localStorageService: LocalStorageService, private seguimientosService: SeguimientosService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.tipoSeguimiento = params.tipo
      console.log(this.tipoUsuario)
      this.idUsuario = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario;
      this.tipoUsuario = JSON.parse(this.localStorageService.get('datosLogin')).usuario;
      this.tipoSeguimiento = this.localStorageService.get('tipoSeguimiento');
      console.log(this.tipoSeguimiento);
      switch (this.tipoUsuario) {
        case 'educadores':
          switch (this.tipoSeguimiento) {
            case 'recibidos':
              console.log(this.idUsuario);
              this.seguimientosService.getSeguimientosRecibidos(this.idUsuario, this.tipoUsuario).then((res) => {
                this.seguimientos = res.json();
                console.log(this.seguimientos);
              });
              break;
            case 'enviados':
              this.seguimientosService.getSeguimientosEnviados(this.idUsuario, this.tipoUsuario).then((res) => {
                this.seguimientos = res.json();
                console.log(this.seguimientos)
              })
              break;
          }
          break;
        case 'familiares':
          switch (this.tipoSeguimiento) {
            case 'recibidos':
              console.log(this.idUsuario);
              this.seguimientosService.getSeguimientosRecibidos(this.idUsuario, this.tipoUsuario).then((res) => {
                this.seguimientos = res.json();
                console.log(this.seguimientos);
              });
              break;
            case 'enviados':
              this.seguimientosService.getSeguimientosEnviados(this.idUsuario, this.tipoUsuario).then((res) => {
                this.seguimientos = res.json();
                console.log(this.seguimientos)
              })
              break;
          }
          break;
      }
    })

  }

}
