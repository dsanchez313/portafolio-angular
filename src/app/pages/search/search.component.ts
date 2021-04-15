import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              public _productoService: ProductosService) { }

  ngOnInit(): void {

    this._route.params.subscribe(param => {

      this._productoService.buscarProducto(param['texto']);
    });
  }

}
