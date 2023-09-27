import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrdersModule} from './orders/orders.module'
import {SiteFrameworkModule}from './site-framework/site-framework.module'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    BgcolorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ProductsModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
