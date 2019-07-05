import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { FormGroup, FormControl } from '@angular/forms';

import '../util/rxjs-extensions';

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
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        if(termo.trim() === '') {
          // retornar um Observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }
        return this.ofertasServ.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        return Observable.of<Oferta[]>([])
      })
  }

  public pesquisa(termoBusca: string): void {
    this.itemPesquisa.next(termoBusca)
  }

  public clearSearch(): void {
    this.itemPesquisa.next('')
  }
}
