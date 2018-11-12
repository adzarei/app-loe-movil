import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-orden-edit',
  templateUrl: './orden-edit.component.html',
  styleUrls: ['./orden-edit.component.scss']
})
export class OrdenEditComponent implements OnInit {
  loading = false;

  private currentOrden =  {
    "numOrden": "",
    "tituloOrden": "",
    "contenido": ""
  }

  numOrden;
  tituloOrden;
  contenidoOrden;

  constructor( private data: DataService, private router: Router) { }

  ngOnInit() {

    if (this.data.ordenes)
      this.numOrden = this.data.ordenes.length + 1;
    else
      this.numOrden = 1;
    debugger;
  }

  redirectToActaEdit() {
    this.router.navigate(['acta-edit']);
  }

  private saveContextData() {
    this.currentOrden.numOrden= this.numOrden;
    this.currentOrden.numOrden = this.numOrden;
    this.currentOrden.tituloOrden = this.tituloOrden;
    this.currentOrden.contenido = this.contenidoOrden;
    debugger;
    this.data.ordenes.push(this.currentOrden);
  }

  saveOrden() {
    this.saveContextData();
    this.router.navigate(['acta-edit']);
  }
}
