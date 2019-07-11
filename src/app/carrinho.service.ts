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

     // Verificar se o item em questão já não existe no this.itens
      let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

      if (itemCarrinhoEncontrado) {
        itemCarrinhoEncontrado.quantidade += 1
      } else {
        this.itens.push(itemCarrinho)
      }

    }
}
