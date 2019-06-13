import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

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
        console.log('requisição http para api')

        if(termo.trim() === '') {
          // retornar um Observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }
        return this.ofertasServ.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Oferta[]>([])
      });

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }

  public pesquisa(termoBusca: string): void {
    console.log('Keyup caractere', termoBusca)
    this.itemPesquisa.next(termoBusca)
  }
}
