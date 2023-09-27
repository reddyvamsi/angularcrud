import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersListComponent}from './orders/orders-list/orders-list.component'
import {LoginComponent} from './site-framework/login/login.component'
import { SidebarComponent } from './site-framework/sidebar/sidebar.component';
const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'orders', component:OrdersListComponent},
  {path:'home' ,component:LoginComponent}
//   {path:"siteframework", component:LoginComponent,
//   children:[
//     {path:'Home' ,component:LoginComponent}
//   ]
// },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
