import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginVistaComponent } from './login-vista/login-vista.component';
import {TokenInterceptor} from '../interceptors/token.interceptor';
import {WsErrHandlerInterceptor} from '../interceptors/wsErrHandler.interceptor';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { AgentesComponent } from './agentes/agentes.component';
import { ActasComponent } from './actas/actas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginVistaComponent,
    TestComponent,
    HomeComponent,
    AgentesComponent,
    ActasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
  },
    {
    provide: HTTP_INTERCEPTORS,
      useClass: WsErrHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
