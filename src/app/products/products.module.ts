import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';
import { ViewAllProductsByCatagoryComponent } from './view-all-products-by-catagory/view-all-products-by-catagory.component';
import { UpdateproductComponent } from './update-product/updateproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { BluecolorDirective } from './coustomdirectives/bluecolor.directive';
@NgModule({
  declarations: [
    ProductsComponent,
    ViewproductComponent,
    ViewallproductsComponent,
    UpdateproductComponent,
    CreateproductComponent,
    DeleteProductComponent,
    ViewAllProductsByCatagoryComponent,
    BluecolorDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class ProductsModule { }
