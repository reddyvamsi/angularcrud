import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersListComponent}from './orders/orders-list/orders-list.component'
const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'orders', component:OrdersListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
