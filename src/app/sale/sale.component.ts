import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  providers: [ OfertasService ]
})
export class SaleComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasServ: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasServ.getOfertasID(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta;
        // console.log(this.oferta)
      })
  }

}
