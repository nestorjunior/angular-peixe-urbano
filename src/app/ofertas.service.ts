import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class OfertasService {

  constructor(private http: Http){}

  public getOfertas(): Promise<Oferta[]> {
    // Efetuar requisição http
    return this.http.get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
    // Retornar uma Promise de Oferta[]
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public getOfertasID(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json().shift();
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}?descricaoOferta_like=${termo}`)
      .retry(10)
      .map((resposta: any) => resposta.json())
  }

}
