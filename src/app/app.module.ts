import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { ProductsComponent } from './Components/products/products.component';
import { OfferComponent } from './Components/offer/offer.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ClientEditComponent } from './Components/client-edit/client-edit.component';
import { ClientGetbyComponent } from './Components/client-getby/client-getby.component';
import { ProductEditComponent } from './Components/product-edit/product-edit.component';
import { ProductGetbyComponent } from './Components/product-getby/product-getby.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrderGetbyComponent } from './Components/order-getby/order-getby.component';
import { OrderEditComponent } from './Components/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    LogoutComponent,
    ClientsComponent,
    ProductsComponent,
    OfferComponent,
    ContactComponent,
    ClientEditComponent,
    ClientGetbyComponent,
    ProductEditComponent,
    ProductGetbyComponent,
    OrdersComponent,
    OrderGetbyComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
