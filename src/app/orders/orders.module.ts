import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { OrdersListComponent } from './orders-list/orders-list.component';
@NgModule({
  declarations: [
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    OrdersListComponent
  ]
})
export class OrdersModule { }
