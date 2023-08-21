import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {ViewproductComponent} from'./viewproduct/viewproduct.component'
import { CreateproductComponent } from './createproduct/createproduct.component';
import { UpdateproductComponent } from './update-product/updateproduct.component';
import { ViewAllProductsByCatagoryComponent } from './view-all-products-by-catagory/view-all-products-by-catagory.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path:'view-product/:id', component:ViewproductComponent},
  {path:'create-product', component:CreateproductComponent},
  {path:'update-product/:id', component:UpdateproductComponent},
  {path:'searchcatagory', component:ViewAllProductsByCatagoryComponent},
  {path:'search-date', component:ViewAllProductsByDateComponent},
  {path:'list-product', component:ViewallproductsComponent},
  {path:'delete-product', component:DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
