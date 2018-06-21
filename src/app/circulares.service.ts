import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CircularesService {

  constructor(private http: Http, private localstorageService: LocalStorageService) { }
}
