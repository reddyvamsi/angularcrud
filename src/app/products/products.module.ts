import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';
import { UpdateproductComponent } from './update-product/updateproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewproductComponent,
    ViewallproductsComponent,
    UpdateproductComponent,
    CreateproductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
