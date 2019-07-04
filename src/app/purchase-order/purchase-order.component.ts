import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [ OrdemCompraService ]
})
export class PurchaseOrderComponent implements OnInit {

  @ViewChild('formulario') public dadosFormulario: NgForm;

  constructor(private ordemCompras: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {

    let pedido: Pedido = new Pedido(
      this.dadosFormulario.value.endereco,
      this.dadosFormulario.value.numero,
      this.dadosFormulario.value.complemento,
      this.dadosFormulario.value.formaPagamento
    )

    this.ordemCompras.efetivarCompra(pedido).subscribe((idPedido: number) => console.log('PEDIDO: ', idPedido))
  }

}
