import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {LoeServerService} from '../../services/loe-server/loeServer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-vista',
  templateUrl: './login-vista.component.html',
  styleUrls: ['./login-vista.component.scss']
})
export class LoginVistaComponent implements OnInit {
  username = 'admin';
  password = 'pw';

  constructor(private server: LoeServerService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    //this.auth.getToken();
  }

  login() {
    //debugger;
    this.server.loginRequest(this.username, this.password).then(
      res => {
        console.log(res);
        this.router.navigate(["home"]);
      });
  }

}
