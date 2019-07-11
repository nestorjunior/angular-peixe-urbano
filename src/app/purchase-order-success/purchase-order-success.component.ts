import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-order-success',
  templateUrl: './purchase-order-success.component.html',
  styleUrls: ['./purchase-order-success.component.css']
})
export class PurchaseOrderSuccessComponent implements OnInit {

  @Input() public idPedidoCompraX: number
  // Esse input quer dizer que esse component espera por alguma informação que virá do component pai.
  constructor() { }

  ngOnInit() {
  }

}
