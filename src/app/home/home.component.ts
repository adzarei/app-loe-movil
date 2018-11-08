import { Component, OnInit } from '@angular/core';
import {LoeServerService} from '../../services/loe-server/loeServer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  libros;

  constructor(server: LoeServerService) {
    this.libros = server.getLibros();
  }

  ngOnInit() {

  }

}
