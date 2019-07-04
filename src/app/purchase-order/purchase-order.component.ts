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
    console.log(this.dadosFormulario);
  }

}
