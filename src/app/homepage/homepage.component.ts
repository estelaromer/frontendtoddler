import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  gotoSignup(ptipoUsuario) {
    this.localStorageService.set('tipoUsuario', ptipoUsuario);
    this.router.navigate(['signup']);
  }

}
