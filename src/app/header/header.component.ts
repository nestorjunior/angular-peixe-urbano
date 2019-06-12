import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [OfertasService]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor(private ofertasServ: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoBusca: string): void {
    this.ofertas = this.ofertasServ.pesquisaOfertas(termoBusca);
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro status', erro.status)
    )
  }
}
