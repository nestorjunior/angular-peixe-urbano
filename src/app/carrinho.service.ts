import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

export class CarrinhoService {

    public itens: ItemCarrinho[] = [];
    public exibirItens(): ItemCarrinho[] {
      return this.itens;
    }

    constructor() {

    }

    public includeItemCart(oferta: Oferta): void {
     let itemCarrinho: ItemCarrinho = new ItemCarrinho(
       oferta.id,
       oferta.imagens[0],
       oferta.titulo,
       oferta.descricaoOferta,
       oferta.valor,
       1
     )
      this.itens.push(itemCarrinho)
    }
}
