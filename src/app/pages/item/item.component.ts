import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../Interfaces/producto-descripcion-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public _productoDescripcion: ProductoDescripcion;
  public productoId: string;

  constructor(private _route: ActivatedRoute,
              public _productoService: ProductosService) { }

  ngOnInit(): void {

    this._route.params.subscribe( param => {

      this._productoService.getProducto(param['id'])
        .subscribe((producto: ProductoDescripcion) => {

          this._productoDescripcion = producto;
          this.productoId = param['id'];
        })
    });
  }

}
