import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CircularesService } from '../circulares.service';

@Component({
  selector: 'app-circulares',
  templateUrl: './circulares.component.html',
  styleUrls: ['./circulares.component.css']
})
export class CircularesComponent implements OnInit {

  idEducador: number;
  circulares: Array<any>;
  clases: Array<string>;
  mensajes: Array<any>;

  constructor(private localStorageService: LocalStorageService, private circularesService: CircularesService) { 

  }

  ngOnInit() {
    this.idEducador = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario;
    this.circularesService.getCircularesByEducador(this.idEducador).then((res) => {
      return res.json();
    }).then( circulares => {
      this.circulares = circulares;
      console.log(this.circulares);
      this.clases = this.filterUniqueClasses();
      this.mensajes = this.filterUniqueMessages()
    })
   
  }

  filterUniqueClasses () {
    let clases = [];
    for(let i = 0; i < this.circulares.length; i++) {
      if(!clases.includes(this.circulares[i].nombre)){
        clases.push(this.circulares[i].nombre);
      }
    }
    return clases;
  }

  filterUniqueMessages () {
    let uniqueIds = [];
    let mensajes = [];
    for(let i=0; i < this.circulares.length; i++) {
      if(!uniqueIds.includes(this.circulares[i].id_circular)){
        uniqueIds.push(this.circulares[i].id_circular);
        mensajes.push(this.circulares[i]);
      }

    }
    console.log(mensajes);
    return mensajes;

  }

  getCircularesByClassName(pnombreClase) {
    if(pnombreClase === 'Todas'){
      this.mensajes = this.filterUniqueMessages();
    } else {
      this.mensajes = this.circulares.filter(mensaje => mensaje.nombre === pnombreClase)
    }

  }
  // filterCircularesByNombreClase (pnombreClase) {

  // }

}
