import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
