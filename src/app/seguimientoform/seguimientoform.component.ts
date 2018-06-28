import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { SeguimientosService } from '../seguimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimientoform',
  templateUrl: './seguimientoform.component.html',
  styleUrls: ['./seguimientoform.component.css']
})
export class SeguimientoformComponent implements OnInit {

  id: number;
  nombreAlumnos: string[];
  alumnos: any[];
  tipoUsuario: string;
  constructor(private router: Router, private alumnosService: AlumnosService, private localStorageService: LocalStorageService, private seguimientosService: SeguimientosService) {
  }

  ngOnInit() {
    this.nombreAlumnos = [];
    this.id = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario;
    this.tipoUsuario = JSON.parse(this.localStorageService.get('datosLogin')).usuario;

    switch (this.tipoUsuario) {
      case 'familiares':
        this.alumnosService.getAlumnosByFamiliarId(this.id).then((res) => {
          this.alumnos = res.json();
          for (let i = 0; i < this.alumnos.length; i++) {
            this.nombreAlumnos.push(this.alumnos[i].nombre);
          }
          console.log(this.nombreAlumnos);
          console.log(this.alumnos);
        })
        break;
      case 'educadores':
        this.alumnosService.getAlumnosByEducadorId(this.id).then((res) => {
          this.alumnos = res.json();
          console.log(this.alumnos);
        })
        break;
    }
  }

  onSubmit(pValues) {
    let seguimiento = {};
    let fecha = new Date();
    switch (this.tipoUsuario) {
      case 'familiares':
        let destinatarios: Array<number>
        destinatarios = [];
        console.log(pValues)
        for (let elem in pValues) {
          if (pValues[elem] === true) {
            destinatarios.push(this.alumnos[elem].id_alumno);
          }
        }
        seguimiento = {
          comentarios: pValues.mensaje,
          alumnosDestinatarios: destinatarios,
          remitente: this.id,
          tipo: 'aviso',
          subtipo: this.tipoUsuario,
          fechaEnvio: fecha,
          estado: ''

        }
        break;
      case 'educadores':
        seguimiento = {
          alumnosDestinatarios: [pValues.alumno],
          tipo: pValues.tipo,
          subtipo: pValues.subtipo,
          estado: pValues.estado,
          comentarios: pValues.comentarios,
          fechaEnvio: fecha,
          remitente: this.id
        }
    }


    console.log(seguimiento)

    this.seguimientosService.sendSeguimiento(seguimiento).then(res => {
      let status = res.json();
      console.log(status);
      if(status.success){
        this.router.navigate(['app', 'seguimientos', 'enviados'])
      }
    })
  }

  handleChange($event) {
    let tipoSeguimiento = $event.target.value;
  }

}
