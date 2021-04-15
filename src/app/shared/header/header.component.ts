import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagina } from 'src/app/Interfaces/info-pagina-interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoPaginaService: InfoPaginaService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  /**
   * buscarProducto
texto: string   */
  public buscarProducto(texto: string) {
    console.log(texto);

    if(texto.length < 1){
      return;
    }
    this._router.navigate(['/search', texto]);
  }
}
