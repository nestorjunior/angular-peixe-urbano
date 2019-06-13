import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertasService]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private itemPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasServ: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.itemPesquisa
      .debounceTime(1000) // executa a ação do switchMap após 1 segundo
      .switchMap((termo: string) => {
        console.log('requisição http para api')
        return this.ofertasServ.pesquisaOfertas(termo)
      })

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }

  public pesquisa(termoBusca: string): void {
    console.log('Keyup caractere', termoBusca)
    this.itemPesquisa.next(termoBusca)
  }
}
