export class Pedido {
  constructor(
    public endereco: string = 'afskdjasdf',
    public numero: string,
    public complemento: string,
    public formaPagamento: string
  ) {}
}
