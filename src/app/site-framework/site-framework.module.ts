import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SiteFrameworkRoutingModule } from './site-framework-routing.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SiteFrameworkRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent
  ]
})
export class SiteFrameworkModule { }
