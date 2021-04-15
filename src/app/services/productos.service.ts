import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando: boolean = true;
  public productos: Producto [] = [];

  constructor(private _http: HttpClient) {

    this.cargarProductos();

   }


  private cargarProductos(){

    this._http.get("https://angular-portafolio-307a7-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json")
      .subscribe((resp: Producto []) => {

        this.productos = resp;
        this.cargando = false;

      });
  }
}
