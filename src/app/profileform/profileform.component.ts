import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css']
})
export class ProfileformComponent implements OnInit {

  infoProfile: any;
  profileForm: FormGroup;
  files;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { 
    this.profileForm = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      imagen: new FormControl('')
    })
  }

  handleProfileForm(values){
    let fd = new FormData();
    fd.append('nombre', values.nombre)
    fd.append('apellidos', values.apellidos)
    fd.append('email', values.email)
    fd.append('telefono', values.telefono)
    fd.append('imagen', this.files[0])

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data')

    const req = new HttpRequest('POST', 'http://localhost:3000/api/updateprofile', fd, {
      headers: headers
    })

    this.http.request(req)
    .toPromise()
    .then(result => {
      console.log(result)
    })
  }

  handleFileChange($event){
    this.files = $event.target.files
    console.log(this.files)
  }

  ngOnInit() {
    
  }

}
