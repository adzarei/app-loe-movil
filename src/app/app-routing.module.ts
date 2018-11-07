import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginVistaComponent } from './login-vista/login-vista.component';
import {TestComponent} from './test/test.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginVistaComponent},
  { path: 'test', component: TestComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
  // TODO: Redirect to Home page and if NOT authenticated, redirecTo to LOGIN

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
