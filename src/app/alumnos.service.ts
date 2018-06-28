import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: Http, private localstorageService: LocalStorageService) { }

  getAlumnosByFamiliarId(pidFamiliar){
    return this.http.post('http://localhost:3000/api/alumnos/fetchbyfamiliar', {param: pidFamiliar}).toPromise();
  }

  linkarAlumnoFamiliar(pCodigo, pidFamiliar){
    return this.http.post('http://localhost:3000/api/alumnos/linkar', {codigoAlumno: pCodigo, idFamiliar: pidFamiliar}).toPromise()
  }

  getAlumnosByEducadorId(pidEducador){
    return this.http.post('http://localhost:3000/api/alumnos/fetchbyeducador', {param: pidEducador}).toPromise();
  }
}
