import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [ OrdemCompraService ]
})
export class PurchaseOrderComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null),
    'numero': new FormControl(null),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null)
  })

  constructor(private ordemCompras: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {

  }

}
