import { Component, OnInit } from '@angular/core';
import { LoeServerService } from '../../services/loe-server/loeServer.service';
import { Router } from '@angular/router';
import {DataService} from "../../services/data.service";
import {DomainMapperService} from "../../services/domain-mapper.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  selectedLibro;
  headerVisible: boolean = true;


  constructor(public server: LoeServerService, private router: Router, private mapper: DomainMapperService, private data: DataService) {

  }

  ngOnInit() {
    this.server.getLibros().then( res => {
      this.loading = false;
    });
  }

  toggleHideHeader() {
    this.headerVisible= !this.headerVisible;

  }

  redirectToActas() {
    this.saveContextData();
    this.router.navigate(['actas']);
  }

  redirectToAgentes() {
    this.router.navigate(['agentes']);
  }

  redirectToActaEdit() {
    this.saveContextData();
    this.router.navigate(['acta-edit']);
  }

  mapLibroKey(key: any) {
    return this.mapper.libro[key];
  }

  private saveContextData() {
    this.data.libro = this.selectedLibro;
  }


}
