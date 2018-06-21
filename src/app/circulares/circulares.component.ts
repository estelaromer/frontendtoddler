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
  constructor(private localStorageService: LocalStorageService, private circularesService: CircularesService) { }

  ngOnInit() {
    this.idEducador = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario;
    this.circularesService.getCircularesByEducador(this.idEducador).then((res) => {
      let status = res.json();
      console.log(status);
    })
  }

}
