import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginVistaComponent } from './login-vista/login-vista.component';
import {TestComponent} from './test/test.component';
import {HomeComponent} from './home/home.component';
import {ActasComponent} from "./actas/actas.component";
import {AgentesComponent} from "./agentes/agentes.component";
import {ActaEditComponent} from "./acta-edit/acta-edit.component";
import {OrdenEditComponent} from "./orden-edit/orden-edit.component";

const routes: Routes = [
  { path: 'login', component: LoginVistaComponent},
  { path: 'home', component: HomeComponent},
  { path: 'actas', component: ActasComponent},
  { path: 'agentes', component: AgentesComponent},
  { path: 'acta-edit', component: ActaEditComponent},
  { path: 'orden-edit', component: OrdenEditComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  // TODO: Redirect to Home page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
