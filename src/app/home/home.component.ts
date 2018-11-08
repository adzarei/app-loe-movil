import { Component, OnInit } from '@angular/core';
import {LoeServerService} from '../../services/loe-server/loeServer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {



  constructor(private server: LoeServerService) {


  }

  ngOnInit() {
    this.server.getLibros().then( res => {
      this.server.libros;
    });
  }

}
