import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CircularesService {

  constructor(private http: Http, private localstorageService: LocalStorageService) { 

  }

  sendCircular(pCircular){
    console.log(pCircular)
    return this.http.post('http://localhost:3000/api/circulares/create', pCircular).toPromise();
  }

  getCircularesByEducador(pidEducador){
    return this.http.post('http://localhost:3000/api/circulares/fetch', {param: pidEducador}).toPromise();
  }
}
