import { Component, OnInit } from '@angular/core';
import {LoeServerService} from "../../services/loe-server/loeServer.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit {

  loading: boolean = true;
  selectedActa;

  constructor( public server: LoeServerService, private data: DataService) { }

  ngOnInit() {
    const id =this.data.libro.id;
    this.server.getActasByLibroId(id).then( res => {
      this.loading = false;
    });
  }

  private saveContextData() {
    this.data.acta = this.selectedActa;
  }

}
