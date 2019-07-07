import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SaleComponent } from './sale/sale.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderSuccessComponent } from './purchase-order-success/purchase-order-success.component';
import { CarrinhoService } from "./carrinho.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FunComponent,
    RestaurantsComponent,
    SaleComponent,
    PurchaseOrderComponent,
    PurchaseOrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
