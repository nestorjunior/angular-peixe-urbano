import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CarrinhoService } from "../carrinho.service";

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
    private ofertasServ: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: any) => {

      this.ofertasServ.getOfertasID(parametros.id)
      .then(( oferta: Oferta ) => {
        this.oferta = oferta;
        // console.log(this.oferta)
      })

    });

  }

  public addItemCart(oferta: Oferta): void {
    this.carrinhoService.includeItemCart(this.oferta)
    console.log(this.carrinhoService.exibirItens());
  }

}
