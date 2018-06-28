import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { UsersService } from '../users.service';
import { CircularesService } from '../circulares.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-circularform',
  templateUrl: './circularform.component.html',
  styleUrls: ['./circularform.component.css']
})
export class CircularformComponent implements OnInit {

  idEducador: string;
  clases: Array<any>
  circularForm: FormGroup;

  constructor(private router: Router, private localStorageService: LocalStorageService, private usersService: UsersService, private circularesService: CircularesService) {

  }

  ngOnInit() {
    this.idEducador = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario;
    console.log(this.idEducador);
    this.usersService.getClasses(this.idEducador).then((res) => {
      this.clases = res.json();
      console.log(this.clases);
    })
  }

  onSubmit(pValues) {
    let destinatarios: Array<number>
    destinatarios = [];
    console.log(pValues)
    for(let elem in pValues){
      if(pValues[elem] === true) {
        destinatarios.push(this.clases[elem].id_clase)
      }
    }
    let fecha = new Date();
    let circular = {
      asunto: pValues.asunto,
      mensaje: pValues.mensaje,
      clasesDestinatarias: destinatarios,
      remitente: this.idEducador,
      fechaEnvio: fecha 

    }

    console.log(circular)

    this.circularesService.sendCircular(circular).then(res => {
      let status = res.json();
      console.log(status);
      if (status.success){
        this.router.navigate(['app', 'circulares-enviadas'])
      }
    })
  }

}
