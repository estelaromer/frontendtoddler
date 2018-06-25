import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LocalStorageModule } from 'angular-2-local-storage';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { appRoutes } from './app.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ProfileformComponent } from './profileform/profileform.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoformComponent } from './eventoform/eventoform.component';
import { CircularesComponent } from './circulares/circulares.component';
import { CircularformComponent } from './circularform/circularform.component';
import { SeguimientoformComponent } from './seguimientoform/seguimientoform.component';
import { SeguimientosComponent } from './seguimientos/seguimientos.component';
import { CircularesfamiliasComponent } from './circularesfamilias/circularesfamilias.component';

registerLocaleData(localeEs, 'es-ES');

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileformComponent,
    AlumnosComponent,
    EventosComponent,
    EventoformComponent,
    CircularesComponent,
    CircularformComponent,
    SeguimientoformComponent,
    SeguimientosComponent,
    CircularesfamiliasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(){
    registerLocaleData(localeEs, 'es')
  }
}

