import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-lista',
  templateUrl: './vista-lista.component.html',
  styleUrls: ['./vista-lista.component.sass']
})
export class VistaListaComponent implements OnInit {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  adrian = 'tuputamadre';

  modifyAdrian = function(){
    this.adrian = 'ggg';
  }

  constructor() { }

  ngOnInit() {
  }

}
