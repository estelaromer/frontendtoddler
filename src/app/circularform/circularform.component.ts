import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-circularform',
  templateUrl: './circularform.component.html',
  styleUrls: ['./circularform.component.css']
})
export class CircularformComponent implements OnInit {

  idEducador: string;
  clases: Array<string>
  circularForm: FormGroup;

  constructor(private localStorageService: LocalStorageService, private usersService: UsersService) {

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
    console.log(pValues)
  }

}
