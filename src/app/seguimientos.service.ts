import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SeguimientosService {

  constructor(private http: Http) { }

  sendSeguimiento(pSeguimiento){
    console.log(pSeguimiento)
    return this.http.post('http://localhost:3000/api/seguimientos/create', pSeguimiento).toPromise();
  }

  getSeguimientosRecibidos(pidUsuario, tipoUsuario){
    return this.http.post('http://localhost:3000/api/seguimientos/fetchreceived', {id: pidUsuario, usuario: tipoUsuario}).toPromise();
  }

  getSeguimientosEnviados(pidUsuario, tipoUsuario){
    return this.http.post('http://localhost:3000/api/seguimientos/fetchsent', {id: pidUsuario, usuario: tipoUsuario}).toPromise();
  }
}
