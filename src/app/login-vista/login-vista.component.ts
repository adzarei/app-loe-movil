import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-login-vista',
  templateUrl: './login-vista.component.html',
  styleUrls: ['./login-vista.component.sass']
})
export class LoginVistaComponent implements OnInit {
  private username = 'admin';
  private password = 'pw';

  constructor(private config: ConfigService) { }

  ngOnInit() {

  }

  login() {
    this.config.loginRequest(this.username, this.password);
  }

}
