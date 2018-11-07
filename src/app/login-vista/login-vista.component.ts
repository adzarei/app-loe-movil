import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {LoeServerService} from '../../services/loe-server/loeServer.service';

@Component({
  selector: 'app-login-vista',
  templateUrl: './login-vista.component.html',
  styleUrls: ['./login-vista.component.sass']
})
export class LoginVistaComponent implements OnInit {
  username = 'admin';
  password = 'pw';

  token;

  constructor(private server: LoeServerService, private auth: AuthService) { }

  ngOnInit() {
    this.token = this.auth.getToken();
  }

  login() {
    this.server.loginRequest(this.username, this.password);
    this.token = this.auth.getToken();
  }

}
