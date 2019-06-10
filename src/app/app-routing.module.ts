import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fun', component: FunComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'oferta', component: HomeComponent },
  { path: 'oferta/:id', component: SaleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
