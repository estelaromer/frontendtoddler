import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: Http, private localstorageService: LocalStorageService) { 

  }

  nuevoUsuario(pdatosRegistro, pruta) {
    return this.http.post(`http://localhost:3000/api/${pruta}/create`, {param1: pdatosRegistro}).toPromise();
  }

  validateLogin(pdatosLogin) {
    return this.http.post('http://localhost:3000/api/loginmatch', pdatosLogin).toPromise();
  }

  isLogged() {
    let datos = JSON.parse(this.localstorageService.get('datosLogin'));
    if (datos) return true;
    return false;
  }

  getUserProfile(pId, pUsuario){
    return this.http.post(`http://localhost:3000/api/fetch/${pId}`, {param1: pUsuario}).toPromise();
  }

  getClasses(pId){
    return this.http.post('http://localhost:3000/api/classes', {param: pId}).toPromise();
  }
  
}