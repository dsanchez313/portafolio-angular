import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando: boolean = true;
  public productos: Producto [] = [];
  public productosFiltrado: Producto [] = [];

  constructor(private _http: HttpClient) {

    this.cargarProductos();

   }

  private cargarProductos(){

    return new Promise<void>((resolve, reject) => {

      this._http.get("https://angular-portafolio-307a7-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json")
            .subscribe((resp: Producto []) => {

              this.productos = resp;
              this.cargando = false;
              resolve();
            });
    });


  }

  /**
   * getProducto
   */
  public getProducto(id: string) {
    return this._http.get(`https://angular-portafolio-307a7-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
  }

  /**
   * buscarProducto
   */
  public buscarProducto(texto: string) {

    if(this.productos.length === 0){

      this.cargarProductos().then( () => {
        this.filtrarProductos(texto);
      })
    }else{

      this.filtrarProductos(texto);

    }
  }

  /**
   * filtrarProductos
texto: string   */
  public filtrarProductos(texto: string) {

    this.productosFiltrado = [];
    texto = texto.toLowerCase();

    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLowerCase();

      if(prod.categoria.indexOf(texto) >= 0 || tituloLower.indexOf(texto) >= 0){
        this.productosFiltrado.push(prod);
      }

    });

  }
}
