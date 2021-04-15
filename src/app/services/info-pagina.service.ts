import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../Interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPagina = {};
  public cargada: boolean = false;
  public equipo: any [] = [];

  constructor(public _http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){

    //leer archivo JSON
    this._http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      })

  }

  private cargarEquipo(){

    this._http.get('https://angular-portafolio-307a7-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe((resp: any []) => {
        this.equipo = resp;
      })
  }

}
