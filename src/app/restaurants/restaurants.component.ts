import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [OfertasService]
})
export class RestaurantsComponent implements OnInit {

  public ofertas: Oferta[];

  constructor( private ofertasServ: OfertasService ) { }

  ngOnInit() {
    this.ofertasServ.getOfertasCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
