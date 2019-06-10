import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
  }

}
