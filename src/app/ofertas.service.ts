import { Http, Response } from '@angular/http';
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
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
    // Retornar uma Promise de Oferta[]
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
  }

  public getOfertasID(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: Response) => {
        return resposta.json().shift();
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricaoOferta_like=${termo}`)
      .retry(5)
      .map((resposta: Response) => resposta.json());
  }

}
