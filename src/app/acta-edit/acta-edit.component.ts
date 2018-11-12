import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {LoeServerService} from "../../services/loe-server/loeServer.service";
import {Router} from "@angular/router";
import {DomainMapperService} from "../../services/domain-mapper.service";
import {Debugger} from "inspector";

@Component({
  selector: 'app-acta-edit',
  templateUrl: './acta-edit.component.html',
  styleUrls: ['./acta-edit.component.scss']
})
export class ActaEditComponent implements OnInit {
  private loading: boolean = false;
  tiposDeActa = {
    "INSPECION_PREVIA" : "Inspección Previa",
    "INICIO" : "Acta de inicio",
    "FIN" : "Acta de final de obra",
    "OBRA" : "Acta de obra",
    "OTRO" : "Otro"
  }

  numHoja;
  selectedTipoActa = "Selecciona el Tipo de Acta";
  hoy;
  descTipoActa;
  ordenes;

  constructor( private data: DataService, private server: LoeServerService, private router: Router, private mapper : DomainMapperService) { }

  ngOnInit() {
    var auxDate = new Date();
    this.hoy = auxDate.getFullYear()+"-"+auxDate.getMonth()+"-"+auxDate.getDay()+" "+auxDate.getHours()+":"+auxDate.getMinutes()+":"+auxDate.getSeconds();

    if (this.data.libro)
      var numLibro = this.data.libro.id;

    this.server.getNextNumHoja(numLibro).then( res => {
      this.loading = false;
      this.numHoja = this.server.nextNumHoja;
    });

    debugger;
  }

  redirectToHome() {
    this.router.navigate(["home"]);
  }

  saveActa() {

  }

  redirectToViewOrden() {
    this.router.navigate(["orden"]);
  }

  redirectToEditOrden() {
    this.router.navigate(["orden-edit"]);
  }
}
