import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  libro;
  acta;
  orden;
  agente;
  ordenes: Array = new Array<any>();


  constructor() { }

}
