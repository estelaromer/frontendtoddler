import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  familiarId: number;
  alumnos: any[];

  constructor(private alumnosService: AlumnosService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.familiarId = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario;
    this.alumnosService.getAlumnosByFamiliarId(this.familiarId).then((res) => {
      this.alumnos = res.json();
      console.log(this.alumnos);
    })
  }

}
