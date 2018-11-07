import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginVistaComponent } from './login-vista/login-vista.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginVistaComponent},
  { path: 'test', component: TestComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
  //TODO: Redirect to Home page and if NOT authenticated, redirecto to LOGIN

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
