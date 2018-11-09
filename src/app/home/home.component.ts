import { Component, OnInit } from '@angular/core';
import { LoeServerService } from '../../services/loe-server/loeServer.service';
import { Router } from '@angular/router';
import {DomainMapperService} from '../../services/domainMapper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  selectedLibro;
  headerVisible: boolean = true;


  constructor(public server: LoeServerService, private router: Router, private mapper: DomainMapperService) {

  }

  ngOnInit() {
    this.server.getLibros().then( res => {
      this.loading = false;
    });
  }

  toggleHideHeader() {
    this.headerVisible= !this.headerVisible;

  }

  redirectToActa() {
    this.router.navigate(['actas']);
  }

  redirectToAgentes() {
    this.router.navigate(['agentes'])
  }

  mapValue(key: any) {
    //debugger;
    return this.mapper.libro[key];

  }
}
