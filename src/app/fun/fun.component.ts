import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [OfertasService]
})
export class FunComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasServ: OfertasService) { }

  ngOnInit() {
    this.ofertasServ.getOfertasCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
