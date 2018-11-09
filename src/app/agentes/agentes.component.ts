import { Component, OnInit } from '@angular/core';
import {LoeServerService} from "../../services/loe-server/loeServer.service";
import {DataService} from "../../services/data.service";
import {DomainMapperService} from "../../services/domain-mapper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent implements OnInit {

  loading: boolean = true;
  selectedAgente

  constructor( public server: LoeServerService, public data: DataService, private mapper: DomainMapperService, private router: Router) { }

  ngOnInit() {
    this.server.getAgentesByLibroId(1).then( res => {
      this.loading = false;
    })
  }

  private saveContextData() {
    this.data.agente = this.selectedAgente;
  }

  mapAgenteKey(key: any) {
    return this.mapper.agente[key];
  }

  mapTipoAgente(key: any) {

    let result = this.mapper.tipoAgente[key];

    if (result)
      return result;
    else
      return key;
  }

  navigateToHome() {
    this.router.navigate(["home"]);
  }
}
