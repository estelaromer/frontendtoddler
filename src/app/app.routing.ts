import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MainComponent } from "./main/main.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileformComponent } from "./profileform/profileform.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AlumnosComponent } from "./alumnos/alumnos.component";
import { EventosComponent } from "./eventos/eventos.component";
import { EventoformComponent } from "./eventoform/eventoform.component";
import {AlwaysPassGuard} from "./alwayspassguard";
import { CircularesComponent } from "./circulares/circulares.component";
import { CircularformComponent } from "./circularform/circularform.component";
import { SeguimientosComponent } from "./seguimientos/seguimientos.component";
import { SeguimientoformComponent } from "./seguimientoform/seguimientoform.component";
import { CircularesfamiliasComponent } from "./circularesfamilias/circularesfamilias.component";

export const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'app', component: MainComponent, canActivate: [AlwaysPassGuard], children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'profile-edit', component: ProfileformComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'alumnos', component: AlumnosComponent},
        { path: 'eventos-enviados', component: EventosComponent},
        { path: 'nuevo-evento', component: EventoformComponent },
        { path: 'circulares-enviadas', component: CircularesComponent},
        { path: 'nueva-circular', component: CircularformComponent },
        { path: 'seguimientos/:tipo', component: SeguimientosComponent},
        { path: 'nuevo-seguimiento', component: SeguimientoformComponent},
        { path: 'circulares', component: CircularesfamiliasComponent}
    ] }
 ]