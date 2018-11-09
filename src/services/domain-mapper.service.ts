import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainMapperService {

  libro = {
    "id": "ID",
    "numlibro": "Nº de Libro de Ordenes y Asistencia",
    "numExpColegio": "Nº EXPEDIENTE COLEGIO",
    "obra": "OBRA",
    "situacion": "SITUACIÓN",
    "numLicencia": "Nº LICENCIA",
    "ayto": "AYUNTAMIENTO",
    "fcae": "FECHA DE APROBACIÓN DE CAE",
    "cae": "CAE ",
    "fautorizacion": "FECHA DE AUTORIZACIÓN",
    "finicioObra": "FECHA DE INICIO",
    "ffinObra": "FECHA DE FIN",
    "flicencia": "FECHA LICENCIA"
  };

  agente = {
    "tipoAgente": "Tipo de Agente",
    "nombre": "Nombre",
    "idFiscal": "DNI/CIF",
    "titulo": "Título",
    "ffin": "Fecha de incorporación",
    "finicio": "Fecha de baja"
  }

  tipoAgente = {
    "DO" : "Director de Obra",
    "DEO" : "Director de Ejecución de Obra",
    "CONSTRUCTOR" : "Constructor",
    "CSS" : "Cordinador de Seguridad y Salud",
    "PROMOTOR" : "Promotor",
    "PROYECTISTA" : "Proyectista",
    "OTRO" : "Otro"
  }

  constructor() { }
}
