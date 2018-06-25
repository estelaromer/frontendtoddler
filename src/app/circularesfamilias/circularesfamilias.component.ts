import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CircularesService } from '../circulares.service';

@Component({
  selector: 'app-circularesfamilias',
  templateUrl: './circularesfamilias.component.html',
  styleUrls: ['./circularesfamilias.component.css']
})
export class CircularesfamiliasComponent implements OnInit {

  idFamiliar: number;
  circulares: Array<any>;

  constructor(private localStorageService: LocalStorageService, private circularesService: CircularesService) { }

  ngOnInit() {
    this.idFamiliar = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario;
    this.circularesService.getCircularesByFamiliar(this.idFamiliar).then((res) => {
      return res.json();
    }).then( circulares => {
      this.circulares = circulares;
      console.log(this.circulares);
    })
  }

}
