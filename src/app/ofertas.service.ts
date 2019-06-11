import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from './shared/oferta.model';
import { from } from 'rxjs';

@Injectable()
export class OfertasService {

  constructor(private http: Http){}

  public getOfertas(): Promise<Oferta[]> {
    // Efetuar requisição http
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) => resposta.json());
    // Retornar uma Promise de Oferta[]
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public getOfertasID(id: number): Promise<Oferta> {
    return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json().shift();
      })
  }

}
