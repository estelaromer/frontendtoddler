import { Component, OnInit, Input } from '@angular/core';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-anadiralumno',
  templateUrl: './anadiralumno.component.html',
  styleUrls: ['./anadiralumno.component.css']
})
export class AnadiralumnoComponent implements OnInit {

  @Input () idFamiliar;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    console.log(this.idFamiliar);
  }

  onSubmit(codigo){
    console.log(codigo);
  }

}
